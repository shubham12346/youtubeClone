import { Provider } from "react-redux";
import { store } from "./store/store";
import Base from "./component/Base";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
