import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react"

export const Quote = (props) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();

        setBoxSize({
            height,
            width
        });

    }, [])


    return (
        <>
            <blockquote className='blockquote text-end'>
                <p ref={pRef} className='mb-1'>{props.quote}</p>
                <footer className='blockquote-footer'>{props.author}</footer>
            </blockquote>


            <code> {JSON.stringify(boxSize)} </code>
        </>
    )
}
