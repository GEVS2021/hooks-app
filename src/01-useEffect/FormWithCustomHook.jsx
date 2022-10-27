import React, { useEffect, useState } from 'react'
import { useForm } from './hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const {formState, onInputChange, resetForm} = useForm({
        username: "",
        email: "",
        password: ""
    });

    return (
        <>
            <h1> Formulario Con Custom Hook </h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={formState.username}
                onChange={onInputChange}
            />

            <input
                type="text"
                className='form-control'
                placeholder='Email'
                name='email'
                value={formState.email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className='form-control'
                placeholder='Password'
                name='password'
                value={formState.password}
                onChange={onInputChange}
            />

            <button className='btn btn-secondary mt-2' onClick={resetForm}> Reset </button>

            <hr />
            {
                formState.username == "Edu Estula2" && <Message />
            }

        </>
    )
}
