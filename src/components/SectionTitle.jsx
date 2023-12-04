const SectionTitle = ( {title, text_color}) => {

    return (
        <h1 className={`pb-28 w-full ${text_color} text-center text-6xl font-bold font-sans`}>{title}</h1>
    );
}
 
export default SectionTitle;