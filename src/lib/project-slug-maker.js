// src/lib/project-slug-maker.js

/**
 * Makes a slug for project names.
 * Example: "Uli" -> "uli", "Viral Spiral" -> "viral-spiral"
 * 
 * @param {string} project - Project name
 * @returns {string} slug or empty string if invalid
 */
function projectSlugMaker(project) {
  if (typeof project !== "string" || project.trim() === "") {
    return "" // return empty string for invalid input
  }

  // Lowercase and replace spaces with hyphens
  return project
    .trim()               // remove extra spaces
    .toLowerCase()        // lowercase
    .split(/\s+/)         // split by one or more spaces
    .join("-")            // join with hyphens
}

module.exports = { projectSlugMaker }