import { useEffect, useMemo, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../auth/AuthProvider";

type LocationState = {
  from?: { pathname?: string; search?: string; hash?: string };
};

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = useMemo(() => {
    const state = (location.state ?? {}) as LocationState;
    const fallback = { pathname: "/admin" };
    return state.from?.pathname ? state.from : fallback;
  }, [location.state]);

  useEffect(() => {
    if (!user) return;
    navigate(from.pathname ?? "/admin", { replace: true });
  }, [user, navigate, from.pathname]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-black text-white">Admin Login</h1>
        <p className="mt-3 text-slate-300">
          Sign in to continue to the admin dashboard.
        </p>

        <form
          className="mt-8 space-y-4"
          autoComplete="on"
          onSubmit={async (e) => {
            e.preventDefault();
            if (submitting) return;
            setSubmitting(true);
            setError(null);
            try {
              await signInWithEmailAndPassword(auth, email.trim(), password);
              navigate(from.pathname ?? "/admin", { replace: true });
            } catch (err: any) {
              const msg =
                err?.code === "auth/invalid-credential"
                  ? "Invalid email or password."
                  : err?.message || "Login failed.";
              setError(msg);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-700/60 bg-red-950/40 px-4 py-3 text-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}

