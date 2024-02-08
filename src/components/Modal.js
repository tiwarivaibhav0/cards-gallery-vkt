import React, { useState } from "react";
import { closeIcon, emailRegex, formFields } from "../utils/constants";

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

		if (!formData.name.trim()) {
			newErrors.name = "Name is required.";
		}

		if (!formData.email) {
			newErrors.email = "Email is required.";
		} else if (!emailRegex.test(formData.email))
			newErrors.email = "Invalid Email.";

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
		if (value === "")
			setErrors({ ...errors, [field]: formFields[field] + " is required" });
		else setErrors({ ...errors, [field]: "" });

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
					<button onClick={onClose}>{closeIcon}</button>
				</div>

				<form className="form">
					{Object.keys(formFields).map((item) => (
						<div className="form-element">
							<label>
								<span className="required">*</span>
								{formFields[item]} :
							</label>
							<div className="input-container">
								<>{console.log(errors[item])}</>
								<input
									type="text"
									value={formData[item]}
									onChange={(e) => handleInputChange(item, e.target.value)}
									className={
										errors[item] && errors[item] !== ""
											? "required-input"
											: "input-border"
									}
								/>
								{errors[item] && <p className="error">{errors[item]}</p>}
							</div>
						</div>
					))}
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
