import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuestionsList from "./components/QuestionsList";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/questions' element={<QuestionsList/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
