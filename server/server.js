const express = require('express');
const cors = require('cors');
const clothingRouter = require('./routers/clothingRouter.js');
const cartRouter = require('./routers/cartRouter.js');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + '/src/build'));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  next();
});

app.use('/', clothingRouter);
app.use('/cart', cartRouter);

app.use((req, res) =>
  res.status(404).send('Page Not Found')
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});