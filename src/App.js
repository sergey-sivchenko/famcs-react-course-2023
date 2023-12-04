import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "router";
import { configureAppStore } from "store";

const store = configureAppStore();

const App = () => (
  <StoreProvider store={store}>
    <RouterProvider router={router} />
  </StoreProvider>
);

export default App;
