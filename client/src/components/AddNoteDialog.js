import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function AddNoteDialog({ openDialog, setOpenDialog }) {

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  function handleCreateNote(){
    handleClick();

    fetch('/folder_contents', { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        
      })
  })
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
