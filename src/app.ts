import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import referenciaRoutes from './routes/registrarReferenciaRoute'

import guardarDatos from './routes/guardarDatosRoute'

import registrarUbicacion from './routes/registrarUbicacionRoute'

import traerCanastasPedido from './routes/traerCanastasPedido';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/traerCanastasPedido', traerCanastasPedido)


app.use('/guardarDatos', guardarDatos)
app.use('/registrarReferencia', referenciaRoutes)
app.use('/registrarUbicacion', registrarUbicacion)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));