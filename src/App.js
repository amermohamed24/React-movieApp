import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Add_Movie from './components/Add section/Add_Movie';
import Watch_List from './components/Watch_List';
import Watched from './components/Watched';
import ContextProvider from './Context Api/ContextApi';

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider> 
        <Header />
        <Routes>
          <Route path='/watch_list' element={<Watch_List />}/>
          <Route path='/watched' element={<Watched />}/>
          <Route path='/' element={<Add_Movie />}/>
        </Routes></ContextProvider>
      </Router>
    </div>
  );
}

export default App;
