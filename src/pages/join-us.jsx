import React from "react";
import DefaultLayoutNarrow from "@/components/default-layout-narrow";
import { Box, Heading, Text, Button } from "grommet";
import { Link } from "gatsby";

export default function JoinUs() {
  const jobs = [
    { title: "Software Engineer", link: "/career/sde1" },
    { title: "Qualitative Researcher", link: "/career/qualitative-researcher" },
    { title: "Program Manager", link: "/career/ai-safety-program-manager.mdx" },
    { title: "Backend and DevOps Engineer", link: "/career/backend-engineer" },
    { title: "Senior Software Engineer", link: "/career/senior-fullstack-developer" },
  ];

  return (
    <DefaultLayoutNarrow>
      <Box pad={{ horizontal: "large-sx", vertical: "medium" }} margin={{ top: "xsmall" }}>
        {/* Elegant Heading */}
        <Heading level={2} margin={{ bottom: "small" }}>
          Join Us
        </Heading>

        {/* Job Listings */}
        <Box gap="small" margin={{ bottom: "small" }}>
          {jobs.map((job) => (
            <Link key={job.title} to={job.link} className="no-underline">
              <Box
                direction="row"
                justify="between"
                align="center"
                pad={{ vertical: "medium", horizontal: "large" }}
                margin={{ bottom: "small" }}
                className="bg-white shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
                style={{ borderWidth: '3px', borderColor: '#ddd', width: 'calc(100% + 10px)' }}  // Increased width
              >
                {/* Job Title */}
                <Text weight="bold" size="20px" color="accent-3" className="font-semibold">
                  {job.title}
                </Text>

                {/* Job Category */}
                <Text size="16px" color="accent-1" className="text-lg font-medium">
                  View Details
                </Text>
              </Box>
            </Link>
          ))}
        </Box>

        {/* Open Application Section */}
        <Box margin={{ top: "xsmall" }}>
          <Heading level={1} margin={{ bottom: "small" }} size="mediam">
            Open Application
          </Heading>
          <Text size="small-ms" color="dark-6" margin={{ bottom: "medium" }}>
            If your work aligns with our mission, we are always eager to collaborate. Researchers, developers,
            data scientists, designers, AI engineers, and journalists are welcome to reach out!
          </Text>

          {/* Apply Here Button */}
          <Box margin={{ top: "small" }} direction="row" justify="start">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9kH9vWZoscBzxMITtxbTlmUJlogj9HejsZXUjs_H1dzssuQ/viewform?usp=sf_link"
              label="Apply Here"
              primary
              color="brand"
              className="shadow-lg transition transform hover:scale-105"
              pad={{ vertical: "small", horizontal: "large" }}  // Added padding for button
              size="small"  // Smaller size for button
            />
          </Box>
        </Box>
      </Box>
    </DefaultLayoutNarrow>
  );
}
