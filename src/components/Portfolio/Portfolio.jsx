import React from 'react'
import './Portfolio.css'
import { useInView } from 'react-intersection-observer'
import { assets } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { motion } from 'framer-motion'

const Portfolio = () => {
	// Используем useInView для отслеживания видимости контейнера
	const { ref, inView } = useInView({
		triggerOnce: false, // Анимация будет срабатывать каждый раз, когда элемент становится видимым
		threshold: 0.1, // Порог видимости (0.1 = 10%)
	})

	return (
		<div className='portfolio'>
			<div className='container'>
				<div className='portfolio-list' ref={ref}>
					<motion.img
						initial={{ x: '-100vw', rotate: 0 }}
						animate={{ x: inView ? 0 : '-100vw', rotate: inView ? 0 : 720 }} // Два оборота на 360 градусов (720)
						transition={{
							type: 'tween',
							duration: 1, // Длительность анимации в секундах
							ease: 'easeOut',
						}}
						src={assets.vector_2}
						className='portfolio-vector-one'
						alt=''
					/>
					<motion.img
						initial={{ x: '-100vh' }}
						animate={{ x: inView ? 0 : '-100vh' }}
						transition={{ type: 'spring', stiffness: 110, duration: 1 }}
						src={assets.vector_1}
						className='portfolio-vector-two'
						alt=''
					/>
					<div className='portfolio-promo' ref={ref}>
						<motion.h2
							initial={{ x: '-100vw' }}
							animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
							transition={{
								type: 'spring',
								stiffness: 50, // Мягкая пружина
								damping: 10, // Высокая амортизация для уменьшения отскоков
								mass: 1, // Легкая масса для плавного движения
								duration: 1, // Общая продолжительность анимации
								delay: 0.1,
							}}
							className='portfolio-title'
						>
							Our Awesome Portofolio
						</motion.h2>
					</div>
					<div className='portfolio-content'>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar]}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
							crollbar={{ draggable: true }}
						>
							<SwiperSlide>
								<img src={assets.project} className='portfolio-img' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={assets.project} className='portfolio-img' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={assets.project} className='portfolio-img' alt='' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
