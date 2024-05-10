import { Children } from 'react';

const Section = ({ title, text_color, bg_color, children }) => {

    return (
        <section className={`w-full ${bg_color}`}>
            <h1 className={`pb-28 w-full ${text_color} text-center text-6xl font-bold font-sans`}>{title}</h1>
            <div className='section-container py-32 p-10 mx-auto max-w-7xl'>
                {Children.map(children, child => child)}
            </div>
        </section>
    );
}

export default Section;