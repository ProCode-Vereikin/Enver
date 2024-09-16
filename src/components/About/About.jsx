import React, { useState, useRef } from 'react'
import './About.css'
import { useInView } from 'react-intersection-observer'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const videoRef = useRef(null)

	// Используем useInView для отслеживания видимости контейнера
	const { ref, inView } = useInView({
		triggerOnce: false, // Анимация будет срабатывать каждый раз, когда элемент становится видимым
		threshold: 0.1, // Порог видимости (0.1 = 10%)
	})

	const handlePlayPause = () => {
		if (isPlaying) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}

	const handleEnded = () => {
		setIsPlaying(false)
		videoRef.current.currentTime = 0
	}

	return (
		<div className='about'>
			<div className='container'>
				<div className='about-list'>
					<div className='about-promo' ref={ref}>
						{' '}
						{/* Применяем ref */}
						{/* Анимация заголовка */}
						<motion.h2
							initial={{ x: '-100vw', opacity: 0 }}
							animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							className='about-title'
						>
							Why Enver Is The Best Choice?
						</motion.h2>
						{/* Анимация подзаголовка */}
						<motion.p
							initial={{ x: '-100vw', opacity: 0 }}
							animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
							transition={{
								type: 'spring',
								stiffness: 50,
								damping: 10,
								duration: 1,
							}}
							className='about-subtitle'
						>
							Watch this one minute video so you understand why you should use
							our services!
						</motion.p>
					</div>

					<div className='about-content'>
						<video
							ref={videoRef}
							src={assets.video}
							className='video'
							muted
							onEnded={handleEnded}
							onClick={handlePlayPause}
						/>
						{!isPlaying && (
							<div className='overlay' onClick={handlePlayPause}>
								<i className='bx bx-play'></i>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
