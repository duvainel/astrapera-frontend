import { Routes, Route, Navigate } from "react-router-dom";
import { Home, AboutUs, Categories, BlogDetail } from "../pages";
import { Container } from "../components";

export function AppRoutes() {
  return (
    <Container pt={5} pb={20}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/kategoriler">
          <Route index element={<Navigate to={"0"} />} />
          <Route path=":categoryId" element={<Categories />} />
        </Route>
        <Route path="/:id" element={<BlogDetail />} />
      </Routes>
    </Container>
  );
}
