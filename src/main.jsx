import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const theme = extendTheme(
  {
    colors: {
      brand: {
        300: "#ba96d1",
        400: "#5a3977",
        500: "#411b63",
      },
      text: {
        dark: "#6f7071",
        light: "#e5e0d8",
      },
    },
  },
  withProse()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
