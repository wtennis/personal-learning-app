import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FinalNestedList from './FinalNestedList';
import Item from './Item';
import ExpandableItem from './ExpandableItem';


export default function MainList({ topLevelData }){
  const [open, setOpen] = React.useState(true);
  const [contents, setContents] = React.useState(null)

  const handleClick = () => {
    setOpen(!open);
  };

  function handleOpen(id){
    console.log(`folder ${id} opened`)

    fetch(`/folder_contents/${id}`)
    .then(r=> {
      if (r.ok){
        r.json().then((res) => {
          setContents(res);
          console.log(res);
        });
      };
    });
}

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
        {topLevelData? 
                    <List>
                        {topLevelData.map((folder, index) => (
                        (folder.has_contents? 
                            <ExpandableItem key={index} folder={folder}/>
                            :
                            <Item key={index} folder={folder}/>)
                        ))}
                    </List>
                : 
                    null
        }
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <FinalNestedList open={open} contents={contents}/>
    </List>
  );
}
