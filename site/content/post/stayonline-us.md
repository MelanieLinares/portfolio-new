---
backgroundcolor: darkblue
title: Decreasing the bounce-rate of Stay Online's website through a responsive redesign
date: 2015-06-29T15:04:00.000Z
newdate: 2016-09-07T02:27:22.000Z

duration: 2 months
logo: /img/logos/stayonline-logo.png
image: /img/stayonline-us.jpg
# image2: /img/stayonline-us-tablet.png
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

<section>

<div class="inner-wrap content">

<div class="first">

## Creating a plan to decrease mobile bounce-rate
Stay Online is a power cord manufacturer and distributer, known for having the largest U.S. in-stock inventory of power cords and adapters. The legacy e-commerce website, built in 1997, had not changed the layoutand design to fit changing technology and user experience best practices. Mobile users were not considered.  This contributed to a large bounce-rate from mobile device users. There was a potential to capture these users by making the web experience accessible to them. Responsive design was not an easy sell to management. Data-driven design through analytics was needed to get the pitch approved.

### The starting rate:   
👎 ~85% mobile users leave 

### The goal:   
👌 < 50% mobile users leave 

*(note:  mobile was defined as less than 1024px screen size during the design sprint)*

[Skip to the results](post/stayonline-us/#final)

</div>
<div class="div2">      

## Gathering insight, identifying issues, and clarifying tasks 

- Design needs to maintain IE6+ (and later IE8+) browser compatibility
- Data-heavy pages need content organization and prioritization to provide an ideal mobile experience
- Users are defined as customers, but also internal warehouse workers who use the site for inventory management and sales employees who use the site for phone sales and promotion during tradeshows
- Branding sstem needs to updating incorporate accessible branding colors for web and print
- Code refactoring is needed to remove table-based layout and poorly formed html
- Complete A/B testing for layout to determine whther a 3 or 2 column layout resulted in a better call-to-action response
- Work with Marketing and Sales managers to identify business needs for new homepage 

</div>

> Stay Online's problem was that a large amount of customers were unable to order 
products on mobile devices. Responsive design presented an 
exciting opportunity.

</div>

</section>

<section class="fullwidth purple">

<div class="inner-wrap">

<div class="newcontent">

## Make it work! Make it comatibile! Make it progressively enhance!



Stay Online's client-base had a strong percentage of IE6 use (even back in 2012). Cross-browser compatibility was at the forefront of early planning. There was a large development backlog which could interfere with a waterfall redesign release where new features would have to be put on hold. After discussion the team planned an Agile release. The Sales team did not want any ordering downtime. Marketing did not want a drastic overnight aesthetic change which they feared would confuse customers and disrupt brand trust.

<!-- ![this is the alt text](/img/stayonline-us-table.jpg "Title is optional")
![this is the alt text](/img/stayonline-us-tablet-before.gif "Title is optional") -->
<!-- *The Stay Online website layout when I first started; I first broke the design down into a basic wireframe to help better identify where sections could be simplified* -->

<!-- ![this is the alt text](/img/stayonline-us-table.jpg "Title is optional")
*The Stay Online website layout when I first started; I first broke the design down into a basic wireframe to help better identify where sections could be simplified* -->

### Development Overhead: 
- CSS adjustments were constantly being logged as bugs with each new page creation. Templates were not implemented and pages hard coded.
- Layout bugs were constantly found by the team and users as it was easy to mistype or forget a closing table tag. This resulted in the development focusing on tackling the growing backlog as a symptom versus tackling the cause. 

<div>


### User Pain Points: 
- Many users complained they could not see content because it was either hidden, off-screen, or required scrolling horizontally on mid-size and small mobile devices
- Users complained they were having difficulty tabbing through web content formatted with tables
- Keyboard focus was either implemented inconsistently or hidden which was directly causing rampant accessibility issues

![this is the alt text](/img/stayonline-us-tabing.gif "Title is optional")
*tbd*
  </div>
  
  ![this is the alt text](/img/stayonline-us-display.png "Title is optional")



</div>

</div>

</section>

<section>

## Rethinking the layout through wireframes 
Making a site responsive is not a matter of making elements fit, but providing an equal experience for users regardless of screen size. When conducting competitor research certain layouts stood out as standard practices involving the navigation and homepage.

![this is the alt text](/img/stayonline-wireframe.png "Title is optional")
*need: mood board of competitor research*

### Optimizing the Navigation and redesigning the homepage   
After years of adding every new product line to the sidebar the experience of navigating 
product categories was inefficient.

- Header clutter was reduced while still showcasing  what Sales determined to be important site information    
- Product types were re-categorized and the homepage featured section changed from including every category to only the most commonly bought product categories  
- Mobile navigation was discussed as part of the desktop responsive implementation

### Client Approval:  
Work began on the product after an initial conversations with the lead developer. Data on bounce-rate was gathered from Google Analytics thanks to close work with the Marketing director. A presentation of the benefits of a redesign was given to the CEO.

</section>

<section>

## Content-first and data-driven strategy
A/B testing was required when changing the content on the homepage. 
There was initial pushback on content because the team was used to 
approving feature requests without user testing. 

### Content-First: 
- Requirements from Marketing, Sales, and Development were gathered and compared to what content is most visited by users

![design team holding a meeting beside a wall that is covered in sticky notes](/img/meeting.jpg "Title is optional")
*Photo by Jason Goodman on Unsplash*

### Responsive Design:   
- Started by making the site optimized for a min-screen size of 1024px which at the time was the average internal and external device width
- Static tables and charts needed to be refactored and rewritten
- The next goal was to have elements optimized device widths at a min of 768px. (Unfortunately, the project dissolved mid-release prior to a full responsive implementation)

![this is the alt text](/img/stayonline-us-responsive.jpg "Title is optional")

</section>

<section>

## Accessible Strategy  
Accessibility baselines were established using Google Lighthouse and Axe DevTools. Manual testing was completed to meet WCAG 2.0 Level A.

### Layout was changed from tables and unsemantic code to HTML5
- Previous code used floats and absolute positioning to change logical order of content which negatively affects keyboard users
- "Divitus" (the overuse of the `<div>` tag) was combatted by using `<header>`, `<nav>`, `<aside>`, `<section>`, `<footer>`, and other html elements
- Lists were re-written to use html `<ul>` and `<ol>` versus implicit lists so they could be utilized by a screenreader

Table usage was changed from layout to data presentation (comparison or analysis) when relevant. 

### Tweaking the color palette to meet accessible color contrast guidelines
The original website color palette included the default CSS `color: blue` as the only official brand color without concern how this color is used and contrasts in compliance with accessibility guidelines.

I worked with the marketing team to pair down these colors to blue, yellow, and gray and define the appropriate hex, RGB, and CYMK codes as well as using rules for each color.  

![this is the alt text](/img/stayonline-us-branding.jpg "Title is optional")

</section>

<section>  

## Comparing the results

![this is the alt text](/img/us-responsive.gif "Title is optional")
 
### Mobile bounce rate:  
Previously ~85% mobile users left before making a purchase. The goal was to decrease this to less than 50%.  
👍 Four months later:  ~ 25% mobile users leave before making a purchase. 
 
### Development upkeep:   
Through the code optimization the amount of bugs logged for scrollbars or hidden (off-screen) content decreased.
The site also has ~25% reduction in lines of code.

</section>

<section id="final" class="takeaway fullwidth">

<div class="inner-wrap">

## The takeaway: 

- Nurturing a site from IE6 to IE9+ has not been easy, but allowing gradual usability changes was beneficial for the company and the existing user-base
  
- The bounce-rate for the site steadily decreased though the agile implementations. Browser usage for older browsers also steadily decreased without notable monetary loss and in turn decreased the amount of legacy code needed

- Mobile purchases, not just usage, since this project has increased dramatically

- Regrettably, internally company changes resulted in the re-design project being postponed after the release for devices larger than 767px in width.

</div>

</section>

<div class="inner-wrap">

> Melanie distinguished herself by **consistently deliverying quality solutions, on schedule**. [...] She always went the extra mile to ensure the quality of her work was at the highest level.  
*- Gordon Harris, Stay Online Director, Marketing and Communications*

> Melanie has a great understanding of CSS, graphics and web design, responsive layout and CSS compilers. **Our web sites are much better as a result of her work**.  
*- Brian Futrell, Stay Online Web Developer*

</div>

