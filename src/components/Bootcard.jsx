import * as React from "react";
import { Link } from "react-router-dom";
import "../Assets/css/stylesCardReserva.css";

export default function BootCard() {
  return (
    <div class="container my-4">
      <div class="row">
        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen1 w-100" href="#">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de Basketball "Dragones" - Santiago
              </h1>
            </Link>
          </button>
          <button class="raquiBoton w-100" to="/iniciarsesion">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>

        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen2 w-100" to="#">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de Tenis "Las Raquetas" - Las Condes
              </h1>
            </Link>
          </button>
          <button class="raquiBoton w-100" to="#">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>

        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen3 w-100" to="#">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de Natación "Delfines" - San Bernardo
              </h1>
            </Link>
          </button>
          <button class="raquiBoton w-100" to="#">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>

        <div class="mx-auto col-12 col-lg-8 mb-3 pruebaAlto">
          <button class="raquiImagen4 w-100" href="#">
            <Link href="/iniciarsesion" class="ancla-style">
              <h1 class="raquiTextoImagen">
                Club de baile "Ritmo latino" - Renca
              </h1>
            </Link>
          </button>
          <button class="raquiBoton w-100" href="#">
            <Link to="/iniciarsesion" class="ancla-style">
              <h1 class="raqui">Reserva aquí</h1>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
