import {createAppContainer, createStackNavigator} from 'react-navigation';
import Settings from '../../../screens/Settings/Settings'
import Home from "../../../screens/Home/Home"

const AppNav = createStackNavigator({
  Settings: Settings
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
