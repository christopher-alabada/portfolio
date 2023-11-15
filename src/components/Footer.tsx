import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 md:flex-row container items-start justify-between mx-auto w-4/5 xl:w-3/5 h-[90px] mb-36 md:mb-16 mt-16 pt-6 border-t border-gray-300">
      <div>
        <div className="flex items-center mb-1">
          <div className="pr-1.5">
            <Image src="/images/email.png" alt="email" width={25} height={25} />
          </div>
          <div className="font-title text-sm font-bold">
            <Link href="#contact-form" data-test="footer-email">
              chris@topher.la
            </Link>
          </div>
        </div>
        <div className="flex items-center mb-1">
          <div className="pr-1.5">
            <Image
              src="/images/linkedin.png"
              alt="linkedin"
              width={25}
              height={25}
            />
          </div>
          <div className="font-title text-sm font-bold">
            <Link
              href="https://www.linkedin.com/in/christopher-alabada/"
              data-test="footer-linkedin"
            >
              linkedin.com/in/christopher.alabada
            </Link>
          </div>
        </div>
        <div className="flex items-center mb-1">
          <div className="pr-1.5">
            <Image
              src="/images/github.png"
              alt="github"
              width={25}
              height={25}
            />
          </div>
          <div className="font-title text-sm font-bold">
            <Link
              href="https://github.com/christopher-alabada"
              data-test="footer-github"
            >
              github.com/christopher.alabada
            </Link>
          </div>
        </div>
      </div>
      <div className="font-title text-sm font-bold text-gray-600 md:max-xmd:w-60">
        This portfolio was created with Next.js, Typescript, and FastAPI.
      </div>
    </footer>
  );
}
