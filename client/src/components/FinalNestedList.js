import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function FinalNestedList({ open, contents }){


    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
       
       {contents? 
                <List>
                    {contents.map((folder, index) => (
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                           {folder.emoji}
                        </ListItemIcon>
                      <ListItemText primary={folder.name} />
                    </ListItemButton>
                    ))}
                </List>
                : 
                null
            }
       
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    )
}

export default FinalNestedList