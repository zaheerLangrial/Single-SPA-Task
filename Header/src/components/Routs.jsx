import {BrowserRouter , Routes , Route} from 'react-router-dom'


export const Routs = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element='@pp/products' />
                <Route path='/cart' element='@pp/cart'/>
            </Routes>
        </BrowserRouter>
    )
}