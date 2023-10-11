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
	justify-content: flex-end;
	width: 500px;
	height: 100%;

	/* title  */
	& article {
		width: auto;
		/* background-color: tan; */
	}
	/* itemlist */
	& aside {
		display: flex;
	}
	/* item list  */
	& aside aside {
		/* justify-content: space-between; */
		width: 100%;
		flex-wrap: wrap;
		/* min-width: 28rem; */
		background-color: aliceblue;
		gap: 1.2rem;
	}
	/* arrow icon */
	& aside article {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding-bottom: 2rem;
		margin-left: 1rem;
		cursor: pointer;
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
					<article>
						<IconContext.Provider value={{ size: '2.6rem', className: 'arrow_icon' }}>
							<MdKeyboardDoubleArrowUp />
							<MdKeyboardDoubleArrowDown />
						</IconContext.Provider>
					</article>
				</aside>
			</aside>
		</ItemBoxWrapper>
	);
};

export default ItemBox;
