import React from 'react';
import BoxTitle from './BoxTitle/BoxTitle';
import Item from './Item/Item';
import { styled } from 'styled-components';

const ItemBoxWrapper = styled.div`
	display: flex;
	flex: 1 1 0;
	margin: 0 1rem;
	flex-direction: column;
	justify-content: center;
	width: 500px;
	& article {
		width: auto;
		background-color: tan;
	}
	& aside {
		display: flex;
	}
	& aside p {
		width: 18rem;
		background-color: #000;
	}
`;
const ItemBox = () => {
	return (
		<ItemBoxWrapper>
			<BoxTitle />
			<aside>
				<p>
					<Item />
					<Item />
					<Item />
					<Item />
				</p>
				<div>
					<div>up Arrow</div>
					<div>down Arrow</div>
				</div>
			</aside>
		</ItemBoxWrapper>
	);
};

export default ItemBox;
