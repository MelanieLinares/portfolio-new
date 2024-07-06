---
title: Creating impact through a new online DMV IIMS portal
titlebold: Creating impact through a 
titlenormal: new online DMV IIMS portal
thumbnail: img/voma-2.png
thumbnail2: img/voma-1.png
preview: img/voma-display2.png
# preview: https://codyhouse.co/app/assets/img/article-v4-img-1.jpg
weight: 2
notice: For legal reasons final UI cannot be shown and some some details have been omitted.
preview_intro: This is a test description that needs to be updated and added to all case studies. Perhaps even added to the articles. 
preview_responsibilities:
  - Collaborate with designers on user flows and information architecture
  - Build out components for new and existing design systems
  - Test applications to cross-browser specifications and requirements
  - Create wireframes and prototypes
  - Utilize compilers, browser dev tools, and APIs
  - Conduct research and created user stories for existing applications
preview_intro: Identifying ways to optimize an internal DMV process digitally. The North Carolina Department of Transportation (NCDOT) Ignition Interlock Program team needed a new online system for managing the program. The new system would need to still support the legacy system’s data and its user’s needs.
preview_problem: Internal DMV employees experience difficulty keeping up with backlog and lack of needed features. 
date: 2018-08-04T00:33:20.559Z
newdate: 2019-03-09T00:33:20.599Z
client: NC Department of Motor Vehicles
logo: img/ncdot-logo.jpg
role: UI Designer and Developer
tags:
  - javascript
  - sharepoint
  - vue
technology: User Experience Design, Prototyping, Design System integration,
  Frontend Technology
duration: 7 months
introheading: The program affects thousands of NC citizens, but the existing system is broken. How do we fix it?
preview_tools: UX, HTML/CSS, Vue
introbody: >-
  The North Carolina Department of Transportation (NCDOT) on behalf of the North Carolina Driver and Motor Vehicles (NCDMV) assigned a team to improve the Ignition Interlock Management System (IIMS). This team required a new online system due to being overloaded with manual entry tasks and physical forms, often prone to user error.

  > "The agency’s decades-old computer system has led to some residents being able to continue driving even though their license should be suspended and other residents unable to renew."
  
  <br><cite>Source: <a href="https://www.wbtv.com">https://www.wbtv.com</a></cite>

theme: green
casestudy: test


typed_list:
  # - type: template_copy
  #   content_options:
  #     - type: heading3_copy
  #       heading03_copy: COPY Discovery and ideation      
  #     - type: generic_content
  #       generic_content: >-
  #         ### COPY Blah blah - Heart for user (and client) experience
  # - type: fifty_fifty
  #   right_side:
  #     content_options:
  #       - type: heading3
  #         heading03: Discovery and ideation      
  #       - type: generic_content
  #         generic_content: >-
  #           ### Blah blah - Heart for user (and client) experience
  # - type: quote
  #   quote: >-
  #     Currently, 10,894 ignition interlocks are installed in the vehicles of DWI offenders in North Carolina. […] Prior to implementation of the new web-based system, the NCDMV had been implementing the ignition interlock program through labor intensive, manual processes.
  #   cite: 
  #     cite_text: fy2019 North Carolina Governor’s Highway Safety Program annual report
  #     cite_url: https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/fy2019_annual_report_-_north_carolina_governors_highway_safety_program.pdf

  - type: section
    typed_list:
    - type: two_column
      two_column:  
        right: >-
          ### <mark>Goal:</mark> <br>Prioritize existing research into user needs and flows

          When brought onto the project other teams had already been researching, interviewing users, and working on the legislation involved in getting the project started for years. Day 1 was analyzing the existing research, locating gaps that could be actioned upon with new research/interviews, creating a project outline, and identifying limitations. 

          #### What does this research tell us? 

          Ignition Interlock users, while not users of the portal, do have specific needs that affect how this application works. The main benefit (or need) of these individuals is to ensure that their data is up to date, synced properly with important events, and that PII documentation is handled securely.
        left: >-
          ### <mark>Goal:</mark> <br>Upgrade the system with a new, improved online portal

          The NCDMV had no interest in expanding the process beyond an internal application, but improving the existing one. The existing application was limited and for the process to work it required over half of the labor to be manual entry. That was the identified issue. Appropriate improvents and features were prioritized to benefit new and existing participants, as well as vendors of the IIMS monitoring devices. 

          #### Requirements and limitations

          - IE10 Browser support

          - SharePoint frontend integration and API structure

          - No changes to existing branding

          - Required features such as edit, save, export, and documentation access

    - type: text
      text: >-
        > "Currently, 10,894 ignition interlocks are installed in the vehicles of DWI offenders in North Carolina. [...] Prior to implementation of the new web-based system, the NCDMV had been implementing the ignition interlock program through labor intensive, manual processes."<cite>Source: <a href="https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/fy2019_annual_report_-_north_carolina_governors_highway_safety_program.pdf">fy2019 North Carolina Governor's Highway Safety Program annual report</a></cite>

    - type: fullwidth_img
      image: img/ignition-interlock.jpg 
      image_caption: Stock photo of driver blowing into Vehicle Alcohol Ignition Interlock


    - type: text
      text: >-
        ### <mark>Goal:</mark> <br>Interview stakeholders to outline features and UI

        The day 1 research also consisted of existing application pages and database information. This gave a good idea of the types of information that would need to be stored, parent-child relationships, and possible UI groups. With the interlock participant in mind we now turned to the end-user, IIMS DMV employees in charge of managing the data. We sought to answer questions such as:

        - How does the current system handle data changes?

        - How will authentication and restricted access work?

        - What are the main goals of employees managing the system?

        I consulted with the internal project lead. We unified on a strategy before driving downtown to meet with the project owner. We defined:

        - User flows 

        - Team needs/goals 

        - Technical limitations and process

        #### What do these interviews/sessions tell us? 

        We now had a better understanding of the types of actions needed to manage a participant: create, edit, modify, delete, etc. Special attention was made to important dates/decisions and how that information would be alerted to employees and vendors monitoring accounts. If dates were missed or no action was taken, decisions were made on what kind of automated actions would occur. The employee’s main needs are accuracy, ease of access, and download options.

  - type: section
    typed_list:
      - type: text
        text: >-
          ## Altering the UI approach from digitized form to integrated process

          ### Identifying data structures and user flows

          Based on the existing research, the backend and API teams had already begun identifying data sets. Using the outlined user flows and UI pages I led the process to categorize the data into components and pages. Any issues in structure identified at this point was brought up during weekly standups.

      - type: image_grid_gallery
        image1: img/voma-sketch2.png 
        image1_caption: >-
          **Focusing on the UI and macro interactions**<br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis in incidunt asperiores eum fugit.
        image2: img/ma-flow.jpg
        image2_caption: >-
          **Focusing on the UI and macro interactions**<br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis in incidunt asperiores eum fugit       
          
      - type: text
        text: >-
          ### Organizing the data into components

          The existing physical form was taken and broken down into into a table for the individual data: first name, last name, address, etc. This information was then cross referenced when outlining components. Was all data being used? What was the severity or importance of information? 

      - type: fullwidth_img
        image: img/ignition-interlock.jpg 
        image_caption: Stock photo of driver blowing into Vehicle Alcohol Ignition Interlock

      - type: text
        text: >-
          **Components and features were categorized into four page types:**

          - Dashboard: Users need only high-level information and quick access to reporting options

          - List view: Users need the ability to manage multiple accounts simultaneously and are more focused on who and where

          - Group view: Users are very focused on dates; participants are grouped by action item deadline dates
          
          - Detail view: Users need detailed documentation access for a specific participant to aid in preparing resources or violation resolutions

      - type: quote
        quote: >-
          [The project will] create additional subsystems within the current IIMS system that will be integrated to allow for a completely automated process across business units within the DMV for managing all aspects of the Ignition Interlock Program.
        cite: 
          cite_text: fy2020 North Carolina Governor's Highway Safety Program annual report          

  - type: section
    typed_list:
      - type: text
        text: >-
          ## Overcoming project challenges

          ### TBD - Creating the frontend

          #### TBD - SharePoint and templated components 

          Moving away from SharePoint Lists has the team look into JavaScript templating languages with would allow more flexibility while still being browser compatible. The final portal is built with a combination of ASP.Net Core and VUEjs. Atomic design methodology was used to create reusable components. 

          #### Legal challenges

          Per department and NC system standards profile data needed to be retained for years. Users also needed to be able to remove accounts whether due to error or dismissal from the program.


          **Solution:**


          Deleted data would be removed from the main API and added to a separate API for deleted accounts. This delete API would auto remove data after a certain amount of time, according to state regulations. This process would allow users deleted in error to be reinstated.
          Accessibility considerations
          Stakeholders of this project did not consider accessibility a huge concern since the application was not public-facing. If you have some familiarity with UX and WCAG you’ll know that internal applications need to be compliant too. People will need to access it so make it a good experience. During frontend development attention was given to accessibility issues I could control such as headings, tables, and some interactive elements. I briefed the team that would be managing the code base going forward on best practices and easy-to implement improvements if both backend and frontend worked together to make it happen.
       

  - type: section
    typed_list:
      - type: quote
        quote: >-
          The North Carolina Division of Motor Vehicles completed the first year of a two year project to enhance the Ignition Interlock Management System. [The] project was successful in the initial setup and implementation phase and is on track to complete the project in year two.
        cite: 
          cite_text: fy2019 North Carolina Governor’s Highway Safety Program annual report
          cite_url: https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/fy2019_annual_report_-_north_carolina_governors_highway_safety_program.pdf

takeaway: >-
  This was a very long project, due in part to government shutdowns and COVID furloughs. However this project was a fantastic experience in working directly with multiple teams and organizing several interviews and walkthroughs.  The project was able to enter beta early into 2021 fiscal funding year which allowed plenty of QA time and addressing secondary features such as loading times. The end result was highly praised by the internal team which now uses this application daily. 🎉


---

