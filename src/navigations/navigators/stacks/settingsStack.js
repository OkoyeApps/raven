import {createAppContainer, createStackNavigator} from 'react-navigation';
import Settings from '../../../screens/Settings/Settings'
import Notification from "../../../screens/Notification/Notification";

const AppNav = createStackNavigator({
  Notification,
  Settings,
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
