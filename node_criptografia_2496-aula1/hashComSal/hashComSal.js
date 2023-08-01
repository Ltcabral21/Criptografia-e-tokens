import{scryptSync, randomBytes, timingSafeEqual, scrypt} from "crypto"

function criaHashComSal(password){
const sal= randomBytes(16). toString('hex')
const senhaHasheada = scryptSync(password,sal,64).toString('hex')
return `${sal}:${senhaHasheada}`
}  
class Usuario{
    constructor(nome,senha){
        this.nome= nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome,senha){
        if(nome===this.nome){
            const testeHash = scryptSync(senha,this.sal,64);
            const hashReal= Buffer.from(this.hash,( 'hex'))        

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)
           if(hashesCorrespondem )
           console.log( "usuarioa autenticado com sucesso")
           return true
    }
       console.log(" senha ou usuario incorretos")
         return false }
    }
const lt = new Usuario( 'Lucas Terra', 'oi')
console.log(lt)

lt.autentica("Lucas Terra", "oi")