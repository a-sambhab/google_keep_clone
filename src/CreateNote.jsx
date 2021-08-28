import React, {useState} from 'react';




const CreateNote = (props) => {
    const [Data, setData] = useState({
        title: "",
        note: "",
        link: ""
    });
    const [show, setshow] = useState(false);
    const [hide, setHide] = useState(true);
    
    const Change = () => {
        setshow(true);
        setHide(false);
    }
    const Revert = () => {
        setshow(false);
        setHide(true);
    }
    const getNote = (event) => {
        const {name, value} = event.target
        setData((oldData)=>{
            return({
                ...oldData,
                [name] : value,
            })
        })
    }
    const addEvent = () => {
        props.passNote(Data);
        setData({
            title: "",
            note: "",
            link: ""
        });
    }
    
      
    return(
        <>
           {show && <div onDoubleClick={Revert} className="createnote">
                 <input id="notetitle" type="text" name="title" value={Data.title} onChange={getNote} placeholder="Title"/> 
                 <textarea id="noteinput" type="text" name="note" value={Data.note} onChange={getNote} placeholder="Take a note"/> 
                 <input id="notelink" type="text" name="link" value={Data.link} onChange={getNote} placeholder="Paste links"/> 
                 <button id="addicon"  onClick={addEvent}> + </button> 
            </div>
           }
            {hide && <input className="hidecontent createnote" onClick={Change}  type="text" placeholder="Take a note"/>}
            
        </>
    );
}

export default CreateNote;