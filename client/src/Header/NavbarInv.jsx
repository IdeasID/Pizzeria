import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Categorias from "../Inventario/Categorias";
function NavbarInv() {
  return (
    <div>
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <img
          src="src/img/fondofinal.png"
          alt="Imagen de fondo"
          style={{ width: "100vw", height: "300vh" }}
        />
      </div>
      <div className="h-36 w-full bg-cover bg-center relative">
        {/* Imagen de "NavbarInv.png" */}
        <img
          src="src/img/NavbarInv.png"
          alt="NavbarInv"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
        />
        <img
          src="src/img/barra1.png"
          alt="Barra1Fix"
          className="absolute bottom-0 top- 10 left-0 w-full h-10"
          style={{ top: "80%" }}
        />
        {/* Contenido opcional que se superpondrá en el div */}
        <div
          className="absolute inset-0 flex justify-center items-center"
          style={{ top: "-10%" }}
        >
          <img src="src/img/tituloPanel.png" alt="Imagen de ejemplo" />
        </div>

        {/* Imagen de "barra1.png" */}

        <div className="absolute inset-0" style={{ top: "160%" }}>
          {/* Imagen de "menu" clickeable */}
          <img
            src="src/img/menucompleto.png"
            alt="menu"
            style={{ width: "100vw" }}
          />
          {/* Contenedor para el texto */}
          <a
            href="https://www.logout.html"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="absolute bottom-0 right-0 transform text-center text-red-700 text-3xl font-semibold leading-10"
              style={{
                color: "#BE3434",
                fontSize: "24px",
                fontWeight: "bold",
                padding: "20px",
                top: "60%",
              }}
            >
              DESCONECTARSE
            </div>
          </a>{" "}
          <Categorias />
        </div>
      </div>
    </div>
  );
}

export default NavbarInv;
