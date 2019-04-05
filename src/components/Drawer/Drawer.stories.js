import React from "react";

import { storiesOf } from "@storybook/react";
import { Drawer } from "./";
import { Button } from "../Button";
import { State, Store } from "@sambego/storybook-state";
import { Card } from "../Card";

const store = new Store({
  drawer1: false,
  drawer2: false
});
storiesOf("Drawer", module).add("Simple drawer", () => {
  return (
    <div>
      <State store={store}>
        {state => (
          <React.Fragment>
            <Drawer
              open={state.drawer1}
              onClose={() => store.set({ drawer1: false })}
            >
              <Card>Hello Button</Card>
            </Drawer>
          </React.Fragment>
        )}
      </State>
      <Button
        onClick={() => {
          store.set({ drawer1: true });
        }}
      >
        Toggle first modal
      </Button>
    </div>
  );
});
