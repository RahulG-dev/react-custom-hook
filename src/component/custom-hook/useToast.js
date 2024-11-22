import { useState } from "react";

function useToast() {
  const [toasts, setToasts] = useState([]);

  function addToast(message, timeout = 7000) {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);

    const timer = setTimeout(() => {
      removeToast(id);
    }, timeout);

    return () => clearTimeout(timer);
  }

  function removeToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  return { toasts, addToast, removeToast };
}

export default useToast;
