import "./App.css";
import Company from "./select.jsx";
import Sidebar from "./sidebar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>

      <hr />
      <Company></Company>
    </div>
  );
};

export default App;
