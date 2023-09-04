import { Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./components/routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route}/>
       ))}

      </Routes>
    </Layout>
  );
}

export default App;
