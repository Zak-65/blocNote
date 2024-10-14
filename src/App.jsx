import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/pages/Main"
import Edit from "./components/pages/Edit";
import Add from "./components/pages/Add";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function App(){

  const [currentNote,setCurrentNote] = useState({})

  const navigate = useNavigate();

  const [notes,setNotes] = useState([
    {
        id: 1,
        title: "Shopping List",
        content: `I need to pick up groceries after work.
                    Don't forget to get almond milk instead of regular.
                    Check if we still have enough cereal at home.
                    Get some fresh fruits like apples and bananas.
                    Also, buy whole wheat bread for the sandwiches.`
    },
    {
        id: 2,
        title: "Homework",
        content: `Finish the math assignment before tomorrow's class.
                    Go through the history chapter and take notes.
                    Practice the science experiment for lab day.
                    Write the first draft of the English essay on Shakespeare.
                    Review Spanish vocabulary for the quiz on Friday.`
    },
    {
        id: 3,
        title: "Meeting Notes",
        content: `The client requested a new feature in the app.
                    We need to finalize the project timeline by next week.
                    Budget adjustments are required for the new tools.
                    The design team will present their drafts on Monday.
                    Next meeting is scheduled for the 22nd at 10 AM.`
    },
    {
        id: 4,
        title: "Workout Routine",
        content: `Start with a 10-minute warm-up on the treadmill.
                    Do three sets of squats with increasing weights.
                    Focus on upper body exercises like push-ups and pull-ups.
                    Finish the workout with a 15-minute cardio session.
                    End with stretching to improve flexibility.`
    },
    {
        id: 5,
        title: "Book Recommendations",
        content: `I just finished reading 'Atomic Habits' and it was amazing.
                    Next, I want to start 'Sapiens' by Yuval Noah Harari.
                    Heard great things about 'The Alchemist'—adding it to the list.
                    I should also read more about productivity, like 'Deep Work.'
                    Don't forget to write down notes as I read.`
    }
])

function deleteNote(id){
    setNotes(notes.filter((item)=>item.id !== id ))
}

function addNote(title,content){
  setNotes([...notes,{id: Math.max(...notes.map(item => item.id)) + 1,title,content}])
  navigate('/')
}

function fillCurrentNote (note){
  setCurrentNote(note)
}

function editNote(title, content) {
  setNotes(
      notes.map(item => 
          item.id === currentNote.id 
              ? { ...item, title: title, content: content } 
              : item
      )
  );
  setCurrentNote({}); 
  navigate('/'); 
}



  const location = useLocation()
  let main;
  if(location.pathname === "/"){
    main = <Main notes={notes} deleteNote={deleteNote} fillCurrentNote={fillCurrentNote}  />
  }else if(location.pathname === "/add"){
    main = <Add addNote={addNote} />
  }else if(location.pathname === "/edit"){
    main = <Edit currentNote={currentNote} editNote={editNote} />
  }else{
    main = <Notfound/>
  }
  return (
    <>
      <Header/>
      {main}
      <Footer/>
    </>
  );
}