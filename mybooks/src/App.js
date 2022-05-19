import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Navbar/NavBar'
import ErrorPage from './pages/Error/ErrorPage'
import HomePage from "./pages/Home/HomePage";
import MyListPage from "./pages/MyList/MyListPage";

function App() {
  return ( 
    <div className="App">         
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/MyListPage" element={<MyListPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>             
      </div> 
    </div>        
  );
}

export default App;
