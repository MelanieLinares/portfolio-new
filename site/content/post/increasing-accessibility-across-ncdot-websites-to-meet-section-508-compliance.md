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
  - type: stacked_images
    image_top: img/Group 542.png
    image_bottom: img/Image 43.png
    caption: Horizontal alerts within the header and pop alerts provided imporant
      information to users visually and needed ARIA live region roles to share
      this information with users not accessing the site visually
---
And then this is just the body, which for case studies might be pointless.