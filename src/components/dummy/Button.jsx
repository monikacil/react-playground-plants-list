export default function Button ({text, theme="primary", onClick}) {
	return (
		<button className={`btn ${theme}`} onClick={onClick}>{text}</button>
	);
}
  