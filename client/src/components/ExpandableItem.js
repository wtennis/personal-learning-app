import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LernList from './LernList';
import Collapse from '@mui/material/Collapse';
import EditMenu from './EditMenu';

function ExpandableItem({ item, paddingLeft }){
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);

    const [contents, setContents] = useState(null);
    const [padding, setPadding] = useState(paddingLeft + 4)

    useEffect(() => {
        fetch(`/folder_contents/${item.id}`)
        .then(r=> {
        if (r.ok){
            r.json().then((res) => {
            setContents(res);
            console.log('folder_contents fetched!')
            console.log(res);
            });
        };
        });
      }, [item.id])

      const handleClick = () => {
        setOpen(!open);
      };

    return (
        <>
        <ListItem sx={{ pl: paddingLeft }}>
                    <EditMenu item={item}/>
            <ListItemButton onClick={handleClick}>
                <Typography noWrap> 
                    {item.name}
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