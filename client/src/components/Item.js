import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import EditMenu from './EditMenu';

function Item({ item, paddingLeft, reloadTrigger, setReloadTrigger}){
    const [editing, setEditing] = useState(false);

      function handleEdit() {
          console.log('edit click')
      }

    return(
        <ListItem sx={{ pl: paddingLeft }}>
            <EditMenu reloadTrigger={reloadTrigger} setReloadTrigger={setReloadTrigger} item={item}/>
            <Typography sx={{ pl: 2 }}noWrap> 
                {item.name}
            </Typography> 
        </ListItem>
    )
}

export default Item