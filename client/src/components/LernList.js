import List from '@mui/material/List';
import Item from './Item';
import ExpandableItem from './ExpandableItem';


function LernList({ contents }){

  return (
    <List>
    {contents? 
                    <>
                    {contents.map((folder, index) => (
                    (folder.has_contents? 
                        <ExpandableItem key={index} folder={folder}/>
                        :
                        <Item key={index} folder={folder}/>)
                    ))}
                    </>
            : 
                null
    }
    </List>
  )
}

export default LernList