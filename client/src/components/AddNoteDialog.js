import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import { createNote, updateNote } from "../redux/actions/noteActions";


export default function AddNoteDialog({ openDialog, setOpenDialog, type, note, parent_id }) {
  const [noteContent, setNoteContent] = React.useState(note? note.text : "")
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  function handleCreateNote(){
    handleClick();
    dispatch(createNote(noteContent, type, parent_id));
}

function handleUpdateNote(){
  handleClick();
  dispatch(updateNote(note.id, parent_id, noteContent));
}

function handleDeleteNote(){
  handleClick();
  if (!note){
    return
  };
  fetch(`/notes/${note.id}`, { method: "DELETE"})
    .then(res => res.json());
}

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClick}>
        <DialogContent>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={15}
            placeholder="Note"
            style={{ width: 500 }}
            value = {noteContent}
            onChange={(e)=> setNoteContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {noteContent.length>0? <Button onClick={handleDeleteNote} sx={{mr: '200px', color: "#c62828"}}><DeleteIcon/>Delete Note</Button>:null}
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={note? handleUpdateNote : handleCreateNote}>Save Note</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
