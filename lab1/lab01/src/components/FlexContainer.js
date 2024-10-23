import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap

const FlexContainer = ({ element: Element, data }) => {
  return (
    <Container className="my-4">
      <Row className="d-flex flex-wrap justify-content-start">
        {data.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Element {...item} />  {/* Renderowanie komponentu przekazanego jako props "element" */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlexContainer;