import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<nav class="menu">
					<a href="#OurStory">Our Story</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#ContactUs">Contact Us</a>
				</nav>
				<ul class="social-media">
					<li>
						<a href="http://www.facebook.com" target="new">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="http://www.twitter.com" target="new">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="http://www.instagram.com" target="new">
							<i class="fa fa-instagram" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="http://www.youtube.com" target="new">
							<i class="fa fa-youtube-play" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
				<div class="copyright">
					Created by: <span>Brandon Waller</span>
				</div>
			</div>
		</footer>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
