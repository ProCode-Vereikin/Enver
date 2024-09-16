import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
		<div className='footer'>
			<div className='container'>
				<div className='footer-list'>
					<img src={assets.logo} className='footer-logo' alt='' />
					<ul className='footer-menu'>
						<li className='footer-menu-item'>Support</li>
						<li className='footer-menu-item'>Privacy Policy</li>
						<li className='footer-menu-item'>Terms and Conditions</li>
					</ul>
					<p className='footer-policy'>© 2020 Enver, All Rights Reserved</p>
				</div>
			</div>
		</div>
	)
}

export default Footer