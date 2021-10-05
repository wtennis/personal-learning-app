import List from '@mui/material/List';
import Item from './Item';
import ExpandableItem from './ExpandableItem';

function LernList({ contents, paddingLeft}){



  return (
    <List>
    {contents? 
                    <>
                    {contents.map((item, index) => (
                    (item.has_contents? 
                        <ExpandableItem key={index} itemId={item.id} paddingLeft={paddingLeft}  />
                        :
                        <Item key={index} itemId={item.id} paddingLeft={paddingLeft}  />)
                    ))}
                    </>
            : 
                null
    }
    </List>
  )
}

export default LernList