---
backgroundcolor: mixed
title: Increase accessibility across NCDOT websites, including keyboard & screen reader testing, for Section 508 compliance
date: 2019-06-03T15:04:10.000Z
newdate: 2019-08-07T15:04:10.000Z
description: We’re proud to announce that we’ll be offering a small batch of Jamaica Blue
  Mountain coffee beans in our store next week.
duration: 2 months
logo: /img/ncdot-logo.png
image: /img/accessibility-ncdot.jpg
image2: /img/Group 535.png
image1: /img/blog-flavor_wheel.jpg
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
  - html & css
  - javascript
titlebold: Increase accessibility across NCDOT websites, including keyboard & screen reader testing,
titlenormal: for Section 508 compliance
client: NC Department of Transportation
weight: 2;
notice: Photo by KOBU Agency on Unsplash, edited to show NCDOT homepage
---

## Creating a plan to increase usability and accessibility

The NCDOT's newly released website (codename RNR) allows citizens a secure, 
quick and easy way to view all transportation-related information and acts as a hub 
for NC news, division specific information, safety policies and resources, maps and 
more. Previously an outdated system, the new system provided a vast user 
experience improvement. Unfortunately despite looking great the site failed initial 
accessibility audits... not a good sign for a government website.

**The starting score:** 67 (based on Google Lighthouse)

**The goal:** accessibility within a 3rd-party (SharePoint 2016) can be tricky, but 
we needed to reach > 90  

**Project team:**  front-end developer (myself), manager

[Skip to the results](post/ncdot-accessibility/#comparing-the-results)

## Why the concern over accessibility?

Originally brought on to work with the DMV team for separate smaller projects 
I first noticed the accessibility issues when forced to use my keyboard for 
navigation after a battery-operated mouse died. It may seem like a small thing 
but it is important to recognize that accessibility is for everyone, from someone 
who is blind, has limb differentiation, to someone having a temporary disability.   
 
**The main issue for citizens**
- Those with vision disabilities are unable to understand important safety and legal announcements, creating an information barrier
- Those with physical disabilities have a hard (or impossible) time making convenient online transactions such as driver license renewals or toll payments
- Those with situational or temporary disabilities (including slower internet speeds) are at a disadvantage using an important application unnecessarily
 
**The main issue for the NCDOT:**  
- As a federal agency, the websites for the NCDOT and NCDMV must meet Section 508 regulations and be ADA compliant. Failure to meet guidelines can lead to lawsuits.     
- A federal agency can lose citizen and customer trust

> Accessibility is about access, pure and simple. If a government application cannot be used by citizens then never mind the legal repercussions, the design improvements are wasted.

## Conducting the initial accessibility audit

- the first step was in identifying page templates and associated JavaScript components      
- most viewed pages were sorted by template and then tested with Lighthouse for baseline needed improvements
- NVDA, a free screen reader, was used to identify issues with the information hierarchy and html syntax
- after issues found in the above scenarios were fixed then keyboard testing was conducted to find outliers in accessing content
- WCAG 2.0 guidelines were referenced for specific requirements
- a few color-accessibility web extensions (such as Colorblinding, NoCoffee Vision Simulator, and Disability Simulator) were used to find issues that a system other than one's own vision would not identify

## Audit findings and task breakdown

**Why focus on components and most viewed pages?:**  
- Two categories of user were identified: internal team member and external purchasing customer      
- Stay Online team members would submit orders on behalf of the company and for phone orders

**Sorting pages to prioritize testing:**
- External customers included one time buy customers and return annual buyers who bought in bulk
- Greater expectation for product customization and proof that products meet EU regulations

![this is the alt text](/img/blog-chemex.jpg "Title is optional")
[From left to right]:  Sketches of dividing up the master page section; Responsive menu sketches; notes planning out static page layouts

**Screen readers are very picky and unfortunately no two are the same:**  
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu that grew in height over time      
- Initial A/B testing on a mega menu style horizontal navigation vs the existing vertical style
- Testers expressed confusion over navigation location (mega menu was not toggled on load so the only available navigation link was “products”)

**Keyboard testing and why you should not use CSS to disguise focus:** 
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu that grew in height over time      
- Initial A/B testing on a mega menu style horizontal navigation vs the existing vertical style
- Testers expressed confusion over navigation location (mega menu was not toggled on load so the only available navigation link was “products”)

**Keyboard testing and why you should not use CSS to disguise focus:**  
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu that grew in height over time      
- Initial A/B testing on a mega menu style horizontal navigation vs the existing vertical style
- Testers expressed confusion over navigation location (mega menu was not toggled on load so the only available navigation link was “products”)

## Major changes and impact

![this is the alt text](/img/ncdot-acc-overview.png "Title is optional")

**Major navigation changes:**  
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu that grew in height over time      
- Initial A/B testing on a mega menu style horizontal navigation vs the existing vertical style
- Testers expressed confusion over navigation location (mega menu was not toggled on load so the only available navigation link was “products”)
- After several prototype versions using tester feedback a decision was made to revert to the sidebar approach but keep the new category labels

![this is the alt text](/img/ncdot-alert.png "Title is optional")

**ALERTS AND POP-UPS**
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu      
- Initial A/B testing on a mega menu style horizontal 
- Testers expressed confusion over navigation location navigation 

![this is the alt text](/img/ncdot-components.png "Title is optional")

**REPEATABLE COMPONENTS**
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu      
- Initial A/B testing on a mega menu style horizontal 
- Testers expressed confusion over navigation location navigation 

![this is the alt text](/img/ncdot-navigation.png "Title is optional")

**NAVIGATION**
- BLLLAAAHHH Existing U.S. approach for site navigation was with a sidebar menu      
- Initial A/B testing on a mega menu style horizontal 
- Testers expressed confusion over navigation location navigation 

## Comparing the results
 
- BBLLAAHH The website saw improved search efficiency helped 
by use of categories and better keywords increased 
efficiency in finding products

- BBLLAAHH Category changes were implemented without 
negatively affecting the U.S. database (the plan 
was to merge category changes over to the U.S site)

## The takeaway: BLAH 

- BLAH 

> BBLLLAAHH Melanie has a great understanding of CSS, graphics and web design, responsive layout and CSS compilers.  Our web sites are much better as a result of her work. *- Brian Futrell, StayOnline Web Developer*