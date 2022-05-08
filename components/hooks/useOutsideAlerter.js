import { useEffect } from "react";

export function useOutsideAlerter(ref, setAction, events) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => setAction(false), 100);
      }
    }

    events.forEach((e) => {
      document.addEventListener(e, handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener(e, handleClickOutside);
      };
    });
  }, [ref]);
}
