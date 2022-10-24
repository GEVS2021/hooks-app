import React from 'react'
import { SimpleForm } from './01-useEffect/SimpleForm'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

export const HooksApp = () => {
    return (
        <>
            <h1>HooksApp</h1>
            {/* <CounterApp /> */}
            {/* <CounterWithCustomHook /> */}
            <SimpleForm />
        </>
    )
}
