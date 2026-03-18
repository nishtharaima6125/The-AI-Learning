// import { useState } from 'react';
// import { Search, Calendar, ArrowLeft } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const BlogPage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');

//   const allBlogs = [
//     {
//       id: 1,
//       title: '10 AI Tools That Will Transform Your Workflow in 2026',
//       date: 'January 15, 2026',
//       excerpt: 'Discover the most powerful AI tools that are revolutionizing how we work, from content creation to data analysis.',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
//       category: 'Tools',
//     },
//     {
//       id: 2,
//       title: 'Complete Guide to Prompt Engineering',
//       date: 'January 10, 2026',
//       excerpt: 'Master the art of crafting effective prompts for ChatGPT, Claude, and other large language models.',
//       image: 'https://images.unsplash.com/photo-1686191128892-34bbd00f6d5e?w=800',
//       category: 'Tutorials',
//     },
//     {
//       id: 3,
//       title: 'Building No-Code Apps with AI',
//       date: 'January 5, 2026',
//       excerpt: 'Learn how to create fully functional applications without writing code using AI-powered platforms.',
//       image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
//       category: 'Development',
//     },
//     {
//       id: 4,
//       title: 'The Future of AI in Content Creation',
//       date: 'December 28, 2025',
//       excerpt: 'Explore how AI is reshaping content creation and what it means for creators and businesses.',
//       image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
//       category: 'Insights',
//     },
//     {
//       id: 5,
//       title: 'AI-Powered Automation for Businesses',
//       date: 'December 20, 2025',
//       excerpt: 'Streamline your business operations with intelligent automation workflows and AI integrations.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
//       category: 'Business',
//     },
//     {
//       id: 6,
//       title: 'ChatGPT vs Claude: Which AI is Better?',
//       date: 'December 15, 2025',
//       excerpt: 'An in-depth comparison of the two leading conversational AI models and their strengths.',
//       image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800',
//       category: 'Reviews',
//     },
//   ];

//   const filteredBlogs = allBlogs.filter(
//     (blog) =>
//       blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen pt-16 pb-20 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >
//           <button
//             onClick={() => navigate('/')}
//             className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             Back to Home
//           </button>
//           <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Blog Posts
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             In-depth articles, guides, and insights on AI and technology
//           </p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mb-12"
//         >
//           <div className="relative max-w-2xl">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search blog posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors"
//             />
//           </div>
//           {searchQuery && (
//             <p className="mt-4 text-gray-600 dark:text-gray-400">
//               Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''}
//             </p>
//           )}
//         </motion.div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredBlogs.map((blog, index) => (
//             <motion.div
//               key={blog.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//               onClick={() => navigate(`/blog/${blog.id}`)}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
//                   {blog.category}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col">
//                 <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
//                   <Calendar size={16} className="flex-shrink-0" />
//                   <span className="truncate">{blog.date}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 line-clamp-3 break-words">
//                   {blog.excerpt}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {filteredBlogs.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <p className="text-2xl text-gray-600 dark:text-gray-400">
//               No blog posts found matching your search.
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
// import { useState, useEffect } from "react";
// import { Search, Calendar, ArrowLeft } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import { db } from "../firebase";

// const BlogPage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [blogs, setBlogs] = useState<any[]>([]);

//   // Fetch blogs from Firestore
//   useEffect(() => {
//     async function fetchBlogs() {
//       try {
//         const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
//         const snapshot = await getDocs(q);
//         setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     }
//     fetchBlogs();
//   }, []);

//   // Search filter
//   const filteredBlogs = blogs.filter(
//     (blog) =>
//       blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.author?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen pt-16 pb-20 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >
//           <button
//             onClick={() => navigate("/")}
//             className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             Back to Home
//           </button>
//           <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Blog Posts
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             In-depth articles, guides, and insights on AI and technology
//           </p>
//         </motion.div>

//         {/* Search Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mb-12"
//         >
//           <div className="relative max-w-2xl">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               placeholder="Search blog posts..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors"
//             />
//           </div>
//           {searchQuery && (
//             <p className="mt-4 text-gray-600 dark:text-gray-400">
//               Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? "s" : ""}
//             </p>
//           )}
//         </motion.div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredBlogs.map((blog, index) => (
//             <motion.div
//               key={blog.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//               onClick={() => navigate(`/blog/${blog.id}`)}
//             >
//               {/* Image placeholder */}
//               <div className="relative overflow-hidden aspect-video bg-gray-700 flex items-center justify-center text-gray-300">
//                 <span>No Image</span>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col">
//                 <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
//                   <Calendar size={16} className="flex-shrink-0" />
//                   <span className="truncate">
//                     {blog.createdAt?.toDate?.().toLocaleDateString() || "Unknown date"}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 line-clamp-3 break-words">
//                   {blog.content}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {filteredBlogs.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-20"
//           >
//             <p className="text-2xl text-gray-600 dark:text-gray-400">
//               No blog posts found matching your search.
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
import { useState, useEffect } from "react";
import { Search, Calendar, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<any[]>([]);

  // Fetch blogs from Firestore
  useEffect(() => {
    async function fetchBlogs() {
      try {
        // Try to fetch with orderBy first, but fallback to simple query if createdAt doesn't exist
        let snapshot;
        try {
          const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
          snapshot = await getDocs(q);
        } catch (orderError) {
          // If orderBy fails (e.g., no createdAt field or no index), fetch without ordering
          console.warn("Could not order by createdAt, fetching without order:", orderError);
          snapshot = await getDocs(collection(db, "blogs"));
        }
        
        const blogsData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "",
            content: data.content || "",
            author: data.author,
            image: data.image,
            category: data.category,
            createdAt: data.createdAt,
          };
        });
        
        // Sort manually if createdAt exists (fallback sorting)
        blogsData.sort((a, b) => {
          if (!a.createdAt && !b.createdAt) return 0;
          if (!a.createdAt) return 1;
          if (!b.createdAt) return -1;
          const aTime = a.createdAt?.toDate?.()?.getTime() || 0;
          const bTime = b.createdAt?.toDate?.()?.getTime() || 0;
          return bTime - aTime; // Descending order
        });
        
        setBlogs(blogsData);
        console.log("Fetched blogs:", blogsData.length);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  // Search filter
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            In-depth articles, guides, and insights on AI and technology
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          {searchQuery && (
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? "s" : ""}
            </p>
          )}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video bg-gray-700 flex items-center justify-center text-gray-300">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <Calendar size={16} className="flex-shrink-0" />
                  <span className="truncate">
                    {blog.createdAt?.toDate?.().toLocaleDateString() || "Unknown date"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 break-words">
                  {blog.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-600 dark:text-gray-400">
              No blog posts found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

