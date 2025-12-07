# Requirements

## Goal of the project

**To improve the frontend usability and visual appeal of the open day site**. The frontend already pulls completed JSON data to populate the page, so no API modification or backend functionality is necessary. The project should ultimately satisfy the **client brief**: We are seeking to enhance the Open Day website to create a more engaging, accessible, and visually appealing experience for prospective students. The project will involve applying Cardiff University branding, enhancing the user interface and implementing a modern, responsive layout.

## Functional requirements

### CU Branding
CU colours found in Tailwind config. Use this and other CU pages as a reference point to incorporate better branding and visual styles that would create a more natural flow between pages on the CU website. 
### Enhanced UI
Make information more digestable and less cumbersome, with less bloat on the screen. This can be done by grouping events into a layout ie. horizontal, introducing filters and/or having further information on events displayed on click/hover. This would also make the page more 'engaging' as the user is provided the information they're curious about without being overloaded and potentially scrolling to locate a specific event. 
### Improved Accessibility
Further accessibility can be developed by using semantic HTML to improve screen reader usage, having alternative text on any images and complying with WCAG guidelines.
### Improved Responsiveness
The page should function across devices and adapt to mobile/tablet/desktop screen sizes via CSS queries. 

## Implementations

### CU Branding
Branding was implemented by designing two nav bars in the style of the main site, and using a large red banner against a light backdrop with the provided colour scheme to give a distinct contrast.
### Enhanced UI
The UI was improved by implementing a filter function into the red banner so the user could search for a valid topic and immediately reduce the noise of the event cards in real time, as well as increasing the scale of information by having expanding cards on hover and filling the content to the width of the screen so more cards could be used per row.
### Improved Accessibility 
Accessibility was improved by using semantic HTML to have sections for each key piece of site content, providing aria labels for these sections and also using red focus rings in the style of CU for more visibility to screenreader technology.
### Improved Responsiveness
The page already demonstrated responsiveness to different screen sizes, but flex and full width were used and tested throughout to ensure the final product would be responsive under different screen sizes.
