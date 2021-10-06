import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Checkbox from '@mui/material/Checkbox';
import EmojiSelect from './EmojiSelect';
import { createFolder, createResource } from "../redux/actions/dataActions";
import { useDispatch } from 'react-redux'


export default function AddNestedItemDialog({ parent_id, openDialog, setOpenDialog, type }) {
  const [isPublic, setIsPublic] = React.useState(false);
  const [emoji, setEmoji] = React.useState('📁');
  const [itemName, setItemName] = React.useState([]);
  const [url, setUrl] = React.useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpenDialog(!openDialog);
    setEmoji('📁');
  };

  function handleCreateFolder(){
    handleClick();
    dispatch(createFolder(itemName, emoji, isPublic, parent_id));
}

    function handleCreateResource(){
        handleClick();
        dispatch(createResource(itemName, emoji, url, parent_id));
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
            label= {`${type} Name`}
            fullWidth
            variant="standard"
          />
          <EmojiSelect emoji={emoji} setEmoji={setEmoji}/>
          {type === "Resource" ? 
                <TextField
                autoFocus
                margin="dense"
                id="name"
                value = {url}
                onChange={(e)=> setUrl(e.target.value)}
                label="URL"
                fullWidth
                variant="standard"
              />
            :
                <Checkbox
                checked={isPublic}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                label="public"
                />
        }
        {type === "resource" ? null : "public"}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={type === "Resource" ? handleCreateResource : handleCreateFolder}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
