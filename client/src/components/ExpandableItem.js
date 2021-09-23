import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LernList from './LernList';
import Collapse from '@mui/material/Collapse';

function ExpandableItem({ folder }){
    const [open, setOpen] = useState(false);
    const [contents, setContents] = useState(null);


    useEffect(() => {
        fetch(`/folder_contents/${folder.id}`)
        .then(r=> {
        if (r.ok){
            r.json().then((res) => {
            setContents(res);
            console.log(res);
            });
        };
        });
      }, [folder.id])

      const handleClick = () => {
        setOpen(!open);
      };

    return (
        <>
        <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
                <ListItemIcon>
                    {folder.emoji}
                </ListItemIcon>
            <ListItemText primary={folder.name} /> 
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <LernList contents={contents}/>
        </Collapse>
        </>
    )
}

export default ExpandableItem