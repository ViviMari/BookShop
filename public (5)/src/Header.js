import React from 'react';

export default class Header extends React.Component {
    render() {
        const STYLE = {
            width: '100%',
            backgroundColor: 'white',
        };
    
        return <h1 class="text-center" style={STYLE}>Looks4Books</h1>;
    }
}
