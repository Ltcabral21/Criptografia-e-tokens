import {createCipheriv, randomBytes, createDecipheriv} from "crypto"

const msg = 'Burrão'
const key = randomBytes(32)
const vi = randomBytes(16)

const cifra = createCipheriv('aes256', key, vi)

const mensagemCifrada = cifra.update(msg, 'utf-8', 'hex') + cifra.final('hex')

console.log(mensagemCifrada)

///Transmição-------------------------
   
const decifra = createDecipheriv('aes256', key, vi );
const msgDecifrada = decifra.update( mensagemCifrada, 'hex', 'utf-8')+ decifra.final('utf-8')

console.log(`voce é um ${msgDecifrada.toString('utf-8')}`)