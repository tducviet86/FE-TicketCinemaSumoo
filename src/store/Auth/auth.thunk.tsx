import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../helpers/api";
import { LoginPayload, User } from "../../entity/types.entity";

export const getTokenAuth = createAsyncThunk<
  { token: string | null; user: User | null }
>(
  "auth/getTokenAuth",
  async () => {
    const token = await AsyncStorage.getItem("token");
    const userStr = await AsyncStorage.getItem("user");

    return {
      token,
      user: userStr ? JSON.parse(userStr) : null,
    };
  }
);

export const loginThunk = createAsyncThunk<{token:string, user:User},LoginPayload, { rejectValue: string }>("auth/login", async (data, { rejectWithValue }) => {
  try {
   
    const response = await authInstance.post("/auth/login", data)
    const {accessToken,user} = response.data
    console.log("STEP 1 OK");
    await AsyncStorage.setItem("token", accessToken)
    console.log("STEP 2 OK");
    await AsyncStorage.setItem("user", JSON.stringify(user))
    console.log("STEP 3 OK");
    console.log("done");
    
    return {token:accessToken, user}
  } catch (error: any) {
    console.log("CRASH HERE:", error);
    return rejectWithValue(
      error.response?.data?.message || "login failed"
    );
  }
});