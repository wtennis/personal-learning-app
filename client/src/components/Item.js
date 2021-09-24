import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import EditMenu from './EditMenu';

function Item({ folder, paddingLeft }){
    const [editing, setEditing] = useState(false);

      function handleEdit() {
          console.log('edit click')
      }

    return(
        <ListItem sx={{ pl: paddingLeft }}>
            <EditMenu folder={folder}/>
            <Typography sx={{ pl: 2 }}noWrap> 
                {folder.name}
            </Typography> 
        </ListItem>
    )
}

export default Item