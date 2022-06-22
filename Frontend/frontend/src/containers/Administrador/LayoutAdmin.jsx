// React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Modulos
import Usuarios from './modulesadmin/usuarios';
import Hotel from './modulesadmin/hotel';
import Vuelo from './modulesadmin/vuelo';
import Vehiculo from './modulesadmin/vehiculo';


// Modulo de error
import InvalidOperation from './modulesadmin/InvalidOperation';

// Estilos
import "../../assets/styles/components/GlobalAction.scss"

const LayoutAdmin = () => (
  <div className="LayoutAdmin">
    <Switch>
        <Route path="/admin/usuarios" component={Usuarios} />
        <Route path="/admin/vuelo" component={Vuelo} />
        <Route path="/admin/hotel" component={Hotel} />
        <Route path="/admin/vehiculos" component={Vehiculo} />
        <Route component={InvalidOperation} />
    </Switch>
  </div>
);

export default LayoutAdmin;