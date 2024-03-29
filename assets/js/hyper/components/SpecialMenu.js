import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	var loopMenu = function() {
		return state.globalState.specialMenuData.map(function(item) {
			return (
				<div class="col-md-4">
					<div class="box">
						<div class="box-img">
							<div class="price-circle">${item.price}</div>
						</div>
						<span class="title">{item.title}</span>
						<p class="details">{item.description}</p>
					</div>
				</div>
			);
		});
	};

	return (
		<section id="SpecialMenu">
			<div class="container">
				<h5 class="comp-menu">Special Menu</h5>
				<h2>Favorites</h2>
				<div class="row boxes">{loopMenu()}</div>
			</div>
		</section>
	);
}

// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
