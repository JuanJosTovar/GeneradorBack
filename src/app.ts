import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

import registrarUbicacion from './routes/registrarUbicacionRoute'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/registrarUbicacion', registrarUbicacion)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
