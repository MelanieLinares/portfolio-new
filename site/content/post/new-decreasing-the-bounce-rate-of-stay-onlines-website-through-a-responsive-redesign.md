---
title: new - Decreasing the bounce rate of Stay Online's website through a
  responsive redesign
titlebold: Decreasing the bounce rate of Stay Online's website
titlenormal: through a responsive redesign
preview: img/stayonline/stayonline-collage.jpg
date: 2016-06-30T20:18:56.086Z
newdate: 2016-09-08T20:18:56.116Z
client: Stay Online Corp.
logo: img/logo-icon.svg
role: Front-End Web Developer
tags:
  - cross-browser
technology: User Research, UI Design, Prototyping, Frontend Technology
duration: 3 months
introheading: Creating a plan to decrease mobile bounce rate
introbody: >-
  ### O﻿verview:


  Stay Online is a manufacturer and distributor of a wide selection of power cords and cables for the data center, power infrastructure and industrial markets. 


  **Problem:** <br/> Many users did not make or complete purchases. These users included a very high percentage of users from mobile devices. 


  **Solution:** <br/> Redesign the existing website, focusing on responsive design and maintainable code.


  **The starting rate:** <span aria-label="thumb down emoji">👎</span> about 85% of mobile users leave <br/> **The goal:** <span aria-label="okay hand emoji">👌</span> fewer than 50% of mobile users leave

  <em>(note: mobile was defined as less than 1024px screen size during the design sprint)</em>


  Stay Online's e-commerce website, launched in 1997, had not changed to be compliant with best practices introduced with HTML5. Mobile users were not considered. This contributed to a large number of mobile device users leaving the site upon load or before completing a purchase. There was a potential to capture these users by making the web experience accessible. Responsive design was not an easy sell to management. Data-driven design through analytics was needed to get the pitch approved.
theme: blue
typed_list:
  - type: fullwidth
    background: Blank
    content_options:
      - type: overlap_bg_img_content
        image: img/sample.png
        content: >-
          ## Gathering insight, identifying issues, and clarifying tasks


          ### Insight and issues


          * Design needs to maintain IE6+ (and later IE8+) browser compatibility

          * Data-heavy pages need content organization and prioritization to provide an ideal mobile experience

          * The branding system needed updating to incorporate accessible colors for web and print

          * Code refactoring is needed to remove a table-based layout and poorly formed HTML
        img_on_right: false
      - type: needtonamethis
        unnamed_text: "### Three main types of users were identified"
        unnamed_image: img/sample2.png
        introw:
          blurbsw:
            - textw: >-
                **Business-to-Business Customers**

                These users include one time buyers and repeat buyers. They use multiple devices and browsers, buy in bulk and enjoy the ability to customize a product or order. Older browser support is very important to the existing user base.
              imagew: img/scroll.svg
            - textw: >-
                **Inventory Warehouse Workers**

                These are internal Stay Online employees working on mobile devices. They use authenticated portions of the website to check stock and product location. They need the website to not limit functionality for small devices.
              imagew: img/scroll.svg
            - textw: >-
                **Sales and Marketing Employees**

                These are internal and external Stay Online employees working on multiple devices, including tablets when at trade shows. They need the website to work fast and reliably on low data connections.
              imagew: img/scroll.svg
      - type: generic_content
        generic_content: I worked with Marketing and Sales managers to identify business
          needs for a new homepage and discovered that a major problem was that
          a large number of customers were unable to order products on mobile
          devices. Responsive design presented an exciting opportunity.
  - type: fullwidth
    background: Angled
    content_options:
      - type: generic_content
        generic_content: >-
          ## Make it work! Make it compatible! Make it progressively enhanced!


          Stay Online’s client base contained an ample percentage of IE6 users (even back in 2012 when use within the U.S. was below 1%). The codebase included a table-based layout structure and polyfills, all of which would need to be re-evaluated. The site would need to be cross-browser-compatible. 


          Technical debt from supporting older browsers had increased over time. In early conversations, many voices were worried about any change. The Sales team did not want any ordering downtime with the transition to the new site. Marketing did not want a drastic overnight aesthetic change, fearing change would confuse customers and disrupt brand trust. The Web team wanted an easier-to-maintain code base.


          A plan was made to implement an agile versus waterfall release for design and code changes which would satisfy Sales and Marketing. A plan to reduce the number of HTML and CSS files through reusable code was made to satisfy the needs of the Web team.


          ### Development overhead:


          CSS adjustments were constantly being logged as bugs with each new page creation. Templates were not implemented and pages were hand-coded.

          Layout bugs were constantly found by the team and users as it was easy to mistype or forget a closing table tag. This resulted in the development focusing on tackling the growing backlog as a symptom versus tackling the cause.


          ### User pain points:


          Many users complained they could not see the content because it was either hidden, off-screen, or required scrolling horizontally on mid-size and small mobile devices. Users complained they were having difficulty tabbing through web content formatted with tables. Keyboard focus needed to be implemented more consistently or hidden. This was directly causing rampant accessibility issues.
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Rethinking the layout through research


          Making a site responsive is not a matter of making elements fit, but providing an equal experience for users regardless of screen size. When conducting competitor research, specific layouts stood out as standard practices involving the navigation and homepage.
      - type: CaptionImg
        caption: When comparing many of the competitors it was clear that blue, gray,
          black and yellow were common color schemes. Many sites included
          certification logos on product pages.
        image: img/stayonline/stayonline-moodboard.jpg
        arrow_on_right: false
      - type: CaptionImg
        caption: Part of the research analysis included the current graphic design
          collateral Stay Online used through print and web ads. As part of this
          project I created an iconset for major product types.
        image: img/stayonline/stayonline-collage.jpg
        arrow_on_right: false
  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Client approval


            Research began on the product after initial conversations with the lead development stakeholders. Data on bounce rate was gathered from Google Analytics thanks to close work with the Marketing director. A presentation of the benefits of a redesign was given to the CEO.


            ### Testing designs to determine major changes


            A/B testing was completed to determine whether a 3 or 2 column layout resulted in a better call-to-action response. Additionally testing was conducted regarding removing teh left side navigation in favor of a full-width top menu with drop downs. Despite positive data from new users the negative data from existing users resulted in the decision to keep the side navigation.
    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Content-first


            Requirements from Marketing, Sales, and Development were gathered and compared to what content is most visited by users. Key internal stakeholders were surveyed on the gathered data and asked to rank the importance of the information. Later tests requested users to place key components within a basic wire-frame to gather further data on content hierarchy and placement.


            ### Responsive design


            Started by making the site optimized for a min-screen size of 1024px which at the time was the average internal and external device-width

            Static tables and charts needed to be refactored and rewritten

            The next goal was to have elements optimized device-widths at a min of 768px. (Unfortunately, the project dissolved mid-release before full responsive implementation)            
  - type: fullwidth
    background: Blank
    content_options:
      - type: scroll-image
        caption: This is a caption about the wireframe sketches
        image: img/Group 538.png
  - type: fullwidth
    background: Rectangular
    content_options:
      - type: generic_content
        generic_content: >-
          ## Optimizing the navigation and redesigning the homepage


          After years of adding every new product line to the sidebar, the experience of navigating product categories was inefficient.
      - image2caption: same as other
        image1caption: "Navigation clutter was reduced and information architecture
          prioritized. In some cases this involved combining categories or
          breaking them up into more understandable ones. "
        image1: img/stayonline/2012-homepage-tablet-cropped.gif
        image2: img/blog-chemex.jpeg
        type: image-jumble-grid
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Reinvisioning the product pages


          TBD - After years of adding every new product line to the sidebar, the experience of navigating product categories was inefficient.
      - image4caption: Product types were re-categorized and the homepage featured
          section changed from including every category to only the most
          commonly bought custom product categories.
        image3caption: same as next
        image2caption: same as other
        image1caption: "Navigation clutter was reduced and information architecture
          prioritized. In some cases this involved combining categories or
          breaking them up into more understandable ones. "
        image1: img/stayonline/2012-homepage-tablet-cropped.gif
        image2: img/blog-chemex.jpeg
        image3: img/grayscale-laptop.gif
        image4: img/stayonline-eu-design.jpg
        type: image-jumble-grid
  - type: fifty_fifty
    background: Rectangular
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ## Accessible Strategy


            Accessibility baselines were established using Google Lighthouse and Axe DevTools. Manual testing was completed to meet WCAG 2.0 Level A.


            ### Layout was changed from tables and legacy code to HTML5


            * Previous code used floats and absolute positioning to change the logical order of content which negatively affects keyboard users

            * “Divitus” (the overuse of the `<div>` tag) was combated by using `<header>`, `<nav>`, `<aside>`, `<section>`, `<footer>`, and other HTML elements

            * Lists were re-written to use HTML `<ul>` and `<ol>` versus implicit lists so they could be utilized by a screen reader

            * Table usage was changed from layout to data presentation (comparison or analysis) when relevant.
    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Tweaking the color palette to meet accessible color contrast
            guidelines

            \[screenshots of old design showing inaccessible colors and contrast]
        - type: CaptionImg
          image: img/stayonline-us-branding.jpg
          caption: ratio...
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: "## Comparing the results"
      - image5caption: caption
        image4caption: caption
        image3caption: caption
        image2caption: caption
        image1caption: caption
        image1: img/stayonline-us-responsive.jpg
        image2: img/stayonline-us-table.jpg
        image3: img/stayonline-us.jpg
        image4: img/stayonline-us-tablet.png
        image5: img/stayonline-eu.jpg
        type: image-jumble-grid
team: Web Development Manager, Marketing Specialist,
---
