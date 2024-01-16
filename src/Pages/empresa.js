import React, { useEffect, useState } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PageContainer = styled.div`
  background: linear-gradient(to bottom, #141e30, #243b55);
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionContainer = styled(animated.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const HighlightSection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const FeatureSection = styled(SectionContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: disc;
    margin-left: 10px;
  }
`;

const ValueSection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const TextCarousel = styled.div`
  display: flex;
  overflow: hidden;
`;

const TextCarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  transition: transform 0.5s ease;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const ImageCarousel = styled(animated.div)`
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CallToAction = styled(SectionContainer)`
  text-align: center;
  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
`;

const BackToTopButton = styled(ScrollLink)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Empresa = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Simulación de carga de página
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000); // Ajusta este tiempo según tus necesidades
  }, []);

  const fadeIn = useSpring({
    opacity: isPageLoaded ? 1 : 0,
    from: { opacity: 0 },
  });

  const slideInFromLeft = useSpring({
    opacity: isPageLoaded ? 1 : 0,
    transform: isPageLoaded ? 'translateX(0)' : 'translateX(-10px)',
    from: { opacity: 0, transform: 'translateX(-10px)' },
  });

  return (
    <PageContainer>
      <Element name="top" />
      <BackToTopButton to="top" smooth={true} duration={500}>
        <FaArrowUp className="text-2xl cursor-pointer hover:text-gray-500" />
      </BackToTopButton>

      <HighlightSection style={fadeIn}>
        <h2 style={slideInFromLeft}>¡Bienvenido a Neumann S.A.!</h2>
        <p style={slideInFromLeft}>
          Innovación y calidad en productos de automatización y control durante más de 70 años.
        </p>
      </HighlightSection>

      <FeatureSection style={fadeIn}>
        <h3 style={slideInFromLeft}>Aspectos Destacados</h3>
        <ul style={slideInFromLeft}>
          <li>Reconocimientos en la industria.</li>
          <li>Certificaciones de calidad.</li>
          <li>Tecnología de vanguardia.</li>
        </ul>
      </FeatureSection>

      <ValueSection style={fadeIn}>
        <h3 style={slideInFromLeft}>Nuestros Valores</h3>
        <p style={slideInFromLeft}>
          En Neumann S.A., nos dedicamos a proporcionar soluciones de automatización que superan las
          expectativas de nuestros clientes. Nuestros valores fundamentales incluyen la calidad, la
          innovación y la satisfacción del cliente.
        </p>
      </ValueSection>

      <TextCarousel style={fadeIn}>
        <TextCarouselItem>
          <h3>Texto 1</h3>
          <p>Descripción del Texto 1.</p>
        </TextCarouselItem>
        <TextCarouselItem>
          <h3>Texto 2</h3>
          <p>Descripción del Texto 2.</p>
        </TextCarouselItem>
        <TextCarouselItem>
          <h3>Texto 3</h3>
          <p>Descripción del Texto 3.</p>
        </TextCarouselItem>
      </TextCarousel>

      <ImageCarousel style={fadeIn}>
        {/* ... (código del carrusel de imágenes) */}
      </ImageCarousel>

      <CallToAction style={fadeIn}>
        <p style={slideInFromLeft}>
          ¡Descubre cómo Neumann S.A. puede transformar tu industria! Contáctanos hoy mismo.
        </p>
        <button style={slideInFromLeft}>Contáctanos</button>
      </CallToAction>
    </PageContainer>
  );
};

export default Empresa;




