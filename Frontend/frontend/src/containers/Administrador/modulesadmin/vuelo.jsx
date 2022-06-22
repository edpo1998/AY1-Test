import React,{useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultAction from './modules/DefaultAction';
import ListVuelo from './modules/Vuelo/listVuelo';
import AddVuelo from './modules/Vuelo/addVuelo';

const Parqueos = () => {
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
            exact path="/admin/vuelo/list" 
            component={()=><AddVuelo handleMessage={handleMessage} />} 
        />
        <Route 
            exact path="/admin/vuelo/list" 
            component={()=><ListVuelo handleMessage={handleMessage} />} 
        />
        <Route 
            render={(props) => <DefaultAction {...props} name={"🛃 Parqueos"} />} />
    </Switch>
  </div>
);
}

export default Parqueos;