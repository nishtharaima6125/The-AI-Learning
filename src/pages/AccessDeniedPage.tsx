import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function AccessDeniedPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950/60 backdrop-blur-xl p-8 shadow-2xl">
        <h1 className="text-3xl font-black text-white">Access Denied</h1>
        <p className="mt-3 text-slate-300">
          Your account isn’t authorized to access the admin dashboard.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-full rounded-xl bg-slate-800 px-4 py-3 text-slate-100 hover:bg-slate-700 transition"
          >
            Go to Home
          </button>
          <button
            onClick={async () => {
              await signOut(auth);
              navigate("/login", { replace: true });
            }}
            className="w-full rounded-xl bg-red-600 px-4 py-3 text-white hover:bg-red-700 transition"
          >
            Sign out
          </button>
        </div>
      </div>
    </main>
  );
}

