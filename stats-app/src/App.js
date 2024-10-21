import React from 'react';
import Sidebar from './containers/sidebar/sidebar';
import Header from './containers/header/header';
// import SummaryStatistics from './containers/summaryStatistics/summaryStatistics';
// import ChartWidget from './containers/chartWidget/chartWidget';
// import PerformanceMetrics from './containers/PerformanceMetrics/PerformanceMetrics';
import Footer from './containers/footer/footer';
import CardComponent from './components/card';
import './App.css';  

const App = () => {

  const cardData = [
    { header: 'Total User', text: '10,245' },
    { header: 'Revenue', text: '$46,578' },
    { header: 'Orders', text: '1234.' },
    { header: 'Conversion Rate', text: '2.3%' },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Header */}
        <div className="main-header">
          <Header />
        </div>
        <div style={{ display: 'flex', flexDirection:'column ',gap:'24px'}}>
        {cardData.map((card, index) => (
          <CardComponent key={index} header={card.header} text={card.text} />
        ))}
      </div>
        {/* Actual content */}
        <div className="container" style={{ marginTop: '70px' }}>  {/* Adjust the margin-top to ensure it doesn't overlap with the fixed header */}
          {/* <SummaryStatistics />
          <ChartWidget />
          <PerformanceMetrics /> */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
