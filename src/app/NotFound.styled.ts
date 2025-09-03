import styled from 'styled-components';

export const NotFoundContainer = styled.div`
	margin: 0 auto;
	width: 100vw;
	height: 100vh;
	background-image: url('/images/NotFound/BG.png');
	background-size: cover;
	background-position: center center;
	padding: 0 230px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 96px;
	position: relative;
`;

export const NotFoundText = styled.p`
	font-size: 300px;
	font-weight: bold;
	color: #fff;
`;

export const NotFoundLeftRight = styled.div`
	display: flex;
	align-items: center;
`;

export const Description = styled.p`
	width: 544px;
	height: 28px;
	font-weight: 400;
	font-size: 24px;
	color: #fff;
	margin: 16px 0 16px 0;
`;
export const DescriptionLow = styled.p`
	width: 440px;
	height: 65px;
	font-weight: 400;
	font-size: 18px;
	color: rgba(255, 255, 255, 0.3);
`;

export const NotFoundLeft = styled.div`
	display: flex;
	align-items: left;
	flex-direction: column;
	gap: 10px;
`;

export const NotFoundRight = styled.div``;

export const PlaceBlock = styled.div`
	border-radius: 50px;
	width: 700px;
	height: 624px;
	box-shadow: 0 5px 50px 0 rgba(0, 0, 0, 0.4);
	background: #0e0e0e;
	padding: 20px;
`;

export const PlaceBlockLow = styled.div`
	border: 3px solid rgba(255, 255, 255, 0.05);
	border-radius: 30px;
	width: 660px;
	height: 584px;
	padding: 20px;
	position: relative;
`;
