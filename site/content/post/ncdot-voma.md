---
backgroundcolor: mixed2
title: Manage current and new I.I.M.S. participants with a new portal for less paperwork
titlebold: Manage current and new I.I.M.S. participants with a new portal 
titlenormal: for less paperwork
date: 2019-09-17T15:04:10.000Z
newdate: 2020-12-29T20:11:54.193Z
duration: 1 year 3 months
logo: /img/logos/ncdot-logo.gif
image: /img/Group%207.png
image1: img/about-shade-grown.jpg
preview: /img/iims-preview.png
technology:
  - vue
  - sharepoint
  - adobe xd
  - balsamiq
role: Software Engineer
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

  ## Identifying ways to optimize a legacy internal DMV process digitally
  The NCDOT on behalf on the NCDMV assigned a team to work directly with the ignition interlock team. This team would be responsible of not only leading the developmental changes, but integrating the new application into the existing system.
  <br>
  The new system would need to still support the legacy system and its user's needs. This included browser support, SharePoint frontend hosting, and matching UI.

  [Skip to the results](post/ncdot-voma/#final)

</div>
<div class="div2"> 

## Project overview and task breakdown 

If you imagine a pile of paperwork one foot tall representing 6 months, the backlog of physical paperwork was 2 years worth. The initial system's purpose was to reduce that backlog. In order to accomplish this, the following was considered and assigned priority:

- Review project details and specs regarding data types and DMV in-person process, including applications and citizen eligibility
- Organize requirements into user flow and wireframes
- Work directly with project owner to format/approve UI
- Work with backend team to establish API requirements and implementation

</div>

  > This project required knowledge of how the existing paper application is currently processed and reviewed, of currently enacted laws, and the ability to communicate ideas to both <span class="definition" title="functional team: includes members of the same department with different responsibilities">functional</span> and  <span class="definition" title="cross-functional team: includes members of different departments with different responsibilities">cross-functional</span> teams within multiple local agencies.

</div>

</section>

<section class="fullwidth purple">

<div class="inner-wrap">

  ## Understanding the underlying system

  ### What is IIMS, IIMA, and an ignition interlock device?

  <dl>
    <dt>Igition Interlock</dt>
    <dd>a small, handheld breathalyzer for car ignitions that's installed to prevent users from being able to start their vehicle after drinking alcohol</dd>
    <dt>IIMS</dt>
    <dd>ignition interlock management system</dd>
    <dt>IIMA</dt>
    <dd>ignition interlock medical accommodation</dd>
</dl>

  <div style="display: -webkit-box;" class="image-block">
<div class="small-img" style="align-items: center;
  justify-content: center;">
  <img class="" src="/img/ignition-interlock.jpg" alt="">
    <!-- <a href="https://www.flaticon.com/free-icons/no-racism" title="no racism icons">No racism icons created by Freepik - Flaticon</a> --></div>
<div style="width: calc(100% - 320px);">

### What is is the current process?

  Accommodation procedure within the system providing access for those that need additional assistance or exeptions to DUI requirements due to medical reasons. 

  </div>
  </div>

  <div style="display: -webkit-box;" class="image-block">
<div class="small-img" style="align-items: center;
  justify-content: center; display: flex;">
  <img class="" src="/img/ncdmv-article.png" alt="">
    <!-- <a href="https://www.flaticon.com/free-icons/no-racism" title="no racism icons">No racism icons created by Freepik - Flaticon</a> --></div>
<div style="width: calc(100% - 320px);">

### Why the new portal?

  In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the device.

  In other instances a participant might miss a court date. The device could be detecting misuse or malfunction. A participant could file a complaint on a vendor or request an exception be made due to medical reasons. Each of these use cases would need to be reflected in the internal IIMS portal and the data available only to those with approval.

  </div>
  </div>

</div>

</section>


<section class="fullwidth">

<div class="inner-wrap">

<!-- <div role="presentation" class="fullwidth img" style="background-image: url(/img/decorative-desk.jpg)">

</div> -->

<div class="newcontent">

  ## Exploring what is needed in order to deliver the required process according to user needs

  <div style="display: -webkit-box;" class="image-block">
<div class="small-img" style="align-items: center;
  justify-content: center;">
  <img class="" src="/img/voma-sketch1.png" alt="">
    <!-- <a href="https://www.flaticon.com/free-icons/no-racism" title="no racism icons">No racism icons created by Freepik - Flaticon</a> --></div>
<div style="width: calc(100% - 320px);">

  ### Initial research

  In the initial stage of being brought onto the project other teams had been researching and working on the legislation involved for years. A comically-sized stack of paper was placed on my desk and I spent the following day going through it with a highlighter and taking notes on a whiteboard. This research also consisted of the existing pages and online system that this portal would be incorporated with.
  </div>
  </div>




  - How does the current system handle navigation?
  - How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?
  - The current system uses a table with filters. How will filtering be handled without a SharePoint backend?
  - There is a lot of data. To whom should the data be available, when, and how can the data be grouped into views?

  ### Stakeholder interviews
  After conducting my own research and notes I consulted with the internal project liaison. We compared notes and unified on a strategy before driving downtown to meet with the project owner. The project owner provided precise insight and feedback. They would be the person approving any changes.
  
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

  ![this is the alt text](/img/voma-display.png "Title is optional")

</div>

</div>

</section>

<section style="background-color: #ECEFF9">
<div class="inner-wrap">

## Establishing the UI with wireframes and a high fidelity prototype   
### Three main views:    
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

<section style="background-color: #FFFFFF">
<div class="inner-wrap">

  ## Profile data and management

  - BBLLLAAAHHHH Design needs to maintain IE6+ (and later IE8+) browser compatibility
  - Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
  - Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows
  - Branding needs to incorporate new accessible branding colors and tagline so print and web colors match

</div>
</section>

<section>
<div class="inner-wrap">

  ## Reports and custom filtering

  - BBLLLAAAHHHH Design needs to maintain IE6+ (and later IE8+) browser compatibility
  - Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
  - Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows

</div>
</section>


<section  style="background-color: #ECEFF9">
<div class="inner-wrap">

  ## Alerts and notifications

  - BBLLLAAAHHHH Design needs to maintain IE6+ (and later IE8+) browser compatibility
  - Data-heavy pages need to balance showing necessary data and providing an ideal mobile experience
  - Use-cases for redesign include customers, but also warehouse workers and sales employees at tradeshows

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
