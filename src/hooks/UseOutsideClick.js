import { useEffect, useRef } from 'react';

export function UseOutsideClick(handler, listeningCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener('click', handleClick, listeningCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listeningCapturing);
    },
    [handler, ref, listeningCapturing]
  );
  return ref;
}
