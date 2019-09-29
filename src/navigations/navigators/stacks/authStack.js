import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from '../../../screens/Auth/Login';
import Register from "../../../screens/Auth/Registration";
import Home from "../../../screens/Home/Home"
import {Header} from 'react-navigation-stack';

const AppNav = createStackNavigator({
  Home,
  Register: Register,
  Login: Login
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
