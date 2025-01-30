import React from "react";
import DefaultLayoutNarrow from "@/components/default-layout-narrow";
import { Link } from "gatsby";

export default function JoinUs() {
  const jobs = [
    { title: "Software Engineer", link: "/career/sde1" },
    { title: "Qualitative Researcher", link: "/career/qualitative-researcher" },
    { title: "Digital Marketing Consultant", link: "/career/digitalmarketing-consultant" },
    { title: "Backend and DevOps Engineer", link: "/career/backend-engineer" },
    { title: "Senior Software Engineer", link: "/career/senior-fullstack-developer" },
  ];

  return (
    <DefaultLayoutNarrow>
      <div className="p-3">
        {/* Elegant Heading */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-4 tracking-wide">
          Join Us
        </h1>

        {/* Job Listings */}
        <div className="space-y-2">
          {jobs.map((job) => (
            <Link key={job.title} to={job.link} className="block no-underline">
              <div className="flex items-center justify-between bg-white shadow-md rounded-lg px-5 py-3 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <p className="text-[17px] font-semibold text-gray-800">{job.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Open Application Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Open Application</h2>
          <p className="mt-2 text-gray-600">
            If your work aligns with our mission, we are always eager to collaborate. Researchers, developers, 
            data scientists, designers, AI engineers, and journalists are welcome to reach out!
          </p>

          {/* Apply Here Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9kH9vWZoscBzxMITtxbTlmUJlogj9HejsZXUjs_H1dzssuQ/viewform?usp=sf_link"
            className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-md transition-all duration-200 transform hover:scale-105 no-underline"
          >
            Apply Here
          </a>
        </div>
      </div>
    </DefaultLayoutNarrow>
  );
}
