// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Catalog } from './components/Product/Catalog/Catalog';
import { Detail } from './components/Product/Details/Detail';
import { Edit } from './components/Product/Edit/Edit';
import { Create } from './components/Product/Create/Create';
import { Delete } from './components/Product/Delete/Delete';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/product/catalog' element={<Catalog />} />
                <Route path='/product/create' element={<Create />} />
                <Route path='/product/detail/:id' element={<Detail />} />
                <Route path='/product/edit/:id' element={<Edit />} />
                <Route path='/product/delete/:id' element={<Delete />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
