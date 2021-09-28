import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function AddNoteDialog({ openDialog, setOpenDialog, type }) {
  const [noteContent, setNoteContent] = React.useState("")

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  function handleCreateNote(){
    handleClick();
    console.log(noteContent)
    console.log(type)
  //   fetch('/notes', { 
  //     method: "POST", 
  //     headers: { 
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       text: noteContent,
  //       type: type
  //     })
  // })
  // .then(res => {
  //   res.json(); 
  //   });
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
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleCreateNote}>Add Note</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
