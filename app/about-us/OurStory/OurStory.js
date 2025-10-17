import Image from "next/image";

const OurStory = () => {
  return (
    <section className="pb-[90px] pt-[90px]">
      <div className="mx-auto px-4 sm:px-6 container lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <div>
                  <img
                    className="max-w-full h-full rounded-[10px]"
                    src="/image/icons/new-avatar2.jpg"
                    alt="avatar2"
                  />
                </div>
                <div className="bg-primary p-6 rounded-[10px] mt-5">
                  <div className="w-[147px] mb-4">
                    <Image
                      width={147}
                      height={80}
                      src="/image/icons/list-avatar.png"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-[28px] leading-[1.25em] font-bold">
                      245k+
                    </h4>
                    <p className="mb-0 text-white text-[15px]">
                      Positive Reviews
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img
                    className="max-w-full h-full rounded-[10px]"
                    src="/image/icons/new-avatar.jpg"
                    alt="avatar2"
                  />
                </div>
                <div className="mt-5">
                  <img
                    className="max-w-full h-full rounded-[10px]"
                    src="/image/icons/Frame.jpg"
                    alt="avatar2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className="mb-4 text-xl font-extrabold capitalize   sm:text-3xl">
                Our Story
              </h4>
              <p className="text-gray-600 text-[16px] mb-4 font-normal leading-relaxed text-justify">
                PeopleNTech was founded in 2005 to provide affordable consulting
                and staffing services to small and medium-sized enterprises for
                testing their applications. Over the years, PeopleNTech has
                expanded its service capabilities by incorporating diverse
                expertise into its team of consultants and by launching career
                consultancy services to address the needs of both employers and
                job seekers. This endeavor has given PeopleNTech a unique
                perspective — that the rapidly changing demands for technical
                skills can be effectively met through upskilling potential IT
                professionals with comprehensive and practical training
                programs.
              </p>
              <p className="text-gray-600 text-[16px] mb-4 font-normal leading-relaxed text-justify">
                Alongside its employment agency, consulting, and staffing
                services, PeopleNTech began providing in-house training for its
                consultants and new hires in cutting-edge tools and technologies
                related to software testing, business analysis, project
                management, database administration, and network administration
                — tools that are directly applied in real-world workplaces. The
                positive impact of such training has led to improved performance
                among QA and Test Automation Engineers, Software Engineers,
                Database Administrators, Business Analysts, Cybersecurity
                Professionals, Project Management Professionals, and others.
              </p>
              <p className="text-gray-600 text-[16px] mb-4 font-normal leading-relaxed text-justify">
                Building on its success in the USA, Canada, and India,
                PeopleNTech began its journey in Bangladesh in 2014, launching
                over 60 professional courses at its Dhaka campus. Today,
                PeopleNTech Bangladesh plays a vital role in youth skill
                development, providing pathways to both mid-level employment and
                freelancing opportunities. As a result, PeopleNTech Bangladesh
                is recognized as one of the leading professional skill
                development institutes in the country and a global leader in IT
                training and job placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
