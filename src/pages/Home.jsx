import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import TeamMember from "../components/TeamMember";
import coreTeamMembers from "../assets/json/coreTeamMembers.json";

const Home = () => {

    coreTeamMembers.forEach((member, index) => {
        console.log(member);
    })
    
    return (
        <>
            <Header />
            <main>

                <Section bg_color={'bg-blue-900'}>

                    <SectionTitle title={'Who we are?'} text_color={'text-white'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-blue-50'}>

                    <SectionTitle title={'Our Projects'} text_color={'text-blue-900'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-blue-900'}>

                    <SectionTitle title={'Activities'} text_color={'text-white'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-blue-50'}>

                    <SectionTitle title={'Participations'} text_color={'text-blue-900'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-white'}>

                    <SectionTitle title={'Core Team Members'} text_color={'text-blue-900'}/>

                    <div className="grid grid-cols-3 gap-20">
                    
                    </div>

                </Section>

                <Footer/>

            </main>
        </>
    );
}
 
export default Home;