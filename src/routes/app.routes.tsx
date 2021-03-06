import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { DailyReport } from "../screens/DailyReport";
import { Stock } from "../screens/Stock";
import { ProductDetail } from "../screens/ProductDetail";

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
            <Stack.Screen 
                name="Stock"
                component={Stock}
                options={{
                    animation: 'none'
                }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    animation: 'none'
                }}
            />
        </Stack.Navigator>
    )
}