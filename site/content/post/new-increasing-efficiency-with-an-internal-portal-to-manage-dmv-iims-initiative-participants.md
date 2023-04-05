---
title: new - Increasing efficiency with an internal portal to manage DMV IIMS
  initiative participants
titlebold: Increasing efficiency with an internal portal
titlenormal: to manage DMV IIMS initiative participants
preview: img/portal-animated-transparent.gif
notice: For legal reasons I am not able to show project details. I am able to
  discuss the generalized process and am available to discuss in more detail
  upon request.
date: 2018-08-04T00:33:20.559Z
newdate: 2019-03-09T00:33:20.599Z
client: NC Department of Transportation
logo: img/ncdot-logo.jpg
role: UI Designer and Developer
tags:
  - sharepoint
  - ui
  - ux
technology: User Experience Design, Prototyping, Design System integration,
  Frontend Technology
duration: 7 months
introheading: Identifying ways to optimize an internal DMV process digitally
preview_tools: UX, HTML/CSS, Vue
introbody: >-
  The North Carolina Department of Transportation (NCDOT) along with the Department of Motor Vehicles (NCDMV) is responsible for managing transportation infrastructure, registration for driver license, and general driver safety. The Ignition Interlock Program team needed a new online system for managing the program. The new system would need to still support the legacy system’s data and its user’s needs; this included browser support, a SharePoint frontend, and UI that integrated into the existing design system



  **Problem:** <span aria-hidden="true">🤔</span><br/>Internal DMV employees working within an older portal for managing Ignition Interlock participants experience difficulty keeping up with backlog and lack of needed features. 


  **The Plan:** <span aria-hidden="true">💡</span><br/>Research user and business needs to produce a list of missing and desired features. Create new portal UI and develop a new approach to data management and API integration, while separating reliance on specific dependencies.

theme: blue
casestudy: test

typed_list:
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Why the new portal?


          The reason for the new portal was to reduce manual data entry. The system would integrate with the IIMS data APIs to aid in creating desired features to aid in managing existing, stale, and new participants and vendors of the IIMS monitoring devices.


          <div class="left-text-only">IIMS monitoring devices require a driver to conduct breathalyzer tests in order to start a vehicle.</div></br>

          <b>The new portal would:</b>

      - type: cards
        process: false
        blurbcards:
          - imagecards: img/monitor.png
            textcards: Monitor successful use of the ignition interlock device
          - imagecards: img/identify.png
            textcards: Identify and alert necessary parties of court dates and eventual
              approved removal of the device
          - imagecards: img/authenticate.png
            textcards: Restrict data access to only certain groups of authenticated users

  - type: one_three    
    oneleft_side:
      content_options:
        - type: heading3
          heading03: Exploring what is required to benefit user needs
        - type: stacked_image_section
          caption1: Day 1 of this project began by going through the existing research,
            project outline, and limitations. A comically-sized stack of paper was
            placed on my desk. 
          caption2: I spent the following day going through the research with
            a highlighter and outline the structure on a whiteboard.
          image2: img/ncdot/whiteboard-ncdot.jpeg
          image1: img/ncdot/paperwork-ncdot.jpeg
    threeright_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Initial research

            When brought onto the project other teams had already been researching and working on the legislation. This research consisted of the existing application pages and online database that this portal would be incorporated with. We knew the backend database would need data structure updates. I worked with the backend team to define the transition from the existing system to the new in preparation for the UI changes

            * How does the current system handle navigation?

            * How are users authenticated and are there functions that only some users have access to? What does an unauthenticated user see?

            * The current system uses a table with filters. How will filtering be handled without a SharePoint backend?

            * There is a lot of data. To whom should the data be available, when, and how can the data be grouped into views?            

            ### Stakeholder interviews

            After organizing the existing research, data, and data gained from numerous internal and external ideation sessions I consulted with the internal project lead. We unified on a strategy before driving downtown to meet with the project owner. The project owner ensured the plan met their expectations. Some aspects of the project required clarification to how it would translate within the UI. I was able to sketch and iterate on an initial batch wireframes for each set of pages during the session. The project owner was satisfied with the direction and signed off on the project so work on the UI and APIs could begin.

            
            * Business goals were discussed

            * Technical limitations were identified

            * User needs were discussed and a unified approach was decided upon
            
            * Sketches of how different tasks and goals could be approached were created during the initial interview

    background: Angled       

  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: |-
          ## Wireframes & high fidelity prototype iterations

          ### The team identified four main views:

      - type: cards
        process: false
        blurbcards:
          - imagecards: img/icons-instagram.svg
            textcards: "**Dashboard:** hub for accessing other portals in addition to a quick
              glance of action items for ignition interlock"
          - imagecards: img/icons-vimeo.svg
            textcards: "**Group View:** table with participants grouped by date added"
          - imagecards: img/monitor.png
            textcards: "**List View:** table with participants grouped by date added"
          - imagecards: img/pets.png
            textcards: "**Detail View:** editable form of participant and vendor information
              including action item controls"

      - type: generic_content
        generic_content: |-
          <div>It was important during the iteration stage to maintain the basic structure of the existing pages. The DMV team did not want a rebrand and wanted the new system to fit in atheistically with the existing SharePoint design system. This meant the focus would be on optimized functionality and user experience.</div>
      - type: scroll-image
        image: img/ncdot-wireframe.png
        caption: Simplified version of wireframes sketched during initial client meeting. 
        generic_content: >-
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
          ## Profile data & management


          ### Challenge:


          Per department and NC system standards profile data needed to be retained for years. Users also needed to be able to remove accounts whether due to error or dismissal from the program.


          ### Solution:


          Deleted data would be removed from the main API and added to a separate API for deleted accounts. This delete API would auto remove data after a certain amount of time, according to state regulations. This process would allow users deleted in error to be reinstated.
  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Reports & custom filtering


          The portal would be used for exporting, as well as managing information. Reports would contain features for search, sorting, and filtering.


          ### Search


          * search by partial string or full string for name or ID

          * search by date added or follow-up date range


          ### Sorting & Filtering


          * sort ascending/descending was discussed and tested as being based on ID or last name, and status

          * filtering was only implemented on search view, after much discussion


          ### Exporting reports


          The ignition interlock team needed a method to download data based on customizable criteria.

          Reports would need to be exportable as pdf, spreadsheet, or both as a single download

  - type: fullwidth
    background: Angled
    content_options:
      - type: generic_content
        generic_content: >-
          ## The takeaway
          
          This was a very long project from start to finish, as is the case with most government work. While the project did experience some ups and downs with funding and performance obstacles, the end result was highly praised by the team which now uses this application daily. There has been a reduction of hours spent by the team managing data. Success! State-wide records and process continues to show improvement as the backlog decreases. 🎉


          **Funding obstacle:** During December 2018 and January 2019 NC was affected by the federal government shutdown. All work completed towards projects had to be paused.


          **Performance obstacle:** During API quality assurance testing it was found that pages loading mass amounts of data required a lengthy wait time for initial load. The data set for testing included a max of 10,000 records, but the production API exceeded this amount exponentially. This was not disclosed in inital testing and implementation so had to be quickly remediated before project launch. The method used at launch for fetching the amount of data records was not the most ideal, but the due to cross-team disagreements the data would not be sent in batches.
          

          >[Melanie] helps modernize aging applications by refactoring them using modern JavaScript frameworks, like Vue.js. Her user-first philosophy for user experience […] made her a critical part of the team’s success.<br>
          <cite>- Patrick Doran <small>NCDOT/NCDIT UX and Web Services Manager</small></cite>


          >Melanie, thanks for all your hard work at the DOT and for continuing to educate us on usability!<br>
          <cite>- Austin Johnson <small>Insight Team Lead while on NCDOT contract</small></cite>          
team: Backend Developers, API Developers,
---
