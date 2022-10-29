---
overviewblurb: This project required knowledge of how the existing paper
  application is currently processed and reviewed, of currently enacted laws,
  and the ability to communicate ideas to both functional and cross-functional
  teams within multiple local agencies.
purplesection1: >-
  ### What is IIMS, IIMA, and an ignition interlock device?

  - Igition Interlock: a small, handheld breathalyzer for car ignitions that's installed to prevent users from being able to start their vehicle after drinking alcohol

  - IIMS: ignition interlock management system

  - IIMA: ignition interlock medical accommodation
title: Manage current and new I.I.M.S. participants with a new portal for less
  paperwork
preview: /img/iims-preview.png
overviewheading: Project overview and task breakdown
titlebold: Manage current and new I.I.M.S. participants with a new portal
titlenormal: for less paperwork
notice: For legal reasons some images are representational only or blurred
date: 2019-09-17T15:04:10.000Z
newdate: 2020-12-29T20:11:54.193Z
client: NC Department of Transportation / Department of Motor Vehicles
logo: /img/logos/ncdot-logo.gif
role: Software Engineer
tags:
  - vue
  - sharepoint
  - cross-browser
technology:
  - vue
  - sharepoint
  - adobe xd
  - balsamiq
duration: 1 year 3 months
introheading: Identifying ways to optimize a legacy internal DMV process digitally
introbody: >-
  The NCDOT on behalf on the NCDMV assigned a team to work directly with the
  Ignition Interlock Program team. This team would be responsible of not only
  leading the developmental changes, but integrating the new application into
  the existing system.

  The new system would need to still support the legacy system and its user’s needs. This included browser support, SharePoint frontend hosting, and matching UI.
typed_list:
  - type: generic_content
    generic_content: T﻿BD
    cards:
      blurbcards:
        - textcards: >-
            <!--StartFragment-->


            Citizen is assigned an ignition interlock as a provision of driving after a DWI conviction


            An initial application is created




            <!--EndFragment-->
          imagecards: img/wheelchair4.svg
        - textcards: >-
            <!--StartFragment-->


            **Citizens can file for exemption, deferral, or specific accommodations due to medical reasons**


            <!--EndFragment-->
          imagecards: img/wheelchair4.svg
        - textcards: >-
            <!--StartFragment-->


            **Once every 30 or 60 days citizens are required to bring their vehicle for inspection so the ignition interlock provider can download monitoring data. This data is added to their file**


            <!--EndFragment-->
          imagecards: img/wheelchair4.svg
        - textcards: >-
            <!--StartFragment-->


            **Throughout this process NCDMV Ingition Interlock teammembers manually add and update information from mailed in applications, usage logs, request letters, denial letters, and compliants**


            <!--EndFragment-->
          imagecards: img/wheelchair4.svg
  - type: Twocol_image_content
    heading05: Why the new portal?
    image: img/parkinson-bro.png
    caption: TBD
    twocol_content_img:
      - type: Content02
        Content002: >-
          <!--StartFragment-->


          In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the device.


          In other instances a participant might miss a court date. The device could be detecting misuse or malfunction. A participant could file a complaint on a vendor or request an exception be made due to medical reasons. Each of these use cases would need to be reflected in the internal IIMS portal and the data available only to those with approval.




          <!--EndFragment-->
  - type: Twocol_content
    twocol_content_left:
      - type: stacked_image_section
        image1: img/about-direct-sourcing.jpg
        image2: img/about-jumbotron.jpg
        caption1: TBD 1
        caption2: TBD 2
        heading05: waeh
    twocol_content_right:
      - type: heading3
        heading03: Exploring what is required to deliver the process according to user
          needs
      - type: Content02
        Content002: >-
          <!--StartFragment-->


          ### Initial research


          In the initial stage of being brought onto the project other teams had been researching and working on the legislation involved for years. A comically-sized stack of paper was placed on my desk and I spent the following day going through it with a highlighter and taking notes on a whiteboard. This research also consisted of the existing pages and online system that this portal would be incorporated with.


          * How does the current system handle navigation?

          * How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?

          * The current system uses a table with filters. How will filtering be handled without a SharePoint backend?

          * There is a lot of data. To whom should the data be available, when, and how can the data be grouped into views?




          ### Stakeholder interviews


          After conducting my own research and notes I consulted with the internal project liaison. We compared notes and unified on a strategy before driving downtown to meet with the project owner. The project owner provided precise insight and feedback. They would be the person approving any changes.


          After research and stakeholder interviews the team had a better understanding of requirements. The sketches were turned into the first round of wireframes to cover each user task.


          * Business goals were discussed

          * Technical limitations were identified

          * User needs were discussed and a unified approach was decided upon

          * Sketches of how different tasks and goals could be approached were created during the initial interview




          ### User tasks included:


          * create participant

          * edit participant profile

          * modify dates

          * access a participant flagged for immediate follow-up

          * delete a user

          * download individual participant data

          * download report for a date range

          * review case notes including photographs


          <!--EndFragment-->
  - type: generic_content
    content_options:
      - type: scroll-image
        image: img/Group 538.png
        caption: TBD caption
backgroundcolor: mixed2
image1: img/about-shade-grown.jpg
purplesectionheading: Understanding the underlying system
image: /img/Group%207.png
overviewbody: >-
  If you imagine a pile of paperwork one foot tall representing 6 months, the
  backlog of physical applications prior to the new portal was nearly 4 years
  worth. The initial system’s purpose was to reduce that backlog. In order to
  accomplish this, the following was considered and assigned priority:

  - Review project details and specs regarding data types and DMV in-person process, including applications and citizen eligibility

  - Organize requirements into user flow and wireframes

  - Work directly with project owner to format/approve UI

  - Work with backend team to establish API requirements and implementation
---
<section class="fullwidth purple">

<div class="inner-wrap">

  <div style="display: -webkit-box;" class="image-block">
<div class="small-img" style="align-items: center;
  justify-content: center;">
  <img class="" src="/img/ignition-interlock.jpg" alt="">
    <!-- <a href="https://www.flaticon.com/free-icons/no-racism" title="no racism icons">No racism icons created by Freepik - Flaticon</a> --></div>
<div style="width: calc(100% - 320px);">

### What is is the current process?

1. Citizen is assigned an ignition interlock as a provision of driving after a DWI conviction
2. An initial application is created
3. Citizens can file for exemption, deferral, or specific accommodations due to medical reasons
4. Once every 30 or 60 days citizens are required to bring their vehicle for inspection so the ignition interlock provider can download monitoring data. This data is added to their file
5. Throughout this process NCDMV Ingition Interlock teammembers manually add and update information from mailed in applications, usage logs, request letters, denial letters, and compliants 

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

## Exploring what is required to deliver the process according to user needs

  <div style="display: -webkit-box;" class="image-block">
<div class="small-img" style="align-items: center;
  justify-content: center;">
  <img class="" src="/img/voma-sketch1.png" alt="" style="height: 100%; object-fit: cover">
    <!-- <a href="https://www.flaticon.com/free-icons/no-racism" title="no racism icons">No racism icons created by Freepik - Flaticon</a> --></div>
<div style="width: calc(100% - 320px);">

### Initial research

  In the initial stage of being brought onto the project other teams had been researching and working on the legislation involved for years. A comically-sized stack of paper was placed on my desk and I spent the following day going through it with a highlighter and taking notes on a whiteboard. This research also consisted of the existing pages and online system that this portal would be incorporated with.

* How does the current system handle navigation?
* How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?
* The current system uses a table with filters. How will filtering be handled without a SharePoint backend?
* There is a lot of data. To whom should the data be available, when, and how can the data be grouped into views?

### Stakeholder interviews

  After conducting my own research and notes I consulted with the internal project liaison. We compared notes and unified on a strategy before driving downtown to meet with the project owner. The project owner provided precise insight and feedback. They would be the person approving any changes.

  After research and stakeholder interviews the team had a better understanding of requirements. The sketches were turned into the first round of wireframes to cover each user task.

  <div>

* Business goals were discussed
* Technical limitations were identified
* User needs were discussed and a unified approach was decided upon
* Sketches of how different tasks and goals could be approached were created during the initial interview

### User tasks included:

* create participant
* edit participant profile
* modify dates
* access a participant flagged for immediate follow-up
* delete a user
* download individual participant data
* download report for a date range
* review case notes including photographs

  ![this is the alt text](/img/voma-display.png "Title is optional")

</div>

</div>

</section>

<section style="background-color: #ECEFF9" class="purple">
<div class="inner-wrap">

## Establishing the UI with wireframes and a high fidelity prototype

<div style="display: -webkit-box;" class="image-block">
<div style="width: calc(100% - 800px);">

### Four main views:

* <strong>dashboard</strong> <br>hub for accessing other portals in addition to a quick glance of action items for ignition interlock
* <strong>list view</strong> <br>table with individual participants
* <strong>group view</strong> <br>table with participants grouped by date added
* <strong>detail view</strong> <br>editable form of participant and vendor information including action buttons

*BLLAAHHH In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the devices.*
    </div>

  </div>

<!-- <div class="superwireframe">
<div class="wireframe">
<img src="/img/voma-wireframe.png"/>
</div>
</div> -->

<!-- \\*BLLAAHHH In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the devices.\\* -->

<div class="blurb" style="background-color: white; padding: 1em; border-radius: 4px;">It was important during this stage to maintain the basic structure of the existing pages this platform would be a part of. The DMV team did not want a rebranding and wanted the new system to fit in atheistically with the existing SharePoint systems and pages. This meant that the focus would be on optimized functionality and clear user experience.</div> 

### Some ideas that were put to wireframe and either adapted or tossed:

* dashboard with dynamically updated alerts on upcoming or past deadlines for participant activity
* detail page for participant or vendor
* Pagination displaying page number of number versus participants shown range number of number
* filters to toggle certain columns on or off
* Ability to pin a column (such as participant ID) to the table if the table required horizontal scrolling

<img class="scribble" src="/img/scribble.jpeg" alt="">
 
</div>
</section>

<section style="background-color: #FFFFFF">
<div class="inner-wrap">

<div style="display: -webkit-box;" class="image-block">
<div style="width: calc(100% - 520px);">

## Profile data and management

**Challenge:** Per department and NC system standards profile data needed to be retained for years. Users also needed to be able to remove accounts whether due to error or dismissal from the program.

**Solution:** Deleted data would be removed from the main API and added to seperate API for deleted accounts which would auto remove data after a certain amount of time. If a user needed to reinstate a user they could search for the participant's ID and if found, but tagged as deleted, could activate the newly visible reactivate button.

  </div>
  <div class="med-img" style="align-items: center;
  justify-content: center;">
  <img src="https://3j6x6z2bx1qq1aawwt3b6y0a-wpengine.netdna-ssl.com/wp-content/themes/ConvertKit/assets/images/screenshots/features-automation-rules.png" />
    </div>
  </div>

</div>
</section>

<section>
<div class="inner-wrap">

<div style="display: -webkit-box;" class="image-block">
<div style="width: calc(100% - 520px);">

## Reports and custom filtering

<p>A large portion of the portal would be used browsing for information. This would be utilized through search, sorting, and filtering. Reports would be utilized as a way to capture the current data into a shareable format.</p>

<div style="display: -webkit-box;" class="image-block">
<div class="xs-icon" style="align-items: baseline;
  justify-content: center; padding-top: .5em;">
  <img class="" src="/img/icons/search-engine.png" alt="">
  <!-- <a href="https://www.flaticon.com/free-icons/search-bar" title="search bar icons">Search bar icons created by Freepik - Flaticon</a> -->
    </div>
<div style="width: calc(100% - 52px);">

### Search

<ul>
<li>search by partial string or full string for name or ID</li>
<li>search by date added or follow-up date range</li>
</ul>
  </div>
  </div>

<div style="display: -webkit-box; margin-top: 1em;" class="image-block">
<div class="xs-icon" style="align-items: baseline;
  justify-content: center; padding-top: .5em;">
  <img class="" src="/img/icons/sort.png" alt="">
  <!-- <a href="https://www.flaticon.com/free-icons/sort" title="sort icons">Sort icons created by Us and Up - Flaticon</a> -->
    </div>
<div style="width: calc(100% - 52px);">

### Sorting and Filtering

<ul>
<li>sort ascending/descending was discussed and tested as being based on ID or last name by default.</li>
<li>filtering was only implemented on search view vs separate filters on every view after much discussion</li>
</ul>
  </div>
  </div>

  <div style="display: -webkit-box; margin-top: 1em;" class="image-block">
<div class="xs-icon" style="align-items: baseline;
  justify-content: center; padding-top: .5em;">
  <img class="" src="/img/icons/reports.png" alt="">
  <!-- <a href="https://www.flaticon.com/free-icons/report" title="report icons">Report icons created by nawicon - Flaticon</a> -->
    </div>
<div style="width: calc(100% - 52px);">

### Reports

<ul>
<li>ignition interlock team needed a method to download data based on certain criteria for sharing and task-keeping</li>
<li>these reports would need to be exportable as pdfs, excel spreadsheet, or both as a single download</li>
</ul>
  </div>
  </div>

  </div>
  <div class="med-img" style="align-items: center;
  justify-content: center;">
  <img src="https://media.convertkit.com/images/pages/features/commerce/product-shot-your-first-sale-comes-from-trust@2x.png" />
    </div>
  </div>

</div>
</section>

<section  style="background-color: #ECEFF9">
<div class="inner-wrap">

<div style="display: -webkit-box;" class="image-block">
<div style="width: calc(100% - 520px);">

## Alerts and notifications

<p>Several different pieces of in</p>

<ul>
<li>dsdfsdfs</li>
<li>dsfsdfs</li>
</ul>
  </div>
  <div class="med-img" style="align-items: center;
  justify-content: center;">
  <img src="https://3j6x6z2bx1qq1aawwt3b6y0a-wpengine.netdna-ssl.com/wp-content/themes/ConvertKit/assets/images/screenshots/features-automation-rules.png" />
    </div>
  </div>
</div>
</section>

<section id="final" class="takeaway fullwidth">

<div class="inner-wrap">

  <div style="display: -webkit-box;" class="image-block">
<div>

## The takeaway:

<p>This was a very long project, as is the case with most government work but the different teams I was able to work and collaborate with were great. This was my first introduction to Vue and Nuxt JS. While the project did experience some ups and downs with funding and performance obstacles, the end result was highly praised by the team which now uses this application each day. 🎉</p>
  </div>
  <div class="small-img" style="align-items: center;
  justify-content: center; display: flex;">
  <div class="stat-block">
  <img class="" src="/img/icons/trade.png" alt="">
  <!-- <a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by pmicon - Flaticon</a> -->
  <!-- 10000+ <span>devices in use</span> -->
  </div>
    </div>
  </div>

  </div>
  
</section>

<div class="inner-wrap">

> \[Melanie] helped modernize aging applications by refactoring them using modern JavaScript frameworks like Vue.js. Her user-first philosophy for user experience \[...] made Melanie a critical part of the team's success.\
>   *\- Patrick Doran, NCDOT/NCDIT UX and Web Services Manager*
>
> Melanie, thanks for all your hard work at the DOT and for continuing to educate us on usability!\
>   *\- Austin Johnson, Insight Team Lead while on NCDOT contract*

  </div>