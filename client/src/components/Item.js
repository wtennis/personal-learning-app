import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import EditMenu from './EditMenu';

function Item({ item, paddingLeft }){
    const [editing, setEditing] = useState(false);

      function handleEdit() {
          console.log('edit click')
      }

    return(
        <ListItem sx={{ pl: paddingLeft }}>
            <EditMenu item={item}/>
            <Typography sx={{ pl: 2 }}noWrap> 
                {item.name}
            </Typography> 
        </ListItem>
    )
}

export default Item