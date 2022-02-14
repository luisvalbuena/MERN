require('dotenv').config()
const app = require('./app');
require('./db')

PORT = process.env.BACKEND_PORT

async function main(){
   await app.listen(app.get('port'));
   console.log('Server on port:', app.get('port'));
};

main();


