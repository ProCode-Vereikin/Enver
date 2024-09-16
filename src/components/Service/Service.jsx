import React from 'react'
import './Service.css'
import { useInView } from 'react-intersection-observer'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'

const Service = () => {
	// Используем useInView для отслеживания видимости контейнера
	const { ref, inView } = useInView({
		triggerOnce: false, // Анимация будет срабатывать каждый раз, когда элемент становится видимым
		threshold: 0.1, // Порог видимости (0.1 = 10%)
	})

	return (
		<div className='service'>
			<div className='container'>
				<div className='service-list'>
					<img src={assets.vector_4} className='service-icon-top' alt='' />
					<img src={assets.vector_4} className='service-icon-down' alt='' />
					<div className='service-promo' ref={ref}>
						<motion.h2
							initial={{ x: '-100vw' }}
							animate={{ x: inView ? 0 : '-100vw', opacity: inView ? 1 : 0 }}
							transition={{
								type: 'spring',
								stiffness: 50, // Мягкая пружина
								damping: 10, // Высокая амортизация для уменьшения отскоков
								mass: 1, // Легкая масса для плавного движения
								duration: 1, // Общая продолжительность анимации
							}}
							className='service-title'
						>
							The Service We Provide For You
						</motion.h2>
						<motion.img
							initial={{ x: '-100vw', rotate: 0 }}
							animate={{ x: inView ? 0 : '-100vw', rotate: inView ? 360 : 0 }}
							transition={{
								type: 'tween',
								duration: 1, // Длительность анимации в секундах
								ease: 'easeOut',
							}}
							src={assets.vector_3}
							className='service-icon-title'
							alt=''
						/>
					</div>
					<div className='service-content'>
						<div className='service-content-list'>
							<div
								className='service-content-item'
							>
								<img
									src={assets.development}
									className='service-item-img'
									alt=''
								/>
								<h3 className='service-item-title'>Development</h3>
								<p className='service-item-description'>
									Create a platform with the best and coolest quality from us.
								</p>
							</div>
							<div
								className='service-content-item'
							>
								<img
									src={assets.ui_ux_designer}
									className='service-item-img'
									alt=''
								/>
								<h3 className='service-item-title'>UI/UX Designer</h3>
								<p className='service-item-description'>
									We provide UI/UX Design services, and of course with the best
									quality
								</p>
							</div>
							<div
								className='service-content-item'
							>
								<img
									src={assets.graphik_designer}
									className='service-item-img'
									alt=''
								/>
								<h3 className='service-item-title'>Graphik Designer</h3>
								<p className='service-item-description'>
									We provide Graphic Design services, with the best designers
								</p>
							</div>
						</div>
						<div className='service-content-list'>
							<div
								className='service-content-item'
							>
								<img
									src={assets.motion_graphik}
									className='service-item-img'
									alt=''
								/>
								<h3 className='service-item-title'>Motion Graphik</h3>
								<p className='service-item-description'>
									Create a platform with the best and coolest quality from us.
								</p>
							</div>
							<div
								className='service-content-item'
							>
								<img
									src={assets.photography}
									className='service-item-img'
									alt=''
								/>
								<h3 className='service-item-title'>Photography</h3>
								<p className='service-item-description'>
									We provide Photography services, and of course with the best
									quality
								</p>
							</div>
							<div
								className='service-content-item'
							>
								<img
									src={assets.videography}
									className='service-item-img'
									alt=''
								/>
								<h3 className='service-item-title'>Videography</h3>
								<p className='service-item-description'>
									Create a platform with the best and coolest quality from us.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Service