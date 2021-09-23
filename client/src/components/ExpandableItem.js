import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function ExpandableItem({ folder }){
    const [open, setOpen] = useState(false);

    return (
        <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                    {folder.emoji}
                </ListItemIcon>
            <ListItemText primary={folder.name} /> 
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
    )
}

export default ExpandableItem