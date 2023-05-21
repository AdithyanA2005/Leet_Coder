import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PageNotFound from "./pages/PageNotFound";
import ProblemsPage from "./pages/ProblemsPage";

export default function App() {
  /* Add routing here, ROUTES -
     /signin - Login page
     /signup - Signup page
     /problemset/all/ - All problems =
     /problems/:problem_slug - A single problem solvim page
   */

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        <Route path="/problemset" element={<Navigate to="all" />} />
        <Route path="/problemset/all/" element={<ProblemsPage />} />

        {/* <Route path="/problems/:pid/" element={<ProblemsPage problems={problems} />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

