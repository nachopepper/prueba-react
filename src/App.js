import RouterComponent from "./router/RouterComponent";
import { useSelector } from 'react-redux'
import {Provider} from "react-redux";
import { store } from "./store/store";

function App() {

  return (
    <>
        <Provider store={ store }>
            <RouterComponent />
        </Provider>
    </>
  );
}

export default App;
