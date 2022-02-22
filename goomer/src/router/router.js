import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {
    HomePage,
    DetailsPage
} from '../pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                    
                <Route path='/details/:id' element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}