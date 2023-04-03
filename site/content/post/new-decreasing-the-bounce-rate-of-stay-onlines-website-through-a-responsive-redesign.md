---
title: new - Decreasing the bounce rate of Stay Online's website through a
  responsive redesign
titlebold: Decreasing the bounce rate of Stay Online's website
titlenormal: through a responsive redesign
preview: img/stayonline-us.png
preview2: img/tablet-us.png
date: 2016-06-30T20:18:56.086Z
newdate: 2016-09-08T20:18:56.116Z
client: Stay Online Corp.
logo: img/logo-icon.svg
role: Front-End Web Developer
tags:
  - cross-browser
  - ui
technology: User Research, UI Design, Prototyping, Frontend Technology
duration: 3 months
introheading: Creating a plan to decrease mobile bounce rate
introbody: >-
  Stay Online is a manufacturer and distributor of a wide selection of power cords and cables for the data center, power infrastructure and industrial markets. Stay Online's e-commerce website, launched in 1997, had not changed to be compliant with best practices introduced with HTML5. Mobile users were not considered. This contributed to a large number of mobile device users leaving the site upon load or before completing a purchase. 


  **The Problem:** <span aria-hidden="true">🤔</span> <br/>Many users did not make or complete purchases. These users included a very high percentage of users from mobile devices. 


  **The Plan:** <span aria-hidden="true">💡</span><br/>Redesign the existing website, focusing on responsive design and maintainable code. There was a potential to capture mobile users by making the web experience accessible. Responsive design was not an easy sell to management. Data-driven design through analytics would be used to get the pitch approved.


  **The starting rate:** <span aria-label="thumb down emoji">👎</span> about 85% of mobile users leave <br/> **The goal:** <span aria-label="okay hand emoji">👌</span> fewer than 50% of mobile users leave

  <em>(note: mobile was defined as less than 1024px screen size during the design sprint)</em>

theme: blue
casestudy: ui

typed_list:

  - type: fullwidth
    background: Blank
    content_options:
      - type: generic_content
        generic_content: >-
          ## Make it work! Make it compatible! Make it progressively enhanced!


          Stay Online’s client base contained an ample percentage of IE6 users (even back in 2012 when use within the U.S. was below 1%). The codebase included a table-based layout structure and polyfills, all of which would need to be re-evaluated. The site would need to be cross-browser-compatible. 


          Technical debt from supporting older browsers had increased over time. In early conversations, many voices were worried about any change. The Sales team did not want any ordering downtime with the transition to the new site. Marketing did not want a drastic overnight aesthetic change, fearing change would confuse customers and disrupt brand trust. The Web team wanted an easier-to-maintain code base.


          A plan was made to implement an agile versus waterfall release for design and code changes which would satisfy Sales and Marketing. A plan to reduce the number of HTML and CSS files through reusable code was made to satisfy the needs of the Web team.


          ### Development overhead:


          CSS adjustments were constantly being logged as bugs with each new page creation. Templates were not implemented and pages were hand-coded.

          Layout bugs were constantly found by the team and users as it was easy to mistype or forget a closing table tag. This resulted in the development focusing on tackling the growing backlog as a symptom versus tackling the cause.


          ### User pain points:


          Many users complained they could not see the content because it was either hidden, off-screen, or required scrolling horizontally on mid-size and small mobile devices. Users complained they were having difficulty tabbing through web content formatted with tables. Keyboard focus needed to be implemented more consistently or hidden. This was directly causing rampant accessibility issues.

          ### Insight & issues

          * Design needs to maintain IE6+ (and later IE8+) browser compatibility

          * Data-heavy pages need content organization and prioritization to provide an ideal mobile experience

          * The branding system needed updating to incorporate accessible colors for web and print

          * Code refactoring is needed to remove a table-based layout and poorly formed HTML

  - type: fullwidth
    background: Angled
    content_options:
      - type: generic_content
        generic_content: >-
          ## Rethinking the layout through research

          ### Three main types of users were identified

  - type: fullwidth
    background: Angled
    content_options:
      - type: needtonamethis
        introw:
          blurbsw:
            - textw: >-
                #### Business-to-Business Customers

                These users include one time buyers and repeat buyers. They use multiple devices and browsers, buy in bulk and enjoy the ability to customize a product or order. Older browser support is very important to the existing user base.
              imagew: img/businessman.png
            - textw: >-
                #### Inventory Warehouse Workers

                These are internal Stay Online employees working on mobile devices. They use authenticated portions of the website to check stock and product location. They need the website to not limit functionality for small devices.
              imagew: img/warehouse-worker.png
            - textw: >-
                #### Sales and Marketing Employees

                These are internal and external Stay Online employees working on multiple devices, including tablets when at trade shows. They need the website to work fast and reliably on low data connections.
              imagew: img/salesperson.png
        
  - type: fullwidth
    background: Angled
    content_options:   
      - type: generic_content
        generic_content: >-
          ### Examining the existing website
      - type: fullwidth_img
        image: img/us-old-design.png
        image_medium: img/us-old-design-med.png
        image_small: img/us-old-design-small.png
        image_xsmall: img/us-old-design-xsmall.png

      - type: generic_content
        generic_content: >-
          <ul class="visually-hidden">
            <li>Navigation menu was very lengthy and the links very small/difficult to use</li>
            <li>in addition to too many elements on a page, making hierarchy difficult, color contrast was an issue</li>
            <li>The product categories were difficult to distinguish at a glance</li>
            <li>Product lists were overwhelming for new users and were not responsive</li>
            <li>Product detail pagesonly provided minimal features not supplied by the parent list view. Additionally, pages lacked flow and hierarchy</li>
          </ul>  
     

  - type: fifty_fifty
    background: Rectangular
    left_side:
      content_options:

        - type: heading3
          heading03: Prioritizing the findings into wireframe iterations
        - type: generic_content
          generic_content: >-
            ### Client approval


            Research began on the product after initial conversations with the lead development stakeholders. Data on bounce rate was gathered from Google Analytics thanks to close work with the Marketing director. A presentation of the benefits of a redesign was given to the CEO.


            ### Testing designs to determine major changes


            A/B testing was completed to determine whether a 3 or 2 column layout resulted in a better call-to-action response. Additionally testing was conducted regarding removing teh left side navigation in favor of a full-width top menu with drop downs. Despite positive data from new users the negative data from existing users resulted in the decision to keep the side navigation.
    right_side:
      content_options:
        - type: generic_content
          generic_content: >-
            ### Content-first


            Requirements from Marketing, Sales, and Development were gathered and compared to what content is most visited by users. Key internal stakeholders were surveyed on the gathered data and asked to rank the importance of the information. Later tests requested users to place key components within a basic wire-frame to gather further data on content hierarchy and placement.


            ### Responsive design


            Started by making the site optimized for a min-screen size of 1024px which at the time was the average internal and external device-width

            Static tables and charts needed to be refactored and rewritten

            The next goal was to have elements optimized device-widths at a min of 768px. (Unfortunately, the project dissolved mid-release before full responsive implementation)  
            
            
  - type: fullwidth
    background: Rectangular
    content_options:
      - type: scroll-image
        caption: This is a caption about the wireframe sketches
        image: img/Group 538.png

  - type: fullwidth
    background: Angled
    content_options:
      - type: heading3
        heading03: Optimizing the navigation & redesigning the homepage 
      - image3caption: After A/B testing the team decided to use the hamburger menu icon with the word "menu". A carousel was also implemented on the homepage to highlight a max of two specific product offerings and one upcoming tradeshow.
        image2caption: A mobile navigation menu was implemented to improve the responsive implementation of the design.
        image1caption: The product catalog was re-assessed and most categories either combined or renamed to increase understanding.
        image1: img/jumble-featured-us-Copy.jpg
        image2: img/jumble-mobile-us.jpg
        image3: img/jumble-supplement-us.jpg
        type: image-jumble-grid

  - type: fullwidth
    background: Blank
    content_options:          
      - type: heading3
        heading03: Reinvisioning the product pages 
      - image5caption: Product names were moved out from the horizontal card and text with color-based meaning have icons to reinforce meaning. 
        image4caption: Product custom builers completely rebuit to be responsive and include the updated styling.
        image3caption: Chart tables updated for spacing and color, as well as better scanability.
        image2caption: Product tables updated to include stock and product image tooltips. 
        image1caption: Hierarchy was increased through the addition of heading elements. The styling of buttons and the table was updated for a cleaner look.
        image1: img/jumble-featured-us-product.jpg
        image2: img/jumble-mobile-us-product.jpg
        image3: img/stayonline-us-chart.jpg
        image4: img/jumble-supplement-us-only.jpg
        image5: img/jumble-supplement-us-optional.jpg
        type: image-jumble-grid

  - type: fullwidth
    background: Angled
    content_options:
      - type: generic_content
        generic_content: >-
          ## The takeaway

          ### Mobile bounce rate:

          👍 Four months later: only about 25% of mobile users leave before making a purchase, compared to 85%.
          
          ### Development upkeep:

          👍 The site also has a 20% reduction in lines of code through optimization. This resulted in decreased bugs logged to upkeep cross-browser code.

          Nurturing a site from IE6 to IE9+ has not been easy, but allowing gradual usability changes was beneficial for the company and the existing user base
          The bounce rate for the site steadily decreased through the agile implementations. Browser usage for older browsers steadily decreased without notable monetary loss. In turn, this decreased the amount of legacy code needed
          Mobile purchases, not just usage, since this project have increased dramatically

          > Melanie distinguished herself by consistently delivering quality solutions, on schedule. […] She always went the extra mile to ensure the quality of her work was at the highest level.<br>
          <cite>- Gordon Harris <small>Stay Online Director, Marketing and Communications</small></cite> 


          > Melanie has a great understanding of CSS, graphics and web design, responsive layout, and CSS compilers. Our websites are much better as a result of her work.<br>
          <cite>- Brian Futrell <small>Stay Online Web Developer</small></cite>          
        
team: Web Development Manager, Marketing Specialist,
---
