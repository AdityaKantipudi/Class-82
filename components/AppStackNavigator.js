import {createStackNavigator} from "react-navigation-stack"
import BookDonateScreen from "../screens/BookDonateScreen"
import RecieverDetailsScreen from "../screens/RecieverDetailsScreen"

export const AppStackNavigator = createStackNavigator({
    bookDonateList:{
        screen:BookDonateScreen
    },
    recieverDetails:{
        screen:RecieverDetailsScreen
    },
},
{
    initialRouteName:"bookDonateList"
})