import React, {useState, styled} from 'react';
// import Styled
// import Data,{setData} from './Data';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// import { display } from '@material-ui/system';

// const Icon = styled.div`
//     background-color:Green;
// `;

const Icon = {
    fontSize:'30px', 
    backgroundColor:'rgb(255, 196, 0)', 
    color:'white', 
    borderRadius:'50%',
    display:"relative",
    bottom:'0px',
    cursor:'pointer'
}

const CreateNote = () => {
    const [Data, setData] = useState([]);
    const [show, setshow] = useState(false);
    const [hide, setHide] = useState(true);
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const Change = () => {
        setshow(true);
        setHide(false);
    }
    const Revert = () => {
        setshow(false);
        setHide(true);
    }
    const getTitle = (event) => {
        setTitle(event.target.value);
    }
    const getNote = (event) => {
        setNote(event.target.value);
    }
    const sendData = () => {
        setData((oldData) => {
            return[...oldData, {title, note}];
        });
        setTitle("");
        setNote("");
    }
    const deleteIcon = (id) => {
        console.log('deleted');
        setData((oldItems) => {
          return oldItems.filter((arrayElem, index)=>{
            return index!==id;
          })
        })
      }
      
    return(
        <>
           {show && <div onDoubleClick={Revert} className="createnote">
                 <input id="notetitle" type="text" value={title} onChange={getTitle} placeholder="Title"/> 
                 <input id="noteinput" type="text" value={note} onChange={getNote} placeholder="Take a note"/> 
                 <button id="addicon"  onClick={sendData}> + </button> 
            </div>
           }
            {hide && <input className="hidecontent createnote" onClick={Change}  type="text" placeholder="Take a note"/>}
            <div className="notesec">
            {Data.map((props) => {
                const deleteItem = () => {
                    deleteIcon(props.id)
                }
                {/* const { titlecont, notecont} = item; */}
                return(
                    <>
                        <div className="notediv" id={props.index} key={props.index}>
                            <h2>{props.title}</h2>
                            <p>{props.note}</p>
                        <DeleteOutlineOutlinedIcon onClick={deleteItem} style={Icon}/>
                        </div>
                    </>
                );
            })}
            </div>
        </>
    );
}

export default CreateNote;