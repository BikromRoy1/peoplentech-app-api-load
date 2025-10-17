import VideosModal from "@/components/VideosModal/VideosModal";
import Image from "next/image";
import "./CompanyDream.css";

const CompanyDream = () => {
  return (
    <section className="pb-[60px] pt-[60px] companyDream-bg">
      <div className="mx-auto px-4 sm:px-6 container lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-secondary mb-2 font-semibold text-[20px]">
              Our Company Dream
            </h3>
            <h4 className="text-[17px]  sm:text-[18px] md:text-[20px] mb-5 lg:text-[25px] xl:text-[30px] font-bold leading-tight">
              PeopleNTech Mission - Creating Skilled Manpower for the Future
            </h4>
            <p className="text-gray-700 text-[16px] font-normal leading-relaxed mb-2 text-justify">
              Since its inception in 2005, PeopleNTech has been dedicated to
              transforming lives through skill-based education and practical IT
              training. With over 45,000 successfully trained students
              worldwide, we continue to empower individuals to build rewarding
              careers in the global technology industry.
            </p>
            <p className="text-gray-700 text-[16px] font-normal leading-relaxed mb-2 text-justify">
              Founded by Engr. Abubokor Hanip, PeopleNTech was established with
              a commitment to real-world, project-based learning. Our certified
              and industry-experienced trainers work closely with students at
              every stage of their learning journey — from fundamentals to
              professional-level expertise.
            </p>
            <p className="text-gray-700 text-[16px] font-normal leading-relaxed mb-2 text-justify">
              At PeopleNTech, we believe learning should be hands-on, engaging,
              and impactful. No matter your educational or professional
              background, if you complete our training programs and develop the
              right set of skills, you can start a successful career in IT
              within just a few months — just like thousands of our successful
              alumni around the world.
            </p>
          </div>
          <div className="banner-bg rounded-[20px] p-2.5 relative">
            <label htmlFor="video_modal" className="cursor-pointer">
              <img
                src="/image/about-bg.png"
                loading="lazy"
                className="w-full rounded-[20px] videos-banner"
                alt="PeopleTech Institute of IT"
              />
            </label>
            <label htmlFor="video_modal" className=" play-icons cursor-pointer">
              <Image
                width={80}
                height={80}
                src="/image/icons/play_icon_2 1.svg"
                className="object-cover"
                alt="playing-icons"
              />
            </label>
          </div>
        </div>
      </div>
      <VideosModal
        video_url="https://www.youtube.com/embed/nxSFNs00AkY?si=SyEpPGAoXeFj31xZ"
        video_title="PeopleTech Institute of IT"
      />
    </section>
  );
};

export default CompanyDream;
