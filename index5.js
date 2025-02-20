
//Inicio del Proyecto
const libro = {
    titulo: "Harry Potter Y la piedra filosofal",
    autor: "JK. Rowling",
    año: 1997,
    estado: "disponible",
    capitulos: [],
  
    describirLibro: function() {
      console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    },
  
    agregarCapitulo: function(capitulo) {
      this.capitulos.push(capitulo);
    },
  
    eliminarCapitulo: function(capitulo) {
      const indice = this.capitulos.indexOf(capitulo);
      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
      }
    }
  };
  
  // Usando métodos:
  libro.describirLibro(  );
  libro.agregarCapitulo("Capítulo 1: El niño que sobrevivió");
  libro.agregarCapitulo("Capítulo 2: El vidrio que se desvaneció / El vidrio desapareció");
  console.log(libro.capitulos);
  
  /*libro.eliminarCapitulo("Capítulo 1: Inicio de la historia");
  console.log(libro.capitulos);*/
  