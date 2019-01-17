import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {Card} from './';

storiesOf("Card", module)
  .add("with text", () => (
    <Card>Hello Button</Card>
  ))
  .add("with some emoji", () => (
    <Card onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Card>
  ));
