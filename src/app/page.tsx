import Intro from "@/components/Intro";
import TechnicalToolbox from "@/components/TechnicalToolbox";
import Experience from "@/components/Experience";
import ContactMe from "@/components/ContactMe";
import { Data } from "@/data";
import { ContentSection, IContent } from "@/data/types";

export default async function Home() {
  const content = await Data.getContent<IContent>(ContentSection.ALL);

  return (
    <main className="container mx-auto w-4/5 xl:w-3/5 pt-36">
      <section className="mb-10">
        <Intro intro={content.intro} />
      </section>

      <section className="mb-14">
        <TechnicalToolbox technicalToolbox={content.toolbox} />
      </section>

      <section className="grid grid-cols-4 gap-x-12 mb-12">
        <Experience experience={content.experience} />
      </section>

      <section className="grid grid-cols-4 gap-x-7 mb-12">
        <ContactMe />
      </section>
    </main>
  );
}
