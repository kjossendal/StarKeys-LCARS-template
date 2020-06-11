import { useEffect, useState } from 'react';

// NOTE the 'orientationchange' event was not firing properly on certain ipads so 'resize' event is is required in it's place

const getOrientation = () => {
  return window.screen.height > window.screen.width ? 'portrait-primary' : 'landscape-primary';
}

const getResize = () => {
  return window.innerHeight > window.innerWidth ? 'portrait-primary' : 'landscape-primary';
}

export const useOrientation = () => {
  const [orientation, setOrientation] =
    useState(getOrientation())

  const updateOrientation = () => {
    // setOrientation(getOrientation())
    setOrientation(getResize())
  }

  useEffect(() => {
    // set orientation initially, resize event is only triggered on a change
    setOrientation(getResize());

    window.addEventListener("resize", updateOrientation, false);
    // window.addEventListener(
    //   'orientationchange',
    //   updateOrientation
    // )
    return () => {
      window.removeEventListener("resize", updateOrientation);
      // window.removeEventListener(
      //   'orientationchange',
      //   updateOrientation
      // )
    }
  }, [])

  return orientation
}