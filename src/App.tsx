import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";
import "./App.css";

const Layout = lazy(() => import("./components/Layout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Accounts = lazy(() => import("./pages/Accounts"));
const Investments = lazy(() => import("./pages/Investments"));
const CreditCards = lazy(() => import("./pages/CreditCards"));
const Loans = lazy(() => import("./pages/Loans"));
const Services = lazy(() => import("./pages/Services"));
const Privileges = lazy(() => import("./pages/Privileges"));
const Settings = lazy(() => import("./pages/Settings"));
const EditProfile = lazy(() => import("./components/EditProfile"));
const Preferences = lazy(() => import("./components/Preferences"));
const Security = lazy(() => import("./components/Security"));

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
