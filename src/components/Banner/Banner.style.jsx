import styled from 'styled-components';

const StyledBanner = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 0;
  width: 100%;
  height: 130px;
  background: #56CCF2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export default StyledBanner;
