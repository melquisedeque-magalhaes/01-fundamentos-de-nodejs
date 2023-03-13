import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumber extends Transform {
    _transform(chunk, encoding, callback) {
        const trasformaded = Number(chunk.toString()) * -1

        console.log(trasformaded)

        callback(null, Buffer.from(String(trasformaded)))
    }
}

const server = http.createServer((req, res) => {
    return req.pipe(new InverseNumber()).pipe(res)
})

server.listen(3334, () => {
    console.log("Server runing!!!")
})