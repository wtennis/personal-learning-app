import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import EditMenu from './EditMenu';
import Button from '@mui/material/Button';

function Item({ item, paddingLeft }){
    const [editing, setEditing] = useState(false);

      function handleEdit() {
          console.log('edit click')
      }

    return(
        <ListItem sx={{ pl: paddingLeft }}>
            <EditMenu item={item}/>
            {item.url? 
                <Button target="_blank" 
                        href={item.url}
                        style={{textTransform: 'lowercase'}}
                        >
                    <Typography sx={{ pl: 2 }} noWrap> 
                        {item.name}
                    </Typography> 
                </Button>
            : 
                <Typography sx={{ pl: 2 }} noWrap> 
                    {item.name}
                </Typography> 
            }
        </ListItem>
    )
}

export default Item