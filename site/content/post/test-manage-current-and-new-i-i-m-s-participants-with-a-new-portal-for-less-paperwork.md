---
title: Test Manage current and new I.I.M.S. participants with a new portal for
  less paperwork
titlebold: Manage current and new I.I.M.S. participants with a new portal
titlenormal: for less paperwork
preview: img/about-jumbotron.jpg
notice: For legal reasons some images are representational only or blurred
date: 2022-06-08T22:06:49.116Z
newdate: 2022-06-08T22:06:49.158Z
client: NCDOTest
logo: img/blue-triangle.png
role: Software Engineer
tags:
  - cross-browser
technology:
  - ASP.NET MVC
duration: yes
description: this is an optional description
introheading: Identifying ways to optimize a legacy internal DMV process digitally
introbody: >-
  <!--StartFragment-->


  The NCDOT on behalf on the NCDMV assigned a team to work directly with the Ignition Interlock Program team. This team would be responsible of not only leading the developmental changes, but integrating the new application into the existing system. The new system would need to still support the legacy system and its user’s needs. This included browser support, SharePoint frontend hosting, and matching UI.


  <!--EndFragment-->
overviewheading: Project overview and task breakdown
overviewbody: >-
  <!--StartFragment-->


  If you imagine a pile of paperwork one foot tall representing 6 months, the backlog of physical applications prior to the new portal was nearly 4 years worth. The initial system’s purpose was to reduce that backlog. In order to accomplish this, the following was considered and assigned priority:


  * Review project details and specs regarding data types and DMV in-person process, including applications and citizen eligibility

  * Organize requirements into user flow and wireframes

  * Work directly with project owner to format/approve UI

  * Work with backend team to establish API requirements and implementation


  <!--EndFragment-->
overviewblurb: >-
  <!--StartFragment-->


  This project required knowledge of how the existing paper application is currently processed and reviewed, of currently enacted laws, and the ability to communicate ideas to both functional and cross-functional teams within multiple local agencies.


  <!--EndFragment-->
purplesectionheading: Understanding the underlying system
purplesection1: >-
  <!--StartFragment-->


  ### What is IIMS, IIMA, and an ignition interlock device?


  * Igition Interlock

    a small, handheld breathalyzer for car ignitions that's installed to prevent users from being able to start their vehicle after drinking alcohol
  * IIMS

    ignition interlock management system
  * IIMA

    ignition interlock medical accommodation

  <!--EndFragment-->
textimagesplitcontent: >-
  <!--StartFragment-->


  ### What is is the current process?


  1. Citizen is assigned an ignition interlock as a provision of driving after a DWI conviction

  2. An initial application is created

  3. Citizens can file for exemption, deferral, or specific accommodations due to medical reasons

  4. Once every 30 or 60 days citizens are required to bring their vehicle for inspection so the ignition interlock provider can download monitoring data. This data is added to their file

  5. Throughout this process NCDMV Ingition Interlock teammembers manually add and update information from mailed in applications, usage logs, request letters, denial letters, and compliants


  <!--EndFragment-->
purplesection2: >-
  <!--StartFragment-->


  ### Why the new portal?


  In some cases this new portal would be needed to monitor successful use of the device. The portal would also identify and alert necessary parties of court dates and eventual approved removal of the device.


  In other instances a participant might miss a court date. The device could be detecting misuse or malfunction. A participant could file a complaint on a vendor or request an exception be made due to medical reasons. Each of these use cases would need to be reflected in the internal IIMS portal and the data available only to those with approva


  <!--EndFragment-->
purplesectionimg: img/pixels-right.svg
typed_list:
  - type: type_4_object
    heading: Exploring what is required to deliver the process according to user needs
    textimagesplitcontent: >-
      <!--StartFragment-->


      ###  Initial research


      In the initial stage of being brought onto the project other teams had been researching and working on the legislation involved for years. A comically-sized stack of paper was placed on my desk and I spent the following day going through it with a highlighter and taking notes on a whiteboard. This research also consisted of the existing pages and online system that this portal would be incorporated with.


      * How does the current system handle navigation?

      * How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?

      * The current system uses a table with filters. How will filtering be handled without a SharePoint backend?

      * There is a lot of data. To whom should the data be available, when, and how can the data be grouped into views?


      <!--EndFragment-->
    textimagesplitimagecaption: test
    textimagesplitcontentreverse: test
    textimagesplitreverseimagecaption: test
  - type: type_4_object
    textimagesplitcontent: >-
      <!--StartFragment-->


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
    heading: test
    textimagesplitimagecaption: test
    textimagesplitcontentreverse: test
    textimagesplitreverseimagecaption: test
  - heading: Establishing the UI with wireframes and a high fidelity prototype
    caption: BLLAAHHH In some cases this new portal would be needed to monitor
      successful use of the device. The portal would also identify and alert
      necessary parties of court dates and eventual approved removal of the
      devices.
    full_width_text: >-
      <!--StartFragment-->


      ### Some ideas that were put to wireframe and either adapted or tossed:


      * dashboard with dynamically updated alerts on upcoming or past deadlines for participant activity

      * detail page for participant or vendor

      * Pagination displaying page number of number versus participants shown range number of number

      * filters to toggle certain columns on or off

      * Ability to pin a column (such as participant ID) to the table if the table required horizontal scrolling




      <!--EndFragment-->
    fullwidth: true
    type: text_with_scroll_img
    blurb: >-
      <!--StartFragment-->


      It was important during this stage to maintain the basic structure of the existing pages this platform would be a part of. The DMV team did not want a rebranding and wanted the new system to fit in atheistically with the existing SharePoint systems and pages. This meant that the focus would be on optimized functionality and clear user experience.


      <!--EndFragment-->
    image: img/ncdot-wireframe.png
    decorative_image: img/orange-triangle.png
    left_side_text: >-
      <!--StartFragment-->


      ### Four main views:


      * **dashboard**\
        hub for accessing other portals in addition to a quick glance of action items for ignition interlock
      * **list view**\
        table with individual participants
      * **group view**\
        table with participants grouped by date added
      * **detail view**\
        editable form of participant and vendor information including action buttons

      <!--EndFragment-->
  - type: type_4_object
    heading: Profile data and management
    textimagesplitcontent: >-
      <!--StartFragment-->


      **Challenge:** Per department and NC system standards profile data needed to be retained for years. Users also needed to be able to remove accounts whether due to error or dismissal from the program.


      **Solution:** Deleted data would be removed from the main API and added to seperate API for deleted accounts which would auto remove data after a certain amount of time. If a user needed to reinstate a user they could search for the participant’s ID and if found, but tagged as deleted, could activate the newly visible reactivate button.


      <!--EndFragment-->
    textimagesplitimagecaption: test
    textimagesplitcontentreverse: test
    textimagesplitreverseimagecaption: test
  - type: type_4_object
    heading: Reports and custom filtering
    textimagesplitcontent: >-
      <!--StartFragment-->


      A large portion of the portal would be used browsing for information. This would be utilized through search, sorting, and filtering. Reports would be utilized as a way to capture the current data into a shareable format.


      <!--EndFragment-->


      <!--StartFragment-->


      ![](https://cocky-dijkstra-868e6a.netlify.app/img/icons/search-engine.png)


      ### Search


      * search by partial string or full string for name or ID

      * search by date added or follow-up date range


      ![](https://cocky-dijkstra-868e6a.netlify.app/img/icons/sort.png)


      ### Sorting and Filtering


      * sort ascending/descending was discussed and tested as being based on ID or last name by default.

      * filtering was only implemented on search view vs separate filters on every view after much discussion


      ![](https://cocky-dijkstra-868e6a.netlify.app/img/icons/reports.png)


      ### Reports


      * ignition interlock team needed a method to download data based on certain criteria for sharing and task-keeping

      * these reports would need to be exportable as pdfs, excel spreadsheet, or both as a single download


      <!--EndFragment-->
    textimagesplitimagecaption: test
    textimagesplitcontentreverse: test
    textimagesplitreverseimagecaption: test
  - type: type_4_object
    heading: Alerts and notifications
    textimagesplitcontent: |-
      <!--StartFragment-->

      Several different pieces of in

      * dsdfsdfs
      * dsfsdfs

      <!--EndFragment-->
    textimagesplitimagecaption: test
    textimagesplitcontentreverse: test
    textimagesplitreverseimagecaption: test
---
test body