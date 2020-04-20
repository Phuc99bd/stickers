const app = require("../../app"),
    supertest = require("supertest"),
    request = supertest(app)

describe('Get all' , ()=>{
    test('Test',done=>{
        request.get("/api/v1/stickers").then(respone=>{
            expect(respone.status).toBe(200)
            expect(respone.body).toBeTruthy()
            done()
        })
    })
})