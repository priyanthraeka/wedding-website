import Wrapper from "./components/Wrapper";
import Error from "./components/Error";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="dika-ewikk" replace />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "dika-ewikk",
    element: <Wrapper />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
