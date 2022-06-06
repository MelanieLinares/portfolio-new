---
titlebold: TEST - Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
preview: img/accessibility-ncdot.jpg
notice: For legal reasons some images are representational only or blurred
client: NC Department of Transportation
logo: img/starbucks-logo.png
role: Accessibility Specialist"
tags:
  - accessibility
  - javascript
technology:
  - HTML/CSS
  - Javascript
  - Sharepoint
  - NVDA
  - TalkBack
  - VoiceOver
  - WAVE
  - AxE DevTools
start: June 1, 2022 8:02 PM
duration: NOW
introheading: Creating a plan for usability and accessibility
intro_body: >-
  The North Carolina Department of Transportation (NCDOT) as of 2018 had a new
  website redesign to allow citizens a secure, quick, and easy way to view all
  transportation-related information. Unfortunately, despite an improved visual
  UI the site failed initial accessibility audits.

  The starting score: 67 (based on Google Lighthouse)

  The goal: > 80
overviewheading: Why the concern over accessibility?
overviewbody: >-
  Originally brought on for front-end development, I noticed the accessibility
  issues when my battery-operated mouse died. This [situational
  disability](google.com) required I use my keyboard to navigate the website. It
  is important to recognize that accessibility is for everyone, from someone who
  is blind, has limb differentiation, to someone having a temporary or
  situational disability. As a government agency, the website is required to be
  W.C.A.G. 2.0/Section 508 accessible.


  ### What is W.C.A.G?


  The Web Content Accessibility Guidelines are part of a series of web accessibility guidelines considered to be the benchmark for compliance.


  ### What is Section 508?


  Section 508 as part of the Rehabilitation Act of 1973 is a law that requires government agencies to provide access to its Information and Communication Technology (ICT) to people with disabilities. The Revised 508 Standards incorporate by reference and apply the WCAG 2.0 Level AA Success Criteria to both web and non-web electronic content.
overviewblurb: Accessibility is about access, pure and simple. If a government
  application cannot be used by citizens then never mind the legal
  repercussions, the design improvements are wasted.
purplesectionheading: Conducting the accessibility audit
backgroundcolor: test
title: this is the title, what is it used for?
date: 2022-05-29T23:59:20.257Z
newdate: 2022-06-05T23:59:20.304Z
description: Accessibility is about access, pure and simple. If a government
  application cannot be used by citizens then never mind the legal
  repercussions, the design improvements are wasted.
urllink: www.test.com
favorite: test favorite
image: img/ncdot-a11y2.png
image1: img/ncdot-display.png
introbody: >-
  ### Why not test the entire site?


  The NCDOT website consists of several subsites and pages, but are based off templates and reusable components. Sites like this are constantly adding new content, but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.
introw:
  blurbsw:
    - imagew: img/ncdot-a11y2.png
      textw: >-
        ### Establishing a baseline with automatic testing


        * Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)

        * Created a spreadsheet to organize and group issues

        * Severity and tractability levels were added to NCDOT ticketing system

        * Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead
    - textw: >-
        ### Manual testing


        The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.


        * Keyboard

        * Screen reader: NVDA and Talkback

        * Color contrast

        * Code inspection, including Javascript
      imagew: img/apple-touch-icon.png
typed_list:
  - type: type_2_object
    datetime: 2022-06-06T00:25:47.309Z
    image1: img/ncdot-alert.png
    image1caption: Horizontal alerts within the header and pop alerts provided
      imporant information to users visually and needed ARIA live region roles
      to share this information with users not accessing the site visually.
    image2: img/Image 43.png
    image2caption: Many pages included repeatable card components
    markdown: >-
      ### Focus on components


      Components associated with key functionality such as datapickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.
    introw:
      blurbsw:
        - textw: >-
            * Date pickers were not operable via keyboard or presented instances
            of keyboard traps

            * Custom dropdown elements would refresh pages on keychange when cycling through options
          imagew: img/wheelchair3.svg
        - imagew: img/weather4.svg
          textw: >-
            * Contact forms withought correct label associations were in the
            footer of every page

            * Incorrect use of headings included implicit headings which contained no meaning in html syntax and skips in heading elements which disrupt a screen reader's ability to parse content
  - type: type_4_object
    heading: Major changes and impact
    textimagesplitcontent: >-
      ### Keyboard changes


      * Skip to main link existed but was not functional due to either an incorrect ID or empty href attribute, depending on the template. Navigation was added to a seperate component so it could be reused within templates

      * Headings re-organized and given proper hierarchy according to semantics vs aesthetic browser default sizing

      * Focus rings on links added back, as well as hover underlines which were originally inconsistently implemented

      * Elements arranged out of logical tab order via tabindex or the CSS float property caused issues when browsing through content.
    textimagesplitimagecaption: Skip link appears on keyboard tab focus above the
      top navigation. For headings Voice Over was used to ensure proper
      hierarchy structure. Here the Voice Over Rotor, a quick access menu, shows
      the heading structure prior to changes.
    textimagesplitcontentreverse: TEST
    textimagesplitreverseimagecaption: TEST
  - type: type_4_object
    textimagesplitcontent: >-
      ### Alerts & pop-ups


      * Originally not focusable or operable, these did not have an accessible way to close content and were adjusted or given textual alternatives

      * Alerts of important information were not announced to screen readers. Aria roles were added or re-implemented correctly.


      ### Custom third-party components


      * Some components found to be inaccessible. Code was edited as able or replaced with native HTML5 controls


      ### Navigation


      * Navigation for SharePoint is built with separate mobile and desktop code toggled with media queries. The issue is both are still accessible within the DOM via a screen reader regardless of screen size or device

      * Originally not all built using lists or link tags the navigation was changed to utilize valid html and link tags.
    textimagesplitimagecaption: Drop-down navigation contained multiple columns and
      subheaders. This navigation was duplicated within the code for muliple
      screen sizes rather than using CSS to adjust the layout
    heading: TEST
    textimagesplitcontentreverse: TEST
    textimagesplitreverseimagecaption: TEST
---
## The takeaway:

The original goal was to reach a > 80 via Lighthouse and reduce the number of issues within W.A.V.E by 50% and this was successful. Of course a good score does not ensure an accessible application, but this was used as a benchmark. The remediation tasks were validated with help from the QA team. The team was given a demo of the before and after and given training on how to proactively reduce accessibility issues in the future.

50%issue reduction

82Google Lighthouse

> Melanie, contributed a great deal to improving our website’s load time, performance, and accessibility. The results were effective and immediate - faster page loads across the board, and forms and interactions were available to everyone regardless of capability.\
> *\- Patrick Doran, NCDOT UX and Web Services Manager*
>
> Thank you for all your efforts in keeping the web accessible.\
> *\- Todd Darling, Insight Team Lead while on NCDOT contract*