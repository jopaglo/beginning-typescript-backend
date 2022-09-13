"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = 3333;
server.use((0, cors_1.default)());
server.use(routes_1.default);
server.listen(port, () => console.log(`server running on port ${port}`));
/*
1. o node por padrão nao consegue entender o typescript, por isso eu preciso
transpilar o código para javascript para que ele rode: yarn tsc src/index.ts

2. eu preciso gerar o arquivo de configuracao do typescript: yarn tsc --init

3. propriedades importantes do arquivo tsconfig.json
outDir: onde vai ser gerado o codigo transpilado

4. para automatizar o processo de transpilar e reiniciar o server eu vou
usar o ts-node-dev que já suporta os decorators/anotations @ e faz o trabalho
do antigo nodemon

5. o typescript adiciona tipagem ao javascript. alguns tipos ele detecta
automaticamente e outros vamos ter que avisar qual o tipo
*/ 
