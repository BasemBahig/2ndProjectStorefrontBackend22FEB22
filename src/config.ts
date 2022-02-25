import dotenv from 'dotenv';
//import { basename } from 'path/posix';

dotenv.config();
console.log(process.env);
const   {ENV,
    PORT,
        POSTGRES_HOST,
        POSTGRES_PORT,
        POSTGRES_DB,
        POSTGRES_DB_TEST,
        POSTGRES_USER,
        POSTGRES_PASSWORD,
        tokenSecret ,
        
//const basem = basename;
} = process.env;
export default{
    ENV,
    port: PORT,
    tokenSecret ,
    host: POSTGRES_HOST,
    dbPort: POSTGRES_PORT,
    database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD,
    //basem: basem
};