import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Timeline
    })
)

export default Routes;