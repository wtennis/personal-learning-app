import { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LernList from './LernList';
import Collapse from '@mui/material/Collapse';
import EditMenu from './EditMenu';
import TextField from '@mui/material/TextField';


function ExpandableItem({ item, paddingLeft}){
    const [open, setOpen] = useState(false);
    const [contents, setContents] = useState(null);
    const [padding, setPadding] = useState(paddingLeft + 4)
    const [renaming, setRenaming] = useState(false);
    const [folderName, setFolderName] = useState(item.name);


    useEffect(() => {
        fetch(`/folder_contents/${item.id}`)
        .then(r=> {
        if (r.ok){
            r.json().then((res) => {
            setContents(res);
            });
        };
        });
      }, [item.id])

      const handleClick = () => {
        if (!renaming){
            setOpen(!open);
        }
      };

      const handleRename = (e) => {
        if (e.key === 'Enter') {
            setRenaming(false)
            e.preventDefault();

            fetch(`/folders/${item.id}`, {
                method: "PATCH", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: folderName,
                    type: item.type
                })
                })
                .then(r => {
                    if (r.ok){
                        r.json();
                    }
                })
        }
    };



    return (
        <>
        <ListItem sx={{ pl: paddingLeft }}>
                    <EditMenu renaming={renaming} setRenaming={setRenaming}item={item}  />
            <ListItemButton onClick={handleClick}>
            {renaming?
                <TextField 
                    id="outlined-basic" 
                    label="Folder Name" 
                    variant="outlined" 
                    value={folderName} 
                    onChange={(e)=>setFolderName(e.target.value)}
                    onKeyPress={(e)=> handleRename(e)}
                    onBlur={()=>setRenaming(false)}
                    />
            :
                <Typography noWrap> 
                    {item.name}
                </Typography> 
            }
                    {open? <ExpandLess sx={{ ml: 2 }}/> : <ExpandMore sx={{ ml: 2 }}/>}
                </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <LernList contents={contents} paddingLeft ={padding}  />
        </Collapse>
        </>
    )
}

export default ExpandableItem