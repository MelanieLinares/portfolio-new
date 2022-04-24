---
backgroundcolor: mixed2
title: Manage current and new I.I.M.S. participants with a new portal for less paperwork
titlebold: Manage current and new I.I.M.S. participants with a new portal 
titlenormal: for less paperwork
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
  [Skip to the results](post/ncdot-voma/#final)

</div>
<div class="div2"> 

## Project overview and task breakdown 

- Review project detailed specs regarding data types and DMV in-person process, including applications and citizen eligibility
- Organize requirements into user flow and wireframes
- Work directly with project owner to format/approve UI
- Work with backend team to establish API requirements and implementation

</div>

  > This project required knowledge of how the existing paper application is currently processed and reviewed, of currently enacted laws, and the ability to communicate ideas to both functional and cross-functional teams within multiple local agencies.

</div>

</section>

<section class="fullwidth purple">

<div class="inner-wrap">

<div class="newcontent">

  ## Understanding the underlying system
  ### What is IIMS, IIMA, and an ignition interlock device?

  IIMS stands for ignition interlock management system while IIMA is the ignition interlock medical accommodation procedure within the system providing access for those that need additional assisteance or exeptions to DUI requirements due to medical reasons. This ignition interlock is a device that is “connected to a vehicle’s ignition system… [The device] requires an individual to breathe into the equipment, which prevents the vehicle from starting if the individual’s breath alcohol concentration is outside the acceptable range.”
  *source: [NCDMV: Ignition Interlock Devices](https://www.ncdot.gov/dmv/license-id/license-suspension/Pages/ignition-interlock-devices.aspx#:~:text=Connected%20to%20a%20vehicle's%20ignition,is%20outside%20the%20acceptable%20range)*

  ### Why the new portal?
  
  In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the device.

  In other instances a participant might miss a court date. The device could be detecting misuse or malfunction. A participant could file a complaint on a vendor or request an exception be made due to medical reasons. Each of these use cases would need to be reflected in the internal IIMS portal and the data available only to those with approval.

  &nbsp;
  
  <!-- ![this is the alt text](/img/ncdot-display.png "Title is optional") -->

</div>

</div>

</section>


<section class="fullwidth">

<div class="inner-wrap">

<!-- <div role="presentation" class="fullwidth img" style="background-image: url(/img/decorative-desk.jpg)">

</div> -->

<div class="newcontent">

  ## Exploring what is needed to deliver on the required process and user needs

  ### Initial research
  In the initial stage of being brought onto the project other teams had been researching and working on the legislation involved for years. A comically-sized stack of paper was placed on my desk and I spent the following day going through it with a highlighter and taking notes on a whiteboard. This research also consisted of the existing pages and online system that this portal would be incorporated with.

  - How does the current system handle navigation?
  - How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?
  - The current system uses a table with filters. How will filtering be handled without a SharePoint backend?
  - There is a lot of data. Should also data be available, whe, to whom, and how can the data be grouped into views?

  ### Stakeholder interviews
  After conducting my own research and notes I consulted with the internal project liaison. We compared notes and unified on a strategy before driving downtown to meet with the project owner.
  
  After research and stakeholder interviews the team had a better understanding of requirements. The sketches were turned into the first round of wireframes to cover each user task.
  <div>

  - Business goals were discussed
  - Technical limitations were identified
  - User needs were discussed and a unified approach was decided upon
  - Sketches of how different tasks and goals could be approached were created during the initial interview

  ### User tasks included:
  - create participant
  - edit participant profile
  - modify dates
  - access a participant flagged for immediate follow-up
  - delete a user
  - download individual participant data
  - download report for a date range
  - review case notes including photographs

  </div>

  ![this is the alt text](/img/ncdot-display.png "Title is optional")

</div>

</div>

</section>

<section style="background-color: #F5F6FC">
<div class="inner-wrap">

## Establishing the UI with wireframes and a high fidelity prototype   
### There would be three main views:    
- dashboard
- table with individual participants
- table with participants grouped by date added

![this is the alt text](/img/voma-wireframe.png "Title is optional")
*BLLAAHHH In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the devices.*

It was important during this stage to maintain the basic structure of the existing pages this platform would be a part of. The DMV team did not want a rebranding and wanted the new system to fit in atheistically with the existing SharePoint systems and pages. This meant that the focus would be on optimized functionality and clear user experience. 

### Some ideas that were put to wireframe and either adapted or tossed:
- dashboard with dynamically updated alerts on upcoming or past deadlines for participant activity
- detail page for participant or vendor
- Pagination displaying page number of number versus participants shown range number of number
- filters to toggle certain columns on or off
- Ability to pin a column (such as participant ID) to the table if the table required horizontal scrolling
 
</div>
</section>

<section>
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

<section id="final" class="takeaway fullwidth">

<div class="inner-wrap">

  ## The takeaway: 
  This was a very long project, as is the case with most government work but the different teams I was able to work and collaborate with were great. This was my first introduction to Vue and Nuxt JS. While the project did experience some ups and downs with funding and performance obstacles, the end result was highly praised by the team which now uses this application each day. 👏

  </div>
  
</section>

<div class="inner-wrap">

  > [Melanie] helped modernize aging applications by refactoring them using modern JavaScript frameworks like Vue.js. Her user-first philosophy for user experience [...] made Melanie a critical part of the team's success.  
  *- Patrick Doran, NCDOT/NCDIT UX and Web Services Manager*

  > Melanie, thanks for all your hard work at the DOT and for continuing to educate us on usability!  
  *- Austin Johnson, Insight Team Lead while on NCDOT contract*

  </div>
