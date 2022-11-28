**Walkthrough** to [Word Frequency App.](https://hp-word-frequency.netlify.app/) 

Live App : https://hp-word-frequency.netlify.app/ 

- User **clicks submit** button to fetch data.

- fetch data function fetches data.txt files and parsed them using the split() method. Then it created a map of words and their frequency. Then it sorted the map in descending order of frequency and displayed the top 20 words in a table.


- recharts library was used to plot the histogram. The data was passed to the histogram as an array of objects with key words and frequencies. The histogram was plotted using BarChart, XAxis, YAxis and Bar components.

- X-axis = top 20 words with highest occurrence
- Y-axis = how many times (numer) they occurred in the file


## How to run the project

- Clone or download the project. 


Open in Folder in Code Editor of your choise and then run the following commands in the project directory:

- Requirements: Node.js, npm should be installed on your machine.
1. `npm install`
2. `npm start`

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies used
- Reactjs, Javascript, HTML, CSS, Recharts, Netlify
