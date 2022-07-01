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
      () => {
        return setPermission({ state: 'denied' });
      },
    );
  };

  const myPermission = () => {
    navigator.permissions
      .query({ name: permissionName })
      .then((result) => {
        return setPermission({ state: result.state });
      })
      .catch(() => {
        return setPermission({ state: 'denied' });
      });
  };

  useEffect(() => {
    const isSafari = checkBrowserName();
    if (isSafari) {
      return mySafariPermission();
    }
    return myPermission();
  }, [permission]);

  return {
    checkBrowserName,
    permission,
  };
};

export { useMyPermission };
