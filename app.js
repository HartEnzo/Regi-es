const prompt = require('prompt-sync')();
function cadastrarPaisEstadoCidade() {
    let pais = "";
    const estados = [];
    
    pais = prompt("Digite o nome do país:");
    
    let adicionarEstado = true;
    
    while (adicionarEstado) {
      let estadoNome = prompt("Digite o nome do estado (ou 'fim' para terminar):");
      
      if (estadoNome.toLowerCase() === "fim") {
        adicionarEstado = false;
      } else {
        const estado = {
          nome: estadoNome,
          cidades: []
        };
        
        let adicionarCidade = true;
        
        while (adicionarCidade) {
          let cidadeNome = prompt("Digite o nome da cidade (ou 'fim' para terminar):");
          
          if (cidadeNome.toLowerCase() === "fim") {
              adicionarCidade = false;
            } else {
                estado.cidades.push(cidadeNome);
                
          }
        }
        
        estados.push(estado);
        break;
      }
    }
    
    console.log("\nInformações cadastradas:");
    console.log("País: " + pais);
    
    estados.forEach(estado => {
      console.log("\nEstado: " + estado.nome);
      console.log("Cidades:");
      estado.cidades.forEach(cidade => {
        console.log("- " + cidade);
      });
    });
  }
  cadastrarPaisEstadoCidade()