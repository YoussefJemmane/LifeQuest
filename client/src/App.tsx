import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";
import AppRouter from "./Router";
const App = () => {
  return (
    <>
      <Router>
        <Layout>
            <AppRouter />
        </Layout>
      </Router>
    </>
  );
};
export default App;
