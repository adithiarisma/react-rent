import "./App.css";
import Layout from "./Layout";
import CarList from "./pages/CarList";
import CarDetail from "./pages/CarDetail";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./common/ProtectedRoute";
import Profile from "./Profile";
import SearchCar from "./pages/SearchCar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchCar />} />
          <Route path="carlist" element={<CarList />} />
          <Route path="/cardetail/:id" element={<CarDetail />} />
          {}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
