import animation from "../components/imgs/taraki-animation.mp4";
function about() {
  return (
    <div>
      <div className="font-satoshi overflow-x-hidden">
        <div className="cont tablet:flex tablet:justify-between tablet:items-center tablet:mt-10 tablet:px-8">
          <section className="text-center tablet:text-left mt-16 tablet:mt-0">
            <h1 className="font-semibold text-md tablet:text-lg tablet-m:text-2xl tablet:px-0 laptop-s:text-3xl laptop-m:text-[2.4rem]">
              About Us
            </h1>
            <p className="font-light text-sm tablet:text-md tablet-m:text-xl laptop-s:text-2xl laptop-m:text-[1.7rem] px-10 tablet:px-0 mt-5 tablet:mt-0 tablet-m:mr-5 tablet-m:mt-4 tablet:leading-6 tablet-m:leading-8">
              <span className="font-semibold text-orange-600">TARAKI</span>{" "}
              envisions to be the country&apos;s leading technological
              consortium in building and transforming the Cordilleran Startup
              Ecosystem. We cultivate ingenuity for innovators by fostering
              collaboration and community-driven initiatives, aiming to become
              globally renowned.
            </p>
          </section>
          <section className="mt-5">
          <video autoPlay loop muted playsInline className="header-video phone:hidden laptop-s:block m-auto w-72 tablet:w-[95%] tablet-m:w-[100%] desktop-s:w-[195rem]">
            <source src={animation} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </section>
        </div>
      </div>
    </div>
  );
}

export default about;
