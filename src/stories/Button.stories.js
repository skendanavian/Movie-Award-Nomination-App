import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../components/Button";

storiesOf("Button", module).add("Nominate", () => <Button>Nominate</Button>);
storiesOf("Button", module).add("Nominate (selected)", () => (
  <Button selected>Nominate</Button>
));
storiesOf("Button", module).add("Remove", () => <Button>Remove</Button>);
