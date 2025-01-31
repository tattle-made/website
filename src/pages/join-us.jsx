import React from "react";
import DefaultLayoutNarrow from "@/components/default-layout-narrow";
import { Box, Heading, Text, Button } from "grommet";
import { Link } from "gatsby"; // Import Gatsby's Link component

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
      <Box pad="medium">
        {/* Elegant Heading */}
        <Heading level={1} textAlign="center" margin={{ bottom: "small" }}>
          Join Us
        </Heading>

        {/* Job Listings */}
        <Box gap="small">
          {jobs.map((job) => (
            <Link key={job.title} to={job.link} className="no-underline">
              <Box
                direction="row"
                justify="between"
                align="center"
                pad="medium"
                margin="small"
                className="bg-white border shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
              >
                <Text weight="bold" size="18px" color="accent-3">
                  {job.title}
                </Text>
              </Box>
            </Link>
          ))}
        </Box>

        {/* Open Application Section */}
        <Box margin={{ top: "medium" }}>
          <Heading level={2} margin={{ bottom: "xsmall" }}>
            Open Application
          </Heading>
          <Text size="median" color="dark-6">
            If your work aligns with our mission, we are always eager to collaborate. Researchers, developers, 
            data scientists, designers, AI engineers, and journalists are welcome to reach out!
          </Text>

          {/* Apply Here Button */}
          <Box margin={{ top: "medium" }}>
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf9kH9vWZoscBzxMITtxbTlmUJlogj9HejsZXUjs_H1dzssuQ/viewform?usp=sf_link"
              label="Apply Here"
              primary
              color="brand"
              className="shadow-lg transition transform hover:scale-105"
            />
          </Box>
        </Box>
      </Box>
    </DefaultLayoutNarrow>
  );
}
