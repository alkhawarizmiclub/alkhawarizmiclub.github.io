

const Footer = () => {
    return (
        <footer className="pt-24 pb-10 w-full text-white text-lg bg-blue-900">
            <div className="footer-container mx-auto w-full max-w-7xl space-y-10">

                <div className="flex justify-between">
                    <div>LOGO</div>
                    <div id="footer-social-media-icons" className="">
                        <p><span className=" font-semibold">Email:</span> <span>contact@alkhawarizmi.club</span></p>
                        <p><span className=" font-semibold">Address:</span> <span>contact@alkhawarizmi.club</span></p>
                    </div>
                </div>

                <div className="border-t border-white"></div>

                <ul id="footer-social-media-icons" className="w-full flex justify-center gap-4">
                    <li className="h-10 w-10 bg-white"><a href="http://www.google.com">Fa</a></li>
                    <li className="h-10 w-10 bg-white"><a href="http://www.google.com">Fa</a></li>
                    <li className="h-10 w-10 bg-white"><a href="http://www.google.com">Fa</a></li>
                </ul>

            </div>
        </footer>
    );
}

export default Footer;
