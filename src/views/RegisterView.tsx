'use client'
import { register } from '@/helpers/auth.helper';
import { validateRegisterForm } from '@/helpers/validate';
import { IRegisterProps, IRegisterPropsErrors } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const RegisterView = () => {
    const router = useRouter();
    const initialState = {
        email: '',
        password: '',
        name: '',
        address: '',
        phone: ''
    }

    const [dataUser, setDataUser] = useState<IRegisterProps>(initialState);
    const [errors, setErrors] = useState<IRegisterPropsErrors>(initialState);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await register(dataUser)
        router.push("/login")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    useEffect(() => {
        const errors = validateRegisterForm(dataUser)
        setErrors(errors)
    }, [dataUser])

  return (
    <div>
        <h1>Register to X-STORE</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input 
                    name="email"
                    type="email"
                    value={dataUser.email}
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label>Password:</label>
                <input 
                    name="password"
                    type="password"
                    value={dataUser.password}
                    placeholder="********"
                    onChange={handleChange}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>

            <div>
                <label>Name:</label>
                <input 
                    name="name"
                    type="text"
                    value={dataUser.name}
                    placeholder="John Doe"
                    onChange={handleChange}
                />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Address:</label>
                <input 
                    name="address"
                    type="text"
                    value={dataUser.address}
                    placeholder="Posadas, Misiones"
                    onChange={handleChange}
                />
                {errors.address && <span>{errors.address}</span>}
            </div>

            <div>
                <label>Phone:</label>
                <input 
                    name="phone"
                    type="text"
                    value={dataUser.phone}
                    placeholder="5436545454"
                    onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
            </div>

            <button disabled={errors.email ? true : false} type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterView