import {create} from "zustand"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useAuthStore = create( (set) => ({
    user:null,
    role: null,
    token:null,
    isLoading: false,

    registerSeeker: async (name,email,number,password)=>{
        set({isLoading: true})
        
        try{
            
            const response = await fetch("http://192.168.1.2:5000/api/auth/seeker/register" , {
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
                name,email,number,password
              })
            })
      
            const data = await response.json()
            if (!response.ok) {
                const errorData = await response.json();
                console.log("Backend error response:", errorData);
                throw new Error(errorData.message || "Something went wrong");
              }
              console.log(data.token , data.role , data.newSeeker)
            await AsyncStorage.setItem("user",JSON.stringify(data.newSeeker))
            await AsyncStorage.setItem("token",data.token)
            await AsyncStorage.setItem("role", data.role)
            
            set({token: data.token, user:data.newSeeker, role:data.role, isLoading:false})
      
            return {success:true}
      
          } catch (error) {
            set({isLoading: false})

            return {success: false, error: error.message}
        }
    },

    registerProvider: async (name,email,phone,password,serviceCategory,speciality,experience)=>{
        set({isLoading: true})
        
        try{
            
            const response = await fetch("http://192.168.1.2:5000/api/auth/provider/register" , {
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
                name,email,phone,password,serviceCategory,speciality,experience
              })
            })
      
            const data = await response.json()
            if (!response.ok) {
                const errorData = await response.json();
                console.log("Backend error response:", errorData);
                throw new Error(errorData.message || "Something went wrong");
              }
              console.log(data.token , data.role , data.newSeeker)
            await AsyncStorage.setItem("user",JSON.stringify(data.newSeeker))
            await AsyncStorage.setItem("token",data.token)
            await AsyncStorage.setItem("role", data.role)
            
            set({token: data.token, user:data.newSeeker, role:data.role, isLoading:false})
      
            return {success:true}
      
          } catch (error) {
            set({isLoading: false})

            return {success: false, error: error.message}
        }
    },

    loginSeeker: async (email,password,selectedRole)=>{
        set({isLoading: true})
        if(selectedRole=="seeker")
        {
            const url="http://192.168.1.2:5000/api/auth/seeker/login"
        }
        else
        {
            const url="http://192.168.1.2:5000/api/auth/provider/login"
        }
        try{
            
            const response = await fetch(url , {
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
                email,password
              })
            })
      
            const data = await response.json()
            if (!response.ok) {
                const errorData = await response.json();
                console.log("Backend error response:", errorData);
                throw new Error(errorData.message || "Something went wrong");
              }
              console.log(data.token , data.role , data.seeker)
            await AsyncStorage.setItem("user",JSON.stringify(data.seeker ))
            await AsyncStorage.setItem("token",data.token)
            await AsyncStorage.setItem("role", data.role)

            //console.log(data.token , data.role , data.newSeeker)

            set({token: data.token, user:data.newSeeker, role:data.role, isLoading:false})
      
            return {success:true}
      
          } catch (error) {
            set({isLoading: false})

            return {success: false, error: error.message}
        }
    },

    checkAuth: async() => {
        try{
            const token= await AsyncStorage.getItem("token")
            const role = await AsyncStorage.getItem("role")
            const userJson = await AsyncStorage.getItem("user") // user is stored as json
            const user = userJson ? JSON.parse(userJson) : null
            
            set({token,user,role})

        }
        catch(error)
        {
            console.log("Auth check failed:",error)
        }
    },

    logout: async () =>{
        await AsyncStorage.removeItem("user")
        await AsyncStorage.removeItem("token")
        await AsyncStorage.removeItem("role")
        set({token:null , user:null,role: null})
    }
}))