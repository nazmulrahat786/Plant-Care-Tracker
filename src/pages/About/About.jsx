    import React from "react";

const About = () => { 
  return (     
    c     
    <section classNa me="bg-green-100 my-10 mx-12 rounded-xl py-20 px-6"> 
      <div className="max-w-4xl mx-auto text-center">   
        <h2 className="text-5xl font-extrabold text-green-800 mb-6">
          About <span className="text-green-600"> Plant Care Tracker</span>
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-green-900 leading-relaxed mb-8">
          Plant Care Tracker is a nurturing home for every plant enthusiast — whether you’re
          just starting your green journey or already growing your own indoor jungle.
          We bring you expert care tips, inspiring stories, and a passionate community
          all dedicated to celebrating  the magic of  plants.
        </p>

        <div className="inline-flex items-center space-x-3 text-green-700 font-semibold text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4m10 12V4M3 20h18M7 16a4 4 0 014-4h2a4 4 0 014 4m-10 0v4m6-4v4"
            />
          </svg>
          <span>Growing Together, Naturally</span>
        </div>
      </div>
    </section>
  );
};

export default About;
