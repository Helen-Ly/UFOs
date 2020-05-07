# UFOs

Are we the only inhabitants within this vast universe? This is a highly debated topic as there are multiple observed evidence of extraterresrial activities on Earth. We collected all these observations and created a webpage to display these UFO sightings. 

Using Javascript, we created a dynamic webpage that allow the user to filter through the table with a date input. However, the ability to pinpoint a search by date and country, for example, would go a long way in providing more in-depth analysis of UFO sightings. That being said, we have added a total of 5 filters to filter through the table.

1. Date
2. City
3. State
4. Country
5. Shape

## Resources

  - Data Source: data.js
  - Software: Python 3.7.6, Visual Studio Code 1.43.0, HTML, CSS, JavaScript (ES6)
  - Libraries: Bootstrap, D3.js

## Summary

Please see below webpage. We used CSS and Bootstrap to create the cohesive look, along with a nice background for the title.

![](https://github.com/Helen-Ly/UFOs/blob/master/static/images/ufo_website_top.png)

![](https://github.com/Helen-Ly/UFOs/blob/master/static/images/ufo_website_table.png)

As you see above, we ensured that the filter labels are aligned to the left and the input boxes are aligned to the right. As you input multiple factors, the table will reflect those factors. If you want to reset the table, you can either clear the fields and click *Filter Table*, or you can click *UFO Sightings* at the top left of the webpage.

## Recommendation

The purpose of this website was to display an article on the webpage and allow users to filter through the collected UFO sightings for more in-depth analysis. We have further this analysis by adding multiple factors for the users to filter with. However the webpage is still static. To create a more robust webpage, we recommend the following for further development.

1. At the moment, the article is one of the static parts of the webpage. Instead, we can scrape a webpage that we get our articles from and have the updated article display on our webpage with a click of a button.

2. Another static element in our webpage is the data we use for the UFO sightings. As new sightings are recorded, our table will need to reflect these changes. Following the same format in our first recommendation, we can create a script that would scrape the web and collect the newly recorded data and display it into our table.

If we implement these two recommendations, our webpage will become more robust and dynamic. It will allow the users to keep up to date with the news and sightings.

## Usage

**Note:** Please ensure you have all the required and updated softwares on your computer.

1. Download the following files into the same folder for the project.

    - *static* folder
    - index.html

2. Open Visual Studio Code from your projects folder.

3. Open the index.html in your browser and enter the input for the filters.

4. If you want to change anything in the code, make your changes, save your file and refresh your browser. The changes should be loaded into the webpage.

