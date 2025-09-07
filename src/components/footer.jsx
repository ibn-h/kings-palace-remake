import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="px-4 py-16 md:px-[79px] md:py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center lg:justify-between">
          <img src={logo} alt="Logo" />
          <a
            href=""
            className="bg-secondary font-georgia hidden w-[194px] rounded-full px-4 py-3 text-white lg:inline-block"
          >
            TAFEL RESERVEREN
          </a>
        </div>

        <div className="my-5 w-full border-t border-gray-300 lg:my-10"></div>

        <div className="flex w-full flex-col items-center justify-center gap-10 text-[#5c5c5c] md:flex-row md:items-start md:justify-between">
          <div className="font-georgia flex flex-col items-center justify-center gap-2 text-center text-sm md:items-start md:gap-6 md:text-left">
            <h4 className="text-primary font-georgia text-xl">SITEMAP</h4>
            <a href="">WELCOME</a>
            <a href="">MENU</a>
            <a href="">FEESTMENU</a>
            <a href="">RESERVATIONS</a>
            <a href="">CONTACT</a>
          </div>
          <div className="font-georgia flex flex-col items-center justify-center gap-2 text-center text-sm md:items-start md:gap-6 md:text-left">
            <h4 className="text-primary font-georgia text-xl">SOCIALS</h4>
            <a href="">FACEBOOK</a>
            <a href="">PINTEREST</a>
            <a href="">LINKEDIN</a>
            <a href="">TWITTER</a>
            <a href="">KINGSPALACE.COM</a>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 md:items-start md:justify-between">
            <div className="font-georgia flex flex-col items-center justify-center gap-2 text-center text-sm md:items-start md:gap-4 md:text-left">
              <h4 className="text-primary font-georgia text-xl">
                OPENINGSUREN
              </h4>
              <p>WOE-ZAT: 17:30 - 21:00</p>
              <p>ZON: 12:00 - 14:30 EN 17:30 - 21:00</p>
            </div>

            <div className="font-georgia flex flex-col items-center justify-center gap-2 text-center text-sm md:items-start md:gap-4 md:text-left">
              <h4 className="text-primary font-georgia text-xl">CONTACT</h4>
              <p>Telefoon: 0123-456789</p>
              <p>Email: info@kingspalace.com</p>
            </div>
          </div>
        </div>

        <div className="my-5 w-full border-t border-gray-300 lg:my-10"></div>

        <a href="#top" className="font-georgia text-center">
          TERUG OMHOOG
        </a>
      </div>
    </footer>
  );
}

export default Footer;
