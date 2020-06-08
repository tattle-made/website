import React from "react"

import {
  Box,
  Heading,
  Text,
  Grid,
  ResponsiveContext,
  Avatar,
  Grommet,
} from "grommet"

import TattleTheme from "./theme"

const ResponsiveContributorGrid = props => {
  const Responsive = ({
    children,
    overrideColumns,
    overrideRows,
    areas,
    ...props
  }) => (
    <ResponsiveContext.Consumer>
      {size => {
        // Take into consideration if not array is sent but a simple string
        const columns = props.columns
        const rows = props.rows

        let columnsVal = columns
        if (columns) {
          if (columns[size]) {
            columnsVal = columns[size]
          }
        }

        let rowsVal = rows
        if (rows) {
          if (rows[size]) {
            rowsVal = rows[size]
          }
        }

        // Also if areas is a simple array not an object of arrays for
        // different sizes
        let areasVal = areas
        if (areas && !Array.isArray(areas)) areasVal = areas[size]

        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
          >
            {children}
          </Grid>
        )
      }}
    </ResponsiveContext.Consumer>
  )

  return (
    <Grommet theme={TattleTheme}>
      <Box>
        <Heading level={2} margin={"none"}>
          {props.title}
        </Heading>
        <Responsive
          rows={props.rows}
          columns={props.columns}
          gap="small"
          areas={props.areas}
          margin="medium"
        >
          {props.data.map((contributor, index) => {
            if (contributor.Type === "Full Time") {
              return (
                <Box
                  gridArea={props.rows[index]}
                  responsive="true"
                  direction="column"
                  gap="small"
                  pad="small"
                  key={contributor.Name}
                >
                  {contributor.Avatar ? (
                    <Avatar
                      size="xlarge"
                      src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
                    />
                  ) : null}
                  <Text weight="bold" size="medium" color="brand">
                    {contributor.Name}
                  </Text>
                  <Text weight="bold" size="medium" color="dark-3">
                    {contributor.Title}
                  </Text>
                  <Text size="medium" color="dark-3">
                    {contributor.Past}
                  </Text>
                </Box>
              )
            }

            if (contributor.Type === "Advisor") {
              return (
                <Box
                  gridArea={props.rows[index]}
                  responsive="true"
                  direction="column"
                  gap="small"
                  pad="small"
                  key={contributor.Name}
                >
                  <Text weight="bold" size="medium" color="brand">
                    {contributor.Name}
                  </Text>
                  <Text size="medium" color="dark-3">
                    {contributor.Role}
                  </Text>
                </Box>
              )
            }
          })}
        </Responsive>
      </Box>
    </Grommet>
  )
}
export default ResponsiveContributorGrid
