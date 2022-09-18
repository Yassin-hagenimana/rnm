import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Books from './components/Books';
import Add from "./components/Add.jsx"
import Update from "./components/Update"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Books/>}/>
     <Route path="/add" element={<Add/>}/>
     <Route path="/update" element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
