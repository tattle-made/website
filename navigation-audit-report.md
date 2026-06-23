# Navigation Accessibility Audit Report

## Overview
This report identifies pages/routes on the Tattle website that lack internal navigation links, making them accessible only through the sitemap or direct URLs. Improving navigation to these pages will enhance site accessibility and user experience.

## Navigation Structure Analysis

### Current Navigation Components

1. **Main Navigation (SimpleHeader.js)**
   - Tools dropdown menu (Uli, Deepfake Analysis Unit, Viral Spiral, Kosh, Other Projects)
   - Blog link
   - Research link
   - Learn More dropdown (Blog, Newsletter, Work With Us, Annual Reports, FAQ, Community, Updates)

2. **Footer Navigation (footer.js)**
   - FAQ
   - Contributors
   - Privacy Policy
   - Contact Us
   - Site Map

## Pages Without Internal Navigation Links

### Lab Pages
- `/lab/topic-modeling-factcheck-articles.mdx`
  - No direct navigation link from main menu or footer
  - Only accessible via sitemap

### Language-specific Pages
- All pages under `/lang/` directory (Hindi, Malayalam, Marathi, Tamil, Telugu versions of FAQ and values)
  - No language selector in the main navigation
  - No links to these translations from their English counterparts

### Article Pages
- `/articles/covid-whatsapp-public-groups/`
- `/articles/vaccine-hesitancy/`
  - No "Articles" section in main navigation
  - Only accessible via sitemap or possibly from blog posts

### Miscellaneous Pages
- `/links.jsx`
- `/misinfocon-india.mdx`
- `/video.mdx`
- `/fullstack.mdx` (appears to be a duplicate of a career page)
  - No direct navigation links

### Career Pages
- Individual job postings under `/career/`
  - Only accessible through "Work With Us" but no listing of all available positions

### Dataset Pages
- `/datasets/datasets-we-love.mdx`
  - No direct link from the Datasets page

### Product Pages
- `/products/closed-messaging-checklist.mdx`
- `/products/gftw.mdx`
- `/products/github-indices.mdx`
- `/products/jod-bot.mdx`
- `/products/ml-commons-safety-benchmark.mdx`
- `/products/whatsapp-archiver.mdx`
  - Not all product pages are accessible from the Tools dropdown

## Recommendations

1. **Create a Language Selector**
   - Add a language selector in the header or footer to provide access to translated content
   - Link between equivalent content in different languages

2. **Expand Tools/Products Menu**
   - Include all product pages in the Tools dropdown or create a comprehensive Products page with links to all tools

3. **Add Articles Section**
   - Create an "Articles" section in the main navigation or include it under Research

4. **Improve Career Page Navigation**
   - Create a proper job listings page that shows all available positions

5. **Lab/Research Organization**
   - Include lab pages under the Research section with proper categorization

6. **Comprehensive Datasets Page**
   - Ensure all dataset-related pages are accessible from the main Datasets page

7. **Sitemap Enhancement**
   - Improve the sitemap organization to better categorize content
   - Consider adding a visual sitemap for better navigation

## Implementation Priority

1. High Priority: Language selector, Complete products listing
2. Medium Priority: Articles section, Career page improvements
3. Low Priority: Lab/Research organization, Datasets page enhancements

By implementing these recommendations, the website will provide better accessibility to all content and improve overall user experience.