import React from "react";
import { FaCheck } from "react-icons/fa";

function FeaturesZigzag({ images }) {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <br />
        <div className="py-12 md:py-20 border-t border-gray-800">
          <br />
          <br />
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="w-full h-auto flex flex-wrap flex-col items-center">
              <p className="text-indigo-500 font-bold text-3xl md:text-4xl text-center">
                One product, unlimited solutions
              </p>
              <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
              <p className="text-xl text-gray-500">
                Our platform provides a range of features, including event
                creation and the ability to take registrations, all while
                accommodating multiple admins.
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <img
                  src={images[0].src}
                  alt={images[0].title}
                  width="540"
                  height="405"
                  loading="lazy"
                  decoding="async"
                  className="max-w-full mx-auto md:max-w-none h-auto"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="text-xl text-[color:var(--darker-secondary-color)] mb-2">
                    More speed. High efficiency
                  </div>
                  <h3 className="h3 mb-3">Keep events on schedule</h3>
                  <p className="text-xl text-gray-500 mb-4">
                    In order to organize an event, you must log in as an event
                    manager. The platform owner can assign event managers, or
                    you may use test credentials. After logging in, you can
                    begin managing the event.
                  </p>
                  <ul className="text-lg text-gray-500 -mb-2">
                    <li className="flex items-center mb-2">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>You will have your own dashboard</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Fill details and schedule your events</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Secure and quick access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                {/* <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={images[1].src}
                  width="540"
                  height="405"
                  alt={images[1].title}
                /> */}
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-[color:var(--darker-secondary-color)] mb-2">
                    Super easy. Quick booking
                  </div>
                  <h3 className="h3 mb-3">Book your favourite shows</h3>
                  <p className="text-xl text-gray-500 mb-4">
                    On users dashboard, users can view all available events,
                    select their preferred event, and proceed with the booking
                    process.
                  </p>
                  <ul className="text-lg text-gray-500 -mb-2">
                    <li className="flex items-center mb-2">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Generate online tickets for the event</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Make online payment through cards</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>
                        Stay informed about the events you've registered for.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                {/* <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={images[2].src}
                  width="540"
                  height="405"
                  alt={images[2].title}
                /> */}
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-[color:var(--darker-secondary-color)] mb-2">
                    Less effort. More work
                  </div>
                  <h3 className="h3 mb-3">Track check-in/check-out</h3>
                  <p className="text-xl text-gray-500 mb-4">
                    Effortlessly monitor event participants and their details
                    with our platform, and simplify the check-in and check-out
                    process with our convenient features.
                  </p>
                  <ul className="text-lg text-gray-500 -mb-2">
                    <li className="flex items-center mb-2">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Automate manual work</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Improves the security at venue</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="w-3 h-3 text-green-500 mr-2" />
                      <span>Keeping track of all attendees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
