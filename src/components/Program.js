import aware from "../components/imgs/aware.png";
import ready from "../components/imgs/ready.jpg";
import know from "../components/imgs/knowledge.JPG";
import inno from "../components/imgs/inno.png";

function program() {
  return (
    <div>
      <div>
        <div className="cont">
          <section className="mt-16 tablet:mt-12 text-center">
            <h1 className="font-semibold text-md tablet:text-lg tablet-m:text-2xl px-20 tablet:px-52 tablet-m:px-72 laptop-s:text-3xl laptop-s:mx-36 laptop-s:py-6">
              We&apos;re covering a lot of developments in our news updates.
            </h1>
          </section>{" "}
          <div
            id="sectionCont"
            className="tablet:flex tablet:justify-between tablet:items-center tablet:px-8"
          >
            <div
              className="mx-auto mt-5 rounded-lg bg-cover bg-center w-72 h-52 tablet:w-[115rem] tablet-m:w-[130rem] tablet:h-[14rem] laptop-s:w-[180rem] laptop-s:h-[20rem]"
              style={{ backgroundImage: `url(${aware})` }}
            ></div>

            <div
              id="sectionTextCont"
              className="tablet:flex tablet:flex-col tablet:px-5"
            >
              <h1 className="text-center tablet:text-left text-sm tablet:text-[0.9rem] tablet-m:text-xl laptop-s:text-2xl font-semibold mt-5 px-8 tablet:px-0">
                AWARENESS PROGRAM
              </h1>
              <p className="text-sm tablet:text-[0.9rem] tablet-m:text-lg laptop-s:text-[1.3rem] tablet:font-normal tablet:leading-6 text-center tablet:text-left font-light mt-2 tablet:mt-4 px-8 tablet:px-0">
                Our Awareness Programs are designed to educate and inform
                participants about the latest trends, challenges, and
                opportunities in technology and innovation. These programs aim
                to build a strong foundation of knowledge and inspire
                participants to engage with emerging technologies.
              </p>
            </div>
          </div>
          <div
            id="sectionCont"
            className="tablet:flex tablet:justify-between tablet:items-center tablet:px-8 tablet:mt-5"
          >
            <div
              className="mx-auto mt-5 rounded-lg bg-cover bg-center w-72 h-52 tablet:w-[100rem] tablet-m:w-[130rem] tablet:h-[14rem] tablet:order-2 laptop-s:w-[130rem] laptop-s:h-[20rem]"
              style={{ backgroundImage: `url(${ready})` }}
            ></div>
            <div
              id="sectionTextCont"
              className="tablet:flex tablet:flex-col tablet:px-0"
            >
              <h1 className="text-center tablet:text-left text-sm tablet:text-[0.9rem] tablet-m:text-xl laptop-s:text-2xl font-semibold mt-5 px-8 tablet:px-0">
                READINESS PROGRAM
              </h1>
              <p className="text-sm tablet:text-[0.9rem] tablet-m:text-lg laptop-s:text-[1.3rem] tablet:font-normal tablet:leading-6 text-center tablet:text-left font-light mt-2 tablet:mt-4 px-8 tablet:pl-0 tablet:pr-5">
                The Readiness Programs focus on preparing individuals and
                organizations for the future of work and technological
                advancements. These programs provide the necessary skills and
                knowledge to thrive in a technology-driven world.
              </p>
            </div>
          </div>
          <div
            id="sectionCont"
            className="tablet:flex tablet:justify-between tablet:items-center tablet:mt-5 tablet:px-8"
          >
            <div
              className="mx-auto mt-5 rounded-lg bg-cover bg-center w-72 h-52 tablet:w-[110rem] tablet-m:w-[125rem] tablet:h-[14rem] laptop-s:w-[170rem] laptop-s:h-[20rem]"
              style={{ backgroundImage: `url(${know})` }}
            ></div>
            <div
              id="sectionTextCont"
              className="tablet:flex tablet:flex-col tablet:px-5"
            >
              <h1 className="text-center tablet:text-left text-sm tablet:text-[0.9rem] tablet-m:text-xl laptop-s:text-2xl font-semibold mt-5 px-8 tablet:px-0">
                KNOWLEDGE ADVANCEMENT INITIVATIVES
              </h1>
              <p className="text-sm tablet:text-[0.9rem] tablet-m:text-lg laptop-s:text-[1.3rem] tablet:font-normal tablet:leading-6 text-center tablet:text-left font-light mt-2 tablet:mt-4 px-8 tablet:px-0">
                Our Knowledge Advancement Initiatives aim to push the boundaries
                of what is known in the field of technology and innovation. We
                support research and development projects that contribute to the
                advancement of knowledge and create new opportunities for
                innovation.
              </p>
            </div>
          </div>
          <div
            id="sectionCont"
            className="tablet:flex tablet:justify-between tablet:items-center tablet:px-8 tablet:mt-5"
          >
            <div
              className="mx-auto mt-5 rounded-lg bg-cover bg-center w-72 h-52 tablet:w-[85rem] tablet-m:w-[110rem] tablet:h-[14rem] tablet:order-2 laptop-s:w-[114rem] laptop-s:h-[20rem]"
              style={{ backgroundImage: `url(${inno})` }}
            ></div>
            <div
              id="sectionTextCont"
              className="tablet:flex tablet:flex-col tablet:px-0"
            >
              <h1 className="text-center tablet:text-left text-sm tablet:text-[0.9rem] tablet-m:text-xl laptop-s:text-2xl font-semibold mt-5 px-8 tablet:px-0">
                INNOVATION PROJECT
              </h1>
              <p className="text-sm tablet:text-[0.9rem] tablet-m:text-lg laptop-s:text-[1.3rem] tablet:font-normal tablet:leading-6 text-center tablet:text-left font-light mt-2 tablet:mt-4 px-8 tablet:pl-0 tablet:pr-5">
                TARAKI&apos;s Innovation Projects are practical applications of
                our research and knowledge. These projects are designed to
                address real-world challenges and demonstrate the potential of
                new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default program;
