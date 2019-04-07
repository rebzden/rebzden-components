import React from "react";

import { storiesOf } from "@storybook/react";
import { Col } from "./Col";
import { Row } from "./Row";
import { Conceal } from "./Conceal";

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
  ))
  .add("Conceal", () => (
    <>
      <div>
        Below is a component hidden from 0 to 100px, between 200px and 400px and
        above 600px
        <Conceal
          breakpoints={[{ to: 100 }, { from: 200, to: 400 }, { from: 600 }]}
        >
          I'm hidden from 0 to 100px, between 200px and 400px and above 600px
        </Conceal>
      </div>
      <div>
        Below is a component hidden from 0 to 400px
        <Conceal breakpoints={[{ to: 400 }]}>
          I'm hidden from 0 to 400px
        </Conceal>
      </div>
      <div>
        Below is a component hidden from 400px
        <Conceal breakpoints={[{ from: 400 }]}>I'm hidden from 400px</Conceal>
      </div>
    </>
  ));
