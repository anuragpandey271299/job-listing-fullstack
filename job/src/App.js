import Register from './Components/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Register}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
