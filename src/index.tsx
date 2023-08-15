import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {Counter} from "components/counter/counter";

const root = document.getElementById('app');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Counter />
    </StrictMode>,
  );
}
