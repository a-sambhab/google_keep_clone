import React, {useState} from 'react';
import Header from './Header';
import './App.css';
import CreateNote from './CreateNote';
import Note from './Note';
const App = () => {
    const [note, setnote] = useState([])
    const addNote=(props)=>{
        // alert("I have been clicked");
        setnote((prevdata)=>{
            return[
                ...prevdata,
                props
            ]
        });
    }
    const deleteIcon = (id) => {
        console.log('deleted');
        setnote((oldItems) => {
            return oldItems.filter((arrayElem, index)=>{
              return index!==id;
            })
        })
    }
    return(
        <>
            <Header/>
            <CreateNote passNote={addNote}/>
            <div className="notesec">
            {note.map((val, index) => {
                return(
                <Note
                    key={index}
                    id={index}
                    title={val.title}
                    note={val.note}
                    link={val.link}
                    onDelete={deleteIcon}
                />
                );
            })}
            </div>
        </>
    );
};

export default App;