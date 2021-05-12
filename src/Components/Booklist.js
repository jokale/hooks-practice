import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

class Booklist extends Component {
    static contextType = ThemeContext
    render() { 

        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return ( 
            <div className="booklist" style={{color: theme.syntax, background: theme.bg}}>

                <ul>
                    <li style={{background: theme.ui }}>  Harry Potter 1</li>
                    <li style={{background: theme.ui }}>  Harry Potter 2</li>
                    <li style={{background: theme.ui }}>  Harry Potter 3</li>
                    <li style={{background: theme.ui }}>  Harry Potter 4</li>

                </ul>
            </div>
         );
    }
}
 
export default Booklist;