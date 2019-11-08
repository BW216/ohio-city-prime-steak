import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="container">
				<div class="logo">OCPS</div>
				<nav>
					<a href="#OurStory">Our Story</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Contact Us</a>
				</nav>
			</div>
		</header>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
