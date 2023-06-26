const request = require('supertest')
const { connect } = require("./database")
const UserModel = require("../model/userModel")
const app = require('../index')


describe('Auth:Signup', () => {
    let conn;
    beforeAll(async() => {
        conn = await connect() 
    })

    afterEach(async () => {
        await conn.cleanup()
    })
    afterAll(async () => {
        await conn.disconnect()
    })

    it('should signup a user' , async() => {
        const response = await request(index).post('/signup')
        .set('content-type' , 'application/json')
        .send({
            firstName: 'Yusuf',
            lastName: 'Aniki',
            email:"anikiyusuf@gmail.com",
            password:'aniki12345'
        })
        
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('message')
        expect(response.body).toHaveProperty('user')
        expect(response.body.user).toHaveProperty('firstName', 'Yusuf')
        expect(response.body.user).toHaveProperty('lastname', 'Aniki')
        expect(response.body.user).toHaveProperty('email', 'anikiyusuf@mail')
    })
}) 




it('should login a user', async () => {
    // create user in out db
    const user = await UserModel.create({ email: 'anikiyusuf@gmail.com', password: 'aniki12345'});

    // login user
    const response = await request(app)
    .post('/login')
    .set('content-type', 'application/json')
    .send({ 
        email: 'anikiyusuf@gmail.com', 
        password: 'aniki123456'
    });


    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')      
})
