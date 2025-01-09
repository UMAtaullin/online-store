import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
  { path: '/admin', Component: Admin },
  { path: '/basket', Component: Basket },
]

export const publicRoutes = [
  { path: '/', Component: Shop },
  { path: '/login', Component: Auth },
  { path: '/registration', Component: Auth },
  { path: '/device' + '/:id', Component: DevicePage },
]