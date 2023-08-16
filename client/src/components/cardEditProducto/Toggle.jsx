/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../style/App.css";

function Toggle({estado}) {
	const [cambio, setcambio] = useState(estado);

	const click = (num) => {
		setcambio(num);
		console.log("click");
	};
    
	return (
		<div className="flex flex-row flex-wrap w-[307px] h-[52px]">
			<div className="w-[307px] flex flex-row flex-wrap justify-between">
				<h4 className="text-white text-sm font-semibold">OCULTAR</h4>
                
				<h4 className="text-white text-sm font-semibold">VISIBLE</h4>
                
				<h4 className="text-white text-sm font-semibold">DESABILITAR</h4>            
			</div>

			<div className="w-[307px] h-[29px] rounded-[50px] flex flex-row flex-wrap justify-between bg-white ">
				<input type="button" className="w-[100px] h-[28px] rounded-l-[50px]" onClick={() => click("ocultar")}/>
				<input type="button" className="w-[100px] h-[28px]" onClick={() => click("visible")}/>
				<input type="button" className="w-[100px] h-[28px] rounded-r-[50px]" onClick={() => click("desabilitar")}/>
				<div className={`w-[34.66px] h-[28px] inline absolute bg-amber-500 rounded-[13.50px] ${cambio}`} />
			</div> 
		</div>
	);
}

export {Toggle};