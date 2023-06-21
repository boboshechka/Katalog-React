import BidsPage from "../pages/BidsPage"
import notAuthLoginPage from "../pages/notAuthLoginPage"
import AuthLoginPage from "../pages/AuthLoginPage"
import MainPage from "../pages/MainPage"
import FavouritesPage from "../pages/FavouritesPage"
import CardPage from "../pages/CardPage"

export const privateRoutes = [
    { path: '/', element: MainPage },
    { path: '/bids', element: BidsPage },
    { path: '/login', element: AuthLoginPage },
    { path: '/favourites', element: FavouritesPage },
    { path: '/card/:id', element: CardPage },
]

export const publicRoutes = [
    { path: '/login', element: notAuthLoginPage },
]