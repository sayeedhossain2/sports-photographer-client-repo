import React from "react";
import img2 from "../../../assets/home/img2.jpg";
import img3 from "../../../assets/home/img3.jpeg";
import useTitle from "../../../hooks/useTitle";

const ExtraSection = () => {
  useTitle("ExtraSection");
  return (
    <div className="my-10">
      <div className=" md:w-[92vw] mx-auto rounded-xl  flex justify-center items-center gap-5 grid md:grid-cols-[2fr_3fr] mt-10 bg-red-200 p-10">
        <div>
          <img className="rounded-xl" src={img2} alt="" />
        </div>
        <div className="mt-5">
          <h1 className="text-5xl mb-8 font-bold text-teal-800">
            Wildlife Photography{" "}
          </h1>
          <p>
            Wildlife photography is the most amazing photography. Professionals
            of wildlife photography take pictures of animals in the national
            environment. It is such a beautiful and fullfiling photography
            career. Also, you have to invest a lot of time and a lot of work
            with patience. In this, you will get to explore nature and you have
            to look for the natural beauty of wildlife. Here are some tips to
            become a wildlife photographer in the year 2021.
          </p>
        </div>
      </div>

      <div className="md:w-[92vw] mx-auto rounded-xl   flex justify-center items-center gap-5 grid md:grid-cols-[3fr_2fr] mt-10 bg-red-200 p-10">
        <div>
          <h1 className="text-5xl mb-8 font-bold text-teal-800">
            photographic and audiovisual material from sports
          </h1>
          <p>
            In the majority of cases, professional sports photography is a
            branch of photojournalism, while amateur sports photography, such as
            photos of children playing association football, is a branch of
            vernacular photography. The main application of professional sports
            photography is for editorial purposes; dedicated sports
            photographers usually work for newspapers, major wire agencies or
            dedicated sports magazines. However, sports photography is also used
            for advertising purposes both to build a brand and as well as to
            promote a sport in a way that cannot be accomplished by editorial
            means.
          </p>
        </div>
        <div>
          <img className="rounded-xl" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
