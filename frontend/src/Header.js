import React from 'react';


/**
 * 
 * Sempre que quiser injetar uma variável ou função dentro do html do componente deve-se
 * circundá-lo com "{}"
 */
export default function Header({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

//export default Header;

