import { addDecorator, configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import { theme } from "./theme";
import { DefaultTheme, DarkTheme } from "../src/presets";
import { withThemes } from "storybook-styled-components";

const req = require.context("../src/components", true, /\.stories\.js$/);

const componentThemes = {
    "Default": DefaultTheme,
    "Dark": DarkTheme
};
addDecorator(withThemes(componentThemes));

const newViewports = {
  iphone5: {
    name: "Iphone 5/SE",
    styles: {
      width: "320px",
      height: "568px"
    }
  },
  iphone6: {
    name: "Iphone 6/7/8",
    styles: {
      width: "375px",
      height: "667px"
    }
  },
  iphoneX: {
    name: "Iphone X",
    styles: {
      width: "375px",
      height: "812px"
    }
  },
  ipad: {
    name: "Ipad",
    styles: {
      width: "768px",
      height: "1024px"
    }
  },
  ipadPro: {
    name: "Ipad Pro",
    styles: {
      width: "1024px",
      height: "1366px"
    }
  }
};

addParameters({
  viewport: {
    viewports: newViewports
  },
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "black", value: "#000000" },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ]
});

// Option defaults.
addParameters({
  options: {
    name: "Rebzden",
    theme
  }
});
// done!
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
