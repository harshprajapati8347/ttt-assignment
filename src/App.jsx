import React, { useEffect } from "react";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://www.terriblytinytales.com/test.txt"
      );
      const data = await response.text();
      const words = data.split(" ");
      const wordCount = {};
      words.forEach((word) => {
        if (wordCount[word]) {
          wordCount[word] += 1;
        } else {
          wordCount[word] = 1;
        }
      });
      const sortedWordCount = Object.entries(wordCount).sort(
        (a, b) => b[1] - a[1]
      );
      const top20 = sortedWordCount.slice(0, 20);
      console.log(top20, "top20");
      setData(top20);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Submit</button>
      {loading && <h1>Loading...</h1>}
      {error && <div>{error}</div>}
      {data && (
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={(data) => {
              console.log(data, "data");
              return data[0];
            }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={(data) => {
              console.log(data, "data");
              return data[1];
            }}
            fill="#534cdf"
          />
        </BarChart>
      )}
    </div>
  );
};

export default App;
