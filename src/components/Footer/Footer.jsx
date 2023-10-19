import React from 'react';
import * as S from './Footer.styled';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<S.Footer>
			<div>
				<Link to="/">취소</Link>
			</div>
			<div>
				<Link to="/order">주문하기</Link>
			</div>
		</S.Footer>
	);
};

export default Footer;
