import React from 'react';
import * as S from './Banner.styled';

// 서버에서 가져올수 있도록 변수화
const getBannerImg = 'https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg';

const Banner = () => {
	return (
		<S.Banner>
			<img src={getBannerImg} alt="banner" />
		</S.Banner>
	);
};

export default Banner;
