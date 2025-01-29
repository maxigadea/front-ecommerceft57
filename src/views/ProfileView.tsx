'use client'
import LogoutButton from '@/components/LogoutButton';
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const ProfileView = () => {
     const {userData, setUserData} = useAuth();

  return (
    <div>
        <h1>Bienvenido: {userData?.user.name}</h1>
        <p>Tu dirección de envío es: {userData?.user.address}</p>
        <p>Tu contacto es: {userData?.user.phone}</p>

       <LogoutButton />
    </div>
  )
}

export default ProfileView