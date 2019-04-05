import React from "react";

import { storiesOf } from "@storybook/react";
import { Hamburger, CloseIcon, HamburgerIcon, Arrow } from "./";
import { Store, State } from "@sambego/storybook-state";

const store = new Store({
  open: false,
  arrow: false,
});
storiesOf("Hamburger", module).add("Hamburger", () => {
  return (
    <div>
      <State store={store}>
        {state => (
          <React.Fragment>
            <Hamburger
              open={state.open}
              onClick={() => {
                store.set({ open: !state.open });
              }}
            />
            <Arrow
              open={state.arrow}
              onClick={() => {
                store.set({ arrow: !state.arrow });
              }}
            />
            <HamburgerIcon/>
            <CloseIcon/>
          </React.Fragment>
        )}
      </State>
    </div>
  );
});
