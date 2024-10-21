import Plot from 'react-plotly.js';

const ChartWidget = () => {
  const data = [
    {
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      y: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
      name: 'PV',
    },
    {
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      y: [2400, 2210, 2290, 2000, 3200, 3100, 2900],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'green' },
      name: 'UV',
    },
  ];

  const layout = {
    title: 'Sales Overview',
    xaxis: { title: 'Months' },
    yaxis: { title: 'Sales' },
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '100%', height: '400px' }}
    />
  );
};

export default ChartWidget;
