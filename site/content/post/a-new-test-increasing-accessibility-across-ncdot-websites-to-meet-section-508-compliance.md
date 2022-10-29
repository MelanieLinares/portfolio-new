---
title: (a new test)  - Increasing accessibility across NCDOT websites to meet
  Section 508 compliance
titlebold: Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
preview: img/accessibility-ncdot.jpg
notice: For legal reasons some images are representational only or blurred
date: 2022-09-25T03:08:56.535Z
newdate: 2022-09-25T03:08:56.556Z
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
          situational disability required I use my keyboard to navigate the
          website. It is important to recognize that accessibility is for
          everyone, from someone who is blind, has limb differentiation, to
          someone having a temporary or situational disability. As a government
          agency, the website is required to be W.C.A.G. 2.0/Section 508
          accessible.


          ### What is W.C.A.G?


          The Web Content Accessibility Guidelines are part of a series of web accessibility guidelines considered to be the benchmark for compliance.


          ### What is Section 508?


          Section 508 as part of the Rehabilitation Act of 1973 is a law that requires government agencies to provide access to its Information and Communication Technology (ICT) to people with disabilities. The Revised 508 Standards incorporate by reference and apply the WCAG 2.0 Level AA Success Criteria to both web and non-web electronic content.
      - type: introw
        blurbsw:
          - imagew: img/coffee.svg
            textw: >-
              ### The main issue for citizens


              * Citizens with vision difficulties are unable to understand important safety and legal announcements

              * Citizens may have a hard time making convenient online transactions

              * Citizens with situational or temporary disabilities (including slow internet speeds) may have difficulties completing tasks
          - imagew: img/coffee.svg
            textw: >-
              ### The main issue for the NCDOT


              *  As a federal agency, the websites for the NCDOT and NCDMV fall under Section 508 regulations to be ADA compliant. Failure to meet guidelines can lead to lawsuits and a loss of citizen and customer trust
  - type: display_image_section
    heading05: Conducting the accessibility audit
    image: img/ncdot-display.png
    display_image_section_content:
      - type: Content02
        Content002: >-
          ### Why not test the entire site?


          The NCDOT website consists of several subsites and pages, but are based off templates and reusable components. Sites like this are constantly adding new content, but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.




          ### Establishing a baseline with automatic testing


          * Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)

          * Created a spreadsheet to organize and group issues

          * Severity and tractability levels were added to NCDOT ticketing system

          * Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead




          ### Manual testing


          The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.


          * Keyboard

          * Screen reader: NVDA and Talkback

          * Color contrast

          * Code inspection, including JavaScript
  - type: Twocol_content
    twocol_content_left: []
---
