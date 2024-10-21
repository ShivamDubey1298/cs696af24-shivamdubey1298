import { Card, Row, Col } from 'react-bootstrap';

const SummaryStatistics = () => (
  <Row>
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>Total Users</Card.Title>
          <Card.Text>10,245</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>Revenue</Card.Title>
          <Card.Text>$45,678</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>Orders</Card.Title>
          <Card.Text>1,234</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title>Conversion Rate</Card.Title>
          <Card.Text>2.3%</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default SummaryStatistics;
