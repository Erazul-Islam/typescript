import { server } from 'typescript'
import app from './app'

const PORT = 5000

let server:server

async function bootsrap() {

     server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

}

bootsrap()