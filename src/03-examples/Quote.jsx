
export const Quote = (props) => {


    return (
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>{props.quote}</p>
            <footer className='blockquote-footer'>{props.author}</footer>
        </blockquote>
    )
}
