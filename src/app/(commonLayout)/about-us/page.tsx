import OurTeam from "@/components/page/about/OurTeam";

import MissionAndCommitment from "@/components/page/about/MissionAndCommitment";

const AboutUs = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-3 min-h-screen text-gray-900">
      <div className="max-w-screen-xl mx-auto px-3 lg:px-0">
        {/* Company History */}
        <div className="py-16 ">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <p
              data-aos="fade-up"
              className="text-primary-500 font-semibold text-sm md:text-lg"
            >
              OUR HISTORY
            </p>
            <h2
              data-aos="fade-up"
              className="text-3xl md:text-4xl text-gray-900  font-bold text-center font-young-serif"
            >
              Our Journey on the Road.
            </h2>
            <p data-aos="fade-up" className="text-gray-700 ">
              Welcome to Tech Tips & Tricks Hub, the ultimate destination for
              tech enthusiasts! Our platform is built by a passionate team of
              tech experts and enthusiasts, designed to share knowledge,
              personal experiences, and practical solutions to common tech
              challenges. Whether you&apos;re troubleshooting issues, exploring
              tutorials, or looking for honest reviews, we&apos;ve got you
              covered. At Tech Tips & Tricks Hub, we believe in empowering our
              community with up-to-date insights and hands-on advice. Our
              dynamic platform allows users to share their own tips, engage with
              premium content, and connect through discussions. From
              beginner-friendly tips to advanced technical expertise, we cater
              to all levels of tech curiosity. Join us as we explore the
              ever-evolving world of technology together!
            </p>
          </div>
        </div>
        {/* Our Team */}
        <OurTeam />
        {/* Mission & Commitment */}
        <MissionAndCommitment />
      </div>
    </section>
  );
};

export default AboutUs;
