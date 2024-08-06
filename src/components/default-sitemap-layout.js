import { graphql } from "gatsby"
import React from "react"
import DefaultLayout from "./default-layout"
import { Box, Heading, Text } from "grommet"
import { PlainLink } from "./atomic/TattleLinks"
import DefaultLayoutNarrow from "./default-layout-narrow"
import { generateDisplayName } from "../lib/generate-display-name"

export default function SiteMapPage({ pageContext, data }) {
  //PagContext may have siteMapNodes of type Tree Structure commented below.
  const nodes = data.allFile.nodes
  const ignoreDirs = ["v2"]
  const ignoreFiles = ["404", "theme", "_index", "index", "video"]
  /**
   * Tree Structure
   * [
   *  { name: products, children:[{name:viral-spiral, children:[index.jsx, presskit]}, {name: feluda}, {name: index.jsx}, {name: khoj.jsx}]}
   * ]
   */

  const pageContextNodes = pageContext.siteMapNodes || []
  const tree = pageContextNodes.concat(buildTree(nodes))

  function buildTree(nodes) {
    const tree = []
    let current = tree

    nodes.forEach(node => {
      if (node.relativeDirectory) {
        const directoryParts = node.relativeDirectory.split("/")
        current = tree

        directoryParts.forEach(part => {
          let existingNode = current.find(item => item.name === part)

          if (!existingNode) {
            existingNode = { name: part, isDir: true, node: null, children: [] }
            current.push(existingNode)
          }

          current = existingNode.children
        })
      }
      current.push({ name: node.name, isDir: false, node: node })
    })

    return tree
  }
  let a = []
  const renderTree = treeNodes => {
    return treeNodes.map(tn => {
      if (ignoreDirs.indexOf(tn.name) !== -1) {
        return null
      }
      const displayName = (
        <Text size="small">
          {generateDisplayName(
            tn.node?.childrenMdx?.find(child => child.frontmatter)?.frontmatter
              ?.name ?? tn.name
          )}
        </Text>
      )

      if (tn.isDir) {
        const indexNode = tn.children.find(n => n.name === "index")
        if (indexNode) {
          return (
            <li>
              <div style={{ marginLeft: 2 }}>
                <PlainLink to={`/${indexNode.node.relativeDirectory}`}>
                  {displayName}
                </PlainLink>
                {tn.children && <ul>{renderTree(tn.children)}</ul>}
              </div>
            </li>
          )
        } else {
          return (
            <li>
              <div style={{ marginLeft: 2 }}>
                {displayName}
                {tn.children && <ul>{renderTree(tn.children)}</ul>}
              </div>
            </li>
          )
        }
      } else {
        return (
          tn.name !== "index" &&
          ignoreFiles.indexOf(tn.name) === -1 && (
            <li>
              <div style={{ marginLeft: 2 }}>
                <PlainLink
                  to={`${
                    tn.node.relativeDirectory
                      ? `/${tn.node.relativeDirectory}/${tn.node.name}`
                      : `/${tn.node.name}`
                  }`}
                >
                  {displayName}
                </PlainLink>
              </div>
            </li>
          )
        )
      }
    })
  }

  return (
    <>
      <DefaultLayoutNarrow>
        <Box width="100%">
          <Heading margin={{ horizontal: "auto" }}>Site Map</Heading>

          <Box>
            <ul>{renderTree(tree)}</ul>;
          </Box>
        </Box>
      </DefaultLayoutNarrow>
    </>
  )
}

export const query = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/pages/" } }) {
      nodes {
        id
        name
        absolutePath
        relativeDirectory
        relativePath
        childrenMdx {
          excerpt
          frontmatter {
            title
            name
          }
        }
      }
    }
  }
`
