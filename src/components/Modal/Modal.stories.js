import React from "react";

import { storiesOf } from "@storybook/react";
import { Modal } from "./";
import { Button } from "../Button";
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
  active: false
});
storiesOf("Modal", module).add("Simple modal", () => {
  return (
    <div>
      <State store={store}>
        {state => (
          <Modal
            open={state.active}
            onClose={() => store.set({ active: false })}
          >
            Modal content
          </Modal>
        )}
      </State>
      <Button
        onClick={() => {
          store.set({ active: !store.get("active") });
          console.log(store);
        }}
      >
        Toggle modal
      </Button>
    </div>
  );
});
