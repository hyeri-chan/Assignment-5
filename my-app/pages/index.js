/*********************************************************************************
*  WEB422 – Assignment 5
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Hyeri Jang           Student ID: 115328221            Date: 2024-11-14
*
********************************************************************************/

import { Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        alt="Metropolitan Museum of Art"
        fluid
        rounded
      />
      <br /><br />
      <Row>
        <Col md={6}>
          <p>
            The <strong>Metropolitan Museum of Art</strong> of New York City, colloquially &quot;the Met&quot;, is the largest art museum in the Americas. Its permanent collection contains over two million works, divided among 17 curatorial departments.
          </p>
        </Col>
        <Col md={6}>
          <p>
            The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park in Manhattan&apos;s Upper East Side, is by area one of the world&apos;s largest art museums. <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Read more on Wikipedia...</a>
          </p>
        </Col>
      </Row>
    </>
  );
}
