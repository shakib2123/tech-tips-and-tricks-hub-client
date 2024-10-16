const missionData = [
  {
    id: 1,
    title: "Empowerment",
    desc: "We are committed to empowering tech enthusiasts by providing the tools, knowledge, and resources to enhance their skills. Our platform fosters a learning environment that helps users grow, solve problems, and stay ahead in the fast-paced tech world.",
  },
  {
    id: 2,
    title: "Community-Centric",
    desc: "Our platform thrives on a strong sense of community. We value collaboration, support, and sharing among users, ensuring that everyone can contribute, learn from one another, and be a part of an ever-evolving tech community.",
  },
  {
    id: 3,
    title: "Innovation",
    desc: "We continuously seek out innovative approaches to provide fresh insights, cutting-edge tutorials, and creative solutions. By staying at the forefront of technological trends, we deliver relevant, up-to-date content that keeps our users ahead of the curve.",
  },
  {
    id: 4,
    title: "Integrity",
    desc: "We hold ourselves to the highest ethical standards in everything we do. Whether it's delivering honest reviews, providing reliable information, or ensuring user privacy, integrity is the cornerstone of our operations, building trust with our community.",
  },
];

const MissionAndCommitment = () => {
  return (
    <section className="my-20 lg:my-28 max-w-screen-xl mx-auto px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-primary-500 font-semibold text-sm md:text-lg"
        >
          OUR MISSION & COMMITMENT
        </p>
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-4xl text-gray-900 font-bold text-center font-young-serif"
        >
          Our Mission & Commitment
        </h2>
        <p data-aos="fade-up" className="text-gray-700">
          We are committed to creating a welcoming and inclusive platform where
          tech enthusiasts of all levels can explore, share, and grow. From our
          expert-curated content to our user-driven discussions, we are here to
          support you on your tech journey. Your success is our priority, and we
          strive to be your go-to resource for all things tech.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {missionData.map((data) => (
          <div
            key={data.id}
            className="text-center shadowGray rounded-xl p-6 transition-shadow duration-300 space-y-4"
          >
            <h3 className="text-xl text-gray-900 font-bold">{data.title}</h3>
            <p className="text-gray-700">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionAndCommitment;
