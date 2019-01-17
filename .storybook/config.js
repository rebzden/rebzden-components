import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import {DefaultTheme,DarkTheme} from "../src/presets";
import { withThemes } from 'storybook-styled-components'

const req = require.context("../src/components", true, /\.stories\.js$/);

const themes = {
  'Default theme': DefaultTheme,
  'Dark Theme': DarkTheme,
}

// now add the decorator
addDecorator(withThemes(themes));

// done!
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
