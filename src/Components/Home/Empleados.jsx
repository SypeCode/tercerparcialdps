import React from "react"

const Empleados = () => (
  <React.Fragment>
    <div class="container my-5 py-5 z-depth-1">


<section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">


  
  <div class="row d-flex justify-content-center">

    
    <div class="col-md-6">

      
      <form class="text-center" action="">

        <p class="h4 mb-4">Datos del empleado</p>

        <div class="form-row mb-4">
          <div class="col">           
          <input type="text" id="id" class="form-control" placeholder="ID empleado"/>
          </div>
          <div class="col">
            
            <input type="text" id="nombre" class="form-control" placeholder="Nombre Empleado"/>
            </div>
        </div>

        
        <input type="text" id="horas" class="form-control mb-4" placeholder="Horas Trabajadas"/>

        
        <button class="btn btn-info my-4 btn-block" type="submit">Registrar</button>

        
       

      </form>
      
    </div>
    

  </div>
  


</section>



</div>

  </React.Fragment>
)
export default Empleados