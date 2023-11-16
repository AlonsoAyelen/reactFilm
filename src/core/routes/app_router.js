import {createBrowserRouter} from 'react-router-dom'
import HomeView from '../../features/home/home_view';
import LoginView from '../../features/login/login_view';
import PrivateRoute from '../auth/components/private_route';


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: (<PrivateRoute>
            <HomeView />
        </PrivateRoute>)
    },
    {
        path: "/login",
        element: <LoginView />,
    }

]);