import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Col } from "./Col";
import { Row } from "./Row";

storiesOf("Grid", module)
  .add("with text", () => (
    <Row flex>
      <Col sm={24} md={6} lg={12} smBreak={300} onClick={action("clicked")}>Hello Button</Col>
      <Col sm={24} md={6} lg={12} onClick={action("clicked")}>Hello Button</Col>
    </Row>
  ))
  .add("with some emoji", () => (
    <Row flex>
      <Col span={4} onClick={action("clicked")}>First column🔨</Col>
      <Col sm={{span:12,offset:8}} span={20}>Second Column🎉</Col>
    </Row>
  ));
