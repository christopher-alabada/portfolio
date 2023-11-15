import { IIntro } from "@/data/types";
import InfoSidebar from "@/components/InfoSidebar";

interface IIntroContent {
  intro: IIntro;
}

export default function Intro({ intro }: IIntroContent) {
  return (
    <>
      <div className="w-full mb-1">
        <h2>{intro.title}</h2>
      </div>
      <section className="flex flex-wrap md:flex-nowrap gap-y-3 md:gap-x-10">
        <div>
          {intro.body.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
        <InfoSidebar />
      </section>
    </>
  );
}
