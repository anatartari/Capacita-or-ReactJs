import React from 'react';

import { Link } from 'react-router-dom';

import Hello from '../Components/Apresenta'
import Formulario from '../Components/Formulario'

function Home() {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginTop: 150 }}>Hello Word</h1>
            {/* Props */}
            <Hello name="Ana" lugar="Farol" />
            <Hello name='Maria' lugar="Praia" />
            <Hello name='Xande' lugar="Role" />
            <Formulario />

            <Link to="/paginadois">
                Ir para proxima pagina
            </Link>
        </div>
    );
}

export default Home;
