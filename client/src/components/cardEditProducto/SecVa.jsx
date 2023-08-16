import { InEdi } from "./InEdi.jsx";

function SecVa ({producto, setProducto}) {
	const handleChange = (event, key) => setProducto({...producto, [key]: event.target.value});

	return (
		<div className="w-[310px] h-[40px] flex flex-row flex-wrap">
			<InEdi tipo="text" modo="text" estilo="w-[60px] text-white text-xl font-bold bg-black " 
				valor={producto.volumen} handleChange={(event) => handleChange(event, "volumen")}/>

			<InEdi tipo="text" modo="text" estilo="w-[116px] text-amber-500 text-3xl font-bold relative left-[38px] bg-black" valor={producto.precio} 
				handleChange={(event) => handleChange(event, "precio")}/>
		</div>
	);
}

export {SecVa};