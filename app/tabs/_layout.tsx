import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

const tabIcon =({focused, icon, title}: any) => {
    if(focused){
            return(
                <ImageBackground source={require('../../assets/images/highlight.png')}
                        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                    >
                    {/*text-base is considered the "base" or default text size in most web applications. Other Tailwind text size classes include:
                        text-xs (12px)
                        text-sm (14px)
                        text-base (16px) ← This one
                        text-lg (18px)
                        text-xl (20px)
                        text-2xl (24px) */}
                    <Image source={icon} tintColor={focused ? "#51312" : "#999"} className="size-5" />
                    <Text className="text-secondary text-base ml-2 font-semibold">{title}</Text>
                </ImageBackground>
    )
    }
    else{
        return(
            <View className="size-full mt-4 justify-center items-center rounded-full overflow-hidden">
                <Image source={icon} tintColor="#999" />
            </View>
        );
    }

}

const _Layout = () => {
    return(
         <Tabs
                screenOptions={{ 
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: '100%',
                        height: '100%'
                    },

                    tabBarStyle: {
                        position: 'absolute',
                        overflow: 'hidden',
                        height: 52,
                        backgroundColor: '#0f0D23',
                        marginHorizontal: 10,
                        marginBottom: 36,
                        borderWidth: 1,
                        borderColor: '0f0d23',
                        borderRadius: 50
                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{ headerShown: false, title: 'Home',       
                         tabBarIcon: ({focused}) => (
                            <ImageBackground source={require('../../assets/images/highlight.png')}
                                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                            >
                                <Image source={require('../../assets/icons/home.png')} tintColor="#51312" className="size-5" />
                                <Text>Home</Text>
                            </ImageBackground>
                         )
                    }} 
                />
              
              <Tabs.Screen
                    name="saved"
                    options={{ headerShown: false, title: 'saved',       
                         tabBarIcon: ({focused}) => (
                            <ImageBackground source={require('../../assets/images/highlight.png')}
                                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                            >
                                <Image source={require('../../assets/icons/save.png')} tintColor="#51312" className="size-5" />
                                <Text>Saved</Text>
                            </ImageBackground>
                         )
                    }} 
                />

              <Tabs.Screen
                    name="search"
                    options={{ headerShown: false, title: 'Search',       
                         tabBarIcon: ({focused}) => (
                            <ImageBackground source={require('../../assets/images/highlight.png')}
                                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                            >
                                <Image source={require('../../assets/icons/search.png')} tintColor="#51312" className="size-5" />
                                <Text>Search</Text>
                            </ImageBackground>
                         )
                    }} 
                />
                 
             <Tabs.Screen
                    name="profile"
                    options={{ headerShown: false, title: "Profile",
                           //The property focused is a boolean value passed to your icon-rendering function to indicate whether the tab is currently active (selected) or not.-->
                         tabBarIcon: ({focused}) => (
                            <ImageBackground source={require('../../assets/images/highlight.png')}
                                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                            >
                                <Image source={require('../../assets/icons/person.png')} tintColor="#51312" className="size-5" />
                                <Text>Profile</Text>
                            </ImageBackground>
                         )
                    }} 
                />
         </Tabs>

    );
}

export default _Layout;