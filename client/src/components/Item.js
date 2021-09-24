
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';

function Item({ folder, paddingLeft }){
    const [editing, setEditing] = useState(false);

      function handleEdit() {
          console.log('edit click')
      }

    return(
        <ListItem sx={{ pl: paddingLeft }}>
                    <IconButton onMouseOver={() => setEditing(true)} 
                                onMouseLeave={() => setEditing(false)}
                                onClick={handleEdit}
                                >
                        {editing? <MoreVertIcon/> : folder.emoji}
                    </IconButton>
                <Typography sx={{ pl: 2 }}noWrap> 
                    {folder.name}
                </Typography> 
        </ListItem>
    )
}

export default Item