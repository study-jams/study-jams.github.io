import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import Content from './Content.mdx';

const Conduct = () => {
  return (
    <section id="conduct">
      <Container>
        <Title title="Code of Conduct" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="conduct-wrapper">
            <Content />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Conduct;
