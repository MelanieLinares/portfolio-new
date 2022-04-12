---
backgroundcolor: mixed2
title: Manage current and new I.I.M.S. participants with an improved portal and less paperwork
titlebold: Manage current and new I.I.M.S. participants with an improved portal 
titlenormal: and less paperwork
date: 2019-09-17T15:04:10.000Z
newdate: 2020-12-29T20:11:54.193Z
duration: 1 year 3 months
logo: /img/logos/ncdot-logo.gif
image: /img/Group 537.png
image1: img/about-shade-grown.jpg
preview: /img/iims-preview.png
technology:
  - vue
  - sharepoint
role: Software Engineer
team: Application Development
tags:
  - vue
  - sharepoint
  - cross-browser
client: NC Department of Transportation / Department of Motor Vehicles
# weight is the equivalent of favorite
notice: For legal reasons some images are representational only or blurred

---

<!-- <section class="inner-wrap content">

<div class="first">

## Transforming a complex process into a powerful digital workflow impacting thousands
Imagine a stack of physical applications, encompassing a year’s worth of unentered data for several hundred NC citizens, all waiting to be approved for a small device that would allow them to drive and continue life normally after a DUI. Now imagine that paperwork backlog is six years worth of pending applications.

### The challenge 
The current NCDMV system was not built for the number of active and archived participants. The time needed to add new recipients to the database, edit, manage their status, curate documentation, and maintain the data on the legacy system caused a backlog of issues.

![this is the alt text](/img/dmv-news-small.jpg "Title is optional")
*source: [cbs17.com](https://www.cbs17.com/news/nc-dmv-backlog-allowed-drivers-on-the-road-who-shouldnt-have-been/)*

A new internal portal was needed so NCDMV employees could access and process participant and vendor data for hundreds of thousands of citizens, efficiently and securely.

**The goal BLAHHH accessibility within a 3rd-party (SharePoint 2016) can be tricky, but 
we needed to reach > 90  

[Skip to the results](post/ncdot-voma/#the-takeaway)

<div>

</section>

<section>
     






</section>






![this is the alt text](/img/voma-cupcake.jpg "Title is optional")
*BLLLAHH celebration cupcake*

 -->

<section>

<div class="inner-wrap content">

<div class="first">

  ## Creating a plan to increase usability and accessibility
  The NCDOT’s new website (as of 2018) allows citizens a secure, quick, and easy way to view all transportation-related information. Unfortunately, despite looking great the site failed initial accessibility audits. This is not good for a government website.
  <br>
  **The starting score:** This is wrapped in a section?? 67 (based on Google Lighthouse)
  <br>
  **The goal:** accessibility within a 3rd-party (SharePoint 2016) can be tricky, but 
  we needed to reach > 90
  [Skip to the results](post/ncdot-accessibility/#the-takeaway)

</div>
<div class="div2"> 

## Project overview and task breakdown 

- BBLLLAAAHHHH Design needs to maintain IE6+ (and later IE8+) browser compatibility
- Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
- Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows
- Branding needs to incorporate new accessible branding colors and tagline so print and web colors match
- Code refactoring is needed to remove table-based layout
- Complete A/B testing for layout to determine on a 3 or 2 column layout
- Bring photography to the branding forefront
- Work with Marketing and Sales managers to identify business needs for the new homepage 

</div>

  > BLAHHHIt may not seem like a problem to have a lot of products, but if they are not organized efficiently and the navigation not clear then all those products can start being too many. A good e-commerce website creates an easy purchasing experience.

</div>

</section>

<section class="fullwidth purple">

<div class="inner-wrap">

<div class="newcontent">

  ## Understanding the underlying system

  <div>

  This project required the knowledge of multiple terms, the process in which an application is already processed and reviewed, currently enacted laws, and the ability to communicate ideas to both functional and cross-functional teams.

  **What is IIMS/IIMA?**
  ignition interlock management system
  ignition interlock medical accomodation

  ### What is an ignition interlock device?

  IIMS is the ignition interlock management system. This system makes use of a device that is "connected to a vehicle's ignition system... [The device] requires an individual to breathe into the equipment, which prevents the vehicle from starting if the individual's breath alcohol concentration is outside the acceptable range."
  *source: [NCDMV](https://www.ncdot.gov/dmv/license-id/license-suspension/Pages/ignition-interlock-devices.aspx)*

  ### Why the portal TBD heading :)?

  In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the device.

  In other instances a participant might miss a court date. The device could be detecting misuse or malfunction. A participant could file a complaint on a vendor or request an exception be made due to medical reasons. Each of these use cases would need to be reflected in the internal IIMS portal and the data available only to those with approval.

  ![this is the alt text](/img/ncdot-display.png "Title is optional")

  </div>

</div>

</div>

</section>

<section>
<div class="inner-wrap content">
<div class="div-1">

  ## TBD

  ### TBD  
  - TBD

</div>
<div class="div-2">

![this is the alt text](/img/voma-sketch3.png "Title is optional")
  *TBD caption*

</div>
<div class="div-3">


![this is the alt text](/img/voma-sketch1.png "Title is optional")
*BLLLAHH [From left to right]:  Sketches of dividing up the master page section; Responsive menu sketches; notes planning out static page layouts*

</div>


</div>
</section>

<section style="background-color: #F5F6FC">
<div class="inner-wrap">

## Exploring the different users and user flows       
![this is the alt text](/img/voma-sketch2.png "Title is optional")
*BLLLAHH [From left to right]:  Sketches of dividing up the master page section; Responsive menu sketches; notes planning out static page layouts*


After research and stakeholder interviews the team had a better understanding of requirements.

By identifying persona needs the information was given proper hierarchy within the layout.

### Main tasks for users included
- create participant
- edit participant profile 
- modify dates
- access a participant flagged for immediate follow-up
- delete a use
- download individual participant data
- download report for a date range
- review case notes including photographs

Documentation was important for ensuring teams were up-to-date on design, API, and interactive decisions. 

</div>
</section>

<section>
<div class="inner-wrap">

## Wireframe Iterations

![this is the alt text](/img/voma-wireframe.png "Title is optional")

BLLAAHHH In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the devices.

BLLAAHHH In other instances a participant might miss a court date. The device could be detecting misuse or malfunction. A participant could file a complaint on a vendor or request an exception be made due to medical reasons. Each of these use cases would need to be reflected in the internal IIMS portal and the data available only to those with approval.

</div>
</section>

<section style="background-color: #F5F6FC">
<div class="inner-wrap">

  ## Development considerations & challenges

  - BBLLLAAAHHHH Design needs to maintain IE6+ (and later IE8+) browser compatibility
  - Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
  - Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows
  - Branding needs to incorporate new accessible branding colors and tagline so print and web colors match
  - Code refactoring is needed to remove table-based layout
  - Complete A/B testing for layout to determine on a 3 or 2 column layout
  - Bring photography to the branding forefront
  - Work with Marketing and Sales managers to identify business needs for the new homepage 
</div>
</section>

<section class="takeaway fullwidth">

<div class="inner-wrap">

  ## The takeaway: 
  - BBLLAAHH Nurturing a site from IE6 to IE9+ has not been easy, but allowing gradual 
  usability changes was beneficial for the company and older user-base
    
  - The bounce rate for the site steadily decreased though the implementations and the browser usage for older browsers steadily decreased without notable monetary loss 

  - Mobile purchases, not just usage, since this project has increased dramatically

  - Regrettably, company changes resulted in the redesign never becoming responsive for devices smaller than 768px.

  </div>
  
</section>

  > [Melanie] helped modernize aging applications by refactoring them using modern JavaScript frameworks like Vue.js. Her user-first philosophy for user experience [...] made Melanie a critical part of the team's success.  
  *- Patrick Doran, NCDOT/NCDIT UX and Web Services Manager*

  > Melanie, thanks for all your hard work at the DOT and for continuing to educate us on usability!  
  *- Austin Johnson, Insight Team Lead while on NCDOT contract*
