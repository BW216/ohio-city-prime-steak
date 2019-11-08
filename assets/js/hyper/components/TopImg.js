import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section id="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome</h5>
					<h1>
						Ohio City <br />
						Prime Steak
					</h1>
				</div>
				<div class="contact-info">
					<div class="container">
						<div class="booking">Book A Table Now</div>
						<h2>(216) 555 - 6785</h2>
						<div class="hours">
							Open: <strong>7 Days A Week</strong> 9am-11pm
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
