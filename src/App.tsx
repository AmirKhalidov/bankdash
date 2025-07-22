import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Privileges from "./pages/Privileges";
import Settings from "./pages/Settings";
import EditProfile from "./components/EditProfile";
import Preferences from "./components/Preferences";
import Security from "./components/Security";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privileges" element={<Privileges />} />
        <Route path="/settings" element={<Settings />}>
          <Route index element={<Navigate replace to="edit-profile" />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
