import { useState } from "react";
import { Can } from "./Can.jsx";
import { SecNaPr } from "./SecNaPr.jsx";
import { SecVa } from "./SecVa.jsx";
import { EliPr } from "./EliPr.jsx";
import { AcPr } from "./AcPr.jsx";
import { Toggle } from "./Toggle.jsx";

function CardProducto() {
	const [producto, setProducto] = useState({name: "Coca", cantidad: 30, volumen: "1,75L", precio:"$571,00", estado:"visible"});

	return (
		<section className="flex flex-row flex-wrap w-[350px] h-[431px] rounded-[20px] justify-evenly bg-black">
			<div className="h-[162px]  flex flex-row flex-wrap items-end">
				<img className="h-[33px] relative bottom-[33px]" src="/src/assets/Broken Pencil.png" />
                
				<img className="h-[210px] " src="/src/assets/coca-cola.png" />
			</div>

			<div className="flex items-center justify-evenly w-[180px] h-[162px] rounded-[15px] relative top-[13px] bg-white">
				<Can producto={producto} setProducto={setProducto}/>
			</div>
                
			<SecNaPr producto={producto} setProducto={setProducto}/>

			<Toggle estado={producto.estado}/>

			<SecVa producto={producto} setProducto={setProducto}/>
                
			<div className="w-[315px] flex flex-row flex-wrap justify-between">
				<AcPr/>

				<EliPr/>
			</div>

		</section>
		
	);
}

export {CardProducto};