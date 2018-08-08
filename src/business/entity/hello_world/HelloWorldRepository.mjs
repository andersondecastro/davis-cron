import HelloWorld from './HelloWorld.mjs'

class HelloWorldRepository {
    async save(payload) {
        const helloWorld = new HelloWorld(payload)
        return new Promise((resolve, reject) => {
            helloWorld.save((err, result) => {
                if(err) reject(new Error("PEY"))
                else resolve(result)
            })
        })
    }

    async find(payload){
        return HelloWorld.find(payload)
    }

    async delete(payload){
        return HelloWorld.remove(payload)
    }

    async isAlreadyPersisted(payload){
        const resultQuery = await this.find(payload)
        if(!resultQuery.length)
            return false
        else
            return true
    }
}

export default new HelloWorldRepository()
