console.log("Starting Adding Layout to Mdx Files in Pages......");
const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "src/pages");

function prependToFile(filePath, content) {
  const originalContent = fs.readFileSync(filePath, "utf8");
  // Check if the file already contains the required content
  if (!hasRequiredContent(originalContent)) {
    fs.writeFileSync(filePath, content + originalContent);
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Skipped ${filePath}`);
  }
}

function hasRequiredContent(content) {
  return (
    content.includes(
      'import DefaultLayoutNarrow from "@/components/default-layout-narrow"'
    ) &&
    content.includes("<DefaultLayoutNarrow>{children}</DefaultLayoutNarrow>")
  );
}

function processFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      processFiles(filePath); // Recursively process directories
    } else if (filePath.endsWith(".mdx")) {
      const importStatement = `import DefaultLayoutNarrow from "@/components/default-layout-narrow";\n\n`;
      const wrapperComponent = `export default function Layout({ children }) {\n  return <DefaultLayoutNarrow>{children}</DefaultLayoutNarrow>;\n}\n\n`;

      prependToFile(filePath, importStatement + wrapperComponent);
    }
  });
}

processFiles(pagesDir);

console.log("Adding Layout Completed!")