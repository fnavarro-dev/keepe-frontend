import React from "react";
import "../Assets/css/styleQueHacemos.css";

const QuehacemosComponent = () => {
  return (
    <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12 text-center">
          <i class="icon-quehacemos fa-solid fa-handshake-simple"></i>
        </div>

        <div class="col-lg-6 col-12">
          <h1 class="texto-info-quehacemos py-3 ">
            <strong className="">¿Qué hacemos?</strong>
          </h1>
          <h5 className="texto-col-derecha mx-auto">
            Te ayudamos a poder reservar tu lugar favorito al instante. Explora
            las múltiples opciones que tenemos para ofrecerte.
          </h5>
        </div>
      </div>
    </div>
  );
};
export default QuehacemosComponent;
