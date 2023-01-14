import { ToastContainer } from "react-toastify";
import { GlobalStyles, Container } from "./global-styles";
import { Router } from "./router/router";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </Container>
  );
}

export default App;
