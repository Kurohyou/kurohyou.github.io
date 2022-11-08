import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

import './index.scss';

import App from './App';
import { About, Portfolio, Contact, Resume } from './routes';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<About/>}></Route>
      <Route path="portfolio" element={<Portfolio/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="resume" element={<Resume/>}></Route>
    </Route>
  )
);

root.render(
  <RouterProvider router={router}/>
);
