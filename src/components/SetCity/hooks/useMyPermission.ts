import { useEffect, useState } from 'react';

const useMyPermission = (permissionName) => {
  const [permission, setPermission] = useState({
    state: '',
  });

  const checkBrowserName = () => {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
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
    checkBrowserName,
    permission,
  };
};

export { useMyPermission };
