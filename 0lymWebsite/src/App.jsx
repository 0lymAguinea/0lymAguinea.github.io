import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Header from "./component/Header";
import "./styles/colorpalette.css";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
}

export default App;
