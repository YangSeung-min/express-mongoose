const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test API with express",
    },
    host: "localhost:4500",
    basePath: "/",
  },
  apis: ["./routes/*.js"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};