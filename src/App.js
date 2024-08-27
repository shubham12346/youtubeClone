import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Base from "./component/Base";

function App() {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  );
}

export default App;
