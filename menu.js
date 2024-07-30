const prompt = require("prompt-sync")()
const {criarPais, listarPaises, atualizarPais, removerPais, lerIndicePais } = require("./pais.js");
 while(true) {
    console.log(`
    1 - Criar
    2 - Listar
    3- Atualizar
    4 - Remover 
    5 - Ler Indice
    6 - Sair 
     `);
 
    const opcao = prompt("Qual opção deseja? ");
    
    switch (opcao) {
        case "1":
            criarPais()
            break;
        case "2":
            listarPaises()
            break;
        case "3":
            atualizarPais()
            break;
        case "4":
            removerPais()
            break
        case "5":
            lerIndicePais()
            break;
        case "6":
            process.exit()
            break;
        default:
            console.log("Opção inválida!")    
        break;
    }
    };

