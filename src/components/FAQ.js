import arrow from "./imgs/arrow-down.svg"

function FAQs() {

  return (
    <div>
      <div>
        <div className="cont">
          <section className="flex flex-col justify-start mt-5 tablet:mt-12 bg-trkblack pt-5 pb-8 tablet:px-20">
            <section className="text-center">
              <h1 className="tablet-m:hidden font-semibold text-md tablet-m:text-xl text-white">
                FAQs
              </h1>
              <h1 className="phone:hidden tablet-m:block font-semibold text-md tablet-m:text-2xl text-white">
                Frequently Asked Questions
              </h1>
            </section>
            <div className="laptop-s:mx-40">
              <div class="m-2 space-y-2 laptop-s:my-5">
                <div
                  class="group flex flex-col gap-2 rounded-lg bg-white p-3 text-black laptop-s:text-xl"
                  tabindex="1"
                >
                  <div class="flex cursor-pointer items-center justify-between">
                    <span> How can I get involved with TARAKI? </span>
                    <img
                      src={arrow}
                      class="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </div>
                </div>

                <div
                  class="group flex flex-col gap-2 rounded-lg bg-white p-3 text-black laptop-s:text-xl"
                  tabindex="2"
                >
                  <div class="flex cursor-pointer items-center justify-between">
                    <span> Who can join TARAKI's programs and initiatives? </span>
                    <img
                      src={arrow}
                      class="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </div>
                </div>

                <div
                  class="group flex flex-col gap-2 rounded-lg bg-white p-3 text-black laptop-s:text-xl"
                  tabindex="3"
                >
                  <div class="flex cursor-pointer items-center justify-between">
                    <span> Does TARAKI offer resources for startups? </span>
                    <img
                      src={arrow}
                      class="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </div>
                </div>

                <div
                  class="group flex flex-col gap-2 rounded-lg bg-white p-3 text-black laptop-s:text-xl"
                  tabindex="3"
                >
                  <div class="flex cursor-pointer items-center justify-between">
                    <span> How can TARAKI support my startup? </span>
                    <img
                      src={arrow}
                      class="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </div>
                </div>
              </div>
          </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FAQs;