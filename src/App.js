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
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { ProductProvider } from './contexts/ProductContext';
import { AuthProvide } from './contexts/AuthContext';
import { CommentProvide } from './contexts/CommentsContext';
import { RouteGuard } from './components/common/RouteGuard';
import { ProductOwner } from './components/common/ProductOwner';
import { ShowAll } from './components/Commentar/ShowComment/ShowComments'
import { ProfileInfo } from './components/Profile/ProfileInfo/ProfileInfo';

function App() {
    return (
        <AuthProvide>
            <Header />

            <ProductProvider>
                <CommentProvide>
                    <Routes>
                        <Route path='*' element={<PageNotFound />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/auth/login' element={<Login />} />
                        <Route path='/auth/register' element={<Register />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/product/catalog' element={<Catalog />} />
                        <Route path='/product/detail/:id' element={<><Detail /> <ShowAll /></>} />
                        <Route element={<RouteGuard />} >
                            <Route path='/product/create' element={<Create />} />
                            <Route path='/product/edit/:id' element={
                                <ProductOwner>
                                    <Edit />
                                </ProductOwner>} />
                            <Route path='/product/delete/:id' element={
                                <ProductOwner>
                                    <Delete />
                                </ProductOwner>} />
                            <Route path='/profil' element={
                                <ProfileInfo />
                            } />
                        </Route>
                    </Routes>
                </CommentProvide>
            </ProductProvider>

            <Footer />
        </AuthProvide>
    );
}

export default App;
