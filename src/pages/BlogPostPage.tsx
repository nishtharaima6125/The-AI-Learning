


// import { ArrowLeft, Calendar, Share2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// const BlogPostPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [blog, setBlog] = useState<any>(null);

//   useEffect(() => {
//     async function fetchBlog() {
//       if (!id) return;
//       try {
//         const docRef = doc(db, "blogs", id);
//         const snapshot = await getDoc(docRef);
//         if (snapshot.exists()) {
//           setBlog({ id: snapshot.id, ...snapshot.data() });
//         } else {
//           console.warn("Blog not found:", id);
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       }
//     }
//     fetchBlog();
//   }, [id]);

//   if (!blog) {
//     return <p className="text-gray-400 text-center mt-20">Loading blog...</p>;
//   }

//   return (
//     <div className="min-h-screen pt-16 pb-20 bg-white dark:bg-gray-900">
//       {/* Hero Image */}
//       <div className="relative h-96 overflow-hidden">
//         <img
//           src={blog.image || "https://via.placeholder.com/1200x600?text=No+Image"}
//           alt={blog.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="-mt-20 relative z-10 mb-8"
//         >
//           <button
//             onClick={() => navigate("/blogs")}
//             className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
//           >
//             <ArrowLeft size={20} />
//             Back to Blogs
//           </button>
//         </motion.div>

//         {/* Article Content */}
//         <motion.article
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 -mt-32 relative z-20"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             {blog.title}
//           </h1>

//           <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
//             <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//               <Calendar size={18} />
//               <span>
//                 {blog.createdAt?.toDate?.()?.toLocaleDateString() || "Unknown date"}
//               </span>
//               <span className="ml-4">By {blog.author || "Unknown"}</span>
//             </div>
//             <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//               <Share2 size={18} />
//               <span>Share</span>
//             </button>
//           </div>

//           <div className="prose prose-lg dark:prose-invert max-w-none">
//             <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
//               {blog.content}
//             </p>
//           </div>
//         </motion.article>
//       </div>
//     </div>
//   );
// };

// export default BlogPostPage;
// import { ArrowLeft, Calendar, Share2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";

// const BlogPostPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [blog, setBlog] = useState<any>(null);

//   useEffect(() => {
//     async function fetchBlog() {
//       if (!id) return;
//       try {
//         const docRef = doc(db, "blogs", id);
//         const snapshot = await getDoc(docRef);
//         if (snapshot.exists()) {
//           setBlog({ id: snapshot.id, ...snapshot.data() });
//         } else {
//           console.warn("Blog not found:", id);
//         }
//       } catch (error) {
//         console.error("Error fetching blog:", error);
//       }
//     }
//     fetchBlog();
//   }, [id]);

//   if (!blog) {
//     return <p className="text-gray-400 text-center mt-20">Loading blog...</p>;
//   }

//   return (
//     <div className="min-h-screen pt-16 pb-20 bg-white dark:bg-gray-900">
//       {/* Hero Image */}
//       <div className="relative h-96 overflow-hidden">
//         <img
//           src={blog.image || "https://via.placeholder.com/1200x600?text=No+Image"}
//           alt={blog.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="-mt-20 relative z-10 mb-8"
//         >
//           <button
//             onClick={() => navigate("/blogs")}
//             className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
//           >
//             <ArrowLeft size={20} />
//             Back to Blogs
//           </button>
//         </motion.div>

//         {/* Article Content */}
//         <motion.article
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 -mt-32 relative z-20"
//         >
//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             {blog.title}
//           </h1>

//           {/* Meta Info */}
//           <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
//             <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
//               <Calendar size={18} />
//               <span>
//                 {blog.createdAt?.toDate?.()?.toLocaleDateString() || "Unknown date"}
//               </span>
//               <span className="ml-4">By {blog.author || "Unknown"}</span>
//             </div>
//             <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//               <Share2 size={18} />
//               <span>Share</span>
//             </button>
//           </div>

//           {/* Article Body */}
//           <div className="prose prose-lg dark:prose-invert max-w-none">
//             <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
//               {blog.content}
//             </p>
//           </div>
//         </motion.article>
//       </div>
//     </div>
//   );
// };

// export default BlogPostPage;

import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, query, where, getDocs, limit, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { sanitizeRichTextHtml } from "../utils/sanitizeRichTextHtml";

// Define Blog interface
interface Blog {
  id: string;
  title: string;
  content: string;
  contentHtml?: string;
  author?: string;
  image?: string;
  category?: string;
  createdAt?: Timestamp;
}

const BlogPostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  // Fetch single blog + related blogs
  useEffect(() => {
    async function fetchBlog() {
      if (!id) return;
      try {
        const docRef = doc(db, "blogs", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          const blogData: Blog = {
            id: snapshot.id,
            title: data.title || "",
            content: data.content || "",
            contentHtml: data.contentHtml || "",
            author: data.author,
            image: data.image,
            category: data.category,
            createdAt: data.createdAt,
          };
          setBlog(blogData);

          // Fetch related blogs (same category, excluding current blog)
          if (blogData.category) {
            const q = query(
              collection(db, "blogs"),
              where("category", "==", blogData.category),
              limit(4) // Fetch 4 to account for excluding current blog
            );
            const relatedSnap = await getDocs(q);
            const relatedBlogsData: Blog[] = relatedSnap.docs
              .filter(d => d.id !== blogData.id)
              .slice(0, 3) // Ensure we only get 3 related blogs
              .map(d => {
                const relatedData = d.data();
                return {
                  id: d.id,
                  title: relatedData.title || "",
                  content: relatedData.content || "",
                  contentHtml: relatedData.contentHtml || "",
                  author: relatedData.author,
                  image: relatedData.image,
                  category: relatedData.category,
                  createdAt: relatedData.createdAt,
                } as Blog;
              });
            setRelatedBlogs(relatedBlogsData);
          }
        } else {
          console.warn("Blog not found:", id);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-gray-400 text-center mt-20">Loading blog...</p>;
  }

  return (
    <div className="min-h-screen pt-16 pb-20 bg-white dark:bg-gray-900">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={blog.image || "https://via.placeholder.com/1200x600?text=No+Image"}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="-mt-20 relative z-10 mb-8"
        >
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </button>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 -mt-32 relative z-20"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={18} />
              <span>
                {blog.createdAt?.toDate?.()?.toLocaleDateString() || "Unknown date"}
              </span>
              <span className="ml-4">By {blog.author || "Unknown"}</span>
            </div>
            <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blog.contentHtml ? (
              <div
                className="ql-editor text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: sanitizeRichTextHtml(blog.contentHtml),
                }}
              />
            ) : (
              <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                {blog.content}
              </p>
            )}
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((related) => (
                <div
                  key={related.id}
                  onClick={() => navigate(`/blog/${related.id}`)}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={related.image || "https://via.placeholder.com/800x400?text=No+Image"}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
                      <Calendar size={16} />
                      <span>
                        {related.createdAt?.toDate?.()?.toLocaleDateString() || "Unknown date"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;
