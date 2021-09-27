import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Checkbox from '@mui/material/Checkbox';
import EmojiSelect from './EmojiSelect';



export default function AddNestedItemDialog({ item, openDialog, setOpenDialog }) {
  const [isPublic, setIsPublic] = React.useState(false);
  const [emoji, setEmoji] = React.useState('📁');
  const [itemName, setItemName] = React.useState([]);

  const handleClick = () => {
    setOpenDialog(!openDialog);
    setEmoji('📁');
  };

  function handleCreateFolder(){
    console.log(`Folder name: ${itemName}, emoji: ${emoji}, isPublic: ${isPublic}`)
    handleClick();

    fetch('/folder_contents', { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parent_id: item.id,
        name: itemName,
        emoji: emoji,
        is_public: isPublic
      })
  })
  .then(res => {
    res.json(); 
    });
}

  const handleChange = (event) => {
    setIsPublic(event.target.checked);
  };



  return (
    <div>
      <Dialog open={openDialog} onClose={handleClick}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {itemName}
            onChange={(e)=> setItemName(e.target.value)}
            label="Folder Name"
            fullWidth
            variant="standard"
          />
          <EmojiSelect emoji={emoji} setEmoji={setEmoji}/>
          <Checkbox
            checked={isPublic}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />public
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={handleCreateFolder}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
