import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {
    HomePage,
    DetailsPage
} from '../pages';
import { Headers } from "../components/Headers";

export const Router = () => {
    return (
        <BrowserRouter>
            <Headers />
            <Routes>
                <Route path='/' element={<HomePage />} />
                    
                <Route path='/details/:id' element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}