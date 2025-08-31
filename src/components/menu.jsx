import React from "react";

function Menu() {
  return (
    <section className="bg-primary px-4 py-8 lg:px-8 lg:py-16">
      <div className="flex flex-col items-center justify-center text-center text-white">
        <h2 className="font-georgia text-3xl lg:text-6xl">ONZE MENU</h2>
        <p className="mt-4 mb-6 md:max-w-[600px] md:text-lg">
          Hier kunt u al onze gerechten van ons restaurant ontdekken. Wij bieden
          zowel menu’s aan met enerzijds heerlijke Chinese gerechten, en
          anderzijds kleine Dim Sums. U bent altijd van harte welkom!
        </p>

        <a
          href=""
          className="bg-secondary font-georgia w-3/4 rounded-full px-4 py-3 text-center text-white sm:w-[194px]"
        >
          VOLLEDIG MENU
        </a>
      </div>
    </section>
  );
}

export default Menu;
