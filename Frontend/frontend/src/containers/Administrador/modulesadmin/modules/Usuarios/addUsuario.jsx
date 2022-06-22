import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import FetchData from "../api/Api";

const AddUsuario = ({ handleMessage }) => {
  // Values
  const [form, setForm] = useState({
    name: "",
    username: "",
    date: "",
    email: "",
    password: "",
    rol: "1"
  });

  const EntryRegister = async (e) => {
    try {
      const url = "api/team/users/";
      const data = new FetchData();
      await data.request(url, "POST", form);
      handleMessage({
        header: "🟢 Estado del registro",
        message: "Usuario registrado con exito",
        state: true,
      });
    } catch (e) {
      handleMessage({
        header: "🔴 Estado del registro",
        message: "Verifica los campos del registro",
        state: true,
      });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Ingresar Usuario</h2>
      <div className="containeroption__form">
        <Form className="container-fluid" onSubmit={EntryRegister}>
          <FormGroup>
            <Label>Nombre</Label>
            <Input name="name" onChange={handleChange}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Usuario</Label>
            <Input name="username" onChange={handleChange}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Fecha de Nacimiento</Label>
            <Input type="date" name="date" onChange={handleChange}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Correo</Label>
            <Input type="email" name="email" onChange={handleChange}></Input>
          </FormGroup>
          <FormGroup>
            <Label>Contraseña</Label>
            <Input type="password" name="passsword" onChange={handleChange}></Input>
          </FormGroup>
          <Button className="btn-lg" onClick={EntryRegister}>
            Registrar
          </Button>
        </Form>
      </div>
    </>
  );
};
export default AddUsuario;
