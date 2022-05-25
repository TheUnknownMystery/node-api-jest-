const app = require('./app');
const { PORT, PRODUCTION } = require('./variables/env-variable');

app.listen(PORT, () => {
  PRODUCTION ? console.log(`please visit http://localhost:${PORT}`) : null;
});
