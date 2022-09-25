---
title: (a test)  - Increasing accessibility across NCDOT websites to meet
  Section 508 compliance
titlebold: Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
preview: img/accessibility-ncdot.jpg
notice: For legal reasons some images are representational only or blurred
date: 2022-09-25T02:23:04.664Z
newdate: 2022-09-25T02:23:04.679Z
client: Test
logo: img/favicon-16x16.png
role: Software Engineer
tags:
  - cross-browser
  - sharepoint
  - typescript
technology:
  - AxE DevTools
  - Javascript
  - TalkBack
duration: 7 weeks
introheading: Creating a plan for usability and accessibility
introbody: >-
  The North Carolina Department of Transportation (NCDOT) as of 2018 had a new
  website redesign to allow citizens a secure, quick, and easy way to view all
  transportation-related information. Unfortunately, despite an improved visual
  UI the site failed initial accessibility audits.


  **The starting score:**  67 (based on Google Lighthouse)

  **The goal:** score greater than 80
typed_list:
  - type: Twocol_image_content
    heading05: Why the concern over accessibility?
    image: img/capture1.jpg
    caption: "The need for accessibility happens often later in life, but we should
      consider users of all needs and ages "
    twocol_content_img:
      - type: Content02
        Content002: >-
          Originally brought on for front-end development, I noticed the
          accessibility issues when my battery-operated mouse died. This
          [situational disability](google.com) required I use my keyboard to
          navigate the website. It is important to recognize that accessibility
          is for everyone, from someone who is blind, has limb differentiation,
          to someone having a temporary or situational disability. As a
          government agency, the website is required to be W.C.A.G. 2.0/Section
          508 accessible.




          ### What is W.C.A.G?


          The Web Content Accessibility Guidelines are part of a series of web accessibility guidelines considered to be the benchmark for compliance.


          ### What is Section 508?


          Section 508 as part of the Rehabilitation Act of 1973 is a law that requires government agencies to provide access to its Information and Communication Technology (ICT) to people with disabilities. The Revised 508 Standards incorporate by reference and apply the WCAG 2.0 Level AA Success Criteria to both web and non-web electronic content.
      - type: introw
        blurbsw:
          - imagew: img/coffee.svg
            textw: >-
              ### The main issue for citizens


              Citizens with vision difficulties are unable to understand important safety and legal announcements

              Citizens may have a hard time making convenient online transactions

              Citizens with situational or temporary disabilities (including slow internet speeds) may have difficulties completing tasks
          - textw: >-
              ### The main issue for NCDOT


              As a federal agency, the websites for the NCDOT and NCDMV fall under Section 508 regulations to be ADA compliant. Failure to meet guidelines can lead to lawsuits and a loss of citizen and customer trust
            imagew: img/idea.png
  - type: display_image_section
    heading05: Conducting the accessibility audit
    image: img/ncdot-display.png
    display_image_section_content:
      - type: Content02
        Content002: >-
          ### Why not test the entire site?


          The NCDOT website consists of several subsites and pages, but are based off templates and reusable components. Sites like this are constantly adding new content, but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.
      - type: Content03
        Content003: >-
          ### Establishing a baseline with automatic testing


          Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)

          Created a spreadsheet to organize and group issues

          Severity and tractability levels were added to NCDOT ticketing system

          Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead




          ### Manual testing


          The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.


          * Keyboard 

          * Screen reader: NVDA and Talkback

          * Color contrast

          * Code inspection, including Javascript
  - type: stacked_image_section
    heading05: Audit findings and breakdown
    image1: img/Group 542.png
    caption1: Horizontal alerts within the header and pop alerts provided imporant
      information to users visually and needed ARIA live region roles to share
      this information with users not accessing the site visually.
    image2: img/Image 43.png
    caption2: Many pages included repeatable card components
    display_image_section_content:
      - type: introw
        blurbsw:
          - imagew: img/coffee.svg
            textw: >-
              ### Focus on components


              Components associated with key functionality such as datapickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.
      - type: Content02
        Content002: >-
          - Date pickers were not operable via keyboard or presented instances
          of keyboard traps


          - Custom dropdown elements would refresh pages on keychange when cycling through options


          - Contact forms without correct label associations were in the footer of every page


          - Incorrect use of headings included implicit headings which contained no meaning in html syntax and skips in heading elements which disrupt a screen reader's ability to parse content
  - type: Twocol_content
    twocol_content_right:
      - type: OverlapImg
        largeimg: img/skiptomain.png
        smallimg: img/voiceover-headings.png
      - type: Content02
        Content002: >-
          ### Alerts & pop-ups


          - Originally not focusable or operable, these did not have an accessible way to close content and were adjusted or given textual alternatives  \

          - Alerts of important information were not announced to screen readers. Aria roles were added or re-implemented correctly




          ### Custom third-party components


          Some components found to be inaccessible. Code was edited as able or replaced with native HTML5 controls




          ### Navigation


          - Navigation for SharePoint is built with separate mobile and desktop code toggled with media queries. The issue is both are still accessible within the DOM via a screen reader regardless of screen size or device  \

          - Originally not all built using lists or link tags the navigation was changed to utilize valid html and link tags.
    twocol_content_left:
      - type: Content02
        Content002: >-
          ### Keyboard changes


          * Skip to main link existed but was not functional due to either an incorrect ID or empty href attribute, depending on the template. Navigation was added to a seperate component so it could be reused within templates

          * Headings re-organized and given proper hierarchy according to semantics vs aesthetic browser default sizing

          * Focus rings on links added back, as well as hover underlines which were originally inconsistently implemented

          * Elements arranged out of logical tab order via tabindex or the CSS float property caused issues when browsing through content.
      - type: OverlapImg
        largeimg: img/Image 46.png
        smallimg: img/accessibility.png
---
