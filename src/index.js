const app = require('./app');
const { PORT, DEVELOPEMENT } = require('./variables/env-variable');

app.listen(PORT, () => {
  DEVELOPEMENT == true
    ? console.log(`please visit http://localhost:${PORT}`)
    : null;
});
