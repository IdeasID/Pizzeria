import Form from "./components/Form";

function LoginV() {
  return (
    <div className="flex w-full h-screen">

      {/* mitad izquierda de la pantalla */}
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>

      {/* mitad derecha de la pantalla */}
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
      </div>
    </div>
  );
}

export default LoginV;
