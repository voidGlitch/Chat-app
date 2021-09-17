import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [Rooms, setRooms] = useState(null);
  useEffect(() => {
    const roomListRef = database.ref('rooms');

    roomListRef.on('value', snap => {
      const data = transformToArrWithId(snap.val());
      setRooms(data);
    });

    return () => {
      roomListRef.off();
    };
  }, []);

  return (
    <RoomsContext.Provider value={Rooms}>{children}</RoomsContext.Provider>
  );
};

export const useRooms =() =>useContext(RoomsContext)