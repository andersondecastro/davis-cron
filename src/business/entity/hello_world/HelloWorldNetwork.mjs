import axios from 'axios'
import environment from '../../../common/environment.mjs'

class HelloWorldNetwork {
    async requestToAnotherAPI(userData) {
        return new Promise((resolve, reject) => {
            const url = `${environment.server.host}:${environment.microservices.ANOTHER_MICROSERVICE_PORT}/OTHER-ENDPOINT`
            axios.post(url, userData)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(new Error(error))
                })
        })
    }
}

export default new HelloWorldNetwork()
