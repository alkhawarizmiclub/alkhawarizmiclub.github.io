import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import TeamMember from "../components/TeamMember";
import coreTeamMembers from "../assets/json/coreTeamMembers.json";

const Home = () => {

    const clubPresident = coreTeamMembers[0];
    const clubMembers = coreTeamMembers.slice(1);

    console.log(clubPresident, clubMembers);

    return (
        <>
            <Header />
            <main>

                <Section bg_color={'bg-blue-950'}>

                    <SectionTitle title={'Who we are?'} text_color={'text-white'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-blue-50'}>

                    <SectionTitle title={'Our Projects'} text_color={'text-blue-950'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-blue-950'}>

                    <SectionTitle title={'Activities'} text_color={'text-white'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-blue-50'}>

                    <SectionTitle title={'Participations'} text_color={'text-blue-950'}/>

                    <div>TETETETETETET</div>

                </Section>

                <Section bg_color={'bg-white'}>

                    <SectionTitle title={'Core Team Members'} text_color={'text-blue-950'}/>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
                        
                        {/* ----------------- Club's President ----------------- */}
                        <div className="hidden xl:block"></div>
                        <TeamMember
                            firstName={clubPresident['first name']}
                            lastName={clubPresident['last name']}
                            description={clubPresident['description']}
                            imgSrc={clubPresident['portrait src']}
                            socialMediaLinks={clubPresident['social media']}
                        />                        
                        <div className="hidden xl:block"></div>

                        {/* ----------------- Club's Core Members ----------------- */}
                        {Object.keys(clubMembers).map( (member, i) => (

                            <TeamMember
                                firstName={clubMembers[member]['first name']}
                                lastName={clubMembers[member]['last name']}
                                description={clubMembers[member]['description']}
                                imgSrc={clubMembers[member]['portrait src']}
                                socialMediaLinks={clubMembers[member]['social media']}
                                key={i}
                            />

                        ) )}

                    </div>

                </Section>

                <Footer/>

            </main>
        </>
    );
}
 
export default Home;