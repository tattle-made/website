import React, { useState } from "react"

import { Box, Heading, Paragraph, Text, Image} from "grommet"

import MasonryLayoutResponsive from "../MasonryLayoutResponsive"
import { PlainSectionLink } from "../TattleLinks"
import { byline } from "../../default-blog-index-layout"



export function AllBlogsIndexLayout({blogs}){

    return(

        <MasonryLayoutResponsive flex={3}>
          {blogs.map((blog,key )=> {
            return (
              <Box
                key={key}
                border={{ color: "visuals-3" }}
                round={"xsmall"}
                overflow={"hidden"}
              >
                <PlainSectionLink to={`/blog/${blog.fields.slug}`}>
                  <Box>
                    {blog.frontmatter.cover ? (
                      <Box
                        width={"small"}
                        style={{ minWidth: "100%" }}
                        height={"small"}
                      >
                        <Image
                          fit={"cover"}
                          src={`/${blog.frontmatter.cover}`}
                        ></Image>
                      </Box>
                    ) : null}
                    <Box pad="small">
                      <Text size={"xsmall"} weight={600}>
                        {`${new Date(blog.frontmatter.date).toDateString()}`}
                      </Text>
                      <Text size={"small"}>
                        {byline(blog.frontmatter.author)}
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    pad={{ left: "small", right: "small", bottom: "medium" }}
                  >
                    <Box direction={"row"} align={"center"}>
                      <Heading
                        margin={{ top: "none" }}
                        level={3}
                        weight={500}
                        color={"brand"}
                      >
                        {blog.frontmatter.name}
                      </Heading>
                    </Box>

                    <Paragraph size={"large"} fill margin={"none"}>
                      {blog.frontmatter.excerpt}
                    </Paragraph>
                  </Box>
                </PlainSectionLink>
              </Box>
            )
          })}
        </MasonryLayoutResponsive>
    )
}