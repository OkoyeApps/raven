import {createAppContainer, createStackNavigator} from 'react-navigation';
import Login from '../../../screens/Auth/Login';
import {Header} from 'react-navigation-stack';

const AppNav = createStackNavigator({
  Login: Login,
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
