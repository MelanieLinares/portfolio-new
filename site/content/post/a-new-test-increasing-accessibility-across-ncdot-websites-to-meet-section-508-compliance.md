---
title: Increasing accessibility across NCDOT websites to meet Section 508 compliance
titlebold: Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
preview: img/accessibility-ncdot.jpg
notice: For legal reasons some images are representational only or blurred
date: 2019-06-04T03:08:56.535Z
newdate: 2019-08-08T03:08:56.556Z
client: NCDOT
logo: img/ncdot-logo.jpg
role: Software Engineer
tags:
  - cross-browser
  - sharepoint
  - typescript
technology:
  - AxE DevTools
  - Javascript
  - TalkBack
duration: 2 months
introheading: Creating a plan for usability and accessibility
introbody: >-
  The North Carolina Department of Transportation (NCDOT) had a new website
  redesign in 2018. The redesign’s purpose was to allow citizens an easier way
  to view all transportation-related information. Unfortunately, despite an
  improved visual UI, the site failed initial accessibility audits.


  **The starting score:**  67 (based on Google Lighthouse)

  **The goal:** score greater than 80
typed_list:
  - type: Twocol_image_content
    heading05: Why the concern over accessibility?
    image: img/capture1.jpg
    caption: "1 in 4 adults in the U.S. have some type of disability. 75% of
      Americans with disabilities report using the internet on a daily basis.
      (source: CDC, 2018; Pew Research Center, 2021)"
    twocol_content_img:
      - type: Content02
        Content002: >-
          I noticed accessibility issues when the batteries in my mouse died.
          This [situational
          disability](https://userway.org/blog/how-situational-disabilities-impact-us-all)
          required me to use my keyboard to navigate the website. It is
          important to recognize that accessibility benefits everyone. As a
          government agency, the website is required to be W.C.A.G. 2.0/Section
          508 accessible.


          ### What is W.C.A.G?


          The Web Content Accessibility Guidelines are guidelines considered to be the benchmark for accessibility compliance.


          ### What is Section 508?


          Section 508, as part of the Rehabilitation Act of 1973, is a law that requires government agencies to provide access to web and non-web electronic content to people with disabilities. 
      - type: introw
        blurbsw:
          - imagew: img/noun-citizen-4727116.png
            textw: >-
              ### The main issue for citizens


              * Citizens with vision difficulties are unable to understand important safety and legal announcements

              * Citizens may have a hard time making convenient online transactions

              * Citizens may have difficulties completing timed tasks
          - imagew: img/noun-justice-4727128.png
            textw: >-
              ### The main issue for the NCDOT


              *  As a federal agency, websites failing to meet guidelines can lead to lawsuits and loss of citizen trust
  - type: display_image_section
    heading05: Conducting the accessibility audit
    image: img/ncdot-display.png
    display_image_section_content:
      - type: Content02
        Content002: >-
          ### Why not test the entire site?


          The NCDOT website consists of several subsites and pages based on templates and reusable components. Sites like this are constantly adding new content but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.




          ### Establishing a baseline with automatic testing


          * Automatic violations were identified with Google Lighthouse, Axe DevTools chrome extension, and the W.A.V.E. (web accessibility evaluation tool) extension

          * A spreadsheet was created to organize and group issues

          * Severity levels and occurrence data were added to the NCDOT ticketing system

          * The remaining issues were grouped by page or components. They were assigned an individual severity and discussed with the web department lead




          ### Manual testing


          The NVDA screen reader was used to manually identify issues with the information hierarchy and custom elements. Web extensions were utilized for hard-to-identify issues.


          * Keyboard navigation and operation tested

          * Screen reader: NVDA and Talkback

          * Color contrast tested

          * Code inspected, including JavaScript
  - type: Twocol_content
    twocol_content_left:
      - type: stacked_image_section
        image1: img/Group 542.png
        caption1: Horizontal alerts within the header and pop alerts provided imporant
          information to users visually and needed ARIA live region roles to
          share this information with users not accessing the site visually.
        heading05: remove this completely
        caption2: remove as required?
        image2: img/arrow-alt.png
    twocol_content_right:
      - type: heading3
        heading03: Prioritizing the findings
      - type: Content02
        Content002: >-
          ### Focus on components


          Components associated with key functionality such as date pickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.


          * Date pickers were not operable via keyboard or presented instances of keyboard traps

          * Custom dropdown elements would refresh pages on key change when cycling through options

          * Contact forms without correct label associations were in the footer of every page

          * Incorrect use of headings included implicit headings which contained no meaning in HTML syntax and skips in heading elements which disrupt a screen reader's ability to parse content
  - type: generic_content
    content_options:
      - type: generic_image
        image: img/header.jpg
      - type: generic_content
        genericcontent: >-
          ### Header navigation was tested for keyboard operability, clarity of
          functionality, and color contrast


          The header consists of a logo, a search form field, and NC-wide helpful links. The main navigation includes dropdown elements of multiple columns of links, each with its header.


          * The dropdown navigation was duplicated within the code for multiple screen sizes rather than using CSS to adjust the layout.

            * This resulted in duplicated content for assistive technology users. Link purpose was lost and users could become confused. Additionally, the additional content acted as further navigation barriers for keyboard users.
          * Some elements were contained within implicit lists or were non-standard rather than native controls.

            * Implicit lists prevent assistive technology users from understanding information relationships. Custom elements, if improperly coded, do not allow screen reader users to activate them.
          * The dropdown navigation bar contained white links over an orange background-image

            * The color contrast for most of the links (some darker areas passed contrast) did not pass the WCAG recommendation of 4.5:1. Low-vision users would have difficulty reading the content.
      - type: two-col-text-grid
        heading: Header navigation was tested for keyboard operability, clarity of
          functionality, and color contrast
        content1: The header consists of a logo, a search form field, and NC-wide
          helpful links. The main navigation includes dropdown elements of
          multiple columns of links, each with its header.
        content2: >-
          * The dropdown navigation was duplicated within the code for multiple
          screen sizes rather than using CSS to adjust the layout.

            * This resulted in duplicated content for assistive technology users. Link purpose was lost and users could become confused. Additionally, the additional content acted as further navigation barriers for keyboard users.
          * Some elements were contained within implicit lists or were non-standard rather than native controls.

            * Implicit lists prevent assistive technology users from understanding information relationships. Custom elements, if improperly coded, do not allow screen reader users to activate them.
          * The dropdown navigation bar contained white links over an orange background-image

            * The color contrast for most of the links (some darker areas passed contrast) did not pass the WCAG recommendation of 4.5:1. Low-vision users would have difficulty reading the content.
---
## The takeaway

Accessibility is an ongoing effort that takes planning and re-education efforts

* 50% issue reduction
* 82 Google Lighthouse



The original goal was to reach a > 80 via Lighthouse and reduce the number of issues within W.A.V.E by 50% and this was successful. Of course a good score does not ensure an accessible application, but this was used as a benchmark. The remediation tasks were validated with help from the QA team. The team was given a demo of the before and after and given training on how to proactively reduce accessibility issues in the future.



Melanie, contributed a great deal to improving our website’s load time, performance, and accessibility. The results were effective and immediate - faster page loads across the board, and forms and interactions were available to everyone regardless of capability.\
- Patrick Doran, NCDOT UX and Web Services Manager



Thank you for all your efforts in keeping the web accessible.

\- Todd Darling, Insight Team Lead while on NCDOT contract