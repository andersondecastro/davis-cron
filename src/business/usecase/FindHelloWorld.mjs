import helloWorldRepository from '../entity/hello_world/HelloWorldRepository.mjs'

export default class FindHelloWorld {
    async execute(incomePayload, responder) {
        try {
            const resultQuery =  await helloWorldRepository.find(incomePayload)
            responder.success(resultQuery)

        } catch (err) {
            responder.error(err)
        }
    }
}
