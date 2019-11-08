import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2>Our City. Our Family. Forever.</h2>
						<p>
							Ohio City Prime Steak was established in 2012 on Cleveland's west
							side. With an emphasis on establishing trust in our community, we
							strive to be active in supporting local businesses and youth
							programs. We are a restaurant by definition but above all, we are
							a community partner by choice.
						</p>
						<div class="quote">
							"The best steak in Cleveland." -<strong>Wayne Eggsy</strong>
						</div>
						<a href="#ContactUs" class="reserve-btn">
							Reserve
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
