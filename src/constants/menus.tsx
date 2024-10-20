import { Home, Lock } from "@/icons";
import Locale from "@/locales";

export type MenuProps = {
  id: number;
  label: string;
  icon: JSX.Element;
  path: string;
  section?: boolean;
  integration?: boolean;
  auth?: boolean;
};

export const APP_ROUTE_MENU: MenuProps[] = [
  {
    id: 0,
    label: Locale.Navigator.Land,
    icon: <Home />,
    path: "/",
    auth: true,
  },
  {
    id: 1,
    label: Locale.Navigator.Auth,
    icon: <Lock />,
    path: "/auth",
    auth: false,
  },
];
