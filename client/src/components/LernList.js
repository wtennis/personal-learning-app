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
                        <ExpandableItem key={index} item={item} paddingLeft={paddingLeft}  />
                        :
                        <Item key={index} item={item} paddingLeft={paddingLeft}  />)
                    ))}
                    </>
            : 
                null
    }
    </List>
  )
}

export default LernList