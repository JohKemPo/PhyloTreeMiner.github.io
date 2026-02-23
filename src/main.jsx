import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link, HashRouter, Routes, Route } from "react-router-dom";
import { Button, Result } from "antd";
import App from "./App.jsx";
import { } from 'react-router-dom'
import HomePage from "./pages/homePage.jsx";
import DocumentationHome from "./pages/DocumentationHome.jsx";

const NotFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited has not been implemented yet or does not exist."
    extra={
      <Button type="primary">
        <Link to="/">Back to Homepage</Link>
      </Button>
    }
  />
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: NotFoundPage(),
  },
  {
    element: <App />,
    errorElement: NotFoundPage(),
    children: [
      
      {
        path: "doc",
        element: <DocumentationHome />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doc" element={<DocumentationHome />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
