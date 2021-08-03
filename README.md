# React Image Search Engine

This react Appliction i have made as a Assisment For Reading Right Company.This React application will use API from unsplash website to give free images to users and on each click on image will display a full resolution of the image.

### Applicaiton feature

* List of free images in grid form
* On click to full images
* Result of image less than 50

### Components and there roles

1. Index.js
	- Only used to display app component.
	- This component is key role player as it will be rander the first from all.
2. SearchBar.js
	- Responsible for take the value from Form element and passing it to App component using state property. 
3. App.js
	- Take care of passing the parameter for API url with value pass from SearchBar component.
	- Also after getting the result from URL request, it will pass the result to ImageList component for list them out for user.
4. ImageList.js
	- Take care of the data pass from App component using props property and map each data with key and image.
5. ImageCard.js 
	- Responsible for displaying each data recieved from ImageList component with nicely looking grid. 
6. unsplash.js
	- Does only one jost that is it whole th default api request url address with authorization key. 


