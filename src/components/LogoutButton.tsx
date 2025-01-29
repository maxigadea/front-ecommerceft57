'use client'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const LogoutButton = () => {
    const {setUserData} = useAuth();
    const router = useRouter();
    const handleLogout = () => {
        setUserData(null);
        localStorage.removeItem("userSession")
        router.push("/")
        alert("Te has deslogeado")
    }

  return (
    <button onClick={handleLogout}>Log out</button>
  )
}

export default LogoutButton