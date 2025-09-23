import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PublicLayout from "./layout/public-layout";
import AuthLayout from "./layout/auth-layout";
import MainLayout from "./layout/main-layout";
import ProtectedRoutes from "./layout/protected-routes";

import HomePage from "./pages/home";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import Generate from "./pages/generate";
import Dashboard from "./components/dashboard";
import CreateEditPage from "./pages/create-edit-page";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Auth Route */}
        <Route element={<AuthLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* Protected Route*/}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          {/* Add all the Protected Route */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
