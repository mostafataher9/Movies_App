import { Link } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { SearchBar } from "react-native-screens";
export default function Index() {
  return (
    <View className="flex-1 bg-primary">
         <Image source={require('../../assets/images/bg.png')} className="absolute w-full z-0" />
         <Image source={require('../../assets/icons/logo.png')} className="mt-20 mb-5 mx-auto w-12 h-10" />
         {/* showsVerticalScrollIndicator={false} herte the vertical scrollbar will not appear*/}
         <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
          {/* Add your scrollable content here */}
            <View className="flex-1 mt-5">
                  <SearchBar />
            </View>
         </ScrollView>

        {/* we can write text-dark-200 */}
        <Link href="/onboarding" > onboarding </Link>
    </View>
  );
}
