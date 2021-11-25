import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from "images/close_white_24dp.svg";
import "./styles.css";

const Modal = ({ children, onClose }) => {
	return (
		<div className="Modal">
			<div className="Modal-content">
				<button
					title="Cerrar"
					onClick={onClose}
					className="Modal-close"
				>
					<img
						src={CloseIcon}
						width="24"
						height="24"
						alt="Icono de Cerrar"
					/>
				</button>

				{children}
			</div>
		</div>
	);
};

const ModalRoot = ({ children, onClose }) => {
	return ReactDOM.createPortal(
		<Modal onClose={onClose}>{children}</Modal>,
		document.getElementById("modal-root")
	);
};

export default ModalRoot;
