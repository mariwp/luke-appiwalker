import React from 'react';
import obiWan from './img/obiWan.jpg';

function Error() {
    return (
        <div>
            <p>Estos no son los droides que está buscando</p>
            <img src={obiWan} alt="Obi-Wan Kenobi" />
        </div>
    );
}

export default Error;
