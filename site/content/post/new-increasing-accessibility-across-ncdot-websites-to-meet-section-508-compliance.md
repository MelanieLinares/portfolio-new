---
title: new - Increasing accessibility across NCDOT websites to meet Section 508
  compliance
titlebold: Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
preview: img/ncdot-featured.png
notice: For legal reasons some images are representational only or blurred
date: 2019-06-12T01:37:30.202Z
newdate: 2019-08-01T01:37:30.230Z
client: NC Department of Transportation
logo: img/ncdot-logo.jpg
role: Accessibility Specialist
tags:
  - accessibility
  - sharepoint
technology: Manual auditing, Triaging of issues, User Interface Design, Documentation
duration: 2 months
introheading: Creating a plan for usability and accessibility
introbody: >-
  ### Overview:


  The North Carolina Department of Transportation (NCDOT) is responsible for building, repairing, and operating highways, bridges, and other modes of transportation, including ferries in the U.S. state of North Carolina. 


  **The Problem:** <br/> 

  Government websites, including those of local agencies, need to be accessible in accordance to the Americans with Disabilities Act (ADA). The NCDOT websites were not meeting minimum compliance.  


  **The Plan:** <br/> 

  Through targeted auditing of pages and components an ongoing remediation plan was created and phase one of the plan implemented into the main site. 


  After the NCDOT website redesign in 2018 an audit was conducted finding accessibility issues with the website individual pages and components. The new interface design brought an integrated a fresh appearance to the set of public-facing sites, but issues that negatively impacted users with visual impairments, those relying on screen readers or keyboards, and those affecting hard of hearing users were discovered. As a government agency the sites needed to meet a higher standard than the currently met WCAG 2.0 A level.


  While a variety of tools were utilizing in establishing a starting compliance level, the easiest to comprehend for stakeholders was to present changes in Google Lighthouse scores along with changes in Axe Devtools issues found.


  **Initial compliance:** score of 67 (based on Google Lighthouse) and 147 issues (based on Axe Devtools) <br/> **Phase one goal:** score greater than 80 and fewer than 100 issues
theme: purple
typed_list:
  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ## Why the concern over accessibility?


            Originally brought on only as a developer, my role did not directly require accessibility auditing. I always write code with accessibility in mind, but at the end of a development project I noticed existing accessibility issues  when the batteries in my mouse died. This [situational disability](www.google.com) required me to use my keyboard to navigate the website.

            I﻿ consulted the NCDOT with my concerns and volunteered to audit the UI and prepare a plan for remediation. It is important to recognize that accessibility benefits everyone. As a government agency, the website is required to be W.C.A.G. 2.0/Section 508 accessible.


            ### What is W.C.A.G?


            The Web Content Accessibility Guidelines are guidelines considered to be the benchmark for accessibility compliance.


            ### What is Section 508?


            Section 508, as part of the Rehabilitation Act of 1973, is a law that requires government agencies to provide access to web and non-web electronic content to people with disabilities.
        - type: introw
          blurbsw:
            - imagew: img/web.svg
              textw: >-
                ### The main issue for citizens


                * Citizens with vision difficulties are unable to understand important safety and legal announcements

                * Citizens may have a hard time making convenient online transactions

                * Citizens may have difficulties completing timed tasks
            - imagew: img/icon.svg
              textw: >-
                ### The main issue for the NCDOT


                As a federal agency, websites failing to meet guidelines can lead to lawsuits and loss of citizen trust
    right_side:
      content_options:
        - type: CaptionImg
          image: img/design-stats.gif
          caption: "The need for accessibility happens often later in life, but we should
            consider users of all needs and ages "
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Conducting the accessibility audit


          ### Why not test the entire site?


          The NCDOT website consists of several subsites and pages based on templates and reusable components. Sites like this are constantly adding new content but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.
      - type: display_image_section
        image: img/ncdot-display.png
        display_image_section_content:
          - type: Content02
            Content002: >-
              ### Establishing a baseline with automatic testing


              * Automatic violations were identified with Google Lighthouse, Axe DevTools chrome extension, and the W.A.V.E. (web accessibility evaluation tool) extension

              * A spreadsheet was created to organize and group issues

              * Severity levels and occurrence data were added to the NCDOT ticketing system

              * The remaining issues were grouped by page or components. They were assigned an individual severity and discussed with the web department lead


              ### Manual testing


              The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.


              * Keyboard navigation and operation tested

              * Screen reader: NVDA and Talkback

              * Color contrast tested

              * Code inspection, including JavaScript
  - type: fifty_fifty
    background: Angled
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ## Prioritizing the findings

            ### Focus on components

            Components associated with key functionality such as date pickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.
        - type: introw
          blurbsw:
            - imagew: img/people.svg
              textw: Date pickers were not operable via keyboard or presented instances of
                keyboard traps
            - textw: Custom dropdown elements would refresh pages on key change when cycling
                through options
              imagew: img/coffee.svg
            - textw: Contact forms without correct label associations were in the footer of
                every page
              imagew: img/idea.png
            - textw: Incorrect use of headings included implicit headings which contained no
                meaning in HTML syntax and skips in heading elements which
                disrupt a screen reader's ability to parse content
              imagew: img/powercord4.svg
    right_side:
      content_options:
        - type: CaptionImg
          caption: >-
            Horizontal alerts within the header and pop alerts provided
            important information to users visually and needed ARIA live region
            roles to share this information with users not accessing the site
            visually.


            Many pages included repeatable card components
          image: img/insight2.jpg
  - type: fullwidth
    background: Blank
    content_options:
      - type: fullwidth-img
        image: img/header.jpg
      - type: generic_content
        generic_content: >-
          ### Header navigation was tested for keyboard operability, clarity of
          functionality, and color contrast


          *The header consists of a logo, a search form field, and NC-wide helpful links. The main navigation includes dropdown elements of multiple columns of links, each with its header.*


          * The dropdown navigation was duplicated within the code for multiple screen sizes rather than using CSS to adjust the layout. 

            * **Impact:**\
              This resulted in duplicated content for assistive technology users. Link purpose was lost and users could become confused. Additionally, the additional content acted as further navigation barriers for keyboard users.
          * Some elements were contained within implicit lists or were non-standard rather than native controls.

            * **Impact:**\
              Implicit lists prevent assistive technology users from understanding information relationships. Custom elements, if improperly coded, do not allow screen reader users to activate them.
          * The dropdown navigation bar contained white links over an orange background-image

            * **Impact:**\
              The color contrast for most of the links (some darker areas passed contrast) did not pass the WCAG recommendation of 4.5:1. Low-vision users would have difficulty reading the content.
      - type: overlap_bg_img_content
        image: img/hero-section.jpg
        content: >-
          ### Top-of-page/hero content was checked for link purpose, image
          alternative text, and custom component accessibility


          *This content is constantly changing on the site and needs dynamic implementation. The content consists of a full-width image, white text and a learn more link within a translucent background overlaid on the image. A location form component is located in the top right.* 


          * The image itself lacked an alt attribute and occurred within a section of constantly updating CMS content

            * **Solution:**\
              This was something that needed to be fixed on the CMS side of things as alt attributes were not included in the compiled code. Alt text inclusion would still need to be entered manually so the possibility of the alt text being non-compliant remains an issue.
          * The overused ‘Learn More’ link name is vague and not recommended in most situations

            * **Impact:**\
              Visual users may be able to discern the relationship between paragraph content and link purpose, but screen reader users may access link names separate from their surrounding content. Vague names do not help a user understand the purpose. 
          * The ‘Select Your Location’ element opens a pseudo dialog containing a third-party auto-complete input and a current location button

            * **Solution:**\
              It was important to ensure that the keyboard, as well as screen reader users, could operate the control and understand it. Since this element was not within NCDOT’s codebase any accessibility changes would need to be resourced or the element re-written internally.
        img_on_right: true
      - type: OverlapImg
        largeimg: img/ncdot-components.png
        caption: I didn't actually want this. I wanted basically the overlap background
          image content without the background
        smallimg: img/Group 531.png
      - type: generic_content
        generic_content: >-
          Repeatable card components were tested for structure, image, and link
          names, as well as tested for duplicated information


          *The card components consist of multiple links, decorative image content, date, and read more buttons. Other cards consisted entirely of images linked to individual articles.*


          * Images within each card either serve a decorative or meaningful purpose

            * **Impact:**\
              If the content is decorative but includes unhelpful alternative text it only serves as a barrier for users accessing additional content. 
          * Headings before each set of card components were tested for explicit markup and correct heading level

            * **Impact:**\
              When a heading has the wrong level or does not use heading markup the baked-in browser element purpose is not conveyed. A user may not understand the content or be able to understand content relationships.
      - type: featured-text
        featuredtext: Using ARIA roles and attributes, we can improve the accessibility
          of components by providing additional semantics.
      - type: fullwidth-img
        image: img/dialog.jpg
      - type: generic_content
        generic_content: >-
          *The dialogs included those which appear on the first load and those
          initiated by a user. Third-party components consisted of datepicker,
          map, and auto-complete search widgets.*


          ### Dialogs and third-party components were tested for focus changes and screen reader use.


          * Originally not focusable or operable, the site’s dialogs were not accessible 

            * **Solution:**\
              Dialogs need to have the proper role and structure so assistive technology users understand the content.
          * Alerts of important information were not announced to screen readers.

            * **Impact:**\
              Without correct Aria roles, important information may not be announced to users. Low or no-vision users will miss out on important information afforded by visual users.
team: Frontend Department Manager
---
