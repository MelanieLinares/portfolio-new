---
backgroundcolor: darkblue
title: Decreasing the bounce-rate of Stay Online's website through a responsive redesign
date: 2015-06-29T15:04:00.000Z
newdate: 2016-09-07T02:27:22.000Z
description: We’re proud to announce that we’ll be offering a small batch of Jamaica Blue Mountain coffee beans in our store next week.
duration: 2 months
logo: /img/logos/stayonline-logo.png
image: /img/stayonline-us.jpg
image2: /img/stayonline-us-tablet.png
preview: /img/stayonline-preview.png
tags:
  - cross-browser 
  - .net mvc
  - javascript
  - cross-browser
titlebold: Decreasing the bounce-rate of Stay Online's website
titlenormal: through a responsive redesign
client: Stay Online LLC.
role: Front-End Web Developer
team: Web Development

---

<section class="content">

<div class="first">

## Creating a plan to decrease mobile bounce-rate
Stay Online is a power cord manufacturer and distributer, known for having the largest U.S. in-stock inventory of power cords and adapters. The legacy e-commerce website, built in 1997, had not updated its user experience. Mobile users were not considered in marketing and design decisions.  This contributed to a large amount of site bounce-rate. There was a potential to capture these users by making the web experience accessible to them. Responsive design was not an easy sell to management. Data-driven design through analytics was needed to get the pitch approved.

### The starting rate:   
👎 ~85% mobile users leave 

### The goal:   
👌 < 50% mobile users leave 

*(note:  mobile was defined as less than 1024px screen size during the design sprint)*

[Skip to the results](post/stayonline-us/#the-takeaway)

</div>

<div class="div2">       

## Gathering insight, identifying issues & tasks 

- Design needs to maintain IE6+ (and later IE8+) browser compatibility
- Data-heavy pages need balance showing necessary data and providing an ideal mobile experience
- Users include customers, but also warehouse workers and sales employees at tradeshows
- Branding needs to incorporate new accessible branding colors
- Code refactoring is needed to remove table-based layout
- Complete A/B testing for layout to determine on a 3 or 2 column layout
- Bring photography to the branding forefront
- Work with Marketing and Sales managers to identify business needs for new homepage 

</div>


> Stay Online's problem was that a large amount of customers were unable to order 
products on mobile devices. Responsive design presented an 
exciting opportunity.


</section>

<section>

## Tables for layout? That’s so 2002
Stay Online's client-base still had a strong percentage of IE6 use (even back in 2012). Cross-browser compatibility was at the forefront of early planning. There was a large development backlog so the team planned an Agile release. The Sales team did not want any ordering downtime. Marketing did not want a drastic overnight aesthetic change. 

![this is the alt text](/img/stayonline-us-table.jpg "Title is optional")
![this is the alt text](/img/stayonline-us-tablet-before.gif "Title is optional")
*The Stay Online website layout when I first started; I first broke the design down into a basic wireframe to help better identify where sections could be simplified*

<!-- ![this is the alt text](/img/stayonline-us-table.jpg "Title is optional")
*The Stay Online website layout when I first started; I first broke the design down into a basic wireframe to help better identify where sections could be simplified* -->

### Development Overhead: 
- CSS adjustments were constantly required with each page addition
- Layout bugs were constantly found by the team and users as it was easy to mistype or forget a closing table tag. When the entire page is unformatted table tags it is not worth upkeep. 

### User Pain Points: 
- Many users complained they could not see content because it was either hidden, off-screen, or required scrolling horizontally
- Many "power-users" complained of having difficulty tabbing through web content 

![this is the alt text](/img/stayonline-us-tabing.gif "Title is optional")
*When using a keyboard to navigate a page, it is important that focus is not lost on a hidden element.*

</section>

<section>

## Rethinking the layout through wireframes 
Making a site responsive is not a matter of making elements fit, but providing an equal experience for users regardless of screen size. When conducting competitor research certain layouts stood out as standard practices involving the navigation and homepage.

![this is the alt text](/img/stayonline-wireframe.png "Title is optional")

### Optimizing the Navigation:   
After years of adding every new product line to the sidebar the experience of navigating 
the website was less than ideal.

- Remove header clutter while still showcasing important site information    
- Re-categorize product types and compare homepage and navigation placement with commonly bought products  
- Discuss on how to tackle mobile navigation

### Redesigning the Homepage: 
- Exploring different concepts for showcasing feature products   
- Testing what info is accessed from the homepage
- Conducting A/B testing on 2-column vs the current 3-column layout 

### Client Approval:  
Work began on the product after an initial conversations with the lead developer. Data was gathered from Google Analytics thanks to close work with the Marketing director. A presentation of the benefits of a redesign was given to the CEO.

</section>

<section>

## Content-first & data-driven strategy
A/B testing was required when changing the content on the homepage. 
There was initial pushback on content because the team was used to 
approving feature requests without user testing. 

### Content-First: 
- Requirements from Marketing, Sales, and Development were gathered and compared to what content is most visited by users

![design team holding a meeting beside a wall that is covered in sticky notes](/img/meeting.jpg "Title is optional")
*Photo by Jason Goodman on Unsplash*

### Responsive Design:   
- Started by making the site resize elements for a min-screen size of 1024px   
- Static tables and charts needed to be refactored and rewritten
- The next goal was to have elements reflow for screen sizes of 768px. (Unfortunately, the project dissolved mid-release prior to a full responsive implementation)

![this is the alt text](/img/stayonline-us-responsive.jpg "Title is optional")

</section>

<section>

## Accessibility  
Accessibility baselines were established using Lighthouse and Axe DevTools. Manual testing was completed.

### Layout was changed from tables and unaccessible code to HTML5
- Previous code used floats and absolute positioning to change logical order of content
- "Divitus" (the overuse of the `<div>` tag) was combatted by using `<header>`, `<nav>`, `<aside>`, `<section>`, and `<footer>`
- Lists were re-written to take advantage of how they would be used by a screenreader
- These changes made use of HTML5's inherent accessible attributes

This is not to say that tables were not used as part of Stay Online's content. The use, however, was kept to what tables do best--displaying data for comparison or analysis. 

### Tweaking the color palette and branding for accessibility and user experience
The original website color palette included blue as the only official brand color for many years, but over the years many other colors crept in such as various greens, orange, red, yellow and (unfortunately) some yellow text.

I worked with the marketing team to pair down these colors to blue, yellow, and gray. There are very specific accessibility rules on when and how to use them  

![this is the alt text](/img/stayonline-us-branding.jpg "Title is optional")

</section>

<section>  

## Comparing the results

![this is the alt text](/img/us-responsive.gif "Title is optional")
 
### Mobile bounce rate:  
Previously ~85% mobile users left before making a purchase. The goal was to decrease this to less than 50%.  
👍 Four months later:  ~ 25% mobile users leave before making a purchase. 
 
### Development upkeep:   
Decreased the amount of bugs logged for scrollbars or hidden (off-screen) content.
The site has ~25% code reduction.

</section>

<section class="takeaway fullwidth">

## The takeaway 

- Nurturing a site from IE6 to IE9+ has not been easy, but allowing gradual 
usability changes was beneficial for the company and older user-base
  
- The bounce rate for the site steadily decreased though the implementations. Browser usage for older browsers steadily decreased without notable monetary loss 

- Mobile purchases, not just usage, since this project has increased dramatically

- Regrettably, company changes resulted in the redesign never becoming responsive for devices smaller than 768px.

</section>

> Melanie distinguished herself by **consistently deliverying quality solutions, on schedule**. [...] She always went the extra mile to ensure the quality of her work was at the highest level.  
*- Gordon Harris, Stay Online Director, Marketing and Communications*

> Melanie has a great understanding of CSS, graphics and web design, responsive layout and CSS compilers. **Our web sites are much better as a result of her work**.  
*- Brian Futrell, Stay Online Web Developer*

