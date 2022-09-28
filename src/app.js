/** @format */

import React from "react"
import "./styles.scss"
import hero_logo from "./assets/brand/logo-vertical-b-text.png"
import video1 from "./assets/64004-mobile-marketing-lottie-animation.mp4"
import avatar from "./assets/avatar.png"
import { FaCheckCircle } from "react-icons/fa"
import { InlineWidget } from "react-calendly"
function App() {
	return (
		<div>
			<section className='hero_section'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 100 100'
					preserveAspectRatio='none'>
					<polygon
						className='svg--sm'
						fill='#181a1b'
						points='0,0 30,100 65,21 90,100 100,75 100,100 0,100'
					/>
				</svg>
				<img className='hero_logo' src={hero_logo} alt='logo' />
				<div className='hero_container'>
					<div className='hero_text_container'>
						<h1>BETTER BRAND BUILDING</h1>
						<h2>
							We help e-commerce and small businesses produce outstanding
							returns on their brand investments.
						</h2>
						<p>
							Don't waste your time and money on ineffective advertising
							campaigns.
						</p>
						<p>
							It's time to make the most of your advertising budget, and scale
							your business so you can reach more customers.
						</p>
					</div>

					<div className='lottie_container'>
						<lottie-player
							src='https://assets6.lottiefiles.com/private_files/lf30_bgtrs3yr.json'
							background='transparent'
							className='lottie_video'
							style={{ width: "100%", display: "block", margin: "auto" }}
							speed='1'
							autoplay></lottie-player>
					</div>
				</div>
			</section>
			<section className='about_section'>
				<div className='about_container'>
					<h1>The Principles</h1>
					<p>
						At TMN Media, we have a long history of success in working with best
						in the business. Our results have consistently yielded positive
						returns on investment for our clients. We get rid of the
						inefficiencies and formalities that most agencies suffer from.
					</p>
					<p>
						Our case studies for clients are extraordinary, our waiting list is
						longer than your complaints with your current agency, and we're
						looking for clients who fit a certain profile.
					</p>
					<h2>
						Maybe it's you: we're honored to find out. Can we schedule a free
						discovery call?
					</h2>
				</div>
				<button className='contact_button'>
					<h1>Contact our team for more information</h1>
					<p>Book a Free Audit Call</p>
				</button>
			</section>
			<section className='offer_section'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 100 100'
					className='svg--sm'
					preserveAspectRatio='none'>
					<polygon
						fill='#181a1b'
						points='0,0 30,100 65,21 90,100 100,75 100,100 0,100'
					/>
				</svg>
				<div className='offer_container'>
					<div className='offer_text'>
						<h3>What we offer</h3>
						<h1>BRAND BUILDING</h1>
						<p>Need rebranding? a new website? or advertisement? </p>
						<p>
							We do it all and we do things with a devotional focus superior to
							everyone else. We're not for you if you want a one-dimensional
							agency with few service options that won't advance your business
							forward.
						</p>
						<p>
							We are the agency for you if you want a clear breakdown of how
							much was spent, how much was made, and what your net profit was in
							two clicks.
						</p>
						<button
							style={{ backgroundColor: "#feba3b" }}
							className='contact_button'>
							<h1 style={{ color: "black" }}>
								Contact our team for more information
							</h1>
							<p style={{ color: "#360f6f" }}>Book a Free Audit Call</p>
						</button>
					</div>

					<div className='services'>
						<h1>Our Services</h1>
						<p>All you need to make your business better.</p>
						<ul>
							<li>
								<FaCheckCircle className='check-icon' />
								<h4>Social media marketing</h4>
							</li>
							<li>
								<FaCheckCircle className='check-icon' />
								<h4>SEO/Search engine optimization</h4>
							</li>
							<li>
								<FaCheckCircle className='check-icon' />
								<h4>Media planning</h4>
							</li>
							<li>
								<FaCheckCircle className='check-icon' />
								<h4>Analytics</h4>
							</li>
							<li>
								<FaCheckCircle className='check-icon' />
								<h4>Web/App development</h4>
							</li>
							<li>
								<FaCheckCircle className='check-icon' />
								<h4>Graphic design</h4>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className='team_section'>
				<h1 className='team_header_text'>Meet The Team</h1>
				<div className='team_container'>
					<div>
						<div className='team_images'>
							<img src={avatar} alt='' />
							<h1 className='team_names'>Elvis Jusupović</h1>
							<p>Founder/Chief Marketing Officer</p>
						</div>
						<div className='team_images'>
							<img src={avatar} alt='' />
							<h1 className='team_names'>Kenan Serhatlić</h1>
							<p>Founder/Senior Software Engineer</p>
						</div>
					</div>
					<div>
						<div>
							<div className='team_images hasib'>
								<img src={avatar} alt='' />
								<h1 className='team_names'>Hasib Zulfić</h1>
								<p>Founder/Performance Marketer</p>
							</div>
							<div className='team_images'>
								<img src={avatar} alt='' />
								<h1 className='team_names'>Ibro Kardašević</h1>
								<p>Founder/Junior Software Engineer</p>
							</div>
						</div>
					</div>
					<div>
						<div className='team_images '>
							<img src={avatar} alt='' />
							<h1 className='team_names'>Amar Avdić</h1>
							<p>Founder/Client Specialist</p>
						</div>
						<div className='team_images izo'>
							<img src={avatar} alt='' />
							<h1 className='team_names'>Izo Omanović</h1>
							<p>Founder/Client Specialist</p>
						</div>
					</div>
					<p className='team_text'>
						With our fascinating workplace culture, quality of clientele,
						TMN-Media has our pick of the litter all over the world when it
						comes to who we can hire. The team in front of you is the result of
						that.
					</p>
				</div>
			</section>
			<section className='contact_section'>
				<h1>Contact us</h1>
				<div className='contact_container'>
					<div className='contact_text'>
						<h2>Schedule a call with Elvis today!</h2>
						<h3>Free 15-Minute Call</h3>
						<img src={avatar} alt='' />

						<p>
							You will have a clear understanding of the next steps you can take
							for your business to start generating consistent and reliable
							results online with Paid Advertising by the end of this Audit
							call.
						</p>
					</div>
					<InlineWidget
						className='calendly-inline-widget'
						url='https://calendly.com/tmnmedia/aduit-call?back=1&month=2022-09'
					/>
				</div>
			</section>

			<footer className='footer_container'>
				<div className='footer_text'>
					<h1>Have any questions?</h1>
					<p>
						If you have a general inquiry and would like to speak to our expert
						team, you can contact us via email at: contact@tmn-media.com
					</p>
				</div>
				<button
					style={{ backgroundColor: "#feba3b" }}
					className='contact_button'>
					<h1 style={{ color: "black" }}>
						Contact our team for more information
					</h1>
					<p style={{ color: "#360f6f" }}>Book a Free Audit Call</p>
				</button>
				<img className='footer_logo' src={hero_logo} alt='logo' />
				<p>The Marketing Nation company</p>
				<p>All Rights Reserved</p>
				<p>Terms & Conditions | Privacy Policy | Disclaimer</p>
			</footer>
		</div>
	)
}

export default App
