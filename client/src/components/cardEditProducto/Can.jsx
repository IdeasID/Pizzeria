import { InEdi } from "./InEdi.jsx";

function Can({producto, setProducto}) {

	const handleChange = (event) => setProducto({...producto, cantidad: event.target.value});
    
	return (
		<section className="flex flex-row flex-wrap items-center justify-evenly w-[172px] h-[152px] rounded-[15px] bg-black">
			<h4 className="text-white text-ls font-bold text-center">CANTIDAD DISPONIBLE </h4>
			<div className="w-[152px] h-[3px] bg-amber-500" />
			<section className="flex flex-row items-center content-center flex-wrap justify-between w-[158px] h-[81.44px]">
				<button className="w-10 h-10 bg-white rounded-full border-yellow-500 border-2" onClick={() => {setProducto({...producto, cantidad: producto.cantidad - 1});}}>
					<span className="text-3xl font-bold text-amber-500">-</span>
				</button>
                
				<InEdi tipo="number" modo="numeric" estilo="w-auto max-w-[55px] max-h-[55px] text-amber-500 text-[45px] font-bol bg-black" 
					valor={producto.cantidad} handleChange={handleChange}/>

				<button className="w-10 h-10 bg-white rounded-full border-yellow-500 border-2" onClick={() => {setProducto({...producto, cantidad: producto.cantidad + 1});}}>
					<span className=" text-3xl font-bold text-amber-500">+</span>
				</button>
			</section>
		</section>
	);
}

export {Can};