import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AddNestedItemDialog from './AddNestedItemDialog';
import AddNoteDialog from './AddNoteDialog';
import Badge from '@mui/material/Badge';
import { useDispatch } from 'react-redux'
import { deleteItem } from "../redux/actions/dataActions";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function EditMenu( { item, renaming, setRenaming }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openNoteDialog, setOpenNoteDialog] = React.useState(false);
  const [itemTypeToAdd, setItemTypeToAdd] = React.useState("Folder");

  const itemType = item.url? "Resource" : "Folder"
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleDelete(){
    const target = itemType.toLowerCase() + 's'    
    dispatch(deleteItem(target, item.id))
    handleClose();
  }

  function handleRename() {
    handleClose();
    setRenaming(!renaming);
  }

  function handleAddNestedItem(type){
    handleClose();
    setItemTypeToAdd(type);
    setOpenDialog(!openDialog);
  }

  function handleAddNote(){
    handleClose();
    setOpenNoteDialog(!openNoteDialog)
  }

  return (
    <div>
      <Badge color="primary" variant="dot" invisible={!item.note}>
      <IconButton onMouseOver={() => setEditing(true)} 
                  onMouseLeave={() => setEditing(false)}
                  onClick={handleClick}
                  id="demo-customized-button"
                  aria-controls="demo-customized-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  >
          {editing || open? <MoreVertIcon/> : item.emoji}
      </IconButton>
      </Badge>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleRename} disableRipple>
          <EditIcon />
          Rename
        </MenuItem>

        <MenuItem onClick={() => handleAddNote()} disableRipple>
          <NoteAddIcon />
          {item.note? "Open Note": "Add Note"}
        </MenuItem> 

        {itemType == "Resource"? 
            null 
          :
              <MenuItem onClick={() => handleAddNestedItem("Folder")} disableRipple>
                <CreateNewFolderIcon />
                Add Folder
              </MenuItem> 
        }
        {itemType == "Resource"? 
            null 
          :
            <MenuItem onClick={() => handleAddNestedItem("Resource")} disableRipple>
              <AddLinkIcon />
              Add Resource
            </MenuItem>
        }

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleDelete} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>
      <AddNestedItemDialog  parent_id={item.id} 
                            openDialog={openDialog} 
                            setOpenDialog={setOpenDialog} 
                            type={itemTypeToAdd}
                            />
      <AddNoteDialog  note={item.note} 
                      openDialog={openNoteDialog} 
                      setOpenDialog={setOpenNoteDialog} 
                      type={itemType} 
                      parent_id={item.id} 
                      />
    </div>
  );
}
