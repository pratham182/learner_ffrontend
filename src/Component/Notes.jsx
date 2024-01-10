import React, { useState } from "react";
import { plus } from '@heroicons/react/outline';

const Notes = () => {
  //date 
  const [date, setDate] = useState(new Date());
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState(""); // title
  const [notes, setNotes] = useState([]);

  // actual content
  const [newNoteContent, setNewNoteContent] = useState("");
  const [notesContent, setNotesContent] = useState([]);
   
  //edit 
  const [edit,changeEdit]=useState("");
  const handleButtonClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleInputChangeTitle = (e) => {
    setNewNoteTitle(e.target.value);
  };

  const handleInputChangeContent = (e) => {
    setNewNoteContent(e.target.value);
  };

  //delete notes
  const delete_notes=(index)=>{
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    
    const updatedNotesContent = [...notesContent];
    updatedNotesContent.splice(index, 1);

    setNotes(updatedNotes);
    setNotesContent(updatedNotesContent);
  }

  const updateNote = (index) => {
    setIsInputVisible(true);
    changeEdit(index);
  
    // Use the current values from notes and notesContent arrays
    const updatedNote = notes[index];
    const updatedNotesContent = notesContent[index];
  
    setNewNoteTitle(updatedNote);
    setNewNoteContent(updatedNotesContent);
  };
  

  const handleSubmit = (e) => {
    if(newNoteTitle!="" && newNoteContent!=""){
      e.preventDefault();
      if (edit !== "") {
        //retrive the content
        const updatedNotes = [...notes];
        updatedNotes[parseInt(edit)] = newNoteTitle;
  
        const updatedNotesContent = [...notesContent];
        updatedNotesContent[parseInt(edit)] = newNoteContent;
  
        setNotes(updatedNotes);
        setNotesContent(updatedNotesContent);
        changeEdit(""); // change the state when its get change
        setIsInputVisible(false);
        setNewNoteTitle("");
    setNewNoteContent("");
      }else{
      
      
    setNotes([...notes, newNoteTitle]);
    setNotesContent([...notesContent, newNoteContent]);
    setNewNoteTitle("");
    setNewNoteContent("");
    setIsInputVisible(false);}}
    else{
      e.preventDefault();
      alert("Enter it correctlly");
      setIsInputVisible(true);
    }
    changeEdit("");
  };
  //close button
  const closeButtonClick=()=>{
    
    changeEdit("");
    setNewNoteTitle("");
    setNewNoteContent("");
    setIsInputVisible(false);
  }

  return (
    <>
      <div className="flex w-full text-end m-2">
        <div className="flex-1">
          <h4 className="sm:text-base md:text-lg lg:text-xl xl:text-2xl">My notes</h4>
        </div>
        <div className="flex-1 text-end mr-5">
        {!isInputVisible ? (
          <>
          <button onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            
          </button>
          </>):<>
          
          
          </>}
          
          {isInputVisible && (
            
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
              

              <form onSubmit={handleSubmit} className="p-4 bg-white grid gap-4">
                
                <div class="flex justify-between">
                <h3 class="text-center">Enter details</h3>
              <button class="cursor-pointer"  onClick={closeButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
          </button>
          </div>

                <input
                  type="text"
                  placeholder="Enter title..."
                  value={newNoteTitle}
                  onChange={handleInputChangeTitle}
                  className="p-2 border border-gray-300 w-full"
                  maxLength={10}
                />
                <textarea
                  placeholder="Enter the notes detail..."
                  value={newNoteContent}
                  onChange={handleInputChangeContent}
                  updateNote          className="p-2 border border-gray-300 h-40 w-full resize-none"
                  maxLength={10000}
                  minLength={50}
                />

                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit</button>
              </form>
              
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                  <div class="flex justify-between" id="icon">
                    <div className="text-gray-900 font-bold text-xl mb-2">{note}</div>
                    <div class="flex justify-between">
                      {/* Update icon */}
                    <button onClick={()=>{updateNote(index)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                       </svg>

                    </button>
                    {/* Delete icon */}

                    <button onClick={()=>{delete_notes(index)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                    </div>
                    

                    </div>
                    <p className="text-gray-700 text-base">{notesContent[index]}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-600">{date.toDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Notes;
