import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from '../../../screens/Auth/Login';
import Register from "../../../screens/Auth/Registration"
import {Header} from 'react-navigation-stack';

const AppNav = createStackNavigator({
  Register: Register,
  Login: Login
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
