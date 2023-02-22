import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './context/UserContext';
import Navigation from './navigations/Navigation';

const App = () => {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
