import { Button } from '../button';

const homePlans = () => {
	return (
		<section className="plans container">
			<div className="plans__inner">
				<div className="plans__basic plans--card">
					<h2 className="plans--type">Basic</h2>
					<h3 className="plans--price">Free</h3>
					<p className="plans--billing">Up to 5 users for free</p>
					<div className="plans--info">
						<p>Basic document collaboration</p>
						<p>2 GB storage</p>
						<p>Great security and support</p>
					</div>
					<Button className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">
						Try for Free
					</Button>
				</div>
				<div className="plans__pro plans--card plans--blue">
					<h2 className="plans--type head--white">Pro</h2>
					<h3 className="plans--price">$9.99</h3>
					<p className="plans--billing">Per user, billed monthly</p>
					<div className="plans--info">
						<p>All essential integrations</p>
						<p>50 GB storage</p>
						<p>More control and insights</p>
					</div>
					<Button className="btn" buttonStyle="btn--tertiary" buttonSize="btn--desktop">
						Try for Free
					</Button>
				</div>
				<div className="plans__ultimate plans--card">
					<h2 className="plans--type">Ultimate</h2>
					<h3 className="plans--price">$19.99</h3>
					<p className="plans--billing">Per user, billed monthly</p>
					<div className="plans--info">
						<p>Robust work management</p>
						<p>100 GB storage</p>
						<p>VIP support</p>
					</div>
					<Button className="btn" buttonStyle="btn--secondary" buttonSize="btn--desktop">
						Try for Free
					</Button>
				</div>
			</div>
		</section>
	);
};

export default homePlans;
