import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { DailyReport } from "../screens/DailyReport";

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    animation: 'none'
                }}
            />
            <Stack.Screen 
                name="DailyReport"
                component={DailyReport}
                options={{
                    animation: 'none'
                }}
            />
        </Stack.Navigator>
    )
}