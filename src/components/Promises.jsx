import React from "react";
import "../Assets/css/stylePromise.css";
import promise1 from "../Assets/IMG/promise1.png";
import promise2 from "../Assets/IMG/promise2.png";
import promise3 from "../Assets/IMG/promise3.png";

const PromesasComponent = () => {
  return (
    <div class="container-fluid bg-promesas">
      <div class="container pb-5">
        <div class="row">
          <h1 class="text-center py-3 titulo-principal">Promesas</h1>
          <div class="col-12 col-lg-4 mx-auto text-center">
            <div class="container bg-redondo">
              <img src={promise1} class="img-fluid imgPromesa" alt="Imagen 1" />
            </div>
            <h3 class="text-center mt-3 titulo-imagen">Rápido</h3>
          </div>
          <div class="col-12 col-lg-4 mx-auto text-center">
            <div class="container bg-redondo">
              <img src={promise2} class="img-fluid imgPromesa" alt="Imagen 1" />
            </div>
            <h3 class="text-center mt-3 mx-auto titulo-imagen">Fidelización</h3>
          </div>
          <div class="col-12 col-lg-4 mx-auto text-center">
            <div class="container bg-redondo">
              <img src={promise3} class="img-fluid imgPromesa" alt="Imagen 1" />
            </div>
            <h3 class="text-center mt-3 titulo-imagen">Rentabilidad</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromesasComponent;
