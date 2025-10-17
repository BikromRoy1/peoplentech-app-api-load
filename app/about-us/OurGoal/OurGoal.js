import "./OurGoal.css";

const OurGoal = () => {
  return (
    <section className="pb-[90px] pt-[90px] OurGoal-bg">
      <div className="mx-auto px-4 sm:px-6 container lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="join-us-style-one-item">
            <div className="shape">
              <img src="/image/icons/shap-01.png" alt="shap" />
            </div>
            <div className="info pb-6">
              <h4 className="mb-6 text-xl font-extrabold capitalize text-secondary  sm:text-3xl">
                Our Goal
              </h4>
              <p className="text-gray-600 text-[16px] font-medium leading-relaxed text-justify">
                At PeopleNTech, our goal is to deliver a transformative learning
                experience that goes beyond expectations. We focus on practical,
                hands-on training that bridges the gap between education and
                real-world application. We inspire our students to keep
                learning, keep evolving, and stay future-ready in a rapidly
                changing digital world.
              </p>
            </div>
            <div className="thumb">
              <img
                className="max-w-full"
                src="/image/icons/shap-02.png"
                alt="man"
              />
            </div>
          </div>
          <div className="join-us-style-one-item active ">
            <div className="shape">
              <img src="/image/icons/shap-01.png" alt="shap" />
            </div>
            <div className="info">
              <h4 className="mb-6 text-xl font-extrabold capitalize text-primary  sm:text-3xl">
                Our Purpose
              </h4>
              <p className="text-gray-300 text-[16px] font-medium leading-relaxed text-justify">
                Our purpose is to empower people to redefine their futures
                through technology and innovation. We aim to become a guiding
                force for career transformation, helping individuals unlock
                their potential and explore new professional horizons.
              </p>
            </div>
            <div className="thumb">
              <img
                className="max-w-full"
                src="/image/icons/shap-03.png"
                alt="woman"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
