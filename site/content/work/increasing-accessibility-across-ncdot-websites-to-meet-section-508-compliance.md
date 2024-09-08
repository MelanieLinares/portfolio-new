---
title: Overcoming NCDOT web accessiblity challenges, from design to development
weight: 1
titlebold: Overcoming NCDOT web accessiblity challenges,
titlenormal: from design to development
thumbnail: img/ncdot-a11y1.png
thumbnail2: img/ncdot-a11y-dt.jpg
preview: img/ncdot-a11y.jpg
preview_alt: ncdot website and axe devtools snapshot showing 147 issues
preview2: img/ncdot-a11y-2.png
date: 2019-06-12T01:37:30.202Z
newdate: 2019-08-01T01:37:30.230Z
client: NC Department of Transportation
logo: img/ncdot-logo.jpg
role: Accessibility Specialist
preview_responsibilities:
  - Identify core pages and templates
  - Utilize automated testing tools and manual testing
  - Mentor team on accessibility best practices
preview_intro: The North Carolina Department of Transportation (NCDOT) had a website redesign in 2018, which was unfortunately not accessible. I partnered with UX and Web Services to audit the site and create an accessible remediation plan that integrated with the existing design system.
tags:
  - accessibility
  - audit
  - ux
technology: Manual auditing, Triaging of issues, User Interface Design, Documentation
duration: 2 months

introheading: Establishing the (ongoing) Section 508 compliance roadmap
introbody: >-
  The North Carolina Department of Transportation (NCDOT) redesigned their websites in 2018, taking <a href="https://web.archive.org/web/20180614131636/https://www.ncdot.gov/">the dated table layout <img style="display: inline; width: 16px" alt="(external)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVR4nO3UMUoDQRQG4G8szGWiXiCXyBm8S8pgJIIpLRME0WuYFCFqI3YGrIQUlpowMMUSNruru0Ug/vCzTLEf897Ccog5xRiTTG/RbQLv4BFTzPCNNe41mICrBP/goWjUIUYl7eE4wcMEx+dzEf6EFd4KGoGzHDik93fin+lmVVaxDcfMcVcHDzlwK/ORT/6KB1wmeJTOcUX9kguV4mHHKl5xUxcf5MAxy7r4ET5wsQU3ghflH9/jtSzxUuHHle0Xrqvg53hPE1TtAu1fTuuAswHDEGTvwe256AAAAABJRU5ErkJggg=="></a> to a <a href="https://web.archive.org/web/20180713092126/https://www.ncdot.gov/Pages/default.aspx">modern and responsive design <img style="display: inline; width: 16px" alt="(external)" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVR4nO3UMUoDQRQG4G8szGWiXiCXyBm8S8pgJIIpLRME0WuYFCFqI3YGrIQUlpowMMUSNruru0Ug/vCzTLEf897Ccog5xRiTTG/RbQLv4BFTzPCNNe41mICrBP/goWjUIUYl7eE4wcMEx+dzEf6EFd4KGoGzHDik93fin+lmVVaxDcfMcVcHDzlwK/ORT/6KB1wmeJTOcUX9kguV4mHHKl5xUxcf5MAxy7r4ET5wsQU3ghflH9/jtSzxUuHHle0Xrqvg53hPE1TtAu1fTuuAswHDEGTvwe256AAAAABJRU5ErkJggg=="></a>. The redesign created a cohesive and responsive UI for the state-wide family of websites. Unfortunately, despite an improved visual UI, the site failed basic accessibility tests. 
  
  This is one of the main reasons that **accessibility should be incorporated into design** initially. Accessibility remediation and planning is possible, but tricky when a design and intrastructure is already in place. 
  
  
  **The purpose of this audit and training effort was to fix that oversight.**

  <div aria-hidden="true" style="font-size: 2.25rem; text-align: center;margin-top: 3rem; margin-bottom: 3rem;color:#89C6FF">〰</div>
  
  <p style="font-size: 100%">An important note before we begin: To establish an initial baseline, automated testing tools were used. Automated testing only identifies on average ⅓ of issues. Manual testing is very important and was a vital part of this project.</p>




typed_list:

  - type: section
    typed_list:
    - type: two_column
      two_column:  
        left: >-
          ### <mark>Goal:</mark><br>Establish a baseline accessibility level and prioritize issues into categories with severity

          Occurrence and severity of the different accessibility issues were accounted for when prioritizing. Severity increased based on the number of disabilities affected and based on whether issues presented user flow blockers. Occurrence was a specific consideration in fixing template-related bugs. Fixing a single template issue would result in fixing many at once.
          

          **The starting score:** 67 (based on Google Lighthouse) and 147 issues (based on Axe Devtools)

        right: >-
          ### <mark>Goal:</mark><br>Work with the team to establish expectations on remediation and for knowledge-base training 

          Accessibility is an ongoing process. With this in mind my role on the project would focus on planning for team self sufficiency, while remediating low effort/high impact issues. Two Agile sprints would consist of baseline meeting and Q&A, phase one remediation, team review, phase two remediation, and final touchpoint/training.


          Documentation would be an important milestone. How to test, related WCAG success criteria, how to remediate, and how to design/develop for accessibility would need to be addressed.

    - type: text
      text: >-
        <div aria-hidden="true" style="font-size: 2.25rem; text-align: center; margin-top: 1rem; margin-bottom: -2rem;color:#89C6FF">〰</div>

  - type: section
    typed_list:
    - type: text
      text: >-
        ## Establishing scope and conducting the accessibility audit
      
        ### Why not test the entire site?

        The NCDOT website consists of several subsites and pages based on templates and reusable components. Sites like this are constantly adding new content but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.
       

        **The audit scope would be broken down into: <b aria-hidden="true">✍️</b>**

    - type: column_cards
    
    - type: text
      text: >-
        ### Automatic testing

        The different areas within scope were tested with various automatic tools. Findings were verified (automatic tools are getting better but very often will flag false posititives) and categorized by page and component.

        - a spreadsheet was created to organize and group issues

        - severity levels and occurrence data were added to the NCDOT ticketing system

        - issues were assigned a severity level and development/design fix difficulty
        

        ### Manual testing

        Manual testing consists of navigating and interacting with content using assistive technology and access tools. This testing process for the project included the NVDA screen reader, keyboard, and using browser development tools to verify element accessibility api info. Web extensions were utilized to optimize identifying some ARIA-related and name/role/value issues.


        **Some of the focus areas include:**

        - Keyboard navigation and operation

        - Screen readers: NVDA and Talkback

        - Color contrast

        - Javascript-injected content and focus management, especially regarding dialogs

        - table header and scope associations 

        - image text alternatives

        - heading and landmark structure

        - form interaction, labels, instructions, and error notifications

  - type: section
    typed_list:
    - type: text
      text: >-
        ## Focusing remediation on components

        Components associated with key functionality such as date pickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.

  
    - type: text
      text: >-
        ### Header navigation 
        
    - type: two_column
      two_column:  
        left: >-
          <img src="img/Image 46.png" alt="" style="margin-bottom: .5rem"><div class="caption">Expanded header navigation with link groups and headings.</div>
        right: >-
          <img src="img/header-cropped.jpg" alt="" style="margin-bottom: .5rem"><div class="caption">The header consists of a logo, a search form field, and NC-wide helpful links. The main navigation includes dropdown elements of multiple columns of links, each with its header.</div>  

    - type: text
      text: >-     
        - **Logical focus order**
          - Duplicated across screen sizes instead of using CSS, causing confusion for users, especially those using assistive technology or keyboards
        - **List structure**
          -  Improper use of implicit lists and custom elements hindered accessibility for screen reader users
        - **Color contrast** 
          - White links on orange and light green backgrounds failed WCAG contrast guidelines, impacting readability for low-vision users.

    - type: text
      text: >-
        <div aria-hidden="true" style="font-size: 2.25rem; text-align: center; margin-top: 3rem;margin-bottom: 3rem; color:#89C6FF">〰</div>
        
    - type: text
      text: >-
        ### Top-of-page/hero content 
        
    - type: two_column
      two_column:  
        left: >-
          - **Image alt text**
            - Missing alt attributes for images in dynamically updated CMS content. Manual alt text entry required, increasing risk of non-compliant descriptions.
          - **Link text**
            - Overuse of "Learn More" link text hinders accessibility, especially for screen reader users.
          - **Location selector**
            - Third-party auto-complete element lacks accessibility controls, requiring significant resources to improve or replace.
        right: >-
          <img src="img/hero-section.jpg" alt="" style="margin-bottom: .5rem"><div class="caption">This content is constantly changing on the site and needs dynamic implementation. The content consists of a full-width image, white text and a learn more link within a translucent background overlaid on the image. A location form component is located in the top right.</div>
        
    - type: text
      text: >-
        <div aria-hidden="true" style="font-size: 2.25rem; text-align: center; margin-top: 1rem; margin-bottom: 4rem; color:#89C6FF">〰</div>

    - type: text
      text: >-
        ### Repeatable card components 
                
    - type: two_column
      two_column:  
        left: >-
          <img src="img/ncdot-components.png" alt="" style="margin-bottom: .5rem"><div class="caption">The card components consist of multiple links, decorative image content, date, and read more buttons. Other cards consisted entirely of images linked to individual articles.</div>
        right: >-
          - **Image alt text**
            - Decorative images with unhelpful alt text create accessibility barriers.
          - **Heading levels**
            - Incorrect or missing heading levels hinder content understanding and navigation for users.

    - type: text
      text: >-
        <div aria-hidden="true" style="font-size: 2.25rem; text-align: center; margin-top: 1rem;margin-bottom: 4rem;color:#89C6FF">〰</div>

    - type: text
      text: >-
        ### Dialogs, Third-party, and SharePoint elements 
        
        - **Dialogs**
          - Lack of focusability and proper structure prevented assistive technology users from accessing dialog content.
        - **Alerts**
          - Missing ARIA roles caused important information to be inaccessible to screen reader users.

    - type: fullwidth_img
      image: img/dialog.jpg
      image_caption: The dialogs included those which appear on the first load and those initiated by a user. Third-party components consisted of datepicker, map, and auto-complete search widgets.

    - type: text
      text: >-
        <div aria-hidden="true" style="font-size: 2.25rem; text-align: center; margin-top: 3rem;color:#89C6FF">〰</div>

    - type: text
      text: >-
        > Using ARIA roles and attributes, we can improve the accessibility of components by providing additional semantics.


takeaway: >-
  This project focused on improving the accessibility of a single NCDOT site within a single sprint. Given the complex structure of NCDOT's digital ecosystem, with shared frameworks, components, and unique site-level elements, a phased approach is necessary to address accessibility comprehensively.


  **Goals were successfully met.** Baseline metrics centered on achieving a Google Lighthouse score above 80 and reducing Axe Devtools automatic findings by 50%.


  Through rigorous testing and collaboration with the QA team, accessibility remediation tasks were validated and knowledge transfer facilitated. This project serves as a foundation for ongoing accessibility improvements across the NCDOT platform.

  > Melanie contributed a great deal to improving our website’s load time, performance, and accessibility. The results were effective and immediate - faster page loads across the board, and forms and interactions were available to everyone regardless of capability.<br><cite>- Patrick Doran, NCDOT UX and Web Services Manager</cite>

---
