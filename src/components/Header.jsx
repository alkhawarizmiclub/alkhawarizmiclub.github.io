import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="relative h-screen w-full flex flex-col bg-no-repeat bg-cover">

            <Navbar/>

            <div className="px-10 grow flex flex-col justify-center gap-4 text-center text-blue-950 text-shadow shadow-white">
                <h1 className="text-5xl font-semibold">By the students, and for the students</h1>
                <h2 className="text-3xl font-normal">Creating a difference iside the campus of our college</h2>
            </div>

            {/* ------------- Header Blended Background ------------- */}
            <div id="header-background" className="-z-10 absolute w-full h-full top-0 left-0 blur-md">
                <div className="absolute w-full h-full bg-center bg-no-repeat bg-cover bg-[url('assets/images/header-bg2.png')]"></div>
                {/* <div className="absolute w-full h-full bg-repeat bg-opacity-0 bg-[url('assets/images/header-bg-layer1.svg')]"></div> */}
            </div>

        </header>
    );
}

export default Header;