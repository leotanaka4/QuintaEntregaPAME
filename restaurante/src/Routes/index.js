import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './../Pages/Home';
import { PageMenu } from './../Pages/PageMenu';
import { PageOpiniao } from './../Pages/PageOpiniao';
import { PageSuporte } from './../Pages/PageSuporte';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/"/>
                <Route element={<PageMenu/>} path="/menu"/>
                <Route element={<PageOpiniao/>} path="/opiniao"/>
                <Route element={<PageSuporte/>} path="/suporte"/>
            </Routes>
        </BrowserRouter>
    )
}