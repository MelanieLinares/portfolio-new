---
title: new - Increasing efficiency with an internal portal to manage DMV IIMS
  initiative participants
titlebold: Increasing efficiency with an internal portal
titlenormal: to manage DMV IIMS initiative participants
preview: img/homepage-grayscale-laptop.gif
notice: For legal reasons I am not able to show project details. I am able to
  discuss the generalized process and am available to discuss in more detail
  upon request.
date: 2019-06-04T00:33:20.559Z
newdate: 2019-11-09T00:33:20.599Z
client: NC Department of Transportation
logo: img/ncdot-logo.jpg
role: UI Designer and Developer
tags:
  - sharepoint
technology: User Experience Design, Prototyping, Design System integration,
  Frontend Technology
duration: 5 months
introheading: Identifying ways to optimize a legacy internal DMV process digitally
introbody: >-2
   The North Carolina Department of Transportation (NCDOT) along with the Department of Motor Vehicles (NCDMV) is responsible for managing transportation infrastructure, registration for driver license, and general driver safety.<br/> **Problem:** Internal DMV employees working within an older portal for managing Ignition Interlock participants experience difficulty keeping up with backlog and lack of needed features <br/> **The Solution:** Add missing features to new portal along with a new approach to data management and API integration, while seperating reliance on specific dependencies

  The NCDOT, on behalf of the DMV sector, assigned a team to work directly with the Ignition Interlock Program (IIP) team. The IIP team needed a new online system for managing the program. The new system would need to still support the legacy system’s data and its user’s needs; this included browser support, a SharePoint frontend, and UI that integrated into the existing design system
theme: pink
typed_list:
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Why the new portal?


          The reason for the new portal was to reduce manual data entry. The system would integrate with the IIMS data APIs to aid in creating desired features to aid in managing existing, stale, and new participants and vendors of the IIMS monitoring devices.


          <﻿div class="featured-text">I</div>IMS monitoring devices require a driver to conduct breathalyzer tests in order to start a vehicle.




          **The new portal would:**
      - type: cards
        process: false
        blurbcards:
          - imagecards: img/coffee.svg
            textcards: Monitor successful use of the ignition interlock device
          - imagecards: img/idea.png
            textcards: Identify and alert necessary parties of court dates and eventual
              approved removal of the device
          - imagecards: img/cursor.svg
            textcards: Restrict data access to only certain groups of authenticated users
  - type: fullwidth
    content_options:
      - type: generic_content
        generic_content: >-
          ## Exploring what is required to benefit program management user needs


          ### Initial research


          When brought onto the project other teams had already been researching and working on the legislation. This research consisted of the existing application pages and online database that this portal would be incorporated with. We knew the backend database would need data structure updates. I worked with the backend team to define the transition from the existing system to the new in preparation for the UI changes.


          and budget allowance involved in getting the project started for years. No visual design or development had started, however.


          This research also consisted of the existing application pages and online database that this portal would be incorporated with. We knew the backend database would need data structure updates. I worked with the backend team to define the transition from the existing system to the new in preparation for the UI changes.


          * How does the current system handle navigation?

          * How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?

          * The current system uses a table with filters. How will filtering be handled without a SharePoint backend?

          * There is a lot of data. To whom should the data be available, when, and how can the data be grouped into views?


          ### Stakeholder interviews


          After organizing the existing research, data, and data gained from numerous internal and external ideation sessions I consulted with the internal project lead. We unified on a strategy before driving downtown to meet with the project owner. The project owner ensured the plan met their expectations. Some aspects of the project required clarification to how it would translate within the UI. I was able to sketch and iterate on an initial batch wireframes for each set of pages during the session. The project owner was satisfied with the direction and signed off on the project so work on the UI and APIs could begin.


          The sketches were turned into the first round of wireframes to cover each user task. 


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
      - type: stacked_image_section
        caption1: Day 1 of this project began by going through the existing research,
          project outline, and limitations. A comically-sized stack of paper was
          placed on my desk and I spent the following day going through it with
          a highlighter and outline the structure on a whiteboard.
        caption2: HEY!! I added Stack Image component to the fifty_fifty layout
        image2: img/laptop.gif
        image1: img/Rectangle 1.png
    background: Angled
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: |-
          ## Wireframes and high fidelity prototype iterations

          ### The team identified four main views:
      - type: introw
        blurbsw:
          - imagew: img/icons-instagram.svg
            textw: "**Dashboard:** hub for accessing other portals in addition to a quick
              glance of action items for ignition interlock"
          - imagew: img/icons-vimeo.svg
            textw: "**Group View:** table with participants grouped by date added"
          - imagew: img/monitor.png
            textw: "**List View:** table with participants grouped by date added"
          - imagew: img/pets.png
            textw: "**Detail View:** editable form of participant and vendor information
              including action item controls"
      - type: scroll-image
        image: img/ncdot-wireframe.png
      - type: generic_content
        generic_content: >-
          H﻿EY!! You are missing one of the grid sections that has a caption of
          the right and other content on the left


          *Drop-down navigation contained multiple columns and subheaders. This navigation was duplicated within the code for muliple screen sizes rather than using CSS to adjust the layout*


          It was important during the iteration stage to maintain the basic structure of the existing pages. The DMV team did not want a rebrand and wanted the new system to fit in atheistically with the existing SharePoint design system. This meant the focus would be on optimized functionality and user experience.


          ### Some wireframes ideas that were adapted or set aside for later updates:


          * Dashboard with alerts on participant activity, with the ability to set reminders

          * Pagination displaying page number and participant number ranges

          * Filters to toggle table columns on or off

          * Ability to pin a table column when a page utilized horizontal scrolling
  - type: fullwidth
    background: Rectangular
    content_options:
      - type: generic_content
        generic_content: >-
          ## Profile data and management


          ### Challenge:


          Per department and NC system standards profile data needed to be retained for years. Users also needed to be able to remove accounts whether due to error or dismissal from the program.


          ### Solution:


          Deleted data would be removed from the main API and added to a separate API for deleted accounts. This delete API would auto remove data after a certain amount of time, according to state regulations. This process would allow users deleted in error to be reinstated.
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Reports and custom filtering


          The portal would be used for exporting, as well as managing information. Reports would contain features for search, sorting, and filtering.


          ### Search


          * search by partial string or full string for name or ID

          * search by date added or follow-up date range


          ### Sorting and Filtering


          * sort ascending/descending was discussed and tested as being based on ID or last name, and status

          * filtering was only implemented on search view, after much discussion


          ### Exporting reports


          The ignition interlock team needed a method to download data based on customizable criteria.

          Reports would need to be exportable as pdf, spreadsheet, or both as a single download
team: Backend Developers, API Developers,
---
