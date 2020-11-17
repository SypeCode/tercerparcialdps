import React, { useState, useEffect } from "react";
import { db } from "../../firebase";



const Formulario = (props) => {
  const initialStateValues = {
    empleado: "",
    name: "",
    horas: "",
    ISSS: "",
    AFP: "",
    RENTA: "",
    SueldoLiquido: "",
    SueldoNeto: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    
    let isss;
    let afp;
    let renta;
    let sueldol;
    let sueldon;
    let valor;
    
    valor = values.horas;
    if(valor <= 160){ sueldol = valor * 9.75;}
    else{
        if(valor <=200){
          valor = valor -160;
          sueldol = (160 *9.75) + (valor *11.50);
         }
         else{
             if(valor<= 250){
               valor = valor -200;
               sueldol = (160* 9.75) + (40*11.50) + (valor * 12.50);
             } 
         }
    }

    isss = sueldol * 0.0525;
    afp = sueldol * 0.0688;
    renta = sueldol * 0.1;
    sueldon = sueldol - isss - afp - renta;
    
    
    

    const { name, value } = e.target;
    setValues({ ...values, [name]: value, ISSS: isss.toFixed(2), AFP: afp.toFixed(2), RENTA: renta.toFixed(2), SueldoLiquido: sueldol.toFixed(2), SueldoNeto: sueldon.toFixed(2) });
    
    
  };

  /* const handleClick = (e) => {
    const {name,value}=e.target;
    this.setState({horas:value});
    let valor=value;

    let isss;
    let afp;
    let renta;
    let sueldol;
    let sueldon;

    if(valor <= 160){ sueldol = valor * 9.75;}
    else{
        if(valor <=200){
          valor = valor -160;
          sueldol = (160 *9.75) + (valor *11.50);
         }
         else{
             if(valor<= 250){
               valor = valor -200;
               sueldol = (160* 9.75) + (40*11.50) + (valor * 12.50);
             } 
         }
    }

    isss = sueldol * 0.0525;
    afp = sueldol * 0.0688;
    renta = sueldol * 0.1;
    sueldon = sueldol - isss - afp - renta;
    setValues({...values,
       [this.ISSS]: isss,
       [this.AFP]: afp,
       [this.RENTA]: renta,
       [this.SueldoLiquido]: sueldol,
       [this.SueldoNeto]: sueldon 
    });
  } */
   
    
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
      

      
      


      <button className="btn btn-primary btn-block" >
        {props.currentId === "" ? "Registrar" : "Actualizar"}
      </button>
    </form>
  );
  
  
};

export default Formulario;
