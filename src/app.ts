import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import referenciaRoutes from './routes/registrarReferenciaRoute'
import guardarDatos from './routes/guardarDatosRoute'
import registrarUbicacion from './routes/registrarUbicacionRoute'
import traerCanastasPedido from './routes/traerCanastasPedido';
import canastaRoutes from './routes/registrarCanastaRoute';
import registrarUsuario from './routes/registrarUsuarioRoute'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/traerCanastasPedido', traerCanastasPedido)
app.use('/guardarDatos', guardarDatos)
app.use('/registrarReferencia', referenciaRoutes)
app.use('/registrarUbicacion', registrarUbicacion)
app.use('/registrarCanasta',canastaRoutes);
app.use('/registrarUsuario', registrarUsuario)

const PORT = process.env.PORT || 10101;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));