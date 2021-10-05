import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import EditMenu from './EditMenu';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { renameFolder, renameResource } from "../redux/actions/dataActions";
import { useSelector, useDispatch } from "react-redux"


function Item({ item, paddingLeft}){
    const [renaming, setRenaming] = useState(false);
    const [itemName, setItemName] = useState(item.name);
    const dispatch = useDispatch();

      const handleRename = (e) => {
    
        if (e.key === 'Enter') {
            setRenaming(false)
            e.preventDefault();

            item.url? 

            // dispatch(renameResource());

            fetch(`/resources/${item.id}`, {
                method: "PATCH", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: itemName
                })
                })
                .then(r => {
                    if (r.ok){
                        r.json();
                    }
                })
        : 

            // dispatch(renameFolder(itemName, item.id))

            fetch(`/folders/${item.id}`, {
                method: "PATCH", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: itemName
                })
                })
                .then(r => {
                    if (r.ok){
                        r.json();
                    }
                })

        }
    };

    return(
        <ListItem sx={{ pl: paddingLeft }}>
            <EditMenu item={item} renaming={renaming} setRenaming={setRenaming}  />
            {item.url? 
                <>
                    {renaming?
                        <TextField 
                            id="outlined-basic" 
                            label="Folder Name" 
                            variant="outlined" 
                            value={itemName} 
                            onChange={(e)=>setItemName(e.target.value)}
                            onKeyPress={(e)=> handleRename(e)}
                            onBlur={()=>setRenaming(false)}
                            />
                    :
                        <Button 
                            target="_blank" 
                            href={`//${item.url}`}
                            style={{textTransform: 'lowercase'}}
                            >
                            <Typography noWrap> 
                                {item.name}
                            </Typography> 
                        </Button>
                    }
                </>
            : 
                <>
                    {renaming?
                            <TextField 
                                id="outlined-basic" 
                                label="Folder Name" 
                                variant="outlined" 
                                value={itemName} 
                                onChange={(e)=>setItemName(e.target.value)}
                                onKeyPress={(e)=> handleRename(e)}
                                onBlur={()=>setRenaming(false)}
                                />
                        :
                            <Typography noWrap sx={{ pl: 2 }}> 
                                {item.name}
                            </Typography> 
                    }                
                </> 
            }
        </ListItem>
    )
}

export default Item