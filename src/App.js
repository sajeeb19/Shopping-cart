import { Provider } from "react-redux";
import Test from "./components/Test";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Test />
      </div>
    </Provider>
  );
}

export default App;
