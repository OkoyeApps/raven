import {createAppContainer, createStackNavigator} from 'react-navigation';
import Help from '../../../screens/Settings/Help';

const AppNav = createStackNavigator({
  Help: Help
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
