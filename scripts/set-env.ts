const { writeFile } = require('fs');
const { resolve } = require('path');
require('dotenv').config();

// Correctly access the environment variable using bracket notation
const googleMapsAPIKey = process.env['GOOGLE_MAPS_API_KEY'] || '';

// Log to check if the script is being executed
console.log('set-env.ts is being executed');
console.log(`Google Maps API Key from .env: ${googleMapsAPIKey}`);

if (!googleMapsAPIKey) {
  console.error('Error: GOOGLE_MAPS_API_KEY is not set in the .env file.');
  process.exit(1);
}

// Paths to environment files
const environmentFilePath = resolve(
  __dirname,
  '../src/environments/environment.ts'
);
const environmentProdFilePath = resolve(
  __dirname,
  '../src/environments/environment.prod.ts'
);

// Content for environment.ts (development)
const environmentFileContent = `
export const environment = {
  production: false,
  googleMapsAPIKey: '${googleMapsAPIKey}',
};
`;

// Content for environment.prod.ts (production)
const environmentProdFileContent = `
export const environment = {
  production: true,
  googleMapsAPIKey: '${googleMapsAPIKey}',
};
`;

// Write environment.ts
writeFile(environmentFilePath, environmentFileContent, (err: any) => {
  if (err) {
    console.error(`Error writing environment.ts: ${err}`);
  } else {
    console.log(`Environment file generated at ${environmentFilePath}`);
  }
});

// Write environment.prod.ts
writeFile(environmentProdFilePath, environmentProdFileContent, (err: any) => {
  if (err) {
    console.error(`Error writing environment.prod.ts: ${err}`);
  } else {
    console.log(
      `Production environment file generated at ${environmentProdFilePath}`
    );
  }
});
