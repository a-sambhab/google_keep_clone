import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Icon = {
    height:'30px',
    width:'30px',
    border:'none',
    fontSize:'30px', 
    backgroundColor:'rgb(255, 196, 0)', 
    color:'white', 
    borderRadius:'50%',
    marginLeft:'90%',
    marginBottom:'2%',
    // position:"relative",
    // // // top:'100%',
    // bottom:'-5%',
    // right:'-15%',
    cursor:'pointer'
}
const Note = (props) => {
    const deleteItem = () => {
        props.onDelete(props.id);
    }
    return(
        <>
            <div className="notediv" id={props.id} key={props.key}>
                <h2>{props.title}</h2>
                <p>{props.note}</p>
                <a rel="noreferrer" target="_blank" href={props.link} > {props.link} </a>
                <button style={Icon}><DeleteOutlineOutlinedIcon onClick={deleteItem} /></button>
            </div>
        </>
    );
}

export default Note;