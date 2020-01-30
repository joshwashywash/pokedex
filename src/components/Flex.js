import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	height: 100vh;
	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export default Flex;
