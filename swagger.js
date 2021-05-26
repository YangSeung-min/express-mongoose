const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Schedule API",
      version: "1.0.0",
      description: "Schedule API with express",
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
