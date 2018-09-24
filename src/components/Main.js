import {
    createStackNavigator,
} from 'react-navigation';
import Home from './home/Home' 
const Main = createStackNavigator({
    Home: { screen: Home },
});
export default Main;