import React from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends React.Component {
    render() {
        return (
            <>

                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <Link class="nav-link " to="/book/search">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/books">Produkte</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/book/new">Buch hinzufügen</Link>
                    </li>

                </ul>
 
            </>
        );
    }
}
