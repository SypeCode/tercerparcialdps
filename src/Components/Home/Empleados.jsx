import React, { useState, useEffect } from "react";
import { db } from "../../firebase";


const Formulario = (props) => {
  const initialStateValues = {
    empleado: "",
    name: "",
    horas: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();


    props.AgregarOeditarEmpleado(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("Empleados").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i >Empleado</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Empleado"
          value={values.empleado}
          name="empleado"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i >ID Empleado</i>
        </div>
        <input
          type="text"
          value={values.name}
          name="name"
          placeholder="ID Empleado"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i >Horas trabajadas</i>
        </div>
        <input
          type="number"
          value={values.horas}
          name="horas"
          placeholder="Horas trabajadas"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>


      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Registrar" : "Actualizar"}
      </button>
    </form>
  );
};

export default Formulario;
