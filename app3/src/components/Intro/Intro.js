import React from 'react';
import Header from '../Header/Header';
import Hero from '../UI/Hero/Hero';
import Section from '../UI/Section/Section';
import { AiOutlineArrowDown } from 'react-icons/ai';
import {
	TiSocialFacebookCircular,
	TiSocialTwitterCircular,
	TiSocialInstagramCircular,
	TiSocialGithubCircular,
	TiSocialDribbbleCircular,
	TiSocialLinkedinCircular,
} from 'react-icons/ti';
import memoji from '../assets/memoji.svg';
import book from '../assets/book.svg';
import './Intro.scss';

export default function Intro(props) {
	return (
		<>
			<Header />
			<div className='Intro'>
				<Hero className='home_hero' bgColor='#432fa8'>
					<img src={memoji} alt='Christopher Jones Memoji Headshot' />
					<h1>Christopher Jones</h1>
					<h2>
						Dedicated Designer. Passionate Programmer. Chronic
						Creator.
					</h2>
					<p>Front-End Web Developer, UI/UX Designer</p>
					<a className='btn' href='#my-story' uk-scroll='true'>
						Learn More »
					</a>
					<div className='social-icons'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/christoph-codes'
						>
							<TiSocialGithubCircular size={34} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.facebook.com/kingchristoph5'
						>
							<TiSocialFacebookCircular size={34} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.instagram.com/christoph_codes'
						>
							<TiSocialInstagramCircular size={34} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://twitter.com/christoph_codes'
						>
							<TiSocialTwitterCircular size={34} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://dribbble.com/christoph-codes'
						>
							<TiSocialDribbbleCircular size={34} />
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/christopherkirkjones'
						>
							<TiSocialLinkedinCircular size={34} />
						</a>
					</div>
				</Hero>
				<Section id='my-story' bgColor='white'>
					<img
						src={book}
						alt='Christopher Jones Story about his design and development career'
					/>
					<h1>My Story</h1>
					<p>
						My full name is Christopher Kirk Jones and I was born
						and raised in Las Vegas, Nevada. I just left my second
						decade and I am married to my beautiful wife of 8 years
						and we have two happy kids together! I received my
						bachelors degree in graphic design from the University
						of Nevada Las Vegas. I started a branding and logo
						design business called{' '}
						<a
							href='https://thekirkconcept.com'
							rel='noopener noreferrer'
							target='_blank'
						>
							The Kirk Concept
						</a>{' '}
						that I will always continue to grow. In addition to
						designing, I am a self-taught web developer since 2010
						and started programming in 2015. I’m a huge believer in
						do it if you want to learn it and that is how I got here
						today with many skillsets!
					</p>
					<p>
						I spend a lot of time with my family, looking at model
						homes with my wife whether we’re buying or not…lol. My
						faith in Jesus Christ is at the center of everything I
						do, so always expect a smile unless the Vegas sun is
						beaming on my eyelids. I enjoy the sport of football
						since I played at the age of seven all the way through
						college at{' '}
						<a
							href='https://unlv.edu'
							rel='noopener noreferrer'
							target='_blank'
						>
							UNLV.
						</a>{' '}
						I’m a Vegas-Everything fan. I’ve never truly left the
						country yet, outside of Ensenada, Mexico, which I don’t
						feel counts as leaving the country because it is still
						connected to the U.S.. I try to read as many self help
						books as I can and watch a long list of Netflix shows.
						The Cosby Show and Fresh Prince are hands down the best
						shows to binge-watch.{' '}
						<a
							href='https://www.hbo.com/silicon-valley'
							rel='noopener noreferrer'
							target='_blank'
						>
							Silicon Valley
						</a>{' '}
						is probably the most hilarious and relatable show I’ve
						ever seen. I’m an Apple guy since 2009 and coffee is new
						for me but it is a must-have everyday!
					</p>
					<p>
						I have created/started many of amazing ideas from a
						personal training facility MySoloGym, to a Christian
						lifestyle brand{' '}
						<a
							href='https://www.equippdlife.com'
							rel='noopener noreferrer'
							target='_blank'
						>
							Equippd
						</a>
						, all the way to a sunglasses e-commerce store,
						ShadeShip. I’m addicted to creating new ideas and don’t
						plan to stop anytime soon.
					</p>
					<p>
						I’m currently working on a Pokemon manager app with a
						good friend. I’m also building a bill management app
						called{' '}
						<a
							href='https://www.thenextbill.com'
							rel='noopener noreferrer'
							target='_blank'
						>
							NextBill
						</a>{' '}
						written in
						<a
							href='https://vuejs.org/'
							rel='noopener noreferrer'
							target='_blank'
						>
							Vue.JS
						</a>{' '}
						and a fun kids task management app called{' '}
						<a
							href='https://www.inthisorder.app'
							rel='noopener noreferrer'
							target='_blank'
						>
							InThisOrder
						</a>{' '}
						written in{' '}
						<a
							href='https://reactjs.org/'
							rel='noopener noreferrer'
							target='_blank'
						>
							React
						</a>{' '}
						and soon to be{' '}
						<a
							href='https://reactnative.dev/'
							rel='noopener noreferrer'
							target='_blank'
						>
							React Native
						</a>
						. I have a long list of ideas I plan to either sell or
						execute but either way they HAVE to be created because
						the world needs them. More to come, so stay tuned!
					</p>
					<a href='#my-company' uk-scroll='true'>
						<AiOutlineArrowDown size='3em' />
					</a>
				</Section>
			</div>
		</>
	);
}
