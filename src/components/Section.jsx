import { Children } from 'react';

const Section = ({children, bg_color}) => {

    return (
        <section className={`w-full ${bg_color}`}>
            <div className='section-container py-32 p-10 mx-auto max-w-7xl'>
                {Children.map(children, child => child)}
            </div>
        </section>
    );
}
 
export default Section;