import React from 'react'
import './Hero.css'
import 'boxicons/css/boxicons.min.css'
import { useInView } from 'react-intersection-observer'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
	// Используем useInView для отслеживания видимости контейнера
	const { ref, inView } = useInView({
		triggerOnce: false, // Анимация будет срабатывать каждый раз, когда элемент становится видимым
		threshold: 0.1, // Порог видимости (0.1 = 10%)
	})
	return (
		<div className='hero'>
			<div className='container'>
				<div className='hero-list'>
					<div ref={ref} className='hero-item-left'>
						<motion.h1
							className='hero-title'
							initial={{ x: '-100vw' }}
							animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
							transition={{
								type: 'spring',
								stiffness: 50, // Мягкая пружина
								damping: 10, // Высокая амортизация для уменьшения отскоков
								mass: 1, // Легкая масса для плавного движения
								duration: 1, // Общая продолжительность анимации
							}}
						>
							Build Your <br />
							Awesome <br />
							Platform
						</motion.h1>
						<motion.p
							className='hero-subtitle'
							initial={{ x: '-100vw' }}
							animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
							transition={{
								type: 'spring',
								stiffness: 50, // Мягкая пружина
								damping: 10, // Высокая амортизация для уменьшения отскоков
								mass: 1, // Легкая масса для плавного движения
								duration: 1, // Общая продолжительность анимации
								delay: 0.2,
							}}
						>
							Enver studio is a digital studio that offers several services such
							as UI/UX Design to developers, we will provide the best service
							for those of you who use our services.
						</motion.p>
						<Link to='services' smooth={true} duration={100}>
							<motion.button
								className='hero-btn'
								initial={{ x: '-100vw' }}
								animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
								transition={{
									type: 'spring',
									stiffness: 50, // Мягкая пружина
									damping: 10, // Высокая амортизация для уменьшения отскоков
									mass: 1, // Легкая масса для плавного движения
									duration: 1, // Общая продолжительность анимации
									delay: 0.3,
								}}
							>
								<p>Our Services</p>
								<motion.i
									ref={ref}
									class='bx bx-chevron-right hero-icon'
									initial={{ rotate: 0 }}
									animate={{ rotate: inView ? 360 : 0 }}
									transition={{
										type: 'tween',
										duration: 1, // Длительность анимации в секундах
										ease: 'easeOut',
										delay: 0.4,
									}}
								></motion.i>
							</motion.button>
						</Link>
					</div>
					<div className='hero-item-right'>
						<motion.img
							src={assets.vector_1}
							className='hero-vector-one'
							alt=''
							initial={{ x: '-100vw' }}
							animate={{ x: inView ? 0 : '-100vw' }}
							transition={{
								type: 'spring',
								stiffness: 90,
								damping: 10, // Высокая амортизация для уменьшения отскоков
								mass: 1, // Легкая масса для плавного движения
								duration: 1, // Общая продолжительность анимации
								delay: 0.4,
							}}
						/>
						<motion.img
							src={assets.vector_2}
							className='hero-vector-two'
							alt=''
							initial={{ x: '-100vw', rotate: 0 }}
							animate={{ x: 0, rotate: 720 }} // Два оборота на 360 градусов (720)
							transition={{
								type: 'tween',
								duration: 1, // Длительность анимации в секундах
								ease: 'easeOut',
							}}
						/>
						<motion.img
							src={assets.vector_3}
							className='hero-vector-three'
							alt=''
							initial={{ rotate: 90 }}
							animate={{ scale: 1.1, rotate: 0 }}
							transition={{ duration: 1, ease: 'easeOut' }}
						/>
						<motion.img
							src={assets.vector_4}
							className='hero-vector-four'
							alt=''
							initial={{ x: '-100vw', rotate: 0 }}
							animate={{ x: 0, rotate: 1440 }} // Два оборота на 360 градусов (720)
							transition={{
								type: 'tween',
								duration: 1, // Длительность анимации в секундах
								ease: 'easeOut',
							}}
						/>
						<img src={assets.hero} className='hero-img' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
