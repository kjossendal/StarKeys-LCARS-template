import React from 'react';

export const useFullScreen = (elRef) => {
  const [isFullscreen, setIsFullscreen] = React.useState(
    document[getBrowserFullscreenElementProp()] != null
  );

  const setFullscreen = () => {
    if (elRef.current == null) return;

    elRef.current
      .requestFullscreen()
      .then(() => {
        console.log(getBrowserFullscreenElementProp())
        setIsFullscreen(document[getBrowserFullscreenElementProp()] != null)
      })
      .catch(() => setIsFullscreen(false))
  };

  React.useLayoutEffect(() => {
    document.onfullscreenchange = () => setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);
    return () => (document.onfullscreenchange = undefined)
  });

  return [isFullscreen, setFullscreen];
}
const getBrowserFullscreenElementProp = () => {
  if (typeof document.fullscreenElement !== undefined) {
    return 'fullscreenElement';
  } else if (typeof document.mozFullscreenElement !== undefined) {
    return 'mozFullscreenElement';
  } else if (typeof document.msFullscreenElement !== undefined) {
    return 'msFullscreenElement';
  } else if (typeof document.webkitFullscreenElement !== undefined) {
    return 'webkitFullscreenElement';
  } else {
    throw new Error('Fullscreen is not supported by this browser')
  }
}