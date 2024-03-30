import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import RecipeForm from './Component/RecipeForm';
import RecipeList from './Component/RecipeList';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/form' element={ <RecipeForm/>}></Route>
      <Route path='/list' element={ <RecipeList/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
