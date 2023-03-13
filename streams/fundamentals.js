import { Readable, Writable, Transform } from 'node:stream'
// process.stdin.pipe(process.stdout)

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if(i > 100){
                return this.push(null)
            }else{
                const buff = Buffer.from(String(i))
    
                return this.push(buff)
            }
        }, 1000)
    }
}

class InverseNumber extends Transform {
    _transform(chunk, encoding, callback) {
        const trasformaded = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(trasformaded)))
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
.pipe(new InverseNumber())
.pipe(new MultiplyByTenStream())