import Card from "../layout/Card";
export default function Main({notes,deleteNote,fillCurrentNote}){
    
    return(
        <main className="flex flex-wrap gap-10 justify-star p-24">
            {notes.map((item)=><Card note={item} key={item.id} deleteNote={deleteNote} fillCurrentNote={fillCurrentNote}  />)}
        </main>
    );
}