import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import logo from '../assets/react.svg';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
export const Navigation = () => {
  return (
    <>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to='/register' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/users' className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                     <Route path="/register" element={ <RegisterPage/> } />
                     <Route path="/formik-basic" element={<FormikBasicPage/>} />
                     <Route path="/formik-yup" element={<FormikYupPage/>} />
                     <Route path="/formik-components" element={<FormikComponents/>} />
                     <Route path="users" element={<h1>User Page</h1>} />
                     <Route path="*" element={<Navigate to='/home' replace/>} />
                </Routes>

            </div>
        </BrowserRouter>
    </>
  )
}
