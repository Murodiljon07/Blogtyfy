import { Routes, BrowserRouter, Route } from "react-router-dom";
/* layouts */
import Header from "./Layouts/HeaderLayout/Header";
import PublikLoyaut from "./Layouts/MainLayout/PublikLoyaut";
import PostsLoyaut from "./Layouts/MainLayout/PostsLoyaut";
import Footer from "./Layouts/FooterLayout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<PublikLoyaut />}></Route>
          <Route path="/posts" element={<PostsLoyaut />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
