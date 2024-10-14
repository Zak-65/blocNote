import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Edit({currentNote, editNote}){
    const navigate = useNavigate();
    if(Object.keys(currentNote).length == 0) {
        navigate("/")
    }
    const [title,setTitle] = useState(currentNote.title);
    const [content,setContent] = useState(currentNote.content);


    return(
        <main className="w-full max-w-lg mx-auto bg-[#FEF9D9] p-8 rounded-lg shadow-md border border-gray-300 mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit a Note</h2>
        
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    id="title"
                    value={title}
                    onChange={(event)=>setTitle(event.target.value)}
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter note title"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                    Content
                </label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(event)=>setContent(event.target.value)}
                    rows="6"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter note content"
                ></textarea>
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={()=>editNote(title,content)}
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                >
                    Edit
                </button>
            </div>
        </main>
    );
}