---
title: Increasing accessibility across NCDOT websites to meet Section 508
  compliance
weight: 1
titlebold: Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
thumbnail: img/ncdot-a11y-large.png
preview: img/ncdot-featured.png
preview2: img/ncdot-a11y2.png
date: 2019-06-12T01:37:30.202Z
newdate: 2019-08-01T01:37:30.230Z
client: NC Department of Transportation
logo: img/ncdot-logo.jpg
role: Accessibility Specialist
tags:
  - accessibility
  - audit
  - ux
technology: Manual auditing, Triaging of issues, User Interface Design, Documentation
duration: 2 months
introheading: Creating a plan for usability & accessibility
preview_intro: The North Carolina Department of Transportation (NCDOT) had a website redesign in 2018. I conducted an audit which found accessibility issues with the website individual pages and components. As a government agency the sites needed to meet a higher standard than the currently met WCAG 2.0 A (single A) level.
preview_tools: UX, NVDA, WCAG/ARIA
introbody: >-
  **The Problem:** <span aria-hidden="true">🤔</span><br/> 
  Government websites, including those of local agencies, need to be accessible in accordance to the Americans with Disabilities Act (ADA). The NCDOT websites were not meeting minimum compliance.  


  **The Plan:** <span aria-hidden="true">💡</span><br/> 
  Through targeted auditing of pages and components an ongoing remediation plan was created and phase one of the plan implemented into the main site. While a variety of tools were utilizing in establishing a starting compliance level, the easiest to comprehend for stakeholders was to present changes in Google Lighthouse scores along with changes in Axe Devtools issues found.


  **Initial compliance:** <span aria-label="thumb down emoji">👎</span> Score of 67 (based on Google Lighthouse) and 147 issues (based on Axe Devtools)  

  **Phase one goal:** <span aria-label="okay hand emoji">👌</span> Score greater than 80 and fewer than 100 issues
theme: purple
casestudy: ux

typed_list:
  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ## Why the concern over accessibility?


            At the end of a development project I noticed existing accessibility issues  when the batteries in my mouse died. This [situational disability](www.google.com) required me to use my keyboard to navigate the website. I consulted the NCDOT with my concerns and volunteered to audit the UI and prepare a plan for remediation. 


            ### What is W.C.A.G. & Section 508?


            The [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) are guidelines considered to be the benchmark for accessibility compliance. [Section 508](https://www.levelaccess.com/compliance-overview/section-508-compliance), as part of the Rehabilitation Act of 1973, is a law that requires government agencies to provide access to web and non-web electronic content to people with disabilities.

            ### The main concerns
        - type: introw
          blurbsw:
            - imagew: img/citizen1.png
              textw: >-
                #### Citizens:

                * Citizens with vision difficulties are unable to understand important safety and legal announcements

                * Citizens may have a hard time making convenient online transactions

                * Citizens may have difficulties completing timed tasks
            - imagew: img/government1.png
              textw: >-
                #### NCDOT:

                * As a federal agency, websites failing to meet guidelines can lead to lawsuits 

                * Potential for increase in user complaints and loss of trust
    right_side:
      content_options:
        - type: CaptionImg
          image: img/accessibility-citizens.gif
          caption: "One way to help meet ADA requirements is to ensure that government websites have accessible features for people with disabilities."
  - type: fullwidth
    background: Angled
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

              ![alt text](img/ncdot-a11y2.png)


              ### Manual testing

              <div class="pill-featured-text">
              <div class="left-text-only">Automated scans can only identify approximately 30% of WCAG success criteria violations.<br>
              <small>source: <a href="https://www.levelaccess.com/blog/automated-accessibility-testing-tools-how-much-do-scans-catch/">Level Access, <i>Automated Accessibility Testing Tools: How Much Do Scans Catch?</i></a></small></div>
              </div>

              <p>The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.</p>

          - type: Content03
            Content003: >-
              * Keyboard navigation and operation tested

              * Screen reader: NVDA and Talkback

              * Color contrast tested

              * Code inspection, including JavaScript
  - type: fifty_fifty
    background: Blank
    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Focus on components

            Components associated with key functionality such as date pickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.

            - Date pickers were not operable via keyboard or presented instances of <span style="border-bottom: 2px dotted black" title="keyboard traps: these occur when a user can acccess a component using the keyboard but cannot leave that component using the keyboard">keyboard traps</span>.

            - Custom dropdown elements would refresh pages on key change when cycling through options

            - Contact forms without correct label associations were in the footer of every page

            - Incorrect use of headings included <span style="border-bottom: 2px dotted black" title="Implicit: unclear, only appearing like something else">implicit</span> headings which contained no meaning in HTML syntax and skips in heading elements which disrupt a screen reader's ability to parse content
    left_side:
      content_options:
        - type: heading3
          heading03: Prioritizing the findings        
        - type: CaptionImg
          caption: >-
            Horizontal alerts within the header and pop alerts provided
            important information to users visually and needed ARIA live region
            roles to share this information with users not accessing the site
            visually.


            Many pages included repeatable card components
          image: img/Group 542.png

  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Header navigation was tested for keyboard operability, clarity of functionality, & color contrast

        - type: cards
          process: true
          blurbcards:
            - imagecards: img/think-emoji.svg
              textcards: >-
                **The dropdown navigation was duplicated within the code for multiple screen sizes rather than using CSS to adjust the layout.**
            - textcards: This resulted in duplicated content for assistive technology users. Link purpose was lost and users could become confused. Additionally, the additional content acted as further navigation barriers for keyboard users.   
        - type: cards
          process: true
          blurbcards:
            - imagecards: img/think-emoji.svg
              textcards: >-
                **Some elements were contained within implicit lists or were non-standard rather than native controls.**
            - textcards: Implicit lists prevent assistive technology users from understanding information relationships. Custom elements, if improperly coded, do not allow screen reader users to activate them.  
        - type: cards
          process: true
          blurbcards:
            - imagecards: img/think-emoji.svg
              textcards: >-
                **The dropdown navigation bar contained white links over an orange background-image**
            - textcards: The color contrast for most of the links (some darker areas passed contrast) did not pass the WCAG recommendation of 4.5:1. Low-vision users would have difficulty reading the content.

    right_side:
      content_options:
        - type: CaptionImg
          caption: >-
            The header consists of a logo, a search form field, and NC-wide helpful links. The main navigation includes dropdown elements of multiple columns of links, each with its header.
          image: img/header_cropped.jpg

  - type: fullwidth
    background: Blank
    content_options:     
      - type: overlap_bg_img_content
        image: img/hero-section.jpg
        caption: This content is constantly changing on the site and needs dynamic implementation. The content consists of a full-width image, white text and a learn more link within a translucent background overlaid on the image. A location form component is located in the top right.
        content: >-
          ### Top-of-page/hero content was checked for link purpose, image alternative text, & custom component accessibility

        
          * **The image was missing the alt attribute and occurred within a section of constantly updating CMS content**\
              This was something that needed to be fixed on the CMS side of things as alt attributes were not included in the compiled code. Alt text inclusion would still need to be entered manually so the possibility of the alt text being non-compliant remains an issue.
          * **The overused ‘Learn More’ link name is vague and not recommended in most situations**\
              Visual users may be able to discern the relationship between paragraph content and link purpose, but screen reader users may access link names separate from their surrounding content. Vague names do not help a user understand the purpose. 
          * **The ‘Select Your Location’ element opens a pseudo dialog containing a third-party auto-complete input and a current location button**\
              It was important to ensure that the keyboard, as well as screen reader users, could operate the control and understand it. Since this element was not within NCDOT’s codebase any accessibility changes would need to be resourced or the element re-written internally.
        img_on_right: false
      - type: OverlapImg
        largeimg: img/ncdot-components.png
        caption: I didn't actually want this. I wanted basically the overlap background
          image content without the background
        smallimg: img/Group 531.png

  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Repeatable card components were tested for structure, image, & link names, as well as tested for duplicated information
        - type: cards
          process: true
          blurbcards:
            - imagecards: img/think-emoji.svg
              textcards: >-
                **Images within each card either serve a decorative or meaningful purpose**
            - textcards: If the content is decorative but includes unhelpful alternative text it only serves as a barrier for users accessing additional content.   
        - type: cards
          process: true
          blurbcards:
            - imagecards: img/think-emoji.svg
              textcards: >-
                **Headings before each set of card components were tested for explicit markup and correct heading level**
            - textcards: When a heading has the wrong level or does not use heading markup the baked-in browser element purpose is not conveyed. A user may not understand the content or be able to understand content relationships.
        - type: featured-text
          featuredtext: Using ARIA roles and attributes, we can improve the accessibility
            of components by providing additional semantics.

    right_side:
      content_options:

        - type: CaptionImg
          caption: >-
            The card components consist of multiple links, decorative image content, date, and read more buttons. Other cards consisted entirely of images linked to individual articles.
          image: img/Image 43.png


  - type: fifty_fifty
    background: Blank
    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Dialogs & third-party components were tested for focus changes & screen reader use.

            * **Originally not focusable or operable, the site’s dialogs were not accessible**\
                Dialogs need to have the proper role and structure so assistive technology users understand the content.
            * **Alerts of important information were not announced to screen readers.**\
                Without correct Aria roles, important information may not be announced to users. Low or no-vision users will miss out on important information afforded by visual users.
                
        - type: pillfeaturedtext
          pillfeaturedtext: Using ARIA roles and attributes, we can improve the accessibility of components by providing additional semantics.

    left_side:
      content_options:

        - type: CaptionImg
          caption: >-
            The dialogs included those which appear on the first load and those
            initiated by a user. Third-party components consisted of datepicker,
            map, and auto-complete search widgets.
          image: img/dialog-cropped.jpg


  - type: fullwidth
    background: Angled
    content_options:
      - type: generic_content
        generic_content: >-
          ## The takeaway
          
          - <span aria-hidden="true">👍</span> 50% automatic issue reduction

          - <span aria-hidden="true">👍</span> 82 Google Lighthouse


          This project was confined to a single sprint. NCDOT has many connected sites that share frameworks and components. Each sub-site also contains individual pages and features that contain custom code. These custom pages and subsites would need to be remediated in later sprints. 


          The original goal was to reach a score greater than 80 via Google Lighthouse and reduce the number of automatic issues found in Axe DevTools by 50%. This was successful. 

          Of course, a good Lighthouse score does not ensure an accessible application, but this was a benchmark for the first sprint. 
          
          The remediation tasks were validated with help from the QA team. The team was given a demo of the before and after and given training on how to proactively reduce accessibility issues in the future.

          > Melanie contributed a great deal to improving our website’s load time, performance, and accessibility. The results were effective and immediate - faster page loads across the board, and forms and interactions were available to everyone regardless of capability.<br>
          <cite>- Patrick Doran <small>NCDOT UX and Web Services Manager</small></cite>           


          > Thank you for all your efforts in keeping the web accessible.<br>
          <cite>- Todd Darling <small>Insight Team Lead while on the NCDOT contract</small></cite>

team: Frontend Department Manager
---
