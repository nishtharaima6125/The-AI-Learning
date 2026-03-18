import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

function AddBlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        author: "Nishtha", // tum apna naam ya admin ka naam dal sakti ho
        createdAt: serverTimestamp(), // Firebase automatic current time set karega
      });
      setTitle("");
      setContent("");
      alert("Blog added successfully!");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded bg-gray-700 text-white"
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-3 rounded bg-gray-700 text-white"
      />
      <button type="submit" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
        Add Blog
      </button>
    </form>
  );
}

export default AddBlogForm;
