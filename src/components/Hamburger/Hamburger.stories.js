import React from "react";

import { storiesOf } from "@storybook/react";
import { Hamburger } from "./";
import { Store, State } from "@sambego/storybook-state";

const store = new Store({
  open: false
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
          </React.Fragment>
        )}
      </State>
    </div>
  );
});
