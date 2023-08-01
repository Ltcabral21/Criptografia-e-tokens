import {createHash}  from "crypto"
import { truncate } from "fs";
import { threadId } from "worker_threads";
 function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
 }
 console.log(criaHash("Uma string qualquer"))

 class Usuario{
    constructor(nome,senha){
        this.nome= nome;
        this.hash= criaHash(senha);

    }
  autentica(nome,senha){
    if(nome===this.nome &&this.hash===criaHash(senha)){
console.log('Usuario cadastrado')
return true
    }
 console.log('Usuario não cadastrado ')
 return false
}
 }
 const usuario= new Usuario('lucas Cabral', 'Geil4321')
 console.log (usuario)
 usuario.autentica('lucas Cabra', 'Geil4321')
 