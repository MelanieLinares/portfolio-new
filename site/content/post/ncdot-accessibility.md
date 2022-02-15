---
backgroundcolor: mixed
title: Increase accessibility across NCDOT websites for Section 508 compliance
date: 2019-06-03T15:04:10.000Z
newdate: 2019-08-07T15:04:10.000Z
description: We’re proud to announce that we’ll be offering a small batch of Jamaica Blue
  Mountain coffee beans in our store next week.
duration: 2 months
logo: /img/logos/ncdot-logo.gif
image: /img/accessibility-ncdot.jpg
# image2: /img/Group 535.png
image1: /img/blog-flavor_wheel.jpg
preview: /img/accessibility-ncdot.jpg
role: Accessibility Specialist 
team: Web Services
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
titlebold: Increase accessibility across NCDOT websites
titlenormal: for Section 508 compliance
client: NC Department of Transportation
weight: 1
notice: Photo by KOBU Agency on Unsplash, edited to show NCDOT homepage
---

## Creating a plan to increase usability and accessibility

The NCDOT’s new website (as of 2018) allows citizens a secure, quick, and easy way to view all transportation-related information. Unfortunately, despite looking great the site failed initial accessibility audits. This is not good for a government website.

**The starting score:** 67 (based on Google Lighthouse)

**The goal:** accessibility within a 3rd-party (SharePoint 2016) can be tricky, but 
we needed to reach > 90  

[Skip to the results](post/ncdot-accessibility/#comparing-the-results)

## Why the concern over accessibility?

Originally brought on for front-end development, I noticed the accessibility issues when my battery-operated mouse died. This "situational disability" required I use my keyboard to navigate the website. It may seem small, but it is important to recognize that accessibility is for everyone, from someone who is blind, has limb differentiation, to someone having a temporary or situational disability. As a government agency, the website is required to be accessible.   
 
### The main issue for citizens
- Those with vision disabilities are unable to understand important safety and legal announcements
- Those with physical disabilities have a hard (or impossible) time making convenient online transactions
- Those with situational or temporary disabilities (including slower internet speeds) have difficulties accessing
 
### The main issue for the NCDOT: 
- As a federal agency, the websites for the NCDOT and NCDMV must meet Section 508 regulations and be ADA compliant. Failure to meet guidelines can lead to lawsuits.     
- A federal agency can lose citizen and customer trust

> Accessibility is about access, pure and simple. If a government application cannot be used by citizens then never mind the legal repercussions, the design improvements are wasted.

## Conducting the accessibility audit
![this is the alt text](/img/ncdot-a11y2.png "Title is optional")
*WCAG 2.0 and Section 508 guidelines were referenced for specific requirements (note: this audit was pre WCAG 2.1)*

### Establishing a baseline
- testing level was established according to government regulations and client needs
- the first step was in identifying page templates and associated JavaScript components 
- sorted most viewed pages by template and then tested with Lighthouse for baseline needed improvements 
- guidelines reviewed and a goal checklist created prior to testing

### Manual testing
- NVDA screen readerused to identify issues with the information hierarchy and HTML syntax
- keyboard testing conducted to find outliers in accessing content
- web extensions (such as Colorblinding, NoCoffee Vision Simulator, and Disability Simulator) used for hard to identify issues
- TalkBack and VoiceOver used to test mobile devices

### Automatic testing
![this is the alt text](/img/ncdot-a11y.png "Title is optional")
*TBD caption*

- Axe DevTools
- W.A.V.E. (web accessibility evaluation tool)
- Chrome DevTools
- Accessibility Insights for the Web
- cross-browser testing emphasized

## Audit findings and breakdown
### Focus on components
Components associated with key functionality prioritized. If a user cannot interact correctly with a design then it is ineffective, regardless of aesthetics.
- Date pickers could not be accessed via keyboard
- Contact form in the footer of every page
- Incorrect use of headings based on the template


![this is the alt text](/img/ncdot-wave.png "Title is optional")
*TBD caption*

### Sorting pages on most viewed pages to prioritize testing 
- Homepage
- Contact
- About
- Form-based application pages
- Commonly used information such as locations and how-to info


### Screen readers and understanding the rotor 
Proper use of headings, sections, and links help ensure a screen reader user can access content quickly and directly.

### Keyboard testing and why you should not use CSS to disguise focus:  
It is important to ensure a keyboard can navigate a page. Content should have proper focus and not disappear off-screen. You may not like the look of a focus ring around a link but it serves a functional purpose.

## Major changes and impact

![this is the alt text](/img/ncdot-acc-overview.png "Title is optional")
*TBD caption*

### Keyboard changes  
- Skip to main link existed but was not functional, now a user can skip the lengthy navigation if they choose
- Headings reorganized and given proper hierarchy according to semantics vs aesthetics
- Focus rings on vital links added back, as well as hover underlines
- Elements arranged out of logical order via CSS caused issues when tabbing through content. Content and CSS adjusted so layout matched original, but improved for screen readers


![this is the alt text](/img/ncdot-alert.png "Title is optional")
*TBD caption*

### Alerts & pop-ups
- Originally not accessible via tabbing and did not have an easy way to close
- Alerts of important information were not announced to screen readers. Aria used responsibly to resolve the issue.


![this is the alt text](/img/ncdot-components.png "Title is optional")
*TBD caption*

### Repeatable components
- Some components found to be inaccessible.  Adjusted code as able. Others (often plugins) replaced with native HTML5

![this is the alt text](/img/ncdot-navigation.png "Title is optional")
*TBD caption*

### Navigation
- Navigation built with separate mobile and desktop code toggled according to media queries. The issue is both still accessed via a screen reader regardless of screen size.
- Originally not all built using lists. The navigation was not properly read by a screen reader. Some info was skipped or not announced as link or navigation items. The content needed roles adjusted.


## The takeaway
 
The original goal was to reach >90 via Lighthouse and this was successful. Of course a Lighthouse score does not ensure an accessible application, but was used as a benchmark. The remediation tasks were re-tested manually and through an automatic tool such as Axe DevTools. Previously the website, when read aloud via a screen reader, would stop after navigation or would after the first heading. The team was given a demo of the before and after. Training concluded the remediation to proactively reduce accessibility issues in the future. 

> Melanie, contributed a great deal to improving our website's load time, performance, and accessibility. The results were effective and immediate - faster page loads across the board, and forms and interactions were available to everyone regardless of capability.  
*- Patrick Doran, NCDOT UX and Web Services Manager*

> Thank you for all your efforts in keeping the web accessible.   
*- Todd Darling, Insight Team Lead while on NCDOT contract*