import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultAction from "./modules/DefaultAction";
import AddPais from "./modules/pais/addPais";
import ListPais from "./modules/pais/listPais";
import Message from "./Message";

const Pais = () => {
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
          path="/admin/pais/add"
          component={() => <AddPais handleMessage={handleMessage} />}
        /><Route
          exact
          path="/admin/pais/list"
          component={() => <ListPais handleMessage={handleMessage} />}
        />
        <Route
          render={(props) => <DefaultAction {...props} name={"🗾 Pais"} />}
        />
      </Switch>
    </div>
  );
};

export default Pais;
