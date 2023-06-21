import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContext } from './context/AuthContext';
import Context from './context';

import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/app.scss'
import Logo from './components/Logo';

function App() {

  const [isAuth, setIsAuth] = useState(true)
  const [isFaved, setIsFaved] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

  return (
    <Context.AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        <Header />
        <Context.CardsContext.Provider value={{
          isFaved,
          setIsFaved,
          isLoading,
          setIsLoading,
        }}>
        <div className="app">
          {isAuth && <Logo />}
          <AppRouter />
          <Footer />
        </div>
      </Context.CardsContext.Provider>

    </BrowserRouter>

    </Context.AuthContext.Provider >

  )
}

export default App;
