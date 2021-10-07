import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import { updateNote} from "../redux/actions/dataActions";


export default function AddNoteDialog({ openDialog, setOpenDialog, type, parent_id, note }) {
  const [noteContent, setNoteContent] = React.useState(note)
  const dispatch = useDispatch();
  const target = type.toLowerCase()+'s'

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  function handleUpdateNote(){
    handleClick();
    dispatch(updateNote(target, parent_id, noteContent));
}

  function handleDeleteNote(){
    handleClick();
    dispatch(updateNote(target, parent_id, null));
  }

  function handleKeyPress(e){
    if (e.key === 'Enter') {
      handleUpdateNote();
    }
  }

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClick} onKeyPress={(e)=> handleKeyPress(e)}>
        <DialogContent>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={15}
            placeholder="Note"
            style={{ width: 500 }}
            value = {noteContent? noteContent : ""}
            onChange={(e)=> setNoteContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {note? <Button onClick={handleDeleteNote} sx={{mr: '200px', color: "#c62828"}}><DeleteIcon/>Delete Note</Button>:null}
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleUpdateNote}>Save Note</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
