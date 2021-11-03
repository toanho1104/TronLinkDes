import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { useSelector } from 'react-redux'
import { navigationRef } from '../utils/NavigationHelpers'
import { screenName } from "../configs/index";
import BottomTabBarRoute from './bottomTab/bootomTabBarRoutes'



const Stack = createStackNavigator()

const RootRoutes = () => {
  const token = useSelector((state) => state.storage.token)
  return (
    <NavigationContainer
      ref={navigationRef}

    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        {/* <Stack.Screen name={screenName.Splash} component={Splash} /> */}
        {/* <Stack.Screen name={screenName.Wellcome} component={Wellcome} /> */}
        {/* <Stack.Screen name={screenName.LoginScreen} component={LoginScreen} /> */}
        <Stack.Screen name={screenName.BottomTabBarRoute} component={BottomTabBarRoute} />
        {/* <Stack.Screen name={screenName.CourseDetailsScreen} component={CourseDetailsScreen} />
          <Stack.Screen name={screenName.AppSetting} component={AppSetting} />
          <Stack.Screen name={screenName.Contact} component={Contact} />
          <Stack.Screen name={screenName.AppInfor} component={AppInfor} />
          <Stack.Screen name={screenName.UserSetting} component={UserSetting} />
          <Stack.Screen name={screenName.LearningScreen} component={LearningScreen} /> */}
        {/* <Stack.Screen name={screenName.DetailsCourseListScreen} component={DetailsCourseListScreen} /> */}
        {/* <Stack.Screen name={screenName.SearchRoutes} component={SearchRoutes} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootRoutes
