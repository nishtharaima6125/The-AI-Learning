// import { useEffect, useState } from "react";
// import { collection, getDocs, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../../firebase";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// function AdminDashboard() {
//   const [contacts, setContacts] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 10;

//   // Blog form states
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [imageFile, setImageFile] = useState<File | null>(null);

//   const storage = getStorage();

//   // Fetch contacts
//   useEffect(() => {
//     async function fetchContacts() {
//       try {
//         const snapshot = await getDocs(collection(db, "contacts"));
//         setContacts(snapshot.docs.map(doc => ({ ...doc.data(), ref: doc.ref })));
//       } catch (error) {
//         console.error("Error fetching contacts:", error);
//       }
//     }
//     fetchContacts();
//   }, []);

//   // Delete contact
//   async function handleDelete(ref: any) {
//     try {
//       await deleteDoc(ref);
//       setContacts(prev => prev.filter(contact => contact.ref !== ref));
//     } catch (error) {
//       console.error("Error deleting contact:", error);
//     }
//   }

//   // Add Blog
//   async function handleAddBlog(e: React.FormEvent) {
//     e.preventDefault();
//     try {
//       let imageUrl = "";
//       if (imageFile) {
//         const imageRef = ref(storage, `blogImages/${Date.now()}-${imageFile.name}`);
//         await uploadBytes(imageRef, imageFile);
//         imageUrl = await getDownloadURL(imageRef);
//       }

//       await addDoc(collection(db, "blogs"), {
//         title,
//         content,
//         author: "Nishtha",
//         createdAt: serverTimestamp(),
//         image: imageUrl,
//       });

//       setTitle("");
//       setContent("");
//       setImageFile(null);
//       alert("Blog added successfully!");
//     } catch (error) {
//       console.error("Error adding blog:", error);
//     }
//   }

//   // Search filter
//   const filteredContacts = contacts.filter(contact =>
//     contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const startIndex = (currentPage - 1) * pageSize;
//   const paginatedContacts = filteredContacts.slice(startIndex, startIndex + pageSize);
//   const totalPages = Math.ceil(filteredContacts.length / pageSize);

//   return (
//     <section className="py-24 mt-20 relative bg-gray-900 min-h-screen">
//       <div className="overflow-x-auto p-6 max-w-7xl mx-auto">

//         {/* CONTACT SUBMISSIONS */}
//         <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
//           Contact Submissions
//         </h2>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search by name, email, or message..."
//           className="mb-6 p-3 w-full rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             setCurrentPage(1);
//           }}
//         />

//         {paginatedContacts.length === 0 ? (
//           <p className="text-gray-400 text-center">No submissions found.</p>
//         ) : (
//           <>
//             <table className="min-w-full border border-gray-700 rounded-lg">
//               <thead className="bg-gray-800 text-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-left">Name</th>
//                   <th className="px-4 py-2 text-left">Email</th>
//                   <th className="px-4 py-2 text-left">Message</th>
//                   <th className="px-4 py-2 text-left">Date</th>
//                   <th className="px-4 py-2 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedContacts.map(contact => (
//                   <tr key={contact.ref.id} className="border-t border-gray-700 hover:bg-gray-800">
//                     <td className="px-4 py-2 text-gray-100">{contact.name}</td>
//                     <td className="px-4 py-2 text-gray-100">{contact.email}</td>
//                     <td className="px-4 py-2 text-gray-100">{contact.message}</td>
//                     <td className="px-4 py-2 text-gray-400">
//                       {contact.createdAt?.toDate?.().toLocaleString()}
//                     </td>
//                     <td className="px-4 py-2">
//                       <button
//                         onClick={() => handleDelete(contact.ref)}
//                         className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Pagination */}
//             <div className="flex justify-center mt-6 space-x-4">
//               <button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               <span className="text-gray-300">
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}

//         {/* ADD BLOG SECTION */}
//         <h2 className="text-3xl font-bold mt-16 mb-8 text-center text-gray-100">
//           Add New Blog
//         </h2>

//         <form onSubmit={handleAddBlog} className="space-y-4 bg-gray-800 p-6 rounded-lg">
//           <input
//             type="text"
//             placeholder="Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-3 rounded bg-gray-700 text-white"
//           />

//           <textarea
//             placeholder="Blog Content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-3 rounded bg-gray-700 text-white"
//           />

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files?.[0] || null)}
//             className="w-full p-3 rounded bg-gray-700 text-white"
//           />

//           <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
//             Add Blog
//           </button>
//         </form>

//       </div>
//     </section>
//   );
// }

// export default AdminDashboard;
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, addDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import QuillBlogEditor from "../editor/QuillBlogEditor";

function AdminDashboard() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Blog form states
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [blogs, setBlogs] = useState<any[]>([]);

  // Prompt form states
  const [prompts, setPrompts] = useState<any[]>([]);
  const [promptText, setPromptText] = useState("");
  const [promptTitle, setPromptTitle] = useState("");
  const [promptCategory, setPromptCategory] = useState("General");
  const [promptImageFile, setPromptImageFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch contacts
  useEffect(() => {
    async function fetchContacts() {
      try {
        const snapshot = await getDocs(collection(db, "contacts"));
        setContacts(snapshot.docs.map(doc => ({ ...doc.data(), ref: doc.ref })));
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, []);

  // Fetch blogs
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));
        setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), ref: doc.ref })));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  // Fetch prompts
  useEffect(() => {
    async function fetchPrompts() {
      try {
        const snapshot = await getDocs(collection(db, "prompts"));
        setPrompts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), ref: doc.ref })));
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    }
    fetchPrompts();
  }, []);

  // Delete blog
  async function handleDeleteBlog(blogId: string, blogRef: any) {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      await deleteDoc(blogRef);
      setBlogs(prev => prev.filter(blog => blog.id !== blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  }

  // Delete contact
  async function handleDelete(ref: any) {
    try {
      await deleteDoc(ref);
      setContacts(prev => prev.filter(contact => contact.ref !== ref));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }

  // Add Blog
  async function handleAddBlog(e: React.FormEvent) {
    e.preventDefault();
    if (isAddingBlog) return;

    setIsAddingBlog(true);
    try {
      const plain =
        content.trim() ||
        contentHtml
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      if (!title.trim()) throw new Error("Please enter a blog title.");
      if (!plain) throw new Error("Please write some blog content.");

      let imageUrl = "";
      if (imageFile) {
        // Validate image
        if (!imageFile.type.startsWith("image/")) {
          throw new Error("Please select an image file (PNG, JPG, etc.)");
        }
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (imageFile.size > maxSize) {
          throw new Error("Image must be under 10MB");
        }

        const sanitizedFileName = imageFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const imageRef = ref(storage, `blogImages/${Date.now()}-${sanitizedFileName}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "blogs"), {
        title,
        content: plain,
        contentHtml,
        author: "Nishtha",
        createdAt: serverTimestamp(),
        image: imageUrl,
      });

      // Reset form
      setTitle("");
      setContent("");
      setContentHtml("");
      setImageFile(null);
      alert("Blog added successfully!");

      // Refresh blogs list
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      setBlogs(blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), ref: doc.ref })));
    } catch (error: any) {
      console.error("Error adding blog:", error);
      const msg = error?.message || String(error);
      const isCorsOrNetwork = msg.includes("CORS") || msg.includes("Failed to fetch") || msg.includes("network");
      alert(
        isCorsOrNetwork
          ? "Image upload failed (CORS/network). See FIREBASE-STORAGE-CORS-SETUP.md to fix."
          : msg
      );
    } finally {
      setIsAddingBlog(false);
    }
  }

  // Handle prompt image preview
  const handlePromptImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert("Please select an image file!");
        e.target.value = ''; // Reset input
        return;
      }
      
      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        alert("Image size should be less than 10MB!");
        e.target.value = ''; // Reset input
        return;
      }
      
      console.log("Image file selected:", file.name, file.size, file.type);
      setPromptImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        console.log("Preview image created");
      };
      reader.onerror = () => {
        console.error("Error reading file for preview");
        alert("Error reading image file!");
      };
      reader.readAsDataURL(file);
    } else {
      console.log("No file selected");
      setPromptImageFile(null);
      setPreviewImage(null);
    }
  };

  // Add Prompt
  async function handleAddPrompt(e: React.FormEvent) {
    e.preventDefault();
    if (!promptText.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setIsUploading(true);

    try {
      let imageUrl = "";
      
      // Upload image if file is selected
      if (promptImageFile) {
        console.log("=== STARTING IMAGE UPLOAD ===");
        console.log("File name:", promptImageFile.name);
        console.log("File size:", (promptImageFile.size / 1024 / 1024).toFixed(2), "MB");
        console.log("File type:", promptImageFile.type);
        
        // Verify storage is initialized
        if (!storage) {
          throw new Error("Firebase Storage is not initialized. Check firebase.ts");
        }

        const maxSize = 10 * 1024 * 1024; // 10MB
        if (promptImageFile.size > maxSize) {
          throw new Error(`File size (${(promptImageFile.size / 1024 / 1024).toFixed(2)}MB) exceeds maximum allowed size of 10MB`);
        }
        
        // Sanitize filename
        const sanitizedFileName = promptImageFile.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const imagePath = `promptImages/${Date.now()}-${sanitizedFileName}`;
        console.log("Image path:", imagePath);
        
        const imageRef = ref(storage, imagePath);
        console.log("Storage bucket:", imageRef.bucket);
        console.log("Full path:", imageRef.fullPath);
        
        // Upload the file
        console.log("Starting upload...");
        console.log("Upload URL will be:", `https://firebasestorage.googleapis.com/v0/b/${imageRef.bucket}/o/${encodeURIComponent(imageRef.fullPath)}`);
        
        try {
          const uploadResult = await uploadBytes(imageRef, promptImageFile);
          console.log("✅ Upload complete:", uploadResult);
        
          if (!uploadResult || !uploadResult.ref) {
            throw new Error("Upload completed but no reference returned");
          }
          
          // Get download URL
          console.log("Getting download URL...");
          imageUrl = await getDownloadURL(uploadResult.ref);
          console.log("✅ Download URL:", imageUrl);
          
          if (!imageUrl || imageUrl.trim() === '') {
            throw new Error("Failed to get download URL");
          }
          
          console.log("=== IMAGE UPLOAD SUCCESS ===");
        } catch (uploadErr: any) {
          // Re-throw to be caught by outer catch block
          console.error("Upload error caught:", uploadErr);
          throw uploadErr;
        }
      } else {
        console.log("No image file selected, skipping upload");
      }

      // Save prompt to Firestore
      console.log("Saving prompt to Firestore...");
      const promptData = {
        prompt: promptText,
        title: promptTitle || undefined,
        category: promptCategory,
        image: imageUrl || undefined,
        createdAt: serverTimestamp(),
      };
      
      const docRef = await addDoc(collection(db, "prompts"), promptData);
      console.log("✅ Prompt saved with ID:", docRef.id);

      // Reset form
      setPromptText("");
      setPromptTitle("");
      setPromptCategory("General");
      setPromptImageFile(null);
      setPreviewImage(null);
      
      // Refresh prompts list
      const snapshot = await getDocs(collection(db, "prompts"));
      setPrompts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), ref: doc.ref })));

      setIsUploading(false);
      alert(`✅ Prompt added successfully!${imageUrl ? "\n✅ Image uploaded successfully." : ""}`);
      
    } catch (uploadError: any) {
      setIsUploading(false);
      
      console.error("=== UPLOAD ERROR ===");
      console.error("Error:", uploadError);
      console.error("Error code:", uploadError.code);
      console.error("Error message:", uploadError.message);
      
      let errorMessage = "❌ Error adding prompt.\n\n";
      
      // Check for CORS/preflight errors
      const errorMsg = uploadError.message?.toLowerCase() || '';
      const errorCode = uploadError.code || '';
      
      if (errorMsg.includes('preflight') || errorMsg.includes('cors') || errorMsg.includes('cross-origin')) {
        errorMessage += "🚨 CORS/Preflight Error Detected!\n\n";
        errorMessage += "This is usually caused by Firebase Storage Rules blocking the request.\n\n";
        errorMessage += "SOLUTION:\n";
        errorMessage += "1. Go to Firebase Console → Storage → Rules\n";
        errorMessage += "2. Replace rules with:\n\n";
        errorMessage += "rules_version = '2';\n";
        errorMessage += "service firebase.storage {\n";
        errorMessage += "  match /b/{bucket}/o {\n";
        errorMessage += "    match /{allPaths=**} {\n";
        errorMessage += "      allow read, write: if true;\n";
        errorMessage += "    }\n";
        errorMessage += "  }\n";
        errorMessage += "}\n\n";
        errorMessage += "3. Click 'Publish'\n";
        errorMessage += "4. Wait 1-2 minutes for rules to propagate\n";
        errorMessage += "5. Try uploading again";
      } else if (errorCode === 'storage/unauthorized' || errorCode === 'storage/permission-denied') {
        errorMessage += "🚨 Firebase Storage Rules Issue!\n\n";
        errorMessage += "Go to Firebase Console → Storage → Rules\n";
        errorMessage += "Update rules to allow uploads:\n\n";
        errorMessage += "rules_version = '2';\n";
        errorMessage += "service firebase.storage {\n";
        errorMessage += "  match /b/{bucket}/o {\n";
        errorMessage += "    match /{allPaths=**} {\n";
        errorMessage += "      allow read, write: if true;\n";
        errorMessage += "    }\n";
        errorMessage += "  }\n";
        errorMessage += "}\n\n";
        errorMessage += "Then click 'Publish' and try again.";
      } else if (errorCode === 'storage/quota-exceeded') {
        errorMessage += "Storage quota exceeded. Please upgrade your Firebase plan.";
      } else if (errorCode === 'storage/unauthenticated') {
        errorMessage += "Authentication required. Check Firebase configuration.";
      } else if (errorMsg.includes('timeout') || errorMsg.includes('network')) {
        errorMessage += "Network/Timeout Error.\n\n";
        errorMessage += "Check:\n";
        errorMessage += "1. Internet connection\n";
        errorMessage += "2. Firebase Storage is enabled in Firebase Console\n";
        errorMessage += "3. No firewall/proxy blocking Firebase\n";
        errorMessage += "4. Try a smaller image file";
      } else {
        errorMessage += `Error: ${uploadError.message || uploadError.code || "Unknown error"}\n\n`;
        errorMessage += "Common fixes:\n";
        errorMessage += "1. Check Firebase Storage Rules (most common)\n";
        errorMessage += "2. Verify Firebase Storage is enabled\n";
        errorMessage += "3. Check browser console (F12) for details\n";
        errorMessage += "4. Try a different image file";
      }
      
      alert(errorMessage);
    }
  }

  // Delete Prompt
  async function handleDeletePrompt(promptRef: any, promptId: string) {
    if (!confirm("Are you sure you want to delete this prompt?")) return;
    try {
      await deleteDoc(promptRef);
      setPrompts(prev => prev.filter(prompt => prompt.id !== promptId));
      alert("Prompt deleted successfully!");
    } catch (error) {
      console.error("Error deleting prompt:", error);
      alert("Error deleting prompt. Please try again.");
    }
  }

  // Search filter
  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedContacts = filteredContacts.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredContacts.length / pageSize);

  return (
    <section className="py-24 mt-20 relative bg-gray-900 min-h-screen">
      <div className="overflow-x-auto p-6 max-w-7xl mx-auto">

        {/* CONTACT SUBMISSIONS */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Contact Submissions
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          className="mb-6 p-3 w-full rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        {paginatedContacts.length === 0 ? (
          <p className="text-gray-400 text-center">No submissions found.</p>
        ) : (
          <>
            <table className="min-w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Message</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedContacts.map(contact => (
                  <tr key={contact.ref.id} className="border-t border-gray-700 hover:bg-gray-800">
                    <td className="px-4 py-2 text-gray-100">{contact.name}</td>
                    <td className="px-4 py-2 text-gray-100">{contact.email}</td>
                    <td className="px-4 py-2 text-gray-100">{contact.message}</td>
                    <td className="px-4 py-2 text-gray-400">
                      {contact.createdAt?.toDate?.().toLocaleString()}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(contact.ref)}
                        className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* BLOG LIST SECTION */}
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center text-gray-100">
          Existing Blogs
        </h2>

        {blogs.length === 0 ? (
          <div className="bg-gray-800 p-6 rounded-lg text-center text-gray-400">
            No blogs found. Add your first blog above!
          </div>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      Author: {blog.author || 'Unknown'} | 
                      Created: {blog.createdAt ? new Date(blog.createdAt.toDate()).toLocaleDateString() : 'Unknown date'}
                    </p>
                    <p className="text-gray-300 line-clamp-3">
                      {blog.content || blog.contentHtml?.replace(/<[^>]*>/g, '').substring(0, 200) || 'No content preview'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteBlog(blog.id, blog.ref)}
                    className="ml-4 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                    title="Delete blog"
                  >
                    Delete
                  </button>
                </div>
                {blog.image && (
                  <div className="mt-4">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ADD BLOG SECTION */}
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center text-gray-100">
          Add New Blog
        </h2>

        <form onSubmit={handleAddBlog} className="space-y-4 bg-gray-800 p-6 rounded-lg">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />

          <QuillBlogEditor
            valueHtml={contentHtml}
            onChangeHtml={(html) => {
              setContentHtml(html);
              const plain = html
                .replace(/<[^>]*>/g, " ")
                .replace(/\s+/g, " ")
                .trim();
              setContent(plain);
            }}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full p-3 rounded bg-gray-700 text-white"
          />

          <button
            type="submit"
            disabled={isAddingBlog}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAddingBlog ? "Adding..." : "Add Blog"}
          </button>
        </form>

        {/* PROMPTS SECTION */}
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center text-gray-100">
          Manage Prompts
        </h2>

        {/* Add Prompt Form */}
        <form onSubmit={handleAddPrompt} className="space-y-4 bg-gray-800 p-6 rounded-lg mb-8">
          <div>
            <label className="block text-gray-200 mb-2">Prompt Title (Optional)</label>
            <input
              type="text"
              placeholder="Enter prompt title..."
              value={promptTitle}
              onChange={(e) => setPromptTitle(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Category</label>
            <select
              value={promptCategory}
              onChange={(e) => setPromptCategory(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white"
            >
              <option value="Luxury and Lifestyle">Luxury and Lifestyle</option>
              <option value="AI Influencer">AI Influencer</option>
              <option value="Thumbnail">Thumbnail</option>
              <option value="AD Creative">AD Creative</option>
              <option value="Buisness and Corporate">Buisness and Corporate</option>
            </select>
          </div>
          {/* 'AI Influencer': 'from-cyan-500 to-teal-500',
      'Luxury and Lifestyle': 'from-teal-500 to-emerald-500',
      'Thumbnail': 'from-blue-500 to-cyan-500',
      'AD Creative': 'from-purple-500 to-pink-500',
      'Buisness and Corporate': 'from-blue-500 to-cyan-500', */}
          <div>
            <label className="block text-gray-200 mb-2">Prompt Text</label>
            <textarea
              placeholder="Enter your prompt here..."
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white min-h-[100px]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePromptImageChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
            {previewImage && (
              <div className="mt-4">
                <p className="text-gray-200 mb-2">Image Preview:</p>
                <div className="relative max-w-2xl">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-auto rounded-lg border-2 border-gray-600 max-h-[600px] object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button 
              type="submit" 
              disabled={isUploading}
              className={`px-4 py-2 rounded transition flex-1 ${
                isUploading 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isUploading ? 'Uploading...' : 'Add Prompt'}
            </button>
            {isUploading && (
              <button
                type="button"
                onClick={() => {
                  setIsUploading(false);
                  alert("Upload cancelled. Please try again.");
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Cancel
              </button>
            )}
          </div>
          {isUploading && (
            <div className="mt-2">
              <p className="text-yellow-400 text-sm">
                ⏳ Uploading image and saving prompt. Please wait...
              </p>
              <p className="text-gray-400 text-xs mt-1">
                If this takes too long, check browser console (F12) for errors or click Cancel.
              </p>
            </div>
          )}
        </form>

        {/* Display Prompts */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-100">
            Existing Prompts ({prompts.length})
          </h3>
          
          {prompts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No prompts added yet.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {prompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-200 text-sm">
                        Created: {prompt.createdAt?.toDate?.()?.toLocaleString() || "Unknown"}
                      </p>
                      {prompt.category && (
                        <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                          {prompt.category}
                        </span>
                      )}
                    </div>
                    {prompt.title && (
                      <h4 className="text-gray-100 text-xl font-bold mb-2 break-words">
                        {prompt.title}
                      </h4>
                    )}
                    <p className="text-gray-100 text-lg font-semibold mb-4 break-words">
                      {prompt.prompt}
                    </p>
                  </div>
                  
                  {prompt.image && (
                    <div className="mb-4">
                      <p className="text-gray-200 text-sm mb-2">Image:</p>
                      <div className="relative w-full">
                        <img
                          src={prompt.image}
                          alt="Prompt image"
                          className="w-full h-auto rounded-lg border-2 border-gray-600 max-h-[500px] object-contain bg-gray-900"
                        />
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleDeletePrompt(prompt.ref, prompt.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition w-full"
                  >
                    Delete Prompt
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;
