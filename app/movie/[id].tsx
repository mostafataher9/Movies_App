import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const Onboarding= () =>
{
    /* {id} destruct from localsearchparam */
    const {id}=useLocalSearchParams();
    return(

        <View>
            <Text> Movie Details {id}</Text>
        </View>
    )
}
export default Onboarding
const styles = StyleSheet.create({})
