import React from 'react';
import * as S from './BoxTitle.styled';

// 띄어쓰기 기준으로 단어 나누기 리턴은 배열로 나타남
const TextSplit = title => {
	title.split(' ');
};

const BoxTitle = () => {
	const title = 'Monthly Flower';
	const titleArray = TextSplit(title);
	return (
		<S.BoxTitle>
			<h2>{titleArray[0]}</h2>
			<h3>
				{titleArray[1]}
				<span>이달의 꽃</span>
			</h3>
			<p>여름의 청량함을 느껴보세요</p>
		</S.BoxTitle>
	);
};

export default BoxTitle;
