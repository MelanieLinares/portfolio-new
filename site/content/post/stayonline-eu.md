---
backgroundcolor: darkblue2
title: Improving information architecture to reduce frustration in navigating Stay Online’s 10,000+ product EU website 
date: 2015-01-05T15:04:00.000Z
newdate: 2015-04-10T02:27:22.000Z
description: no, intro blurb >:[
duration: 3 months
logo: /img/logos/stayonline-logo.png
image: /img/stayonline-eu.jpg
# image2: /img/powercord.png
role: Front-end developer
team: Web Dev
technology:
  - HTML/CSS
  - Javascript 
  - ASP.NET MVC
tags:
  - responsive
  - cross-browser 
  - html & css
  - .net mvc
  - javascript
titlebold: Improving information architecture to reduce frustration in navigating  
titlenormal: Stay Online’s 10,000+ product EU website
client: StayOnline LLC.

---

## Creating a plan to help users find a product quickly
In 2015 Stay Online made the transition from a US business to an international one. The 
company opened a shipping and manufacturing location in the Czech Republic. This 
new manufacturing location would need to take orders for the existing product line and 
apply internationalization and global UX so the existing US team, the new EU team, and 
new EU customers can handle orders.

**The baseline:**  new users spend more time on navigating the website than in the purchase process, many not making it to checkout

**The goal:**  users (internal and external) find products more efficiently

**Project team:**  back-end developer, front-end developer (myself), Outside Sales team

[Skip to the results](post/stayonline-eu/#the-final-result)
       

## Project overview and task breakdown 

- BBLLLAAAHHHH Design needs to maintain IE6+ (and later IE8+) browser compatibility
- Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
- Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows
- Branding needs to incorporate new accessible branding colors and tagline so print and web colors match
- Code refactoring is needed to remove table-based layout
- Complete A/B testing for layout to determine on a 3 or 2 column layout
- Bring photography to the branding forefront
- Work with Marketing and Sales managers to identify business needs for the new homepage 

> It may not seem like a problem to have a lot of products, but if they are not organized efficiently and the navigation not clear then all those products can start being too many. A good e-commerce website creates an easy purchasing experience.

## Team exploration and planning for a MVP release
Stay Online brought me onto the EU launch team due to my familiarity with the U.S. website and my experience with responsive development. I co-lead a discovery session to explore project requirements, limitations, globalization 
needs, and eCommerce workflow (and we were finally able to use the new design space I helped create - dry erase walls and 1/4lb of sticky notes 🤩)  
 

**Information Gathering:**  
- Marketing and Sales teams were interviewed for their specific needs - feedback was then prioritized into sprints      
- Existing sub-sites and marketing materials would be carried over incrementally as translations were completed
- Grouped notes and outlined internal goals from a maintenance and code-based standpoint
 
**Project Requirements:**  
- A large amount of product APIs were required with little to no rewrite as the U.S. site also used the same data     
- Focus on minimal viable product (MVP) for the first release 
- Time would be a large design and development hindrance
- Waterfall release method

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

## Internationalization and globalization was at the heart of market research 
- international sales interns, Outside Sales team members, and the Marketing team were interviewed      
- Marketing ran specific user surveys
- The website would need multi-language support, translated documentation, and branding tweaks
- Focus on bold colors, image-focused design, EU-specific regulation requirements

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

## A new market means new users and expectations

**What do users of this new website need?:**  
- Two categories of user were identified: internal team member and external purchasing customer      
- Stay Online team members would submit orders on behalf of the company and for phone orders
- External customers included one time buy customers and return annual buyers who bought in bulk
- Greater expectation for product customization and proof that products meet EU regulations
- User flows based on current requirements and frustrations were created, identifying a common issue of finding products quickly

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

[From left to right]:  Sketches of dividing up the master page section; Responsive menu sketches; notes planning out static page layouts

**Major navigation changes:**  
- Existing U.S. approach for site navigation was with a sidebar menu that grew in height over time      
- Initial A/B testing on a mega menu style horizontal navigation vs the existing vertical style
- Testers expressed confusion over navigation location (mega menu was not toggled on load so the only available navigation link was “products”)
- After several prototype versions using tester feedback a decision was made to revert to the sidebar approach but keep the new category labels

## The final result

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

![this is the alt text](/img/blog-chemex.jpg "Title is optional")

-  The website saw improved search efficiency helped 
by use of categories and better keywords increased 
efficiency in finding products

- Category changes were implemented without 
negatively affecting the U.S. database (the plan 
was to merge category changes over to the U.S site)

## The takeaway: a userface is only as good as how well users can access it 

- Nurturing a site from IE6 to IE9+ has not been easy, but allowing gradual 
usability changes was beneficial for the company and older user-base
  
- The bounce rate for the site steadily decreased though the implementations and the browser usage for older browsers steadily decreased without notable monetary loss 

- Mobile purchases, not just usage, since this project has increased dramatically

> Melanie has a great understanding of CSS, graphics and web design, responsive layout and CSS compilers.  Our web sites are much better as a result of her work. *- Brian Futrell, StayOnline Web Developer*