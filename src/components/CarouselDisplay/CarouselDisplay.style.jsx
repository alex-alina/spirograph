import style from 'styled-components';

const StyledContainer = style.div`
  display: none;
  
  @media(min-width: 1254px) {
    display: block;
    margin: 3em auto 0 auto;
  }
`;

export default StyledContainer;
