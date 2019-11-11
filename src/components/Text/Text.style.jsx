import styled from 'styled-components';

const StyledText = styled.div`
font-family: 'Montserrat', sans-serif;
font-size: 1em;
color: #000;
text-align: ${(props) => (props.center) && 'center'};
`;

export default StyledText;
