import GlobalStatesContext from "./global/GlobalStatesContext";
import { Router } from "./router/router";


function App() {
  return (
    <GlobalStatesContext>
      <Router />
    </GlobalStatesContext>
  );
}

export default App;
