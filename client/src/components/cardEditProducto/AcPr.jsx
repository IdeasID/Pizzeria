function AcPr(params) {
	const onClick = () => {
		console.log("se actualizo el producto");
	};

	return (
		<button className="w-[216px] h-10 bg-amber-500 rounded-[50px] text-white text-sm font-semibold" onClick={onClick}>
            ACTUALIZAR CATALOGO
		</button>
	);
}

export {AcPr};