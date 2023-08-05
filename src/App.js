// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';

function App() {
    return (
        <Routes>
            <Route path='*' element={<h1>404 Error Content</h1>} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}

export default App;
