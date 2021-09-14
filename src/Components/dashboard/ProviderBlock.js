import React, { useState } from 'react';
import { Alert, Button, Icon, Tag } from 'rsuite';
import firebase from 'firebase/app';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
  // eslint-disable-next-line no-unused-vars
  const [isConnected, setisConnected] = useState({
    'google.com': auth.currentUser.providerData.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser.providerData.some(
      data => data.providerId === 'facebook.com'
    ),
  });
  const updateisConnected = (providerId, value) => {
    setisConnected(p => {
      return { ...p, [providerId]: value };
    });
  };
  const unlink = async providerId => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error(`you can not disconnect from ${providerId}`);
      }
      await auth.currentUser.unlink(providerId);
      updateisConnected(providerId, false);
      Alert.info(`Disconnected from ${providerId}`, 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const unlinkgoogle = () => {
    unlink('google.com');
  };
  const unlinkfacebook = () => {
    unlink('facebook.com');
  };
  const Link = async provider => {
    try {
      await auth.currentUser.linkWithPopup(provider);
      Alert.info(`linked to ${provider.providerId}`, 4000);
      updateisConnected(provider.providerId, true);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const linkgoogle = () => {
    Link(new firebase.auth.GoogleAuthProvider());
  };
  const linkfacebook = () => {
    Link(new firebase.auth.FacebookAuthProvider());
  };
  return (
    <div>
      {isConnected['google.com'] && (
        <Tag color="green" closable onClose={unlinkgoogle}>
          <Icon icon="google" />
          Connected
        </Tag>
      )}
      {isConnected['facebook.com'] && (
        <Tag color="blue" closable onClose={unlinkfacebook}>
          <Icon icon="facebook" />
          Connected
        </Tag>
      )}
      <div className="mt-2">
        {!isConnected['google.com'] && (
          <Button block color="green" onClick={linkgoogle}>
            <Icon icon="google" />
            Link to Google
          </Button>
        )}
        {!isConnected['facebook.com'] && (
          <Button block color="blue" onClick={linkfacebook}>
            <Icon icon="facebook" />
            Link to Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
