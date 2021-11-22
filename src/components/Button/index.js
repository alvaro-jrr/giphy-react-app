import "./styles.css";

const Button = ({
	text = "",
	className = "",
	handleClick = null,
	type = "button",
} = {}) => {
	const typeToUse = type !== "button" || type !== "submit" ? "button" : type;

	return (
		<input
			className={`Button ${className}`}
			onClick={handleClick}
			type={typeToUse}
			value={text}
		/>
	);
};

export default Button;
