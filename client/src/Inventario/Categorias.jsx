import React, { useState } from "react";

const Categorias = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [categories, setCategories] = useState([
    {
      title: "BEBIDAS",
      defaultImageSrc: "src/img/flechaHorizontal.png",
      activeImageSrc: "src/img/flechaVertical.png",
      clickableImageSrc: "src/img/eliminarCat.png",
      contentImageSrc: "src/img/lineaAmarilla.png",
    },
  ]);

  const accordionItems = [
    {
      title: "CARGAR CATEGORIA NUEVA",
      defaultImageSrc: "src/img/flechaHorizontal.png",
      activeImageSrc: "src/img/flechaVertical.png",
      clickableImageSrc: "src/img/botonCrear.png",
      contentImageSrc: "src/img/lineaAmarilla.png",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const handleButtonClick = () => {
    setIsButtonPressed(true);

    setTimeout(() => {
      setIsButtonPressed(false);
    }, 300);

    if (newCategoryTitle !== "") {
      const newCategory = {
        title: newCategoryTitle,
        defaultImageSrc: "src/img/flechaHorizontal.png",
        activeImageSrc: "src/img/flechaVertical.png",
        clickableImageSrc: "src/img/eliminarCat.png",
        contentImageSrc: "src/img/lineaAmarilla.png",
      };
      setCategories([...categories, newCategory]);
      setNewCategoryTitle("");
    }
  };

  // Función para manejar el clic en la imagen "eliminarCat.png"
  const handleDeleteCategory = (index) => {
    // Mostrar la ventana emergente para confirmar la eliminación
    const isConfirmed = window.confirm(
      `¿Estás seguro de que deseas eliminar la categoría "${categories[index].title}"?`
    );

    // Si el usuario confirmó la eliminación, proceder a eliminar la categoría
    if (isConfirmed) {
      const newCategories = [...categories];
      newCategories.splice(index, 1);
      setCategories(newCategories);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <div
        className="m-7 relative"
        style={{ width: "1000px", height: "1450px" }}
      >
        <div
          className="w-full bg-cover bg-center p-4 relative"
          style={{
            backgroundImage: "url('src/img/ContenedorCat2.png')",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          <div className="mx-auto">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-6">
                <div
                  className="p-4 rounded-md w-[900px] mt-4 mx-auto"
                  style={{
                    backgroundImage: "url('src/img/fondoAcordeon.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="mb-2">
                    <div className="flex items-center mb-2">
                      <button
                        className="w-full flex justify-between items-center text-left"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="text-black text-3xl font-semibold leading-10 text-[25px]">
                          {item.title}
                        </span>
                        {activeIndex === index ? (
                          <img
                            src={item.activeImageSrc}
                            alt={item.title}
                            className="w-6 h-6 ml-2"
                          />
                        ) : (
                          <img
                            src={item.defaultImageSrc}
                            alt={item.title}
                            className="w-6 h-6 ml-2"
                          />
                        )}
                      </button>
                    </div>
                    {activeIndex === index && (
                      <div>
                        <div className="flex items-center justify-center mb-4">
                          <img
                            src={item.contentImageSrc}
                            alt="Contenido de la categoría"
                            className=""
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="mr-2 text-black font-semibold leading-10 text-[50px]">
                            TITULO:&nbsp;
                          </div>
                          <input
                            type="text"
                            placeholder="NOMBRE"
                            value={newCategoryTitle}
                            onChange={(e) =>
                              setNewCategoryTitle(e.target.value)
                            }
                            className="w-[573px] h-[72px] bg-white rounded-[30px] text-gray-400 text-3xl font-semibold leading-10 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 px-4 py-2 focus:text-black"
                            // Clase con estilos personalizados para la sombra
                            style={{
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                        </div>
                        <br></br>
                        <br></br>
                        <div
                          className={`flex items-center justify-center mb-2 ${
                            isButtonPressed ? "transform scale-95" : ""
                          }`}
                        >
                          {/* Agregamos la clase "transform scale-95" para el efecto de escala */}
                          <img
                            src={item.clickableImageSrc}
                            alt="Clickable Image"
                            className={`cursor-pointer ${
                              isButtonPressed ? "opacity-70" : "opacity-100"
                            } transition-opacity`}
                            onClick={handleButtonClick}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {categories.map((category, index) => (
              <div key={index} className="mb-6">
                <div
                  className="p-4 rounded-md w-[900px] mt-4 mx-auto"
                  style={{
                    backgroundImage: "url('src/img/fondoAcordeon.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="mb-2">
                    <div className="flex items-center mb-2">
                      <button
                        className="w-full flex justify-between items-center text-left"
                        onClick={() =>
                          toggleAccordion(accordionItems.length + index)
                        }
                      >
                        <span className="text-black text-3xl font-semibold leading-10 text-[25px]">
                          {category.title}
                        </span>
                        {activeIndex === accordionItems.length + index ? (
                          <img
                            src={category.activeImageSrc}
                            alt={category.title}
                            className="w-6 h-6 ml-2"
                          />
                        ) : (
                          <img
                            src={category.defaultImageSrc}
                            alt={category.title}
                            className="w-6 h-6 ml-2"
                          />
                        )}
                      </button>
                    </div>
                    {activeIndex === accordionItems.length + index && (
                      <div>
                        <div
                          className={`flex items-center justify-center mb-2`}
                        >
                          {/* Agregamos la imagen "eliminarCat.png" que es clickeable */}
                          <img
                            src={category.clickableImageSrc}
                            alt="Eliminar Categoría"
                            className={`cursor-pointer opacity-100 transition-opacity`}
                            onClick={() => handleDeleteCategory(index)} // Llamar a la función de manejo de eliminación
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
