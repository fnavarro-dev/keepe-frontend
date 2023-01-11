import { convertLength } from "@mui/material/styles/cssUtils";
import Card from "react-bootstrap/Card";
import estadio from "../Assets/IMG/estadio.jpg";
import basketImage from "../Assets/IMG/basket.jpg";

const styles = {
  imagenfull: {
    width:"100%",
    height:"100%"
    
  },
 
}

function Imagen2() {
  return (
    <Card className="bg-white text-white ">
      <Card.Img src={basketImage} alt="Card image" width="450"
      style={styles.imagenfull} />
      <Card.ImgOverlay>
        <Card.Title>Cancha de Basketball Dragones</Card.Title>
        <Card.Text>Horario: Lunes a Viernes. 8-21hrs</Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Imagen2;
