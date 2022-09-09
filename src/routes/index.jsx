import { Routes, Route } from "react-router-dom";
import { Home, AboutUs, Categories, BlogDetail } from "../pages";
import { Container } from "../components";

export function AppRoutes() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/kategoriler">
          <Route index element={<Categories />} />
          <Route path=":categoryId" element={<Categories />} />
        </Route>
        <Route path="/:id" element={<BlogDetail />} />
      </Routes>
    </Container>
  );
}
