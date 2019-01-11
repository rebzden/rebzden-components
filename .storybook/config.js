import { addDecorator, configure } from "@storybook/react";
import React from 'react';
import {ThemeProvider} from 'styled-components';
import ThemeDefault from "../src/themes/default";
const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={ThemeDefault}>
      {story()}
  </ThemeProvider>
));

configure(loadStories, module);
