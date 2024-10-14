import {faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Icon from "../smallComponents/Icon";

export default function Card({note,deleteNote,fillCurrentNote}) {

    const truncateContent = (content) => {
        return content.length > 250 ? content.substring(0, 250) + '...' : content;
    };

    return(
        <div className="w-1/5 h-64 flex flex-col justify-between bg-[#FEF9D9] text-[#DEE5D4] rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 font-bold mb-3">{note.title}</h4>
                
                <p className="text-gray-800 text-sm">{truncateContent(note.content)}</p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800">
                    <p className="text-sm">dd-mm-yyyy</p>
                    <div className="flex gap-3">
                        <button onClick={function(){deleteNote(note.id)}}><Icon name={faTrash} className="text-red-600 hover:text-red-800" /></button>
                        <Link to="/edit" onClick={()=>fillCurrentNote(note)}><Icon name={faEdit} className="text-green-700 hover:text-green-800" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
