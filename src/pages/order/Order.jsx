import React from 'react';

const Order = () => {
	return (
		<div>
			{/* 타이틀 */}
			<h2>주문 확인</h2>
			{/* 아이템 창 */}
			<div>
				{/* 아이템 디테일 */}
				<div>
					<img src="" alt="" />
					<p>텍스트</p>
					<div>
						<button>+</button>
						<p>개수</p>
						<button>-</button>
					</div>
				</div>
				{/* 가격표 */}
				<div>
					<p>
						총 수량 <span>2</span>개 <span>47,000</span>원
					</p>
				</div>
				{/* 결제 버튼 */}
				<div>
					<button>애플페이</button>
					<button>카카오페이</button>
					<button>신용카드</button>
					<button>현금결제</button>
					<button>취소하기</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
