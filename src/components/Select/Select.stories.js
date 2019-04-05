import React from "react";

import { storiesOf } from "@storybook/react";
import { SimpleSelect } from "./simple-select";
import { MultiSelect } from "./multi-select";

storiesOf("Select", module)
  .add("Simple", () => <SimpleSelect />)
  .add("Multi", () => <MultiSelect />);
