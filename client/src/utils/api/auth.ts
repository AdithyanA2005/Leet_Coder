import axios, { AxiosResponse } from "axios";
import axiosInstance from "../../axios";

interface IAuthType {
  name: string;
  token: string;
};

interface IAuthResponse {
  name: string;
  email: string;
};

interface ISignInBody {
  email: string;
  password: string;
};

interface ISignUpBody {
  name: string;
  email: string;
  password: string;
};

// Send login request to the api
export async function handleSignIn(email: string, password: string): Promise<IAuthType> {
  try {
    // Sending Api request
    const response: AxiosResponse<IAuthResponse> = await axiosInstance.post<IAuthResponse>("/signin", { email, password } as ISignInBody);

    // Extract necessary data
    const userName: string = response.data.name;
    const userToken: string = response.headers.authorization.replace("Bearer ", "");

    return { name: userName, token: userToken };
  }
  catch (error: unknown) {
    // If it was not a api or axios error 
    if (!axios.isAxiosError(error)) throw new Error("Unexpected error");

    // If it is a axios error and also have a response from api
    if (error.response) throw new Error(error.response.data.error);

    // If it is a axios error not caused by api
    throw new Error("Network Error");
  }
};

// Send register request to the api
export async function handleSignUp(name: string, email: string, password: string): Promise<IAuthType> {
  try {
    // Sending Api request
    const response: AxiosResponse<IAuthResponse> = await axiosInstance.post<IAuthResponse>("/signup", { name, email, password } as ISignUpBody);

    // Extract necessary data
    const userName: string = response.data.name;
    const userToken: string = response.headers.authorization.replace("Bearer ", "");

    return { name: userName, token: userToken };
  }
  catch (error: unknown) {
    // If it was not a api or axios error 
    if (!axios.isAxiosError(error)) throw new Error("Unexpected error");

    // If it is a axios error and also have a response from api
    if (error.response) throw new Error(error.response.data.error);

    // If it is a axios error not caused by api
    throw new Error("Network Error");
  }
};
