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
import WarehousePage from "./pages/warehouses";
import RegionWarehousesList from "./components/RegionWarehousesList";
import NewsPage from "./pages/news/NewsPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Mainpage />} />

      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsPage />} />

      <Route path="/warehouses" element={<Warehouses />} />
      <Route path="/warehouses/:id" element={<RegionWarehousesList />} />
      <Route path="/warehouses/:id/:id" element={<WarehousePage />} />

      <Route path="/contacts" element={<Contacts />} />
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
