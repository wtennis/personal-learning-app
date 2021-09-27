import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import EmojiSelect from './EmojiSelect';



export default function AddFolderDialog({ reloadTrigger, setReloadTrigger }) {
  const [open, setOpen] = React.useState(false);
  const [isPublic, setIsPublic] = React.useState(false);
  const [emoji, setEmoji] = React.useState('📁');
  const [folderName, setFolderName] = React.useState([]);

  const handleClick = () => {
    setOpen(!open);
    setEmoji('📁');
  };

  function handleCreate(){
    console.log(`Folder name: ${folderName}, emoji: ${emoji}, isPublic: ${isPublic}`)
    handleClick();

    fetch('/folders', { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: folderName,
        emoji: emoji,
        is_public: isPublic
      })
  })
  .then(res => {
    res.json()
    setReloadTrigger(!reloadTrigger);
  });
  }

  const handleChange = (event) => {
    setIsPublic(event.target.checked);
  };



  return (
    <div>
      <IconButton variant="outlined" onClick={handleClick}>
        <CreateNewFolderIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClick}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value = {folderName}
            onChange={(e)=> setFolderName(e.target.value)}
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
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
