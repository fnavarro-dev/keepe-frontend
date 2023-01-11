import { withTheme } from "@emotion/react";
import { pink } from "@mui/material/colors";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//se instala calendar con
//del link
//https://www.npmjs.com/package/react-calendar
//directo en consola
//"npm install react-calendar"

const styles = {
  
  fechastring: {

    fontSize: 25,
    paddingTop: 20,
    fontFamily: "Kumbh Sans",
    fontWeight: 100,
    
  },
};

const CalendarPretty = () => {
  const [value, onChange] = useState(new Date());

  let fechaescrita = value.toString()
  let cadenaExtraida = fechaescrita.substring(0, 15);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        showDoubleView
        minDetail="year"
        className="mt-5"
        />
        <p style={styles.fechastring}>Fecha Escogida: {cadenaExtraida}</p>
        
    </div>
  );
};

export default CalendarPretty;
