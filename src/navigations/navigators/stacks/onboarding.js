import { createAppContainer, createStackNavigator } from 'react-navigation';
import Welcome from '../../../screens/Onboarding/Welcome';
import Welcome2 from '../../../screens/Onboarding/Welcome2';
import Welcome3 from '../../../screens/Onboarding/Welcome3';
import W2 from '../../../screens/Welcome/Welcome';

const AppNav = createStackNavigator({
    Welcome_Screen: Welcome,
    Welcome_Screen2: Welcome2,
    Welcome_Screen3: Welcome3,
}, {
    initialRouteName: 'Welcome_Screen',
    defaultNavigationOptions: () => {
        return { header: null };
    },
});

export default createAppContainer(AppNav);
