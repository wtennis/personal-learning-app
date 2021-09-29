import List from '@mui/material/List';
import Item from './Item';
import ExpandableItem from './ExpandableItem';

function LernList({ contents, paddingLeft, remount, setRemount }){



  return (
    <List>
    {contents? 
                    <>
                    {contents.map((item, index) => (
                    (item.has_contents? 
                        <ExpandableItem key={index} item={item} paddingLeft={paddingLeft} remount={remount} setRemount={setRemount}/>
                        :
                        <Item key={index} item={item} paddingLeft={paddingLeft} remount={remount} setRemount={setRemount}/>)
                    ))}
                    </>
            : 
                null
    }
    </List>
  )
}

export default LernList