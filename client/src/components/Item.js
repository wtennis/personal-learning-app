
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Item({ folder }){
    return(
        <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                {folder.emoji}
            </ListItemIcon>
            <ListItemText primary={folder.name} /> 
        </ListItemButton>
    )
}

export default Item