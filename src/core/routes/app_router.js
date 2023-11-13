import {createBrowserRouter} from 'react-router-dom'
import HomeView from '../../features/home/home_view';
import LoginView from '../../features/login/login_view';


export const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: HomeView
    },
    {
        path: "/login",
        Component: LoginView
    }

]);