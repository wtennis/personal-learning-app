import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddNoteDialog({ openDialog, setOpenDialog, type, note, parent_id}) {
  const [noteContent, setNoteContent] = React.useState(note? note.text : "")

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  function handleCreateNote(){
    handleClick();
    console.log(type)
    console.log(note)
    fetch(`/notes`, { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: noteContent,
        belongsable_type: type,
        belongsable_id: parent_id
      })
  })
  .then(res => {
    res.json(); 
    });
}

function handleUpdateNote(){
  handleClick();
  console.log('update clicked')
  fetch(`/notes/${note.id}`, { 
    method: "PATCH", 
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: noteContent,
    })
})
.then(res => {
  res.json(); 
  });
}

function handleDeleteNote(){
  handleClick();
  if (!note){
    return
  };
  fetch(`/notes/${note.id}`, { method: "DELETE"})
    .then(res => {
    res.json(); 
    });
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
