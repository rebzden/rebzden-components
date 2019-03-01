import React from "react";

import { storiesOf } from "@storybook/react";
import { Modal } from "./";
import { Button } from "../Button";
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
  modal1: false,
  modal2: false
});
storiesOf("Modal", module).add("Simple modal", () => {
  return (
    <div>
      <State store={store}>
        {state => (
          <React.Fragment>
            <Modal
              open={state.modal1}
              onClose={() => store.set({ modal1: false })}
            >
              Modal first content
            </Modal>
            <Modal
              open={state.modal2}
              onClose={() => store.set({ modal2: false })}
            >
              Modal second content
            </Modal>
          </React.Fragment>
        )}
      </State>
      <Button
        onClick={() => {
          store.set({ modal1: true });
        }}
      >
        Toggle first modal
      </Button>
      <Button
        onClick={() => {
          store.set({ modal2: true });
        }}
      >
        Toggle second modal
      </Button>
    </div>
  );
});
