import { Readable } from 'node:stream'

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

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
})