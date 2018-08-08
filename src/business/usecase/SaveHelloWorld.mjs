import helloWorldRepository from '../entity/hello_world/HelloWorldRepository.mjs'

export default class SaveHelloWorld {
    async execute(incomePayload, responder) {
        try {
            if(!this.isValidPayload(incomePayload))
                throw new Error('Invalid Payload')
            
            if(await helloWorldRepository.isAlreadyPersisted(incomePayload))
                throw new Error('Payload already persisted')
                    
            const savedHelloWorld =  await helloWorldRepository.save(incomePayload)
            responder.success({savedHelloWorld})

        } catch (err) {
            responder.error(err)
        }
    }

    isValidPayload(payload){
        return typeof(payload) != 'undefined' &&
                typeof(payload.hello_world) != 'undefined'
    }
}
