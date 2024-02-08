import React, { useState } from "react";

const Modal = ({ data, setData, index, setCardsData }) => {
  const [formData, setFormData] = useState({
    name: data.name || "",
    email: data.email || "",
    phone: data.phone || "",
    website: data.website || "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const onSave = () => {
    setCardsData((prevData) => {
      const newData = [...prevData];
      newData[index].name = formData.name;
      newData[index].email = formData.email;
      newData[index].phone = formData.phone;
      newData[index].website = formData.website;
      return newData;
    });
    setData(undefined);
  };
  const handleSave = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required.";
    }

    if (!formData.website) {
      newErrors.website = "Website is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave();
  };

  const onClose = () => {
    setData(undefined);
  };

  const handleInputChange = (field, value) => {
    setErrors({ ...errors, [field]: "" });

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-heading">
          <h4>Basic Modal</h4>
          <button onClick={onClose}>X</button>
        </div>

        <form className="form">
          <div className="form-element">
            <label>Name:</label>
            <div className="input-container">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
          </div>

          <div className="form-element">
            <label>Email:</label>
            <div className="input-container">
              <input
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
          <div className="form-element">
            <label>
              <span className="error">*</span> Phone:
            </label>
            <div className="input-container">
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
          <div className="form-element">
            <label>Website:</label>
            <div className="input-container">
              <input
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
              {errors.website && <p className="error">{errors.website}</p>}
            </div>
          </div>
        </form>
        <div className="button-container">
          <button onClick={onClose} className="close-button">
            Cancel
          </button>
          <button onClick={handleSave} className="save-button">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
