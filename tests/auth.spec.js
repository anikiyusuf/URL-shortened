const request = require('supertest')
const { connect } = require("./database")
const UserModel = require("../model/userModel")
const app = require('../index')


describe('auth:Signup', () => {
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

    it('should signup a user', async() => {
        const response = await request(index).post('/signup')
        .set('content-type', 'application/json')
        .send({
            firstName: 'Juliana',
            lastName: 'Micheal',
            email:"julianamicheal06@gmail.com",
            password:'julie56789'
        })
        
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('message')
        expect(response.body).toHaveProperty('user')
        expect(response.body.user).toHaveProperty('firstName', 'Juliana')
        expect(response.body.user).toHaveProperty('lastname', 'Micheal')
        expect(response.body.user).toHaveProperty('email', 'julianamicheal06@gmail')
    })
}) 




it('should login a user', async () => {
    // create user in out db
    const user = await UserModel.create({ email: 'julianamicheal06@gmail.com', password: 'julie56789'});

    // login user
    const response = await request(app)
    .post('/login')
    .set('content-type', 'application/json')
    .send({ 
        email: 'julianamicheal06@gmail.com', 
        password: 'julie56789'
    });


    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')      
})














// const request = require('supertest');
// // const { connect } = require("./database")
// const UserModel = require("../model/userModel")
// const app = require('../index'); // Assuming your Express app is exported from '../index'

// describe('Authentication', () => {
//   let token; // Variable to store the authentication token

//   // Test case for user registration
//   it('should register a user', async () => {
//     const response = await request(app)
//       .post('/signup')
//       .set('Content-Type', 'application/json')
//       .send({
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'johndoe@gmail.com',
//         password: 'maize56789',
//       });

//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty('message', 'User registered successfully');
//     expect(response.body).toHaveProperty('user');
//   });

//   // Test case for user login
//   it('should authenticate and login a user', async () => {
//     const response = await request(app)
//       .post('/login')
//       .set('Content-Type', 'application/json')
//       .send({
//         email: 'johndoe@gmail.com',
//         password: 'maize56789',
//       });

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('token');

//     // Save the token for future authenticated requests
//     token = response.body.token;
//   });

//   // Test case for accessing a protected route
//   it('should access a protected route', async () => {
//     const response = await request(app)
//       .get('/protected')
//       .set('Authorization', `Bearer ${token}`); // Include the authentication token in the request header

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('message', 'Protected route accessed successfully');
//   });
// });
