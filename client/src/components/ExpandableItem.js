import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LernList from './LernList';
import Collapse from '@mui/material/Collapse';
import EditMenu from './EditMenu';
import TextField from '@mui/material/TextField';
import { renameItem } from "../redux/actions/dataActions";
import { useSelector, useDispatch } from "react-redux"


function ExpandableItem({ item, paddingLeft}){
    const [open, setOpen] = useState(false);
    const [padding, setPadding] = useState(paddingLeft + 4)
    const [renaming, setRenaming] = useState(false);
    const [folderName, setFolderName] = useState(item.name);
    const reduxContents = useSelector((state)=> state.data.filter(thing => thing.parent_folder_id == item.id))
    const dispatch = useDispatch();

      const handleClick = () => {
        if (!renaming){
            setOpen(!open);
        }
      };

      const handleRename = (e) => {        
        if (e.key === 'Enter') {
            setRenaming(false)
            e.preventDefault();
            dispatch(renameItem("folders", item.id, folderName))         
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
             <LernList contents={reduxContents} paddingLeft ={padding}/>
        </Collapse>
        </>
    )
}

export default ExpandableItem