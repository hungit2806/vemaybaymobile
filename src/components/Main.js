import {
    createDrawerNavigator,
} from 'react-navigation';
import Home from './home/Home' 
const Main = createDrawerNavigator({
    Home: { screen: Home },
    Home1: { screen: Home },
});
export default Main;