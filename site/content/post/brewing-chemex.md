---
title: Decreasing bounce-rate of Stay Online's existing website through responsive implementation & re-branding
titlebold: Decreasing bounce-rate
titlenormal: of Stay Online's existing website through responsive implementation & re-branding
date: 2017-01-05T15:04:00.000Z
newdate: 2020-12-14T02:27:22.000Z
duration: (1+ years)
urllink: http://www.google.com
image: /img/blog-chemex.jpg
image1: /img/blog-flavor_wheel.jpg

tags: ['value_1', 'value_2']
---

## Creating a plan to decrease mobile bounce-rate
Stay Online is a power cord manufacturer and distributer, known for having the largest U.S. in-stock inventory of power cords and adapters. The legacy e-commerce website, built in 1997, had not grown technologically with Stay Online's users. Mobile users were not considered in marketing and design decisions. There was a potential to capture these users through making the web experience accessible to them. Responsive design however was not an easy sell to management. Analytics was the push needed to get the pitch approved

**The starting rate:**  ~85% mobile users leave

**The goal:**  < 50% mobile users leave
* mobile is defined as less than 1024px screen size and iPad in landscape mode

**Project team:**  lead developer, front-end developer (myself), marketing director

[Skip to the results](post/brewing-chemex/#comparing-the-results)
       

## Gathering insight, identifying issues & tasks 

- ☑️ Design needs to maintain IE6+ (and later IE8+) browser compatibility
- ☑️ Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
- ☑️ Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows
- ☑️ Branding needs to incorporate new accessible branding colors and tagline so print and web colors match
- ☑️ Code refactoring is needed to remove table-based layout
- ☑️ Complete A/B testing for layout to determine on a 3 or 2 column layout
- ☑️ Bring photography to the branding forefront
- ☑️ Work with Marketing and Sales managers to identify business needs for the new homepage 

> It is problem and solution that drives design. Stay Online's problem 
was the large amount of customers being unsuccessful to order 
products on a mobile device. Responsive design presented an 
exciting opportunity.

## Tables as layout? That’s so 2002
StayOnline's client-base still had a strong percentage of IE6 use (even back in 2012). Cross-browser compatibility was at the forefront of early planning. There was a large development backlog so the team planned an Agile release. The Sales team did not want any ordering downtime and Marketing did not want a drastic overnight aesthetic change. 

**Development Overhead:**
- CSS adjustments were constantly required with each page addition
- Layout bugs were constantly found by the team and users as it was easy to mistype or forget a closing `</td>` tag. When the entire page is unformatted table tags it is not worth upkeep. 

**User Pain Points:**
- Many users complained of not seeing content because it was either overflow: hidden, off-screen, or required scrolling horizontally
- Many "power-users" complained of not being able to tab through web content within the tables 

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

## Rethinking the layout through wireframes 
Making a site responsive is not a matter of making elements fit, but providing an equal experience for users regardless of screen size. 

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

**Optimizing the Navigation:**  After years of adding every new product line to the sidebar the experience of navigating 
the website was less than ideal.

- Remove header clutter while still showcasing important site information    
- Re-categorize product types and compare homepage and navigation placement with commonly bought products  
- Discussing on how to tackle mobile navigation (enter the many conversations about whether to jump on to the hamburger menu bandwagon)

**Redesigning the Homepage:**
- Exploring different concepts for showcasing feature products   
- Testing what info is accessed from the homepage
- Conducting A/B testing on 2-column vs the current 3-column layout 

**Client Approval:** 
Work began on the product after an initial conversations with the lead developer. After 
data gathering from Google Analytics, thanks to  close work with the Marketing director,  
a presentation of the benefits or a redesign was given to the CEO.

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

## Content-first & a usability-driven digital strategy
A/B testing was required when changing the content on the homepage. 
There was initial pushback on content because the team was used to 
approving feature requests without user testing. 

**Content-First:**
▪    Requirements from Marketing, Sales, and Development were gathered and compared 
      to what content is most visited by users    

**Responsive Design:**  
- Started by making the site resize elements for a min screen size on 1024px   
- Static tables and charts needed to be refactored and rewritten
- The next goal was to have elements reflow for screen sizes of 768px. Unfortunately, the project dissolved mid-release prior to a full responsive implementation

**Accessibility:**  
- Accessibility baselines were established using Lighthouse and then manual testing was completed using keyboard  

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

## Tweaking the color palette and assigning hierarchy in branding
The original website color palette included blue as the only official brand color for many years, but over the years many other colors crept in such as various greens, orange, red, yellow and (unfortunately) some yellow text.

**Color and accessibility:**  
- I worked with the marketing team to pair down these colors into a blue, yellow, and gray with very specific accessibility rules on when to use them  
  
**Photography:**  
- Originally a minor aspect of the company’s identity, new and non-piecemeal photos of introduced. This was very exciting but had the side effect of all products needing to be re-photographed. 😵 This was an enormous task, especially since some products are custom and would need to be photographed on very short notice before it headed out for shipping. 
- The internal consensus was that “power cords are not sexy” but the goal was to emphasize trust and quality versus trying to apply a fake façade to the product. 

## Comparing the results
 
**Mobile bounce rate:** 
The goal: < 50% mobile users leave 
Four months later:  ~ 25% mobile users leave
* mobile is defined as less than 1024px screen size and iPad in landscape mode
 
**Development upkeep:**  
Decreased rate of bugs logged for scrollbars or hidden (off-screen) content
and smaller css file size (code reduction ~25%)

## The takeaway: a userface is only as good as how well users can access it 

- Nurturing a site from IE6 to IE9+ has not been easy, but allowing gradual 
usability changes was beneficial for the company and older user-base
  
- The bounce rate for the site steadily decreased though the implementations and the browser usage for older browsers steadily decreased without notable monetary loss 

- Mobile purchases, not just usage, since this project has increased dramatically

> Melanie has a great understanding of CSS, graphics and web design, responsive layout and CSS compilers.  Our web sites are much better as a result of her work. *- Brian Futrell, StayOnline Web Developer*