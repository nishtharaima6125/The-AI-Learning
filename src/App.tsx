// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { useEffect } from 'react';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';
// // import HomePage from './pages/HomePage';
// // import BlogPage from './pages/BlogPage';
// // import BlogPostPage from './pages/BlogPostPage';
// // import PromptPage from './pages/PromptPage';
// // import { useThemeStore } from './store/themeStore';
// // import AdminDashboard from "./components/sections/AdminDashboard";
// // <Route path="/admin" element={<AdminDashboard />} />

// // function App() {
// //   const { theme } = useThemeStore();

// //   useEffect(() => {
// //     if (theme === 'dark') {
// //       document.documentElement.classList.add('dark');
// //     } else {
// //       document.documentElement.classList.remove('dark');
// //     }
// //   }, [theme]);

// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/blogs" element={<BlogPage />} />
// //           <Route path="/blog/:id" element={<BlogPostPage />} />
// //           <Route path="/prompts" element={<PromptPage />} />
// //         </Routes>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import BlogPage from './pages/BlogPage';
// import BlogPostPage from './pages/BlogPostPage';
// import PromptPage from './pages/PromptPage';
// import { useThemeStore } from './store/themeStore';
// import AdminDashboard from "./components/sections/AdminDashboard";

// function App() {
//   const { theme } = useThemeStore();

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   return (
//     <Router>
//       <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/blogs" element={<BlogPage />} />
//           <Route path="/blog/:id" element={<BlogPostPage />} />
//           <Route path="/prompts" element={<PromptPage />} />
//           {/* 👇 Yahan AdminDashboard ka route add karo */}
//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//         {/* import AdminDashboard from "./components/sections/AdminDashboard";

// <Route path="/admin" element={<AdminDashboard />} /> */}


//         {window.location.pathname !== "/admin" && <Footer />}
        
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PromptPage from './pages/PromptPage';
import { useThemeStore } from './store/themeStore';
import AdminDashboard from "./components/sections/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import AccessDeniedPage from "./pages/AccessDeniedPage";
import AdminRoute from "./routes/AdminRoute";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;

function AppShell() {
  const location = useLocation();
  const hideChrome = location.pathname === "/admin";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {!hideChrome && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/prompts" element={<PromptPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  );
}
