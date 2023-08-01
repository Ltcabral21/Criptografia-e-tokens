import { generateKeyPairSync } from 'crypto'

const {privateKey, publicKey } = generateKeyPairSync('rsa',{
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

//console.log(publicKey)
//console.log(privateKey)

import { publicEncrypt, privateDecrypt } from 'crypto'

const dadosCriptografados = publicEncrypt( publicKey, Buffer.from ('Burra nao sabe jogar street Fighter ') )

console.log( dadosCriptografados.toString('hex'))

//------------Trasnmisão---------------//

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
    )
    console.log(`Dados Decifrados: ${dadosDecifrados.toString('utf-8')}`)