import React, { useState } from "react";

const Modal = ({ data, onSave, setData }) => {
  const [name, setName] = useState(data.name || "");
  const [email, setEmail] = useState(data.email || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSave = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    }

    if (!phone) {
      newErrors.phone = "Phone is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({ name, email, phone });
  };
  const onClose = () => {
    setData(undefined);
  };
  const handleInputChange = (field, value) => {
    setErrors({ ...errors, [field]: "" });

    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "block",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            border: "none",
            background: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button onClick={onClose} style={{ marginRight: "10px" }}>
            Close
          </button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
