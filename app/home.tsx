import { View, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <Stack.Screen 
            options={{
                headerShown: false,
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View>
                    <Text>Home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;