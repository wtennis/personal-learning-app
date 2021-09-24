import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';

import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LernList from './LernList';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function ExpandableItem({ folder, paddingLeft }){
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);

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

      function handleEdit() {
          console.log('edit click')
      }

    return (
        <>
        <ListItem sx={{ pl: paddingLeft }}>
                    <IconButton onMouseOver={() => setEditing(true)} 
                                onMouseLeave={() => setEditing(false)}
                                onClick={handleEdit}
                                >
                        {editing? <MoreVertIcon/> : folder.emoji}
                    </IconButton>
            <ListItemButton onClick={handleClick}>
                <Typography noWrap> 
                    {folder.name}
                </Typography> 
                    {open ? <ExpandLess sx={{ ml: 2 }}/> : <ExpandMore sx={{ ml: 2 }}/>}
                </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <LernList contents={contents} paddingLeft ={padding}/>
        </Collapse>
        </>
    )
}

export default ExpandableItem