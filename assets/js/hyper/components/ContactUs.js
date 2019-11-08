import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs">
			<div class="container">
				<h5 class="comp-title">ContactUs</h5>
				<h2>Reservations | Community Sponsoring | Questions</h2>
				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="title">{state.globalState.companyInfo.location}</div>
							<h6 class="address">
								2071 W 25th St
								<br /> Cleveland, OH 44113
							</h6>
							<p>
								<strong>Email:</strong>{' '}
								<a href="mailto:info@ohiocityprimesteak.com">
									info@ohiocityprimesteak.com
								</a>
							</p>
						</div>
						<div class="col-md-6">
							<h6>Phone:</h6>
							<div class="title">216-555-6785</div>
							<h6>Lunch Service:</h6>
							<h6>
								<p>Daily: Bookings from 12pm - 2pm</p>
							</h6>
							<h6>Dinner Service:</h6>
							<h6>
								<p>Daily: Bookings from 6pm - 10pm</p>
							</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
