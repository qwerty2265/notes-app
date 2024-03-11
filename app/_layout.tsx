import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router"
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    initialRouteName: "home",
};

const Layout = () => {
    const [fontsLoaded] = useFonts({
        UbuntuRegular: require("../assets/fonts/Ubuntu-Regular.ttf"),
        UbuntuMedium: require("../assets/fonts/Ubuntu-Medium.ttf"),
        UbuntuBold: require("../assets/fonts/Ubuntu-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(() => {
        if(fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return (
        <Stack initialRouteName="home">
            <Stack.Screen name="home" />
        </Stack>
    )
}

export default Layout;