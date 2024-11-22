import { useState } from "react";

const Modal = ({ show, onClose, onConfirm, timer }) => {
  const [timeout, setTimeoutValue] = useState(timer);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "18px",
          }}
        >
          X
        </button>
        <h2>Set Toast Timeout</h2>
        <div>
          <label>Set timeout (ms):</label>
          <input
            type="number"
            value={timeout}
            onChange={(e) => setTimeoutValue(Number(e.target.value))}
            style={{
              padding: "10px",
              marginBottom: "15px",
              width: "92%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          onClick={() => onConfirm(timeout)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
