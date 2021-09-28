import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Checkbox from '@mui/material/Checkbox';
import EmojiSelect from './EmojiSelect';



export default function AddNestedItemDialog({ parent_id, openDialog, setOpenDialog, type }) {
  const [isPublic, setIsPublic] = React.useState(false);
  const [emoji, setEmoji] = React.useState('');
  const [itemName, setItemName] = React.useState([]);
  const [url, setUrl] = React.useState("");

  const handleClick = () => {
    setOpenDialog(!openDialog);
  };

  function handleCreateFolder(){
    handleClick();

    fetch('/folder_contents', { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type: type,
        parent_id: parent_id,
        name: itemName,
        emoji: emoji,
        is_public: isPublic
      })
  })
  .then(res => {
    res.json(); 
    });
}

    function handleCreateResource(){
        handleClick();

        fetch('/folder_contents', { 
        method: "POST", 
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: type,
            parent_id: parent_id,
            name: itemName,
            emoji: emoji,
            url: url
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
            label= {`${type} Name`}
            fullWidth
            variant="standard"
          />
          <EmojiSelect emoji={emoji} setEmoji={setEmoji}/>
          {type == "Resource" ? 
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
        {type == "Resource" ? null : "public"}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Cancel</Button>
          <Button onClick={type == "Resource" ? handleCreateResource : handleCreateFolder}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
