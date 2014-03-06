if (Meteor.isClient) {
	Template.hello.badgeData = {
		textTop: "Meteor",
		textBottom: "Certified",
		image: {
			url: 'http://mrcoles.com/media/img/meteor-js.png',
			x: 296,
			y: 462,
			width: 147,
			height: 152
		}
	}
}

/*
<image transform="translate(9.374998,-35.624998)" y="477" x="294" id="image6050"
   xlink:href="/One_hand_handstand1.jpg" height="147" width="152"
   clip-path="url(#clipPath6053)"></image>
*/