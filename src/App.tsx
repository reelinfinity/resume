import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen.jsx";
import ErrorScreen from "./screens/error/ErrorScreen.js";
import "./assets/sass/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [
      {
        path: "*",
        element: <ErrorScreen />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
