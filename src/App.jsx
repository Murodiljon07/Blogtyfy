import { Routes, BrowserRouter, Route } from "react-router-dom";
/* layouts */
import Header from "./Layouts/HeaderLayout/Header";
import PublikPage from "./pages/PublikPage";
import PostsPage from "./pages/PostsPage";
import Footer from "./Layouts/FooterLayout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mt-32">
        <Routes>
          <Route path="/" element={<PublikPage />}></Route>
          <Route path="/posts" element={<PostsPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
