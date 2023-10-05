import React from 'react';
import BoxTitle from './BoxTitle/BoxTitle';
import Item from './Item/Item';
import { styled } from 'styled-components';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { IconContext } from 'react-icons';

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
	& aside aside {
		justify-content: space-between;
		width: 100%;
		flex-wrap: wrap;
		min-width: 28rem;
		background-color: aliceblue;
		gap: 1.2rem;
	}
	& aside article {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-bottom: 2rem;
	}
`;
const ItemBox = () => {
	return (
		<ItemBoxWrapper>
			<BoxTitle />
			<aside>
				<aside>
					<Item />
					<Item />
					<Item />
					<Item />
				</aside>
				<article>
					<IconContext.Provider value={{ size: '2rem', className: 'arrow_icon' }}>
						<MdKeyboardDoubleArrowUp />
						<MdKeyboardDoubleArrowDown />
					</IconContext.Provider>
				</article>
			</aside>
		</ItemBoxWrapper>
	);
};

export default ItemBox;
