import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    // <footer>
    //   <Container>
    //     <Row>
    //       <Col className='text-center py-3'>
    //         Copyright &copy; your custom eshop
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>
    <footer style={{ 'background-color': 'rgb(59, 64, 68)' }}>
      <div class='container'>
        <div class='row'>
          <div class='text-center p-3 col-sm-12' style={{ color: 'white' }}>
            Email - sachinjokchand@gmail.com
          </div>
          <div class='text-center p-3 col-sm-12' style={{ color: 'white' }}>
            LinkedIn -{' '}
            <a
              href='https://www.linkedin.com/in/sachin-jogchand-b4505a17a/'
              style={{ color: 'white', 'text-decoration': 'none' }}
            >
              https://www.linkedin.com/in/sachin-jogchand-b4505a17a/
            </a>{' '}
          </div>
        </div>
        <div class='row'>
          <div class='text-center p-3 col' style={{ color: 'white' }}>
            Copyright © Your Custom Eshop
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
