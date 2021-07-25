import { Card, Row, Col } from "react-bootstrap";
import "./App.css";
import LeftSide from "./Left Component/leftSide";
import RightSide from "./Right Component/rightSide";
import logo from "./icons/logo.svg";

function App() {

  return (
    <div style={{ paddingTop: "90px" }} className="App">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Card className="my-container">
        <Row>
          <Col sm={6}>
            <LeftSide />
          </Col>
          <Col sm={6}>
            <RightSide />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
