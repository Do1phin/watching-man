import { logDOM } from '@storybook/testing-library';
import { useEffect, useState } from 'react';

const useMyPermission = (permissionName) => {
  const [permission, setPermission] = useState({
    state: '',
  });

  const checkBrowserName = () => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return isSafari;
  };

  const mySafariPermission = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        return setPermission({ state: 'granted' });
      },
      (i) => {
        console.log('safari permission error', i);
      },
    );
  };

  const myPermission = () => {
    navigator.permissions
      .query({ name: permissionName })
      .then((result) => {
        return setPermission({ state: result.state });
      })
      .catch((error) => console.error('permission error', error));
  };

  useEffect(() => {
    const isSafari = checkBrowserName();
    if (isSafari) {
      return mySafariPermission();
    }
    return myPermission();
  }, []);

  return {
    permission,
  };
};

export { useMyPermission };
