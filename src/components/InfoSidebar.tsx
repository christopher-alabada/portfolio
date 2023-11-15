import Image from "next/image";
import Link from "next/link";

export default function InfoSidebar() {
  return (
    <section className="flex-none w-full md:w-auto">
      <div className="flex flex-wrap md:flex-col">
        <div className="flex w-full sm:max-md:w-1/2">
          <div className="pr-3 h-11">
            <Image
              src="/images/marker.png"
              alt="location pin"
              width={30}
              height={30}
            />
          </div>
          <div>Tokyo, Japan</div>
        </div>
        <div className="flex w-full sm:max-md:w-1/2">
          <div className="pr-3 h-11">
            <Image src="/images/email.png" alt="email" width={30} height={30} />
          </div>
          <div>
            <Link href="#contact-form">chris@topher.la</Link>
          </div>
        </div>
        <div className="flex w-full sm:max-md:w-1/2">
          <div className="pr-3 h-11">
            <Image
              src="/images/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
            />
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/christopher-alabada/">
              christopher.alabada
            </Link>
          </div>
        </div>
        <div className="flex w-full sm:max-md:w-1/2">
          <div className="pr-3 h-11">
            <Image
              src="/images/github.png"
              alt="github"
              width={30}
              height={30}
            />
          </div>
          <div>
            <Link href="https://github.com/christopher-alabada">
              christopher.alabada
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
