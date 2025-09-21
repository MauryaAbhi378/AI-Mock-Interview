import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PublicLayout from "./layout/public-layout";
import AuthLayout from "./layout/auth-layout";

import HomePage from "./routes/home";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";

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
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* Protected Route*/}
      </Routes>
    </Router>
  );
}

export default App;
