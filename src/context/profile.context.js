import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfiles] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    let useRef;
    const authunsub = auth.onAuthStateChanged(authobj => {
      if (authobj) {
        useRef = database.ref(`/profiles/${authobj.uid}`);

        useRef.on('value', snap => {
          const { name, createdAt } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authobj.uid,
            email: authobj.email,
          };
          setProfiles(data);
          setisLoading(false);
        });
      } else {
        if (useRef) {
          useRef.off();
        }

        setProfiles(null);
        setisLoading(false);
      }
    });
    return () => {
      authunsub();
      if (useRef) {
        useRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
