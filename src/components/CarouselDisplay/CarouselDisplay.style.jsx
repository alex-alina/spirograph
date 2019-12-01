import style from 'styled-components';

const StyledContainer = style.div`
  display: none;
  @media(min-width: 1254px) {
    display: block;
    margin: 40px auto 0 auto;
  }
`;

export default StyledContainer;
