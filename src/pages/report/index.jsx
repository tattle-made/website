import React from "react"
import DefaultLayoutNarrow from "@/components/default-layout-narrow"
import { Box, Text } from "grommet"
import { Link } from "gatsby" // Import Gatsby's Link component

export default function Layout({ children }) {
  const reports = [
    { year: "2022", link: "/report/2022-report" },
    { year: "2021", link: "/report/2021-report" },
    { year: "2020", link: "/report/2020-report" },
    { year: "2019", link: "/report/2019-report" },
  ]

  return (
    <DefaultLayoutNarrow>
      {children}
      <Box pad="medium">
        {/* Render the list */}
        {reports.map((report) => (
          <Link key={report.year} to={report.link} className="no-underline">
            <Box
              direction="row"
              justify="between"
              align="center"
              pad="medium"
              margin="medium"
              className="bg-white border shadow-lg rounded-xl transition transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              {/* Year on the left */}
              <Text
                weight="bold"
                size="18px"
                color="accent-3"
                className="font-semibold"
              >
                {report.year}
              </Text>

              {/* Title on the right */}
              <Text
                size="16px"
                color="accent-1"
                className="text-lg font-medium"
              >
                Annual Report
              </Text>
            </Box>
          </Link>
        ))}
      </Box>
    </DefaultLayoutNarrow>
  )
}
