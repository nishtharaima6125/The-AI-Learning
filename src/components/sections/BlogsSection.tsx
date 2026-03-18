import { Calendar, ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

// Blog interface
interface Blog {
  id: string;
  title: string;
  content: string;
  author?: string;
  image?: string;
  category?: string;
  createdAt?: any;
}

const BlogsSection = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);

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
        
        const blogsData: Blog[] = snapshot.docs.map(doc => {
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
        
        // Limit to 4 most recent blogs for the homepage section
        setBlogs(blogsData.slice(0, 4));
        console.log("Fetched blogs for homepage:", blogsData.length);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            In-depth articles, guides, and insights on AI and technology
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-colors"
                onClick={() => navigate('/blogs')}
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogs.length === 0 ? (
            <div className="col-span-2 text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No blog posts available yet.</p>
            </div>
          ) : (
            blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300">
                    <span>No Image</span>
                  </div>
                )}
                {blog.category && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <Calendar size={16} className="flex-shrink-0" />
                  <span className="truncate">
                    {blog.createdAt?.toDate?.()?.toLocaleDateString() || "Unknown date"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 break-words">
                  {blog.content}
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-4 transition-all mt-auto">
                  <span className="whitespace-nowrap">Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </div>
            </motion.div>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/blogs')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
