# 2ndProject-StorefrontBackend22FEB22
fwd Second Project Initiate Project
assisted by refernece :
Udacity lessons and 
https://www.youtube.com/playlist?list=PLLWuK602vNiVLQ4rAylfIkqp3rkN0TuPD

Install npm init -y
in order to resolve package.json error to add npm version yarn init -y yarn add --dev typescript install TypeScript Access bin in node modules to run tsc ./node_modules/.bin/tsc --init configure tsconfig file Create src folder create index.ts in src folder Test index.ts complie the file tsc to update use nodemon yarn add --dev nodemon ts -node configure package.json add "scripts": { "dev": "nodemon src/index.ts", "build": "tsc", "start":"npm run build && node dist/index.js" } Run git status Run git add. git commit -m "Initiate Second Project with Typescript" Run --if this is first time to access Git professionaly like me :)

git config --global user.email "you@example.com" git config --global user.name "Your Name" Run Git push

Install Prettier
yarn add --dev --exact prettier install VS Code Prettier Code formatter Ext. Create .prettier.json file echo {}> .prettierrc.json Configure prettier file in settings VS apply format on save option add in package.json in script "format": "prettier --write src/**/*.ts"

Install Eslint
yarn add --dev eslint npx eslint --init

Configure eslint with Prettier
yarn add --dev eslint-config-prettier eslint-plugin-prettier
configure Eslint rules: "rules": { "no-console":0, //Means No Issue //"no-console":1 //Mean error "prettier/prettier":2 //mean error }

module.exports = {
"env": {
    "browser": true,
    "es2021": true,
    "node": true    
},
Configure package.json
 "plugins": [
    "@typescript-eslint",'prettier'
],
Install the Server
yarn add express yarn add --dev @types/express

#index.ts code import express, {Application} from 'express' //create server instance const app: Application = express(); const port = 3000 //Start Express Server app.listen(port ,()=>{ console.log(The server Up and Running On: http://localhost:${port}); }) app.get('/',(req, res)=>{ console.log('Hello Udacity'); res.json({ message: 'Hello Udacity' }) }); export default app;

Create helpers folder in src
add reporter.ts in helpers folder

Yarn start Yarn dev Or npm run start npm start dev Then
Install Jasmin
yarn add --dev jasmine --To Add Types/jasmin yarn add --dev @types/jasmine

Add Specialization for Unit Testing
npx jasmine init

Configure Jasmine.json
Change spec_dir to dist Make random: false Create tests folder in src Create in tests folder the indexSpec.ts file #indexSpec.ts Code import supertest from 'supertest'; import app from '../index'; //Create request object const request = supertest(app); describe('Testmy Project basic endpoint reuest', ()=>{ it('Get the / my first endpoint',async () => { const response = await request.get('/'); //to test the respone console.log(response); //to recieve 200 feedback expect(response.status).toBe(200);

} ); });

add Supertest pacjage to test the endpoint
yarn add --dev supertest yarn add --dev @types/supertest Start write the testing cases in indexSpec.ts Add in package.json "test" : "npm run build && jasmine" Add yarn add --dev jasmine-spec-reporter https://github.com/bcaudan/jasmine-spec-reporter/tree/673e22cd3b13732b421a25e862dbe887692ed345/examples/typescript

Save the following code in reporter.ts
import { DisplayProcessor, SpecReporter, StacktraceOption } from 'jasmine-spec-reporter' import SuiteInfo = jasmine.SuiteInfo

class CustomProcessor extends DisplayProcessor { public displayJasmineStarted(info: SuiteInfo, log: string): string { return TypeScript ${log} } }

jasmine.getEnv().clearReporters() jasmine.getEnv().addReporter( new SpecReporter({ spec: { displayStacktrace: StacktraceOption.NONE, }, customProcessors: [CustomProcessor], }) )

# Start deal with Postgress
yarn add pg
Make sure yarn add tsc
Make sure add
yarn add tsc-watch
npm install tsc-watch --save-dev

npm install tsc --save-dev
Yarn add dotenv