import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mainpage from "./pages/mainpage";
import News from "./pages/news";
import Contacts from "./pages/contacts";
import Warehouses from "./pages/warehouses";
import SignIn from "./pages/SignIn";
import PostPage from "../../../rmc-frontend/components/Post/PostPage";
import WarehousePage from "./pages/warehouse";
import RegionWarehousesList from "./components/RegionWarehousesList";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Mainpage />} />

      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<PostPage />} />

      <Route path="/warehouses" element={<Warehouses />} />
      <Route path="/warehouses/:id" element={<RegionWarehousesList />} />
      <Route path="/warehouses/:id/:id" element={<WarehousePage />} />

      <Route path="/contacts" element={<Contacts />} />

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignIn />} />

    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
