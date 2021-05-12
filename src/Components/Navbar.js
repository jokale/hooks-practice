// import React, { Component } from 'react';
// import { AuthContext } from '../Contexts/AuthContext';
// import { ThemeContext } from '../Contexts/ThemeContext';


// class Navbar extends Component {

//     static contextType= ThemeContext;
//     render() { 
//         console.log(this.context)
//         const { isLightTheme, light, dark} = this.context
//         const theme = isLightTheme ? light : dark ;
//         return (  
//             <AuthContext.Consumer> {(AuthContext )=>
            
            
            
//             }

//             return (

         
//                 <nav style={{background: theme.ui, color: theme.syntax}}>
//                     <h1> Context App</h1>
//                     <ul>
//                     <li>Home</li>

//                         <li>About</li>
//                         <li> Contact</li>

//                     </ul>
//                 </nav>
//        )     </AuthContext.Consumer>
//          );
//     }
// }
 
// export default Navbar;



import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { AuthContext } from '../Contexts/AuthContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <AuthContext>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}</ThemeContext.Consumer>
      )}</AuthContext>
    );
  }
}

export default Navbar;
