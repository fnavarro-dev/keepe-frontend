import React from 'react';
import Button from "react-bootstrap/Button";
import "../Assets/css/stylePagoReserva.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Imagen1,
  Imagen2,
  NavbarKeepeComponent,
  ReservaTuHora,
} from "../components";
import CalendarPretty from "../components/CalendarPretty";
import TimeRangeModule from '../components/TimeRangePicker';


import { Link } from "react-router-dom";

const PagoReservaPage = () => {
  return (
    <div>
      <div
        className="fondo"
        //ABAJO ES UN CSS INLINE
        // style={{
        //backgroundImage: 'url("https://images5.alphacoders.com/532/532559.jpg")',
        // backgroundColor: 'red',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
        // }}
      >
        {/* NAVBAR */}

        <NavbarKeepeComponent />

        {/* IMAGEN CABECERA */}
        <div className="cabecera">
        {/* <img src={fotocabecera} alt="Logo"  /> */}
        </div>
        {/* SECCIÓN DE FOTO Y MAPA */}

        <div>
          <h2 class="tituloblanco">Cancha de Basketball Dragones</h2>
        </div>

        <div>
          <h3 class="tituloblanco2">
            Maimónides 530, Santiago, Región Metropolitana
          </h3>
        </div>

        <Container>
          <Row xs="auto" className="tarjetaimagen">
            <Col >
              <Imagen2 className="tarjetaindividual" />
            </Col>
            <Col >
              <Imagen1 className="tarjetaindividual"/>
            </Col>
          </Row>
        </Container>

        {/* SECCIÓN DE ELEGIR HORARIO Y FECHA */}

        <div>
          <h2 class="tituloblanco">Elige tu fecha</h2>
        </div>



        <div className="calendario">
          <CalendarPretty value={new Date()} showDoubleView />
          
        </div>
        

        <div>
          <h2 class="tituloblanco">Elige tu turno</h2>
        </div>

        <div className="eligetuturno">

          {/* <TimeRangeModule /> */}
          {/* ESTE MODULO PODRIA SERVIR PORQUE DEVUELVE UN STRING CON EL RANGO DE HORAS */}

          <div class="horas">
            <div>
              <ReservaTuHora />
            </div>
          </div>
        </div>

        {/* BOTON PAGO */}

        <Container>
        <div className="abotonpagarcontenedor">
          <Link to="/ticket">
            <Button className={"abotonpagar"}>Pagar y Reservar</Button>
          </Link>
        </div>
        </Container>
      </div>

      {/* <div className=" mb-32 lex flex-col bg-pinkCustom dark:bg-blackCustom h-full w-full  text-black dark:text-white ">
      <div className="mx-10 first-letter:lg:mx-32 relative">
        <img
          className="lg:h-72 h-44 w-full rounded-2xl absolute "
          src={musicHome}
          alt="fond page d'accueil"
        />
        <div className="abosolute overflow-hidden z-30 opacity-60">
       
        </div>
      </div>
      <div className="m-5">
        <h2 className="mx-5px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Best Genres
        </h2>
        <div className="flex ">
          {bestGenres.map((genre, index) => (
          ))}
        </div>
      </div>
      <div className="mx-5">
        <h2 className="px-3 py-1 rounded-lg text-2xl  text-black dark:text-white">
          Favorites
        </h2>
        <FavouritesList handleCurrentId={handleCurrentId} />
      </div>
      <div className="mx-5 py-14">
        <RecentlyPlayed handleCurrentId={handleCurrentId} />
      </div>

      
        <TrackList tracks={tracks} handleCurrentId={handleCurrentId} />
        <div className="pb-24">
          <button
            className=" w-full flex p-2 bg-grayCustom justify-center
      opacity-90 rounded-md  text-white
      items-center flex-row align-middle mb-4"
            type="button"
            onClick={() => setShowTracks(!showTracks)}
          >
            {showTracks ? "Show less ..." : "Show all ..."}
          </button>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default PagoReservaPage;
