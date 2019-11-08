import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section id="RandomQuote">
			<div class="container">
				<h1>
					"Food, to me, is always about cooking and eating with those you love
					and care for."
				</h1>
				<span class="author">Jonathan R. Curts -Head Chef</span>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
