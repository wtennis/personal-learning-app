
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'

function Item({ folder, paddingLeft }){

    return(
        <ListItemButton sx={{ pl: paddingLeft }}>
            <ListItemIcon>
                {folder.emoji}
            </ListItemIcon>
            <Typography noWrap> 
            {folder.name}
            </Typography>
        </ListItemButton>
    )
}

export default Item