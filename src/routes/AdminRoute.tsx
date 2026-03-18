import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { isAdminEmailAllowed } from "../auth/adminWhitelist";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-300">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" replace state={{ from: location }} />
    );
  }

  if (!isAdminEmailAllowed(user.email)) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
}

