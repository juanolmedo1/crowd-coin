import 'semantic-ui-css/semantic.min.css'
import React from 'react';

const Layout = ({ children }) => {
    return (
    <div>
        <p>text</p>
        {children}
        <p>hola</p>
    </div>);
}

export default Layout;