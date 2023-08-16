function EliPr() {
	const onClick = () => {
		console.log("se elimino el producto");
	};

	return (
		<section className="flex flex-col flex-wrap items-center">
			<button className="flex content-center flex-wrap justify-center w-[30px] h-[30px] bg-white rounded-full border-red-600 border-2" onClick={onClick}>
				<span className="text-xl font-bold text-red-500">x</span>
			</button>

			<h6 className=" text-white text-[8px] font-semibold">( eliminar producto ) </h6>

		</section>
	);
}

export {EliPr};