import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultAction from "./modules/DefaultAction";
import AddCiudad from "./modules/ciudad/addCiudad";
import ListCiudad from "./modules/ciudad/listCiudad";
import Message from "./Message";

const Ciudad = () => {
  const [statemessage, setStatatemessage] = useState({
    header: "",
    message: "",
    state: false,
  });

  const handleMessage = (obj) => {
    setStatatemessage(obj);
  };

  return (
    <div className="containeroption">
      <Message statemessage={statemessage} handleMessage={handleMessage} />
      <Switch>
        <Route
          exact
          path="/admin/ciudad/add"
          component={() => <AddCiudad handleMessage={handleMessage} />}
        />
        /*
        <Route
          exact
          path="/admin/ciudad/list"
          component={() => <ListCiudad handleMessage={handleMessage} />}
        />
        */
        <Route
          render={(props) => <DefaultAction {...props} name={"🌆 Ciudad"} />}
        />
      </Switch>
    </div>
  );
};

export default Ciudad;
