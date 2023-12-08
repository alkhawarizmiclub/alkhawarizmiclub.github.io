import Header from "../components/Header";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Project from "../components/Project";
import Activity from "../components/Activity";
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";

import clubActivities from "../assets/json/clubActivities.json";
import coreTeamMembers from "../assets/json/coreTeamMembers.json";
import clubProjects from "../assets/json/clubProjects.json";


const Home = () => {

    const clubPresident = coreTeamMembers[0];
    const clubMembers = coreTeamMembers.slice(1);

    return (
        <>
            <Header />
            <main>

                <Section bg_color={'bg-blue-950'}>

                    <SectionTitle title={'Who we are?'} text_color={'text-white'}/>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="w-full flex flex-col justify-center gap-2 text-xl text-white">
                            <p>Founded in 2023 by the students of the multidisciplinary college of Khouribga (Faculté Polydisciplinaire de Khouribga), we're a student-led community thriving on pushing the boundaries of our knowledge, exploring the latest technologies, undertaking hands-on projects, and fostering collaboration with like-minded enthusiasts.</p>
                            <p>Join us on our journey as we navigate the fascinating landscapes of computer science, immerse ourselves in the world of IT innovations, and unlock the full potential of robotics.</p>
                        </div>
                        <div className="w-full overflow-hidden rounded-2xl">
                            <img src="/assets/images/header-bg.png" />
                        </div>
                    </div>

                </Section>

                <Section bg_color={'bg-blue-50'}>

                    <SectionTitle title={'Our Projects'} text_color={'text-blue-950'}/>

                    <div className="w-full grid grid-cols-4 gap-4">
                        {Object.values(clubProjects).map((project, i)=>(
                            <Project
                                imgURL={project['imgURL']}
                                label={project['label']}
                                description={project['descritpion']}
                                links={project['links']}
                                key={i}
                            />
                        ))}
                    </div>

                </Section>

                <Section bg_color={'bg-blue-950'}>

                    <SectionTitle title={'Activities'} text_color={'text-white'}/>

                    <div className="grid grid-cols-2 gap-5">
                        {Object.values(clubActivities).map((activity, i) => (
                            <Activity 
                                label={activity['label']}
                                description={activity['descritpion']}
                                date={activity['date']}
                                location={activity['location']}
                                key={i}
                            />
                        ))}
                    </div>

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