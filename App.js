import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './src/screens/HomeScreen'
import KnowMoreScreen from './src/screens/know-more/KnowMoreScreen';
import DetailScreen from './src/screens/details/DetailScreen'
import LifeWithHypsiesScreen from './src/screens/details/life-with-hypsies/LifeWithHypsiesScreen';
import GameScreen from './src/screens/game/GameScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    KnowMore: KnowMoreScreen,
    Detail: DetailScreen,
    LifeWithHypsies: LifeWithHypsiesScreen,
    Game: GameScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Hypsies',
      headerTintColor: 'teal'
    },
  }
);
const Drawer = createDrawerNavigator()

export default createAppContainer(navigator);
