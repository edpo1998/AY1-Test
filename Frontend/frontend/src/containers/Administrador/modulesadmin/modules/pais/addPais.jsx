import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import FetchData from "../api/Api";

const AddPais = ({ handleMessage }) => {
  // Values
  const [form, setForm] = useState({
    name: "",
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
      <h2>Ingresar Pais</h2>
      <div className="containeroption__form">
        <Form className="container-fluid" onSubmit={EntryRegister}>
          <FormGroup>
            <Label>Nombre</Label>
            <Input name="name" onChange={handleChange}></Input>
          </FormGroup>
          <Button className="btn-lg" onClick={EntryRegister}>
            Registrar
          </Button>
        </Form>
      </div>
    </>
  );
};
export default AddPais;