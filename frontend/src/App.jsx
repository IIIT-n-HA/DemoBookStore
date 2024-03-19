import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
import CreateBook from "./pages/CreateBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/books/create" element={<CreateBook></CreateBook>}></Route>
      <Route path="/books/edit/:id" element={<EditBook></EditBook>}></Route>
      <Route path="/books/details/:id" element={<ShowBook></ShowBook>}></Route>
      <Route
        path="/books/delete/:id"
        element={<DeleteBook></DeleteBook>}
      ></Route>
    </Routes>
  );
};

export default App;
