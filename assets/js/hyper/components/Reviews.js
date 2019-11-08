import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		return (
			<div>
				<h5 class="comp-title">REVIEWS</h5>
				<h2>
					{
						state.globalState.reviewsData[
							state.globalState.reviewStatus.currentReview
						].company
					}
				</h2>
				<h4>
					{
						state.globalState.reviewsData[
							state.globalState.reviewStatus.currentReview
						].highlight
					}
				</h4>
				<p>
					{
						state.globalState.reviewsData[
							state.globalState.reviewStatus.currentReview
						].review
					}
				</p>
				<div class="author">
					<strong>
						{
							state.globalState.reviewsData[
								state.globalState.reviewStatus.currentReview
							].author
						}
					</strong>{' '}
					-{' '}
					<em>
						{
							state.globalState.reviewsData[
								state.globalState.reviewStatus.currentReview
							].authorInfo
						}
					</em>
				</div>
			</div>
		);
	};

	var rightClickBTN = function() {
		if (
			state.globalState.reviewStatus.currentReview ==
			state.globalState.reviewsData.length --
		) {
			console.log('do nothing');
		} else {
			actions.reviewRightClicked();
		}
	};

	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="side-img">
							<img src="https://img.freepik.com/free-photo/chef-presenting-something-white-background_1368-2825.jpg?size=626&ext=jpg" />
						</div>
					</div>
					<div class="col-md-4">
						{currentReview()}
						<div class="arrows">
							<i
								class={`fa fa-arrow-left ${
									state.globalState.reviewStatus.currentReview > 0
										? 'ready'
										: ''
								}`}
								aria-hidden="true"
							></i>
							<i
								onclick={rightClickBTN}
								class={`fa fa-arrow-right ${
									state.globalState.reviewStatus.currentReview ==
									state.globalState.reviewsData.length -- 
										? ''
										: 'ready'
								}`}
								aria-hidden="true"
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
