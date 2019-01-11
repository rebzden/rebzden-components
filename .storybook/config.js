import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../src/themes";
import { select,withKnobs } from "@storybook/addon-knobs";

const req = require.context("../src/components", true, /\.stories\.js$/);
const label = "Theme";
const options = {
  Default: "default",
  Dark: "dark"
};
const defaultValue = "default";
const groupId = "THEME_SELECT";
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
addDecorator((story, context) => {
  const storyWithKnobs = withKnobs(story, context)
  const theme = select(label, options, defaultValue, groupId);
  return <ThemeProvider theme={themes[theme]}>{storyWithKnobs}</ThemeProvider>;
});
configure(loadStories, module);
