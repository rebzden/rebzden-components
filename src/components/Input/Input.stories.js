import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {Input} from './';

storiesOf("Input", module)
  .add("Simple", () => (
    <Input/>
  ));
