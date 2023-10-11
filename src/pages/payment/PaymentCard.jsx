import React from 'react';

const PaymentCard = () => {
	return (
		<div>
			<h2>카드 결제</h2>
			{/* 안내창 */}
			<div>
				<p>다음 그림과 같이 신용/체크 카드를 넣어주세요</p>
				<img src="" alt="" />
			</div>
			<div>
				<h3>
					총 결제 금액 <span>47,000</span>
				</h3>
				<h3>
					할부 개월 <span>일시불</span>
				</h3>
				<h3>
					카드번호 <span> 333322**2***18**</span>
				</h3>
			</div>
			<div>
				<button>취소</button>
				<button>승인 요청</button>
			</div>
		</div>
	);
};

export default PaymentCard;
