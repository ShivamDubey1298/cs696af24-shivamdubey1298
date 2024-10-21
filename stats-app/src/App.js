import React from 'react';
import Sidebar from './containers/sidebar/sidebar';
import Header from './containers/header/header';
import CardComponent from './components/card';
import './App.css';  
import ChartWidget from './components/chartwidget';
import PerformanceMetrics from './components/performanceMetrics';
import Footer from './components/footer';
const App = () => {

  const cardData = [
    { header: 'Total User', text: '10,245' },
    { header: 'Revenue', text: '$46,578' },
    { header: 'Orders', text: '1234.' },
    { header: 'Conversion Rate', text: '2.3%' },
  ];

  return (
    <div className="layout">
     
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-content">
        <div className="main-header">
          <Header />
        </div>
        <div style={{ display: 'flex', flexDirection:'column ',gap:'24px'}}>
        {cardData.map((card, index) => (
          <CardComponent key={index} header={card.header} text={card.text} />
        ))}
      </div>
       
        <div className="container" style={{ marginTop: '70px' }}>  
          
          <ChartWidget/>
          <PerformanceMetrics />
        </div>

    
        <Footer />
      </div>
    </div>
  );
};

export default App;
