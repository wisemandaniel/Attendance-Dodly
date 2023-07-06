import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Registration from './src/screens/Registration'
import OtpScreen from './src/screens/OtpScreen';
import Dashboard from './src/screens/Dashboard'
import DropOffLocation from './src/screens/DropOffLocation';
import ScanCode from './src/screens/ScanCode'
import Confirmation from './src/screens/Confirmation'
import Plastics from './src/screens/TopTabNav/Plastics';
import Community from './src/screens/TopTabNav/Community';
import GiveBlood from './src/screens/TopTabNav/GiveBlood';
import Profile from './src/components/Profile';
import ProfileScreen from './src/screens/ProfileScreen'
import Collections from './src/screens/Agent/Collections';
import BarCodeScannerScreen from './src/screens/BarCode';
import ApproveCollection from './src/screens/Agent/ApprovedCollection';
import ApprovedFinalCollection from './src/screens/Agent/ApprovedFinalCollection';
import PostJob from './src/screens/PostJob';
import JobAddDetail from './src/screens/JobAddDetail';
import ReferralCode from './src/screens/ReferralCode';
import EnterReferralCode from './src/screens/EnterReferralCode';
import NoReferralCode from './src/screens/NoReferralCode';
import ConfirmReferralCode from './src/screens/ConfirmReferralCode';
import PlasticsConfirmation from './src/screens/PlasticsConfirmation';
import CreateUnlockPin from './src/screens/CreateUnlockPin';
import Colors from './src/constants/colors';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
         screenOptions={{ }} initialRouteName="Registration"
      >
      <Stack.Screen 
         name="Dashboard" 
         component={Dashboard} 
         options={{headerShown: false}}
        />
        <Stack.Screen 
           name="Registration" 
           component={Registration}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="Login" 
           component={Login}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="Otp" 
           component={OtpScreen}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="Profile" 
           component={Profile}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="ProfileScreen" 
           component={ProfileScreen}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="CreateUnlockPin" 
           component={CreateUnlockPin}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="ReferralCode" 
           component={ReferralCode}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="EnterReferralCode" 
           component={EnterReferralCode}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="NoReferralCode" 
           component={NoReferralCode}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="ConfirmReferralCode" 
           component={ConfirmReferralCode}
           options={{headerShown: false}}
        />
        {/* <Stack.Screen 
           name="Dashboard" 
           component={Dashboard}
           options={{headerShown: false}}
        /> */}
        <Stack.Screen 
           name="Plastics" 
           component={Plastics}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="drop" 
           component={DropOffLocation}
           options={{title: 'Select drop off location'}}
        />
        <Stack.Screen 
           name="scan" 
           component={ScanCode}
           options={{title: 'Go to drop off location', headerShadowVisible: false, headerStyle: {
            backgroundColor: '#fff'
           }}}
        />
        <Stack.Screen 
           name="PlasticsConfirmation" 
           component={PlasticsConfirmation}
           options={{title: 'Confirmation', headerShadowVisible: false, headerStyle: {
            backgroundColor: '#fff'
           }}}
        />
        <Stack.Screen 
           name="Confirmation" 
           component={Confirmation}
           options={{title: 'Confirmation'}}
        />
        <Stack.Screen 
           name="Community" 
           component={Community}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="GiveBlood" 
           component={GiveBlood}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="Collections" 
           component={Collections}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="BarCodeScannerScreen" 
           component={BarCodeScannerScreen}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="ApproveCollection" 
           component={ApproveCollection}
           options={{headerShown: false}}
        />
        <Stack.Screen 
           name="ApprovedFinalCollection" 
           component={ApprovedFinalCollection}
           options={{headerShown: true, title: ' '}}
        />
        <Stack.Screen 
           name="PostJob" 
           component={PostJob}
           options={{headerShown: true, title: 'Post a job'}}
        />
        <Stack.Screen 
           name="JobAddDetail" 
           component={JobAddDetail}
           options={{headerShown: true, title: 'Add Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

