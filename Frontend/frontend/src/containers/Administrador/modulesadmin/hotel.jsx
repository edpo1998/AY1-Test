import React,{useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultAction from './modules/DefaultAction';
import Listhotel from './modules/Hotel/listhotel';
import Addhotel from './modules/Hotel/addhotel';
import Message from './Message';

const hotels = () => {
  const [statemessage ,setStatatemessage] = useState({
    header:'',
    message:'',
    state:false
  });
  
  const handleMessage = (obj) => {
    setStatatemessage(obj)
  }

  return(
  <div className='containeroption'>
    <Message statemessage={statemessage} handleMessage={handleMessage}/>
    <Switch>
        <Route 
            exact path="/admin/hotel/add" 
            component={()=><Addhotel handleMessage={handleMessage} />} 
        />
        <Route 
            exact path="/admin/hotel/list" 
            component={()=><Listhotel handleMessage={handleMessage} />} 
        />
        <Route 
            render={(props) => <DefaultAction {...props} name={"🏬 Hotel"} />} />
    </Switch>
  </div>
);
}

export default hotels;