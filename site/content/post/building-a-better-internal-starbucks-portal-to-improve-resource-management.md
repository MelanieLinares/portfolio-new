---
title: Building a better internal Starbucks portal to improve resource
  management
titlebold: Building a better internal Starbucks portal
titlenormal: to improve resource management
preview: img/dashboard-transparent.gif
notice: For legal reasons details of work completed cannot be shown. Images are representational.
date: 2021-09-05T18:54:53.434Z
newdate: 2021-11-05T18:54:53.474Z
client: Starbucks
logo: img/starbucks-logo.png
role: Front-End Web Developer
tags:
  - javascript
  - ui
technology: UI Design, Design System integration
duration: 2 months
introheading: Updating the dashboard UI for a better management workflow
introbody: >-
  ### Overview:


  Managing data can be a pain if common actions within an application result in errors or the actions are not easily found within the UI. My role involved developing components with React and TypeScript.




  <span aria-hidden="true">🤔</span> **The Problem:** <br/>The internal Starbucks portal experienced sync issues and error management issues in regards to portfolio percentages.




  <span aria-hidden="true">💡</span> **The Plan:** <br/>The Starbucks management team needed to easily see percentages of funding in order to re-adjust portfolios, calculations, and cross-portfolio assets. A main dashboard with access to all portfolios and the ability to display cross-portfolio information was proposed.
theme: green
typed_list:
  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ## Meeting with the team to workshop improvements


            To make sure everyone was comfortable with the project, a kick-off meeting was held. The meeting agenda involved going over the development environment and establishing expectations.


            > The first step in exceeding customer expectations is to know those expectations


            ### Project expectations


            * I would need to deliver on a fast turn-around schedule

            * Weekly stand-up meetings would be required along with code reviews

            * React and Typescript were utilized in developing widgets, including the creation and application of variables for branding color and typography 

            * I would be working with the product and engineering teams on enterprise-facing features


    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ![test](img/chris-montgomery-smgtvepind4-unsplash.jpg)
            <div class="caption"><em>Freshly ground and brewed coffee to start the virtual meeting.</em></div>
  - type: fullwidth
    content_options:
      - type: generic_content
        generic_content: >-
          ## Working with the UX team to refine UI


          The UX team first met with shareholders to create the initial version of the UI. I met with the UX team after this session and we worked together to harmonize the feedback, along with information I gathered from the API team. There were several problems to be solved, not merely a UI to create.


          ### How might we avoid errors when users change how revenue is divided and utilized?

          Existing APIs for each portfolio were causing issues due to calculations occurring after form submission and only within a current portfolio set. If revenue allotment totals for portfolios A, B, and C combined were below 100%, users could make changes. Currently there was not user feedback for this issue prior to submission and an unclear error after submission. 
          ![test](img/error-data.jpg)

          The UI was not properly informing users when a portfolio or a sub-portfolio would cause the main portfolio to exceed 100%. The big question was how should errors be handled within the UI and within the API? Could and should error states be avoided?
      - type: introw
        blurbsw:
          - textw: >-
              ### Refining the UI to account for errors


              * I collaborated with product and design teams to define features and identify opportunities for improvement

              * The prototype was improved to account for edge cases in user flow

              * Error messages and notifications were improved by providing thoughtful feedback

              * Error messages and portal data visualizations needed to be accessible
            imagew: img/wireframe-icon-cropped.png
      - type: pillfeaturedtext
        pillfeaturedtext: Accessibility is not just for public-facing applications. It
          was important for me to emphasize this to the team.
    background: Angled
  - type: fifty_fifty
    background: Blank
    left_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ## Building the components according to atomic design


            * I developed UI components based on existing widgets and from scratch utilizing React, Typescript, and some Java

            * Collaboration was important to the process. I worked with the backend and frontend teams to ensure optimized API calls between parent and child components

            * Some components included: typography, color palettes, data cards, tables, modals, and forms

            * Testing API and working with API developers
              Building dashboard based on interactive prototype from UX designer (our team)
            * Adding portfolios to sidebar menu, including sub portfolios added dynamically by user
    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ![test](img/starbucks-ui.jpg)

  - type: fullwidth
    background: Angled
    content_options:
      - type: generic_content
        generic_content: >-
          ## The takeaway
          
          > Don’t over-complicate components. Reusability is key!

          - UI updates and new widgets were created and delivered

          - Components were built for usability and by utilizing test-driven development practices

          - Accessibility and performance improvements were implemented alongside the requested features. It was important to me that both be considered in all development and design deliverables.
 
        
          Starbucks has a very knowledgeable team and I loved working directly with the UX and back-end folks. I'm glad the Insight team was able to deliver a robust user interface for Starbucks. <span aria-hidden="true">☕✨</span>
team: UX Designer, Frontend Developer, Backend Developers
---
