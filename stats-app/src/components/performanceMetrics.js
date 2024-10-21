import { ProgressBar } from 'react-bootstrap';

const PerformanceMetrics = () => (
  <div>
    <h5>Performance Metrics</h5>
    <p>CPU Usage</p>
    <ProgressBar now={80} label="80%" />
    <p>Memory Usage</p>
    <ProgressBar now={60} label="60%" />
    <p>Disk Usage</p>
    <ProgressBar now={90} label="90%" />
  </div>
);

export default PerformanceMetrics;
