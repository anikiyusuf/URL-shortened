const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Shortly API Documentation',
      version: '1.0.0',
      description:'This is a REST API application made with express.',
      license:{
        name:"Juliana Micheal",
        url:"https://anikiyusufportfolio.netlify.app"
    },
    contact:{
        name: 'Scissor',
        url: 'https://shortly-ly.onrender.com',
    },
    },
    servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
  },
  apis: ['./routes/*.js'], // Replace with the path to your API route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;