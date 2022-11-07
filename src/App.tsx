import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Mainpage from "./pages/mainpage";
import News from "./pages/news"
import Contacts from "./pages/contacts";
import Warehouses from "./pages/warehouses";
import SignIn from "./pages/SignIn";
import PostPage from "./components/Post/PostPage";
import WarehousePage from "./components/Warehouses/WarehousePage";
import Account from "./pages/account";
import AccountSettings from "./components/Account/AccountSettings";
import AccountAppeals from "./components/Account/AccountAppeals";
import AccountNewAppeal from "./components/Account/AccountNewAppeal";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Mainpage/>}/>

        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<PostPage />} />

        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/:slug" element={<Warehouses />} />
        <Route path="/warehouses/:id" element={<WarehousePage />} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignIn />} />

        <Route path="/account" element={<Account />} />
        <Route path="/account/settings" element={<AccountSettings />} />
        <Route path="/account/appeals" element={<AccountAppeals />} />
        <Route path="/account/newappeal" element={<AccountNewAppeal />} />
     </Route>
))

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
