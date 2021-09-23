import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LernList from './LernList';
import Collapse from '@mui/material/Collapse';

function ExpandableItem({ folder, paddingLeft }){
    const [open, setOpen] = useState(false);
    const [contents, setContents] = useState(null);
    const [padding, setPadding] = useState(paddingLeft + 4)

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
        <ListItemButton onClick={handleClick} sx={{ pl: paddingLeft }}>
                <ListItemIcon>
                    {folder.emoji}
                </ListItemIcon>
            <Typography noWrap> 
                 {folder.name}
            </Typography> 
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <LernList contents={contents} paddingLeft ={padding}/>
        </Collapse>
        </>
    )
}

export default ExpandableItem