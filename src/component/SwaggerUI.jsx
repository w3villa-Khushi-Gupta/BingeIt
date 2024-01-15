import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerSpec from './swaggerConfig'; // Import your Swagger configuration file

function SwaggerDocs() {
  return <SwaggerUI spec={swaggerSpec} />;
}

export default SwaggerDocs;
