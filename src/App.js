import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ReservePage,
  InicioSesionPage,
  RegistroPage,
  PagoReservaPage,
  MisionVisionPage,
  RegistroAdminPage,
  TicketPage,
  RegistroExitosoPage,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reserva" element={<ReservePage />} />
        <Route path="/iniciarsesion" element={<InicioSesionPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/pagoreserva" element={<PagoReservaPage />} />
        <Route path="/misionyvision" element={<MisionVisionPage />} />
        <Route path="/registroadmin" element={<RegistroAdminPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/registroexitoso" element={<RegistroExitosoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
