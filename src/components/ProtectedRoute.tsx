import { useAuth } from "../services/AuthContext";
import { Navigate } from "react-router";
import Spinner from "./Spinner";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
