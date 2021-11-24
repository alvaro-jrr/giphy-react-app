import React from "react";
import "./styles.css";

const Button = ({ content = "", className = "", title, handleClick } = {}) => {
	return (
		<button
			className={`Button ${className}`}
			title={title ? title : null}
			onClick={handleClick}
		>
			{content}
		</button>
	);
};

export default React.memo(Button);
