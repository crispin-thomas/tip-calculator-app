import { Row, Col, Button, Card } from "react-bootstrap";
import "./rightSide.css";
import { useSelector } from "react-redux";

function RightSide() {
  const variables = useSelector((state) => state.variables);

  let tipAmount =
    (parseFloat(variables.bill) * parseFloat(variables.options)) /
    parseFloat(variables.nop);

  let total =
    (parseFloat(variables.bill) * (parseFloat(variables.options) + 1)) /
    parseFloat(variables.nop);

  if (isNaN(tipAmount) || isNaN(total)) {
    tipAmount = 0.0;
    total = 0.0;
  }

  return (
    <div className="right-side-container">
      <Card className="card-style">
        <Card.Body>
          <Row sm={12} className="mobile-view">
            <Col sm={4} className="align-text">
              <p>Tip Amount</p>
              <span>/ person</span>
            </Col>
            <Col sm={8}>
              <p className="amount">${tipAmount.toFixed(2)}</p>
            </Col>
            <Col sm={4} className="align-text">
              <p>Total</p>
              <span>/ person</span>
            </Col>
            <Col sm={8}>
              <p className="amount">${total.toFixed(2)}</p>
            </Col>
          </Row>
          <Row className="button-row">
            <Col className="button-col">
              <a href="/">
                <Button variant="primary" className="button-align">
                  RESET
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RightSide;
