import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import googlemaps from "../Assets/IMG/googleimages.png";

const styles = {
  
  imagenfull: {
    height: "100%",
    width: "450px",
  },
};

function Imagen1() {
  return (
    <Card className="bg-white text-white">
      <iframe style={styles.imagenfull}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212967.2010134411!2d-70.62812206766979!3d-33.485437693883775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c565b67e6037%3A0x11c88eba7457c3b1!2sCanchas%20Basketball!5e0!3m2!1ses!2scl!4v1672257198838!5m2!1ses!2scl"
        width="450"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Card>
  );
}

export default Imagen1;
