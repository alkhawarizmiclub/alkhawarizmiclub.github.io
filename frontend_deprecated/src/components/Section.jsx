import { Children } from 'react';

const Section = ({ title, text_color, bg_color, children }) => {

    return (
        <section className={`py-24 px-10 w-full flex flex-col gap-24 ${bg_color}`}>
            <h1 className={`w-full ${text_color} text-center text-6xl font-bold font-sans`}>{title}</h1>
            <div className='mx-auto w-full max-w-7xl'>
                {Children.map(children, child => child)}
            </div>
        </section>
    );
}

export default Section;