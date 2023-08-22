import { InEdi } from "./InEdi.jsx";

function SecNaPr({producto, setProducto}) {
	const handleChange = (event) => setProducto({...producto, name: event.target.value});

	return (
		<div>
			<InEdi tipo="text" modo="text" estilo="max-w-xs text-white text-3xl font-bold bg-black" 
				valor={producto.name} estado={producto} setEstado={setProducto} 
				handleChange={handleChange}
			/>
        
			<div className="w-[307px] h-[3px] bg-amber-500" />
		</div>
	);
}

export {SecNaPr};