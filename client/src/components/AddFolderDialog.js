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
import { createFolder } from "../redux/actions/dataActions";
import { useDispatch } from 'react-redux'



export default function AddFolderDialog() {
  const [open, setOpen] = React.useState(false);
  const [isPublic, setIsPublic] = React.useState(false);
  const [emoji, setEmoji] = React.useState('📁');
  const [folderName, setFolderName] = React.useState([]);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
    setEmoji('📁');
  };

  function handleCreate(){
    handleClick();
    dispatch(createFolder(folderName, emoji, isPublic, false));
  }

  const handleChange = (event) => {
    setIsPublic(event.target.checked);
  };

  function handleKeyPress(e){
    if (e.key === 'Enter') {
      handleCreate();
    }
  }

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClick}>
        <CreateNewFolderIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClick} onKeyPress={(e)=> handleKeyPress(e)}>
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
