import React from "react";
import ReactDOM from "react-dom";
import { meaningOfLife } from "@vishalkhojemonorepo/foo";
import { Button } from "@vishalkhojemonorepo/components";

ReactDOM.render(
  <React.StrictMode>
    {meaningOfLife}
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);
