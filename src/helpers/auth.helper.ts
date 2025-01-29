import { ILoginProps, IRegisterProps } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
           method: "POST",
           headers: {
                "Content-type": "application/json"
           },
           body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("User registered successfully")
            return response.json();
        } else {
            throw new Error('User already exist')
        }
    } catch (error: any) {
        alert("Failed to register new user")
        throw new Error(error)
    }
};

export async function login(userData: ILoginProps) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
           method: "POST",
           headers: {
                "Content-type": "application/json"
           },
           body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("User logged successfully")
            return response.json();
        } else {
            throw new Error('User already exist')
        }
    } catch (error: any) {
        alert("Failed to login new user")
        throw new Error(error)
    }
};
