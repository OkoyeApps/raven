import {createAppContainer, createStackNavigator} from 'react-navigation';
import Settings from '../../../screens/Settings/Settings'
import Notification from "../../../screens/Notification/Notification";
import AddCard from "../../../screens/Payment/AddCard"
const AppNav = createStackNavigator({
  Notification,
  Settings,
  AddCard
},{
    defaultNavigationOptions: () => {
      return {header: null};
    },
  });

export default createAppContainer(AppNav);
