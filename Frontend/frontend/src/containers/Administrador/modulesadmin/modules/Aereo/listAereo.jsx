import { Table, Button } from "reactstrap";
import { useEffect, useState } from "react";
import FetchData from "../api/Api";

const ListVuelo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const url = "api/vehicles/vehicle/";
      const data = new FetchData();
      const datos = await data.request(url, "GET");
      setData(datos);
    };
    getResponse();
  }, []);

  const style = {
    table: {
      width: "100%",
      display: "table",
      borderSpacing: 0,
      borderCollapse: "separate",
    },
    th: {
      top: 0,
      left: 0,
      zIndex: 10,
      position: "sticky",
      backgroundColor: "#fff",
    },
  };

  return (
    <>
      <h2>Lista de Aereolinea</h2>
      {data.length > 0 ? (
        <div className="containeroption__form">
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <div
              style={{
                maxHeight: "500px",
                overflowY: "auto",
              }}
            >
              <Table bordered height="200" style={style.table}>
                <thead>
                  <tr>
                    <th style={style.th}>#</th>
                    <th style={style.th}>Nombre</th>
                    <th style={style.th}>Pais</th>
                    <th style={style.th}>Ciudad</th>
                    <th style={style.th}>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((registro) => (
                    <tr key={registro.id}>
                      <th scope="row">{registro.id}</th>
                      <td>{registro.badgenumber}</td>
                      <td>{registro.modelo}</td>
                      <td>{registro.brand}</td>
                      <td>{registro.typevehicle}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      ) : (
        <h1>..Loading</h1>
      )}
    </>
  );
};
export default ListVuelo;
