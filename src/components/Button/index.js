import React from "react";
import "./styles.css";

const Button = ({
	text = "",
	className = "",
	handleClick,
	type = "button",
} = {}) => {
	const typeToUse = type === "button" || type === "submit" ? type : "button";

	return (
		<input
			className={`Button ${className}`}
			onClick={handleClick}
			type={typeToUse}
			value={text}
		/>
	);
};

export default React.memo(Button);
