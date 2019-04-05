import React from "react";

import { storiesOf } from "@storybook/react";
import { Col } from "./Col";
import { Row } from "./Row";

storiesOf("Grid", module)
  .add("Regular", () => (
    <>
      <Row flex>
        <Col span={12}>Col-12</Col>
        <Col span={12}>Col-12</Col>
      </Row>
      <Row flex>
        <Col span={8}>Col-8</Col>
        <Col span={8}>Col-8</Col>
        <Col span={8}>Col-8</Col>
      </Row>
      <Row flex>
        <Col span={12}>Col-6</Col>
        <Col span={12}>Col-6</Col>
        <Col span={12}>Col-6</Col>
        <Col span={12}>Col-6</Col>
      </Row>
    </>
  ))
  .add("Responsive", () => (
    <Row flex wrap="wrap">
      <Col xs={24} md={12} lg={6}>
        Col
      </Col>
      <Col xs={24} md={12} lg={6}>
        Col
      </Col>
    </Row>
  ));
