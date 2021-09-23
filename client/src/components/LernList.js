import List from '@mui/material/List';
import Item from './Item';
import ExpandableItem from './ExpandableItem';


function LernList({ contents, paddingLeft }){
  


  return (
    <List>
    {contents? 
                    <>
                    {contents.map((folder, index) => (
                    (folder.has_contents? 
                        <ExpandableItem key={index} folder={folder} paddingLeft={paddingLeft}/>
                        :
                        <Item key={index} folder={folder} paddingLeft={paddingLeft}/>)
                    ))}
                    </>
            : 
                null
    }
    </List>
  )
}

export default LernList