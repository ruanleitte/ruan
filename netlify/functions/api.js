// Arquivo de função serverless que serve como proxy para o seu backend Express
import express from 'express';
import serverless from 'serverless-http';

// Importar as mesmas rotas do seu servidor Express
import { registerRoutes } from '../../server/routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar middlewares
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
  });
  next();
});

// Registrar todas as rotas da API
(async () => {
  try {
    await registerRoutes(app);
  } catch (error) {
    console.error('Erro ao registrar rotas:', error);
  }
})();

// Configurar tratamento de erros
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Exportar o handler da função serverless
export const handler = serverless(app);