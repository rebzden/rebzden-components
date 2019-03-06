import { addDecorator, configure, addParameters } from "@storybook/react";
import { themes } from '@storybook/theming';
import {DefaultTheme,DarkTheme} from "../src/presets";
import { withThemes } from 'storybook-styled-components'

const req = require.context("../src/components", true, /\.stories\.js$/);

const componentThemes = {
  'Default theme': DefaultTheme,
  'Dark Theme': DarkTheme,
}

// now add the decorator
addDecorator(withThemes(componentThemes));

// Option defaults.
addParameters({
  options: {
    name: 'Rebzden',
    theme: themes.dark,
  },
});
// done!
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
