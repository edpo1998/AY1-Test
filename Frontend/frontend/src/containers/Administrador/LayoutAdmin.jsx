// React
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Modulos
import Usuarios from './modulesadmin/usuarios';
import Hotel from './modulesadmin/hotel';
import Vuelo from './modulesadmin/aereo';
import Vehiculo from './modulesadmin/vehiculo';
import Pais from './modulesadmin/pais';
import Ciudad from './modulesadmin/ciudad';


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
        <Route path="/admin/pais" component={Pais} />
        <Route path="/admin/ciudad" component={Ciudad} />
        <Route component={InvalidOperation} />
    </Switch>
  </div>
);

export default LayoutAdmin;