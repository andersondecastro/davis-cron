# @agrointeli/microservice-demo

HelloWorld Template

This API is part of a generic microservice architecture proposal. 
Its goal is to define a skeleton for building scalable software.

Credits for @codate
https://github.com/codate
by: Charles Viegas

Edited By: Vitor Jucá
https://github.com/vitorjuca

## Requirements

```bash
    node 9.0.0
```

## How to install

```bash
git clone https://github.com/agrointeli/microservice-demo.git
npm install
```

## How to start

```bash
PORT=8081
URL=mongodb://localhost/database
npm start 

```
## How to test

```bash
npm test

```

## How to use

**HelloWorld**
    Save HelloWorld on database

* **URL**
    POST /

* **Data Params**
    
    ```json
    { 
        "hello_world" : "Olá mundo" 
    }
    ``` 

* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        { 
            "_id": "13423141234898ASDFAS",
            "hello_world" : "Olá Mundo"
        }
        ```