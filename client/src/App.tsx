import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./components/Hero";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import TodosPage from "./components/TodosPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/users/tasks' element={<TodosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
