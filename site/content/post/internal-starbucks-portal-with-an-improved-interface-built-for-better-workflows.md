---
title: Internal Starbucks portal with an improved interface built for better workflows
titlebold: Internal Starbucks portal with an improved interface
titlenormal: built for better workflows
preview: img/boop.png
notice: For legal reasons some images are representational only or blurred
date: 2021-09-06T01:13:14.521Z
newdate: 2021-11-15T02:02:36.437Z
client: Starbucks
logo: img/starbucks-logo.png
role: Software Engineer
tags:
  - react
  - typescript
technology:
  - HTML/CSS
  - Typescript
  - React
duration: 7 weeks
introheading: Updating the dashboard UI to lead to a better management workflow
introbody: >-
  Managing data can be a pain if the application does not give easy access to
  common actions. My role involved building out pages and components with React
  and TypeScript.




  The business learned clients needed to easily see percentages of funding and re-adjust portfolios, calculations, and cross-portfolio assets within portfolios. Concerns were raised to achieve the goal with fewer clicks. A main dashboard would allow direct adjustments as well as portfolio-specific views.
typed_list:
  - type: Twocol_image_content
    heading05: Meeting with the team to workshop user interface improvements
    twocol_content_img:
      - type: Content02
        Content002: >-
          At this point in 2021 Starbucks was still adjusting to virtual work.
          To make sure everyone was comfortable with the project a kick-off
          meeting was held. The meeting agenda involved going over the
          development environment and establishing expectations.


          > The first step in exceeding customer expectations is to know those expectations



          **Expectations:**


          * I would need to deliver on a fast turn-around schedule

          * Weekly stand-up meetings would be required along with code reviews

          * React and Typescript was the Javascript library and language I would be working with

          * I would need to utilize branding colors and established widgets 

          * I would be working with the product and engineering teams on enterprise-facing features
    caption: Freshly ground and brewed caramel coffee to start the virtual meeting.
      <br/>Photo by <a
      href="https://unsplash.com/ja/@cwmonty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris
      Montgomery</a> on <a
      href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    image: img/chris-montgomery-smgtvepind4-unsplash.jpeg
    cards:
      iconcards: []
  - type: Twocol_image_content
    heading05: Working with the UX team to refine UI
    image: img/design-stats.gif
    caption: Representation of Starbucks UI. <br/><a
      href="https://storyset.com/business">Business illustrations by
      Storyset</a>
    twocol_content_img:
      - type: Content02
        Content002: >-
          When multiple teams work together, several perspectives and expertise
          can be utilized. The UX team first met with shareholders to create the
          initial version of the UI. I met with the UX team and we worked
          together to harmonize the feedback, along with the information I
          gathered from the data team. There were several problems to be solved,
          not merely a UI to create.




          ### How might we avoid errors when users change how revenue is divided and utilized?


          Existing APIs for each portfolio were causing issues for users making changes due to calculations occurring after form submission and only within a current portfolio set. If revenue allotments for portfolios A, B, and C were below 100%, users could make changes. The UI was not properly informing users when a portfolio or a sub-portfolio would cause the main portfolio to exceed 100%. The big question was how should errors be handled within the UI and within the API? Could and should errors be avoided?
      - type: introw
        blurbsw:
          - textw: >-
              ### Refining the UI to account for errors


              * I collaborated with product and design teams to define features and identify opportunities for improvement

              * The prototype was improved to account for edge cases in user flow

              * Error messages and notifications were improved by providing thoughtful feedback
            imagew: img/screen-shot-2022-11-15-at-8.38.45-pm.png
  - type: Twocol_image_content
    twocol_content_img:
      - type: Content02
        Content002: >-
          * I developed UI components based on existing widgets and from scratch
          utilizing React, Typescript, and some Java 

          * Collaboration was important to the process. I worked with the backend and frontend teams to ensure optimized API calls between parent and child component

          * Some components included: typography, color palettes, data cards, tables, modals, and forms

          * Testing API and working with API developers

          * Building a dashboard based on the interactive prototype from UX designer (our team)

          * Adding portfolios to sidebar menu, including sub-portfolios added dynamically by users
    heading05: Building the components according to atomic design
    image: img/parkinson-bro.png
---
## The takeaway

> *Don’t over-complicate components. Reusability is key!*

* UI updates and new widgets were created and delivered
* Components were built for usability and by utilizing test-driven development practices
* Accessibility and performance improvements were implemented alongside the requested features. It was important to me that both be considered in all development and design deliverables.

Y'all, did you know that React is great for making dynamic components? 😉

I learned about component hierarchy through this project and it was my first deep dive into learning TypeScript. Starbucks has a very knowledgeable team and I loved working directly with the UX and back-end folks. I'm glad the Insight team was able to deliver a robust user interface for Starbucks. ☕✨