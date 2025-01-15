import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router';
import logo from '../assets/react.svg';
import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
export const Navigation = () => {
  return (
    <>
    <Suspense fallback={null}>

        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {/* {TODO: Crear navlink dinamicos } */}
                        {
                            routes.map(({ to, name }) => (
                                <li key={ to }>
                                    <NavLink to={ to } className={ ({isActive}) => isActive? 'nav-active' : '' }>
                                        { name }
                                    </NavLink>
                                </li>
                            ))
                        }
                        {/* <li>
                            <NavLink to={routes } className={ ({isActive}) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
                        </li> */}
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(({ name, path, Component}) => (
                            <Route 
                                key={ name } 
                                path={ path } 
                                element={ <Component/> } 
                            />
                        ))
                    }
                     {/* <Route path="lazy1" element={ <LazyPage1/> } />
                     <Route path="lazy2" element={ <LazyPage2/> } />
                     <Route path="lazy3" element={ <LazyPage3/> } /> */}

                     <Route path="*" element={<Navigate to={ routes[0].to } replace/>} />
                </Routes>

            </div>
        </BrowserRouter>
        
    </Suspense>
    </>
  )
}
