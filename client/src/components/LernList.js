import List from '@mui/material/List';
import Item from './Item';
import ExpandableItem from './ExpandableItem';


function LernList({ contents, paddingLeft, reloadTrigger, setReloadTrigger }){
  


  return (
    <List>
    {contents? 
                    <>
                    {contents.map((item, index) => (
                    (item.has_contents? 
                        <ExpandableItem reloadTrigger={reloadTrigger} setReloadTrigger={setReloadTrigger} key={index} item={item} paddingLeft={paddingLeft}/>
                        :
                        <Item reloadTrigger={reloadTrigger} setReloadTrigger={setReloadTrigger} key={index} item={item} paddingLeft={paddingLeft}/>)
                    ))}
                    </>
            : 
                null
    }
    </List>
  )
}

export default LernList