import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Todos from "./pages/Todos";
import AddTodo from "./pages/AddTodo";
import Editodo from "./pages/EditTodo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/todo/add" element={<AddTodo />} />
          <Route path="/todo/edit/:id" element={<Editodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
