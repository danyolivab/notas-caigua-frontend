import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-notas',
  templateUrl: './ingresar-notas.component.html',
  styles: [
  ]
})
export class IngresarNotasComponent implements OnInit {


  public dataPrueba = [
    { clave: 1, nombre: 'Calderón Ferrera, Byron Fernando'},
    { clave: 2, nombre: 'Oliva Beltetón, Dany Otoniel' },
    { clave: 3, nombre: 'Sosa Calderón, Roger Felipe'},
    { clave: 4, nombre: 'Valiente Arreaga, Oscar Antonio'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  asignarIdNombreNota(clave : number){
    return `nota${clave}`;
  }

  asignarIdStatus(clave : number){
    return `status${clave}`;
  }

  asignarIdTextoStatus(clave : number){
    return `textoStatus${clave}`;
  }

  obtenerValores(){
    const cantidadAlumnos = 4;

    for (let i = 1; i <= cantidadAlumnos; i++) {
      const nota = (<HTMLInputElement>document.getElementById(`nota${i}`)).value;
      console.log(nota);

      // Armar el array a enviar
    }
  }

  verificarStatus(clave: number){
    const nota = parseInt((<HTMLInputElement>document.getElementById(`nota${clave}`)).value, 10) ;
    
    // Verifica si la nota ingresada es Aprobada o Reprobada
    if(nota >= 12 ){
      document.getElementById(`textoStatus${clave}`).innerHTML = "Aprobado";
      document.getElementById(`status${clave}`).classList.remove("badge-danger");
      document.getElementById(`status${clave}`).classList.remove("badge-secondary");
      document.getElementById(`status${clave}`).classList.remove("badge-warning");
      document.getElementById(`status${clave}`).classList.add("badge-success");
    } else {
      document.getElementById(`textoStatus${clave}`).innerHTML = "Reprobado";
      document.getElementById(`status${clave}`).classList.remove("badge-success");
      document.getElementById(`status${clave}`).classList.remove("badge-secondary");
      document.getElementById(`status${clave}`).classList.remove("badge-warning");
      document.getElementById(`status${clave}`).classList.add("badge-danger");
    }

    // Verifica que la nota se encuentre entre los límites permitidos
    if(nota <= 0 || nota > 20){
      document.getElementById(`textoStatus${clave}`).innerHTML = "VERIFICAR!!!";
      document.getElementById(`status${clave}`).classList.remove("badge-success");
      document.getElementById(`status${clave}`).classList.remove("badge-secondary");
      document.getElementById(`status${clave}`).classList.remove("badge-warning");
      document.getElementById(`status${clave}`).classList.add("badge-danger");

      document.getElementById(`nota${clave}`).classList.add("is-invalid");
    }else{
      document.getElementById(`nota${clave}`).classList.remove("is-invalid");
    }

    // Si el campo de la nota se deja vacio en automático se colocará 1
    if((<HTMLInputElement>document.getElementById(`nota${clave}`)).value == "" ) {
      (<HTMLInputElement>document.getElementById(`nota${clave}`)).value = "1"
    }

  }

  resetarFormularioIngreso(){

  }

  notaPendiente(clave: number) {
    document.getElementById(`textoStatus${clave}`).innerHTML = "Pendiente/Retirado";
    
    // Verificar si una nota está pendiente/retirado
    const pendiente = document.getElementById(`${clave}`).getAttribute("checked");

    if(pendiente == null){
      document.getElementById(`${clave}`).setAttribute("checked", "true");
      document.getElementById(`nota${clave}`).setAttribute("disabled", "true");
      (<HTMLInputElement>document.getElementById(`nota${clave}`)).value = "0"

      document.getElementById(`nota${clave}`).classList.remove("is-invalid");
      document.getElementById(`status${clave}`).classList.remove("badge-success");
      document.getElementById(`status${clave}`).classList.remove("badge-danger");
      document.getElementById(`status${clave}`).classList.remove("badge-secondary");
      document.getElementById(`status${clave}`).classList.add("badge-warning");
      
      
    }else {
      document.getElementById(`${clave}`).removeAttribute("checked");
      document.getElementById(`nota${clave}`).removeAttribute("disabled");

      document.getElementById(`status${clave}`).classList.remove("badge-warning");
      document.getElementById(`status${clave}`).classList.add("badge-secondary");
      document.getElementById(`textoStatus${clave}`).innerHTML = "No Ingresada";
      (<HTMLInputElement>document.getElementById(`nota${clave}`)).value = "";
      document.getElementById(`nota${clave}`).focus();
    }

  }

}
