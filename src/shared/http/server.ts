import app from './app';
import '../../../'
app.listen(process.env.PORT || 3333, () => {
    console.log('⚡️ Server listening on port 3333');
  });