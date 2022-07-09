---
backgroundcolor: mixed
title: Increasing accessibility across NCDOT websites to meet Section 508 compliance
date: 2019-06-03T15:04:10.000Z
newdate: 2019-08-07T15:04:10.000Z

duration: 2 months
logo: /img/logos/ncdot-logo.gif
image: /img/accessibility-ncdot.jpg
# image2: /img/Group 535.png
image1: /img/ncdot-a11y2.png
preview: /img/accessibility-ncdot.jpg
role: Accessibility Specialist 
technology:
  - HTML/CSS
  - Sharepoint
  - Javascript
  - NVDA
  - TalkBack
  - VoiceOver
  - WAVE
  - AxE DevTools
tags:
  - accessibility
  - javascript
titlebold: Increasing accessibility across NCDOT websites
titlenormal: to meet Section 508 compliance
client: NC Department of Transportation
weight: 1
introheading: Creating a plan for usability and accessibility
overviewheading: Why the concern over accessibility?
purplesectionheading: Conducting the accessibility audit
overviewbody: |-
  Originally brought on for front-end development, I noticed the accessibility issues when my battery-operated mouse died. This [situational disability](https://www.access-can.ca/news/the-state-of-disability#:~:text=Situational%20disabilities%20are%20a%20little,a%20permanent%20or%20temporary%20disability.) required I use my keyboard to navigate the website. It is important to recognize that accessibility is for everyone, from someone who is blind, has limb differentiation, to someone having a temporary or situational disability. As a government agency, the website is required to be W.C.A.G. 2.0/Section 508 accessible.

  ### What is W.C.A.G?

  The Web Content Accessibility Guidelines are part of a series of web accessibility guidelines considered to be the benchmark for compliance.

  ### What is Section 508?

  Section 508 as part of the Rehabilitation Act of 1973 is a law that requires government agencies to provide access to its Information and Communication Technology (ICT) to people with disabilities. The Revised 508 Standards incorporate by reference and apply the WCAG 2.0 Level AA Success Criteria to both web and non-web electronic content.
overviewblurb: |-
  Accessibility is about access, pure and simple. If a government application cannot be used by citizens then never mind the legal repercussions, the design improvements are wasted.
introbody: |-
  The North Carolina Department of Transportation (NCDOT) as of 2018 had a new website redesign to allow citizens a secure, quick, and easy way to view all transportation-related information. Unfortunately, despite an improved visual UI the site failed initial accessibility audits.\
  **The starting score:** 67 (based on Google Lighthouse)\
  **The goal:** > 80
purplesection1: |-
  ### Why not test the entire site?
  The NCDOT website consists of several subsites and pages, but are based off templates and reusable components. Sites like this are constantly adding new content, but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.

purplesection2: |-
  ### Manual testing
  The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.
  - Keyboard
  - Screen reader: NVDA and Talkback
  - Color contrast
  - Code inspection, including Javascript

textimagesplitcontent: |-
  ### Establishing a baseline with automatic testing
  - Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)
  - Created a spreadsheet to organize and group issues
  - Severity and tractability levels were added to NCDOT ticketing system
  - Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead
textimagesplitimagecaption: Issues were prioritized by level of user impact and location
introw:
  blurbsw:
    - imagew: img/video.png
      textw: |-
        ### The main issue for citizens 
        - Citizens with vision difficulties are unable to understand important safety and legal announcements
        - Citizens may have a hard time making convenient online transactions
        - Citizens with situational or temporary disabilities (including slow internet speeds) may have difficulties completing tasks    
    - imagew: img/pets.png
      textw: |-
        ### The main issue for the NCDOT:
        As a federal agency, the websites for the NCDOT and NCDMV fall under Section 508 regulations to be ADA compliant. Failure to meet guidelines can lead to lawsuits and a loss of citizen and customer trust 
select_multiple:
  - b
  - c
values:
  - heading: "Shade-grown coffee"
    imageUrl: "/img/about-single-origin.jpg"
    text: The forest-like structure of shade 
purplesectionimg: /img/ncdot-display.png
---


<!-- <section>

<div class="inner-wrap content">

<div class="first">

  ## Creating a plan for usability and accessibility
  The North Carolina Department of Transportation (NCDOT) as of 2018 had a new website redesign to allow citizens a secure, quick, and easy way to view all transportation-related information. Unfortunately, despite an improved visual UI the site failed initial accessibility audits.
  <br>
  **The starting score:** 67 (based on Google Lighthouse)
  <br>
  **The goal:** <span aria-label="score greater than 80">> 80</span>
  [Skip to the results](post/ncdot-accessibility/#final)

</div>
<div class="div2"> 

## Why the concern over accessibility?
  Originally brought on for front-end development, I noticed the accessibility issues when my battery-operated mouse died. This <a href="https://www.access-can.ca/news/the-state-of-disability#:~:text=Situational%20disabilities%20are%20a%20little,a%20permanent%20or%20temporary%20disability." target="_blank">situational disability</a> required I use my keyboard to navigate the website. It is important to recognize that accessibility is for everyone, from someone who is blind, has limb differentiation, to someone having a temporary or situational disability. As a government agency, the website is required to be W.C.A.G. 2.0/Section 508 accessible.  

  ### What is W.C.A.G?
  The Web Content Accessibility Guidelines are part of a series of web accessibility guidelines considered to be the benchmark for compliance. 

  ### What is Section 508?
  Section 508 as part of the Rehabilitation Act of 1973 is a law that requires government agencies to provide access to its Information and Communication Technology (ICT) to people with disabilities. The Revised 508 Standards incorporate by reference and apply the WCAG 2.0 Level AA Success Criteria to both web and non-web electronic content. 



<div style="display: -webkit-box;" class="image-block">
<div class="icon" style="align-items: center;
  justify-content: center;">
  <img class="" src="/img/icons/unhappy.png" alt="">
    <a href="https://www.flaticon.com/free-icons/no-racism" title="no racism icons">No racism icons created by Freepik - Flaticon</a></div>

<div style="width: calc(100% - 100px);">

  ### The main issue for citizens
  - Citizens with vision difficulties are unable to understand important safety and legal announcements
  - Citizens may have a hard time making convenient online transactions
  - Citizens with situational or temporary disabilities (including slow internet speeds) may have difficulties completing tasks 
  </div>
  </div>

<div style="display: -webkit-box;" class="image-block">
<div class="icon" style="align-items: center;
  justify-content: center;">
  <img class="" src="/img/icons/leadership.png" alt="">
    <a href="https://www.flaticon.com/free-icons/leadership" title="leadership icons">Leadership icons created by Freepik - Flaticon</a></div>

<div style="width: calc(100% - 100px);">

  ### The main issue for the NCDOT: 
  - As a federal agency, the websites for the NCDOT and NCDMV fall under Section 508 regulations to be ADA compliant. Failure to meet guidelines can lead to lawsuits and a loss of citizen and customer trust
  </div>
  </div>

</div>

  > Accessibility is about access, pure and simple. If a government application cannot be used by citizens then never mind the legal repercussions, the design improvements are wasted.

</div>

</section> -->

<!-- <section class="fullwidth purple">

<div class="inner-wrap">

<div role="presentation" class="fullwidth img" style="background-image: url(/img/decorative-desk.jpg)">

</div>

<div class="newcontent">

  ## Conducting the accessibility audit

  ### Why not test the entire site?
  The NCDOT website consists of several subsites and pages, but are based off templates and reusable components. Sites like this are constantly adding new content, but rarely change the underlying CMS structure. By identifying a representative set of pages the audit process takes less time and is more effective.



### Establishing a baseline with automatic testing
  <div style="display: flex; margin-bottom: 2em;" class="full-em">

<span style="display: inline-block">

  - Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)
  - Created a spreadsheet to organize and group issues
  - Severity and tractability levels were added to NCDOT ticketing system
  - Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead

  </span>
  <span class="" style="align-items: center;justify-content: center;">

![this is the alt text](/img/ncdot-a11y2.png "Title is optional")
  ![this is the alt text](/img/ncdot-wave.png "Title is optional")

  <img src="/img/ncdot-a11y2.png" alt="this is the alt text" style="margin-bottom: 1rem;">
  <em>Issues were prioritized by level of user impact and location</em>

  <a href="https://www.flaticon.com/free-icons/leadership" title="leadership icons">Leadership icons created by Freepik - Flaticon</a>

  </span>

  </div>

   ### Establishing a baseline with automatic testing
  - Automatics with Lighthouse, Axe DevTools chrome extension, W.A.V.E. (web accessibility evaluation tool)
  - Created a spreadsheet to organize and group issues
  - Severity and tractability levels were added to NCDOT ticketing system
  - Remaining issues were grouped by page or components, assigned an individual severity and discussed with web dept lead

  <div>

 



  ### Manual testing
  The NVDA screen reader was used to identify issues with the information hierarchy and HTML native elements. Web extensions were utilized for hard to identify issues.

  - Keyboard
  - Screen reader: NVDA and Talkback
  - Color contrast
  - Code inspection, including Javascript

  </div>

  ![this is the alt text](/img/ncdot-display.png "Title is optional")

</div>

</div>

</section>  -->













<section class="fullwidth">
<div class="inner-wrap content">

<div class="div-4">

  ## Audit findings and breakdown
  ### Focus on components
  Components associated with key functionality such as datapickers and dynamically populated dropdowns received prioritization. This also included custom controls which have a native alternative that is often replaced in favor of less accessible, but visually branded elements.

  <div style="display: -webkit-box;" class="image-block">
<div class="xs-icon" style="align-items: baseline;
  justify-content: center; padding-top: .5em;">
  <img class="" src="/img/icons/ux-design.png" alt="">
  <!-- <a href="https://www.flaticon.com/free-icons/ux" title="ux icons">Ux icons created by Freepik - Flaticon</a> -->
    </div>
<div style="width: calc(100% - 52px);">
<ul>
<li>Date pickers were not operable via keyboard or presented instances of keyboard traps</li>
<li>Custom dropdown elements would refresh pages on keychange when cycling through options</li>
</ul>
  </div>
  </div>


  <div style="display: -webkit-box;" class="image-block">
<div class="xs-icon" style="align-items: baseline;
  justify-content: center; padding-top: .5em;">
  <img class="" src="/img/icons/ux-design.png" alt="">
  <!-- <a href="https://www.flaticon.com/free-icons/ux" title="ux icons">Ux icons created by Freepik - Flaticon</a> -->
    </div>
<div style="width: calc(100% - 52px);">
<ul>
<li>Contact forms withought correct label associations were in the footer of every page</li>
<li>Incorrect use of headings included implicit headings which contained no meaning in html syntax and skips in heading elements which disrupt a screen reader's ability to parse content</li>
</ul>
  </div>
  </div>
  

</div>

<div class="div-5">

  ![this is the alt text](/img/ncdot-alert.png "Title is optional")
  *Horizontal alerts within the header and pop alerts provided imporant information to users visually and needed ARIA live region roles to share this information with users not accessing the site visually.*

  *Many pages included repeatable card components*
  ![this is the alt text](/img/ncdot-components.png "Title is optional")
  <!-- ![this is the alt text](/img/ncdot-wave.png "Title is optional") -->

  </div>

</div>
</section>

<section class="fullwidth" style="background-color: #ECEFF9">
<div class="inner-wrap content">
<div class="div-1">

  ## Major changes and impact

  ### Keyboard changes  
  - Skip to main link existed but was not functional due to either an incorrect ID or empty href attribute, depending on the template. Navigation was added to a seperate component so it could be reused within templates
  - Headings re-organized and given proper hierarchy according to semantics vs aesthetic browser default sizing
  - Focus rings on links added back, as well as hover underlines which were originally inconsistently implemented
  - Elements arranged out of logical tab order via tabindex or the CSS float property caused issues when browsing through content.

</div>
<div class="div-2">

  ![](/img/skiptomain.png)
  *Skip link appears on keyboard tab focus above the top navigation. For headings Voice Over was used to ensure proper hierarchy structure. Here the Voice Over Rotor, a quick access menu, shows the heading structure prior to changes.*

</div>
<div class="div-3">

  ![](/img/voiceover-headings.png)
  <em aria-hidden="true" style="height: 0; font-size: 0;
    margin-bottom: 0;"></em>

</div>
<div class="div-4">

  ### Alerts & pop-ups
  - Originally not focusable or operable, these did not have an accessible way to close content and were adjusted or given textual alternatives
  - Alerts of important information were not announced to screen readers. <span title="ARIA: a set of roles and attributes that define ways to make content accessible" class="definition">Aria</span> roles were added or re-implemented correctly.

  ### Custom third-party components
  - Some components found to be inaccessible. Code was edited as able or replaced with native HTML5 controls

  ### Navigation
  - Navigation for SharePoint is built with separate mobile and desktop code toggled with media queries. The issue is both are still accessible within the DOM via a screen reader regardless of screen size or device
  - Originally not all built using lists or link tags the navigation was changed to utilize valid html and link tags.

</div>
<div class="div-5">

  ![this is the alt text](/img/ncdot-navigation.png "Title is optional")
  *Drop-down navigation contained multiple columns and subheaders. This navigation was duplicated within the code for muliple screen sizes rather than using CSS to adjust the layout*

</div>
</div>
</section>

<section id="final" class="takeaway fullwidth">

<div class="inner-wrap" id="test">

<div style="display: flex" class="image-block">
<div>

  <h2>The takeaway:</h2> 

<p>  The original goal was to reach a <span aria-label="score greater than 80">> 80</span> via Lighthouse and reduce the number  of issues within W.A.V.E by 50% and this was successful. Of course a good score does not ensure an accessible application, but this was used as a benchmark. The <span title="remediation: the act of correcting problems" class="definition">remediation</span> tasks were validated with help from the QA team. The team was given a demo of the before and after and given training on how to proactively reduce accessibility issues in the future. </p>
  </div>
  <div style="align-items: center;
  justify-content: center; display: flex;">
  <div class="stat-block">
  50% <span>issue reduction</span>
  </div>

  <div class="stat-block">
  82 <span>Google Lighthouse</span>
  </div>

  </div>
  </div>

  </div>
  
</section>

<div class="inner-wrap" aria-label="quotes">

  > Melanie, contributed a great deal to improving our website's load time, performance, and accessibility. The results were effective and immediate - faster page loads across the board, and forms and interactions were available to everyone regardless of capability.  
  *- Patrick Doran, NCDOT UX and Web Services Manager*
  
  > Thank you for all your efforts in keeping the web accessible.   
  *- Todd Darling, Insight Team Lead while on NCDOT contract*

</div>