const app = require('./app');
const { PORT } = require('./variables/env-variable');

app.listen(PORT, () => {
  console.log(`please visit http://localhost:${PORT}`);
});
