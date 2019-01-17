import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Col } from "./Col";
import { Row } from "./Row";

storiesOf("Grid", module)
  .add("with text", () => (
    <Row>
      <Col onClick={action("clicked")}>Hello Button</Col>
    </Row>
  ))
  .add("with some emoji", () => (
    <Row>
      <Col onClick={action("clicked")}>Hello Button</Col>
    </Row>
  ));
