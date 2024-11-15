import Header from "../components/Header";
import Section from "../components/Section";
import Project from "../components/Project";
import Activity from "../components/Activity";
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";

import clubProjects from "../assets/json/clubProjects.json";
import clubActivities from "../assets/json/clubActivities.json";
import clubParticipations from "../assets/json/clubParticipations.json";
import coreTeamMembers from "../assets/json/coreTeamMembers.json";
import Participation from "../components/Participation";


const Home = () => {

    const clubPresident = coreTeamMembers[0];
    const clubMembers = coreTeamMembers.slice(1);

    return (
        <>
            <Header />
            <main>

                <Section title="Who we are?" text_color="text-white" bg_color="bg-blue-950">

                    <div className="flex flex-col-reverse md:flex-row gap-10">
                        <div className="w-full flex flex-col justify-center gap-2 text-xl text-white">
                            <p>Founded in 2023 by the students of the multidisciplinary college of Khouribga (Faculté Polydisciplinaire de Khouribga), we're a student-led community thriving on pushing the boundaries of our knowledge, exploring the latest technologies, undertaking hands-on projects, and fostering collaboration with like-minded enthusiasts.</p>
                            <p>Join us on our journey as we navigate the fascinating landscapes of computer science, immerse ourselves in the world of IT innovations, and unlock the full potential of robotics.</p>
                        </div>
                        <div className="w-full overflow-hidden rounded-2xl">
                            <img src="https://alkhawarizmiclub.github.io/assets/images/header-bg.png" className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>

                </Section>

                <Section title="Our Projects" text_color="text-blue-950" bg_color="bg-blue-50">

                    <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {clubProjects.map(({ label, descritpion, imgURL, links }, i) => <Project key={i} label={label} description={descritpion} imgURL={imgURL} links={links} />
                        )}
                    </div>

                </Section>

                <Section title="Activities" text_color="text-white" bg_color="bg-blue-950">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5">
                        {clubActivities.map(({ mediaURL, label, descritpion, date, location, google_maps_url }, i) => <Activity key={i} mediaURL={mediaURL} label={label} description={descritpion} date={date} location={location} google_maps_url={google_maps_url} />)}
                    </div>

                </Section>

                <Section title="Participations" text_color="text-blue-950" bg_color="bg-blue-50">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {clubParticipations.map(({ mediaURL, label, descritpion, location, date }, i) => <Participation key={i} mediaURL={mediaURL} label={label} descritpion={descritpion} location={location} date={date} />)}
                    </div>

                </Section>

                <Section title="The Crew" text_color="text-blue-950" bg_color="bg-white">

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
                        {Object.keys(clubMembers).map((member, i) => (

                            <TeamMember
                                firstName={clubMembers[member]['first name']}
                                lastName={clubMembers[member]['last name']}
                                description={clubMembers[member]['description']}
                                imgSrc={clubMembers[member]['portrait src']}
                                socialMediaLinks={clubMembers[member]['social media']}
                                key={i}
                            />

                        ))}

                    </div>

                </Section>

                <Footer />

            </main>
        </>
    );
}

export default Home;