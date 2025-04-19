import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Feather } from '@expo/vector-icons';
import { ImageBackground,Image } from 'react-native';


const TabIcon =({focused,icon,title}:any) =>{
    if(focused)
    {
        return(
            <>
                <ImageBackground source={require('../../assets/nav.png')} 
     className="flex flex-row w-full flex-1 min-w-[125px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden ">
                    <Image source={icon} tintColor="#151312" className='size-7'/>
                    <Text className='text-base front-semibold ml-2 '>{title}</Text>
                </ImageBackground>
            </>
        )
    }

    return(
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#151312" className='size-7'/>
        </View>
    )
    
}


const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarStyle:{
            backgroundColor:"#3A86FF",
            borderRadius:50,
            marginHorizontal:20,
            marginBottom:30,
            height:52,
            position:'absolute',
            overflow:'hidden',
            borderColor:"#3A86FF"
        }
    }}>


        <Tabs.Screen name="Seeker_Home" 
            options={{
                title:'Home' ,
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={require('../../assets/home.png')} title={"Home"} />
                ) 
        }} />

        <Tabs.Screen name="Seeker_Quotes" 
            options={{
                title:'Quotes' ,
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={require('../../assets/quote.png')} title="Quotes" />
                ) 
        }} />

        <Tabs.Screen name="Seeker_Bookings" 
            options={{
                title:'Bookings' ,
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={require('../../assets/booking.png')} title={"Bookings"} />
                ) 
        }} />
        
    </Tabs>
  )
}

export default _layout



//