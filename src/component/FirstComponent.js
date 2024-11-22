import React, { useState } from "react";
import useToast from "./custom-hook/useToast";
import Modal from "./Modal";

const FirstComponent = () => {
  const { toasts, addToast } = useToast();
  const [timeout, setTimeoutValue] = useState(7000);
  const [showModal, setShowModal] = useState(false);

  const handleShowToast = () => {
    const message = `Testing ${toasts.length + 1}`;
    addToast(message, timeout);
  };

  const handleSetTimer = (newTimeout) => {
    setTimeoutValue(newTimeout);
    setShowModal(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <button
        onClick={handleShowToast}
        style={{
          backgroundColor: "#6c7ae0",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Show Toast Message
      </button>

      <button
        onClick={() => setShowModal(true)}
        style={{
          backgroundColor: "#C9CAD1",
          padding: "7px 14px",
          border: "none",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
            strokeWidth="0"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleSetTimer}
        timer={timeout}
      />

      <div style={{ marginTop: "20px" }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              backgroundColor: "#75C776",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              color: "#fff",
              maxWidth: "20rem",
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstComponent;
