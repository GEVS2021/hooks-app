import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Edu Estula",
        email: "estulasolari20@gmail.com"
    });

    useEffect(() => {
        console.log("useEffect called!")
    });

    const onInputChange = ({target}) => {
        const { value, name } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }


    return (
        <>
            <h1> Formulario Simple </h1>
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
        </>
    )
}
