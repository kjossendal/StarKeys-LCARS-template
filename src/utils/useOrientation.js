import { useEffect, useState } from 'react';

const getOrientation = () => {
  return window.screen.height > window.screen.width ? 'portrait-primary' : 'landscape-primary';
}

export const useOrientation = () => {
  const [orientation, setOrientation] =
    useState(getOrientation())

  const updateOrientation = event => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener(
      'orientationchange',
      updateOrientation
    )
    return () => {
      window.removeEventListener(
        'orientationchange',
        updateOrientation
      )
    }
  }, [])

  return orientation
}