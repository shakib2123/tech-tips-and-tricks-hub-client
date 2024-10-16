import member1 from "../../../../public/OurTeam/Woodie-Brandon.jpeg";
import member2 from "../../../../public/OurTeam/Alex-Jenna.jpeg";
import member3 from "../../../../public/OurTeam/Jerome Simone.jpeg";
import member4 from "../../../../public/OurTeam/Vincent-Lewis.jpeg";
import member5 from "../../../../public/OurTeam/Bria-Foster.jpeg";
import member6 from "../../../../public/OurTeam/Michele-Holly.jpeg";
import Image from "next/image";
import Link from "next/link";

const teamData = [
  {
    id: 1,
    image: member1,
    name: "Woodie Brandon",
    role: "PRODUCT DESIGNER",
  },
  {
    id: 2,
    image: member2,
    name: "Alex Jenna",
    role: "QA",
  },
  {
    id: 3,
    image: member3,
    name: "Jerome Simone",
    role: "CEO",
  },
  {
    id: 4,
    image: member4,
    name: "Vincent Lewis",
    role: "ADVENTURE CONSULTANT",
  },
  {
    id: 5,
    image: member5,
    name: "Bria Foster",
    role: "PRODUCT DESIGNER",
  },
  {
    id: 6,
    image: member6,
    name: "Michele Holly",
    role: "CUSTOMER SUPPORT",
  },
];

const OurTeam = () => {
  return (
    <section className="my-20 lg:my-28 max-w-screen-xl mx-auto px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-primary-500 font-semibold text-sm md:text-lg"
        >
          OUR TEAM
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-900  font-bold text-center font-young-serif"
        >
          Meet Our Team
        </h2>
        <p data-aos="fade-up" className="text-gray-700 ">
          Welcome to Tech Tips & Tricks Hub, the ultimate destination for tech
          enthusiasts! Our platform is built by a passionate team of tech
          experts and enthusiasts, designed to share knowledge, personal
          experiences, and practical solutions to common tech challenges.
          Whether you&apos;re troubleshooting issues, exploring tutorials, or
          looking for honest reviews, we&apos;ve got you covered. At Tech Tips &
          Tricks Hub, we believe in empowering our community with up-to-date
          insights and hands-on advice. Our dynamic platform allows users to
          share their own tips, engage with premium content, and connect through
          discussions. From beginner-friendly tips to advanced technical
          expertise, we cater to all levels of tech curiosity. Join us as we
          explore the ever-evolving world of technology together!
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {teamData.map((item) => (
          <div data-aos="fade-up" key={item.id} className="px-12">
            <div>
              <Image
                width={300}
                height={300}
                className="w-full h-full rounded-[70px]"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="text-center mt-4 font-young-serif space-y-2">
              <h3 className="text-gray-700  text-xl font-bold">{item.name}</h3>
              <h5 className="text-sm font-medium text-primary-500">
                {item.role}
              </h5>

              <div className="flex items-center justify-center gap-4">
                <Link
                  href="https://web.facebook.com/"
                  className="text-gray-700 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="fill-current text-gray-700  size-6"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </Link>

                <Link href="https://www.instagram.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700  size-6"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
                <Link href="https://www.youtube.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700  size-6"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </Link>
                <Link href="https://x.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700  size-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-gray-700  size-6"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
