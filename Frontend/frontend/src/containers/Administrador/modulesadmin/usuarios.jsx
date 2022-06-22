import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultAction from './modules/DefaultAction';
import AddUsuario from './modules/Usuarios/addUsuario';
import ListUsuario from './modules/Usuarios/listUsuario';

const Usuarios = () => {
  const [statemessage ,setStatatemessage] = useState({
    header:'',
    message:'',
    state:false
  })
  
  const handleMessage = (obj) => {
    setStatatemessage(obj)
  }
 
  return(
    <div className='containeroption'>
      <Message statemessage={statemessage} handleMessage={handleMessage}/>
      <Switch>
          
          <Route 
            exact path="/admin/usuarios/add" 
            component={()=><AddUsuario handleMessage={handleMessage} />} 
          />
        
          <Route 
            exact path="/admin/usuarios/list" 
            component={()=><ListUsuario handleMessage={handleMessage} />} 
          />

          <Route render={(props) => <DefaultAction {...props} name={"👤 Usuarios"} />} />
      </Switch>
    </div>
  )
}

export default Usuarios;