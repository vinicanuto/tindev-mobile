import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login.js';
import Main from './pages/Main.js';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main
    })
);