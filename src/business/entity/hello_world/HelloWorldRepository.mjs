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
}

export default new HelloWorldRepository()
