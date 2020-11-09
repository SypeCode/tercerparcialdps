import React from "react"

const Ayuda = () => (
  <React.Fragment>
    <h3 class="text-center italic">Necesitas Ayuda...?</h3>
    <br />
    <h4 class="text-center text-secondary pb-2 mb-4 border-bottom">Como funciona nuestro sitio web?</h4>
    <h6 class="text-center">Calcular el pago líquido de tres empleados, según las siguientes instrucciones:</h6><br />
    <p class="text-center">• Código Empleado</p>
    <p class="text-center">• Nombre Empleado</p>
    <p class="text-center">• El total de horas trabajadas durante el mes, deben de ser enteras. </p> 
    <br />
    <h6 class="text-center">El sueldo base del empleado se calcula según el número de horas que ha trabajado
        durante el mes, deberá tomar en cuenta las siguientes condiciones: </h6>
    <br />
    <h6 class="text-center">
      • Si las horas trabajadas por el empleado son menores o igual de 160, deberán pagarse al
      empleado a $9.75 cada hora. 
    </h6>
    <br />
    <h6 class="text-center">
    • Si las horas son mayores a 160 y menores e igual 200 deberán pagarse al empleado de la
siguiente manera: Las primeras 160 deberán pagarse a $9.75 y las restantes a $11.50. 
    </h6>
    <br />
    <h6 class="text-center">
    • Si las horas son mayores a 200 y menores e igual 250 deberán pagarse al empleado de la
siguiente manera: Las primeras 160 deberán pagarse a $9.75, las horas entre 160 y 200 a
$11.50. y las restantes $12.50 
    </h6>
    <br />
    <h6 class="text-center">
    • El sueldo líquido se calcula con respecto a su sueldo base menos los descuentos que
realiza la empresa al empleado. Los descuentos para realizar al empleado son los
siguientes: 
    </h6><br />
    <p class="text-center">a) Se le descontara del ISSS el 5.25% de su sueldo base</p>
    <p class="text-center">b) Se le descontara de la AFP el 6.88% de su sueldo base</p>
    <p class="text-center">c) Se le descontara de la RENTA el 10% de su sueldo</p> 
    <br />
    <h6 class="text-center">
    • Además de calcular y mostrar cual empleado gana el mayor salario, menor salario 
    </h6>
    <br /><br />
  </React.Fragment>
)

export default Ayuda