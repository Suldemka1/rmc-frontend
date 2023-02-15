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
import NewsPage from "./pages/news/NewsPage";
import RegionWarehouses from "./pages/warehouses/region-warehouses";
import WarehousePage from "./pages/warehouses/warehouse-page";
import Search from "./pages/search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Mainpage />} />

      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsPage />} />

      <Route path="/warehouses" element={<Warehouses />} />
      <Route path="/warehouses/:id" element={<WarehousePage />} />
      <Route path="/regions/:id" element={<RegionWarehouses />} />
      {/* <Route path="/warehouses/:id/:id" element={<WarehousePage />} /> */}

      <Route path="/contacts" element={<Contacts />} />

      <Route path="/search" element={<Search />} />
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
