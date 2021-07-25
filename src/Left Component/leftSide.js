import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import "./leftSide.css";

function LeftSide() {
  const [errors, setErrors] = useState({
    message: "",
  });

  const variables = useSelector((state) => state.variables);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "custom") {
      if (value !== "") {
        variables.options = value / 100;
      }
    }
    if (name === "nop") {
      if (value === "0") {
        setErrors({
          message: "Number Cannot be zero",
        });
      } else {
        setErrors({
          message: "",
        });
      }
    }
    const { fetchVar } = bindActionCreators(actionCreators, dispatch);
    fetchVar({
      ...variables,
      [name]: value,
    });
  };

  return (
    <div className="my-left-container">
      <Form>
        <Form.Label className="my-form-label">Bill</Form.Label>
        <Form.Control
          type="number"
          name="bill"
          value={variables.bill}
          onChange={handleChange}
          className="format-input"
        />
        {/* <Form.Control.Feedback type="invalid">
                    {errors.bill}
                  </Form.Control.Feedback> */}
        <br />
        <Form.Label className="my-form-label">Select Tip %</Form.Label>
        <Row sm={12} className="g-3 mobile-view-button">
          <Col sm={4}>
            <input
              type="radio"
              className="btn-check check-button"
              name="options"
              id="option1"
              autoComplete="off"
              value={0.05}
              onChange={handleChange}
            />
            <label className="btn btn-primary button-color" htmlFor="option1">
              5%
            </label>
          </Col>
          <Col sm={4}>
            <input
              type="radio"
              className="btn-check check-button"
              name="options"
              id="option2"
              autoComplete="off"
              value={0.1}
              onChange={handleChange}
            />
            <label className="btn btn-primary button-color" htmlFor="option2">
              10%
            </label>
          </Col>
          <Col sm={4}>
            <input
              type="radio"
              className="btn-check check-button"
              name="options"
              id="option3"
              autoComplete="off"
              value={0.15}
              onChange={handleChange}
            />
            <label className="btn btn-primary button-color" htmlFor="option3">
              15%
            </label>
          </Col>
          <Col sm={4}>
            <input
              type="radio"
              className="btn-check check-button"
              name="options"
              id="option4"
              autoComplete="off"
              value={0.25}
              onChange={handleChange}
            />
            <label className="btn btn-primary button-color" htmlFor="option4">
              25%
            </label>
          </Col>
          <Col sm={4}>
            <input
              type="radio"
              className="btn-check check-button"
              name="options"
              id="option5"
              autoComplete="off"
              value={0.5}
              onChange={handleChange}
            />
            <label className="btn btn-primary button-color" htmlFor="option5">
              50%
            </label>
          </Col>
          <Col sm={4}>
            <Form.Control
              type="text"
              placeholder="Custom"
              className="format-custom"
              name="custom"
              value={variables.custom}
              onChange={handleChange}
              maxLength={3}
            />
          </Col>
        </Row>
        <br />
        <Form.Label className="my-form-label">Number of People</Form.Label>
        <Form.Control
          type="number"
          name="nop"
          value={variables.nop}
          onChange={handleChange}
          className="form-input-1"
          isInvalid={errors.message === "" || undefined ? false : true}
          min="0"
        />
        <Form.Control.Feedback type="invalid">
          {errors.message}
        </Form.Control.Feedback>
      </Form>
    </div>
  );
}

export default LeftSide;
