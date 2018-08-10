import axios from 'axios'
import environment from '../../../common/environment.mjs'

class DavisNetwork {
    async requestWeatherlinkData(options) {
        return axios.get(options.url)
    }

    async sendWeatherLinkData(body){
        const url = `${environment.server.host}:${environment.microservices.DATAS_PORT}/datas/davis`
        return axios.post(url, body)
    }
}

export default new DavisNetwork()
