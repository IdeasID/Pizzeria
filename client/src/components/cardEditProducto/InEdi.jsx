function InEdi({tipo, modo, estilo, valor, handleChange}) {
    
	const handleDoubleClick = (event) => {
		event.target.readOnly = false;
	};


	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			event.target.readOnly = true;
		}
	};

	return (
		<input type={tipo} inputMode={modo} className={estilo} value={valor} readOnly onDoubleClick={handleDoubleClick} 
			onChange={handleChange} onKeyDown={handleKeyDown}
		/>
	);
}

export {InEdi};