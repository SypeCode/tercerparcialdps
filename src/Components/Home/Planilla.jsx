import React, { useEffect, useState } from "react";
import Formulario from "./Empleados";

import { db } from "../../firebase";
import { toast } from "react-toastify" ;

const Empleados = () => {
  const [Empleados, setEmpleados] = useState([]);
  const [currentId, setCurrentId] = useState("");
 //Obetener datos
  const getEmpleados = async () => {
    db.collection("Empleados").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setEmpleados(docs);
    });
  };
  //Calculo de sueldo
  const calculo = () =>{

  }
  //borrar empleado
  const BorrarEmpleado = async (id) => {
    if (window.confirm("Estas seguro que quieres remover este empleado de la lista?")) {
      await db.collection("Empleados").doc(id).delete();
      toast("Empleado removido de la lista", {
        type: "error",
        autoClose: 2000
      });
    }
  };

  useEffect(() => {
    getEmpleados();
  }, []);
//AGREGAR Y EDITAR CRUD
  const AgregarOeditarEmpleado = async (ObjetoEmpleado) => {
    try {
      if (currentId === "") {
        await db.collection("Empleados").doc().set(ObjetoEmpleado);
        toast("Nuevo Empleado agregado", {
          type: "success",
        });
      } else {
        await db.collection("Empleados").doc(currentId).update(ObjetoEmpleado);
        toast("Actualizacion completa", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="col-md-8 p-2  ">
        <Formulario {...{ AgregarOeditarEmpleado, currentId, Empleados }} />
      </div>
      <div className="col-md-8 p-2">
        {Empleados.map((Empleado) => (
          <div className="card mb-1" key={Empleado.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>Nombre: {Empleado.empleado}</h4>
                <div>
                  <i
                    className="material-icons text-danger"
                    onClick={() => BorrarEmpleado(Empleado.id)}
                  >
                    close
                  </i>
                  <i
                    className="material-icons"
                    onClick={() => setCurrentId(Empleado.id)}
                  >
                    create
                  </i>
                </div>
              </div>
              <p>ID: {Empleado.name}</p>
              <p>HORAS: {Empleado.horas}</p>
            </div>
            <button className="btn btn-primary " onClick={calculo()}>CALCULAR </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Empleados;
