---
title: Test Increasing accessibility across NCDOT websites to meet Section 508
  compliance
titlebold: "Increasing accessibility across NCDOT websites "
titlenormal: to meet Section 508 compliance
preview: img/blog-index.jpg
notice: For legal reasons images of work completed cannot be shown
date: 2022-06-07T01:57:50.434Z
newdate: 2022-06-07T01:57:50.482Z
client: Client Tea
logo: img/android-chrome-192x192.png
role: Software Engineer
tags:
  - accessibility
technology:
  - adobe xd
duration: long
description: this is the description; is it used?
introheading: Creating a plan for usability and accessibility
introbody: >-
  The North Carolina Department of Transportation (NCDOT) as of 2018 had a new
  website redesign to allow citizens a secure, quick, and easy way to view all
  transportation-related information. Unfortunately, despite an improved visual
  UI the site failed initial accessibility audits.\

  **The starting score:** 67 (based on Google Lighthouse)\

  **The goal:** > 80
overviewheading: Why the concern over accessibility?
overviewbody: >-
  Originally brought on for front-end development, I noticed the accessibility
  issues when my battery-operated mouse died. This [situational
  disability](https://www.access-can.ca/news/the-state-of-disability#:~:text=Situational%20disabilities%20are%20a%20little,a%20permanent%20or%20temporary%20disability.) required
  I use my keyboard to navigate the website. It is important to recognize that
  accessibility is for everyone, from someone who is blind, has limb
  differentiation, to someone having a temporary or situational disability. As a
  government agency, the website is required to be W.C.A.G. 2.0/Section 508
  accessible.


  ### What is W.C.A.G?


  The Web Content Accessibility Guidelines are part of a series of web accessibility guidelines considered to be the benchmark for compliance.


  ### What is Section 508?


  Section 508 as part of the Rehabilitation Act of 1973 is a law that requires government agencies to provide access to its Information and Communication Technology (ICT) to people with disabilities. The Revised 508 Standards incorporate by reference and apply the WCAG 2.0 Level AA Success Criteria to both web and non-web electronic content.
introw:
  blurbsw:
    - textw: >-
        ### The main issue for citizens


        * Citizens with vision difficulties are unable to understand important safety and legal announcements

        * Citizens may have a hard time making convenient online transactions

        * Citizens with situational or temporary disabilities (including slow internet speeds) may have difficulties completing tasks
      imagew: img/coffee.svg
    - textw: >-
        ### The main issue for the NCDOT:


        As a federal agency, the websites for the NCDOT and NCDMV fall under Section 508 regulations to be ADA compliant. Failure to meet guidelines can lead to lawsuits and a loss of citizen and customer trust
      imagew: img/cursor.svg
overviewblurb: Accessibility is about access, pure and simple. If a government
  application cannot be used by citizens then never mind the legal
  repercussions, the design improvements are wasted.
purplesectionheading: Conducting the accessibility audit
purplesection1: >-
  ### Why not test the entire site?


  The NCDOT website consists of several subsites and pages, but are based off templates and reusable components. Sites like this are constantly adding new content, but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.
textimagesplitcontent: >-
  ### Establishing a baseline with automatic testing


  * Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)

  * Created a spreadsheet to organize and group issues

  * Severity and tractability levels were added to NCDOT ticketing system

  * Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead
textimagesplitimagecaption: " Issues were prioritized by level of user impact and location"
purplesection2: >-
  ### Manual testing


  The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.


  * Keyboard

  * Screen reader: NVDA and Talkback

  * Color contrast

  * Code inspection, including Javascript
purplesectionimg: img/ncdot-display.png
image: img/renew.svg
image1: img/team.png
typed_list:
  - type: type_2_object
    markdown: >-
      ### This should be first (MARKDOWN) \

      Focus on components


      Components associated with key functionality such as datapickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.
    image2caption: Many pages included repeatable card components
    image1caption: Horizontal alerts within the header and pop alerts provided
      imporant information to users visually and needed ARIA live region roles
      to share this information with users not accessing the site visually.
    image2: img/blog-index.jpg
    image1: img/mentorship.jpg
    introw:
      blurbsw:
        - imagew: img/orange-circles.png
          textw: >-
            <!--StartFragment-->


            * Date pickers were not operable via keyboard or presented instances of keyboard traps

            * Custom dropdown elements would refresh pages on keychange when cycling through options


            <!--EndFragment-->
        - textw: >-
            <!--StartFragment-->


            * Contact forms withought correct label associations were in the footer of every page

            * Incorrect use of headings included implicit headings which contained no meaning in html syntax and skips in heading elements which disrupt a screen reader's ability to parse conten


            <!--EndFragment-->
          imagew: img/apple-touch-icon.png
  - type: type_5_object
    heading: Major changes and impact
    markdown: >-
      ### Keyboard changes


      * Skip to main link existed but was not functional due to either an incorrect ID or empty href attribute, depending on the template. Navigation was added to a seperate component so it could be reused within templates

      * Headings re-organized and given proper hierarchy according to semantics vs aesthetic browser default sizing

      * Focus rings on links added back, as well as hover underlines which were originally inconsistently implemented

      * Elements arranged out of logical tab order via tabindex or the CSS float property caused issues when browsing through content.
    image1: img/grayscale-laptop.gif
    image2: img/accessibility.png
    caption: Skip link appears on keyboard tab focus above the top navigation. For
      headings Voice Over was used to ensure proper hierarchy structure. Here
      the Voice Over Rotor, a quick access menu, shows the heading structure
      prior to changes.
  - type: type_4_object
    heading: none
    textimagesplitcontent: >-
      ### Alerts & pop-ups - missing the image?


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
    textimagesplitcontentreverse: oops markdown reverse is required
    textimagesplitreverseimagecaption: oops markdown reverse is required
  - type: heading_markdown
    heading: this is just to test
    markdown: This **really** is just to test.
    introw:
      blurbsw:
        - imagew: img/powercord5.svg
          textw: this is "Text" that should go with the powercord face plate icon
    markdown_optional: This optional markdown is just a test. No really, really.
  - heading: this is just a string
    caption: this is the orange wireframe's caption
    full_width_text: and text after the blurb???
    fullwidth: false
    type: text_with_scroll_img
    blurb: and a blurb. I've forgotten what for.
    image: img/ncdot-wireframe.png
    decorative_image: img/orange-circles.png
    left_side_text: this is just text after the string
---
And then this is just the body, which for case studies might be pointless.