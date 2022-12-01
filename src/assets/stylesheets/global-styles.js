import Theme from "./theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {Dimensions} from 'react-native';
export default {
  container: {
    flex: 1,
    //height:Dimensions.get("window").height,
    //height:hp(20),
    backgroundColor: Theme.background
  },
  

};
