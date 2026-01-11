import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import HomaPage from "./Pages/HomePage/HomaPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomaPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
