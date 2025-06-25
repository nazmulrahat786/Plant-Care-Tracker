import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddPlantItems from "../pages/AddPlantItems/AddPlantItems";
import PlantViewDetails from "../pages/PlantViewDetails/PlantViewDetails";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllArtPlantItems from "../pages/AllArtPlantItems/AllArtPlantItems";
import MyArtPlantList from "../pages/MyArtPlantList/MyArtPlantList";
import UpdateDataForm from "../pages/UpdateDataForm/UpdateDataForm";
import Page404 from "../pages/Page404/Page404";
import PrivateRoute from "./PrivateRoute";
import SubcategoryItems from "../pages/SubcategoryItems/SubcategoryItems";
import SubCategoryDetails from "../pages/SubCategoryDetails/SubCategoryDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Page404></Page404>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://ceramics-and-pottery-server.vercel.app/addPlantItems')
        },
        {
            path: '/addPlantItems',
            element: <PrivateRoute><AddPlantItems></AddPlantItems></PrivateRoute>
        },
        {
          path: '/PlantViewDetails/:id',
          element: <PrivateRoute><PlantViewDetails></PlantViewDetails></PrivateRoute>,
          loader: () => fetch('https://ceramics-and-pottery-server.vercel.app/addPlantItems')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allArtPlantItems',
          element: <AllArtPlantItems></AllArtPlantItems>,
          loader: () => fetch('https://ceramics-and-pottery-server.vercel.app/addPlantItems')
        },
        {
          path: '/myArtPlantList',
          element: <PrivateRoute><MyArtPlantList></MyArtPlantList></PrivateRoute>
        },
        {
          path: '/updateDataForm/:id',
          element: <UpdateDataForm></UpdateDataForm>,
          loader: ({params}) => fetch(`https://ceramics-and-pottery-server.vercel.app/addPlantItems/${params.id}`)
        },
        {
          path: '/subCategoryItems/:subcategory',
          element: <SubcategoryItems></SubcategoryItems>,
          loader: ({params}) => fetch(`https://ceramics-and-pottery-server.vercel.app/subcategory/${params.subcategory}`)
        },
        {
          path: '/subCategoryDetails/:id',
          element: <SubCategoryDetails></SubCategoryDetails>,
          loader: ({params}) => fetch(`https://ceramics-and-pottery-server.vercel.app/subCategoryDetails/${params.id}`)
        }
      ]
    },
  ]);

export default router;