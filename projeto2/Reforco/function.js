class Example {
  log() {
      console.log("Aqui é um método não estático");
  }
  static log() {
      console.log("Aqui é um método estático");
  }

  static autenticar() {
    
  }
}

const exampleInstance = new Example(); // <= INSTANCIANDO A CLASSE Example EM UM OBJETO exampleInstance
exampleInstance.log(); // <= CHAMANDO UM MÉTODO DA INSTÂNCIA

Example.log(); // <= CHAMANDO O METÓDO DA CLASSE

