import React, { useState } from 'react'
import './Contact.css'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Contact = () => {
	const [result, setResult] = useState('')

	// Используем useInView для отслеживания видимости контейнера
	const { ref, inView } = useInView({
		triggerOnce: false, // Анимация будет срабатывать каждый раз, когда элемент становится видимым
		threshold: 0.1, // Порог видимости (0.1 = 10%)
	})

	const onSubmit = async event => {
		event.preventDefault()
		setResult('Sending....')
		const formData = new FormData(event.target)

		formData.append('access_key', '2574bc55-bb8d-4687-9eb3-3ae1c48436b2')

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		})

		const data = await response.json()

		if (data.success) {
			setResult('Form Submitted Successfully')
			event.target.reset()
		} else {
			console.log('Error', data)
			setResult(data.message)
		}
	}

	return (
		<div className='contact'>
			<div className='container'>
				<div className='contact-list'>
					<div className='contact-promo' ref={ref}>
						<motion.h2
							className='contact-title'
							initial={{ x: '-100vw' }}
							animate={{ x: inView ? 0 : '-100vw' }}
							transition={{ type: 'spring', duration: 1 }}
						>
							Contact us for the service you want to use
						</motion.h2>
					</div>
					<div className='contact-content'>
						<form className='contact-form' onSubmit={onSubmit} ref={ref}>
							<motion.label
								htmlFor='name'
								className='contact-label'
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{ type: 'spring', duration: 1 }}
							>
								Name
							</motion.label>
							<motion.input
								type='text'
								name='name'
								id='name'
								className='contact-input'
								placeholder='Enter your name'
								required
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{
									type: 'spring',
									damping: 15,
									duration: 1,
									delay: 0.1,
								}}
							/>
							<motion.label
								htmlFor='email'
								className='contact-label'
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{ type: 'spring', duration: 1, delay: 0.2 }}
							>
								Email address
							</motion.label>
							<motion.input
								type='email'
								name='email'
								id='email'
								className='contact-input'
								placeholder='Enter your email'
								required
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{
									type: 'spring',
									damping: 15,
									duration: 1,
									delay: 0.3,
								}}
							/>
							<motion.label
								htmlFor='message'
								className='contact-label'
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{ type: 'spring', duration: 1, delay: 0.4 }}
							>
								Message
							</motion.label>
							<motion.textarea
								name='message'
								id='message'
								className='contact-textarea'
								placeholder='Write your message'
								rows={15}
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{
									type: 'spring',
									damping: 15,
									duration: 1,
									delay: 0.5,
								}}
							></motion.textarea>
							<motion.button
								type='submit'
								className='contact-btn'
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw' }}
								transition={{ type: 'spring', duration: 1, delay: 0.6 }}
							>
								Send
							</motion.button>
							<span>{result}</span>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
