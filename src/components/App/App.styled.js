import { styled } from 'styled-components';
import { commonContainerStyles } from 'styles/GlobalStyles';
import background from '../../styles/images/background.jpg';

export const Container = styled.div`
  ${commonContainerStyles}
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
`;
