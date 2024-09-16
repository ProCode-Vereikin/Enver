import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useInView } from 'react-intersection-observer'
import { assets } from '../../assets/assets'
import 'boxicons/css/boxicons.min.css'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Navbar = () => {
	// Инициализируем состояние для хранения текущего активного элемента
	const [isActive, setIsActive] = useState('home')
	// Инициализируем состояние для скрола
	const [isScrolled, setIsScrolled] = useState(false)
	// для отслеживания состояния мобильного меню
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	// Используем useInView для отслеживания видимости контейнера
	const { ref, inView } = useInView({
		triggerOnce: false, // Анимация будет срабатывать каждый раз, когда элемент становится видимым
		threshold: 0.1, // Порог видимости (0.1 = 10%)
	})

	useEffect(() => {
		// Обработчик события скролла
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		// Добавляем обработчик скролла
		window.addEventListener('scroll', handleScroll)
		// Удаляем обработчик скролла при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Функция для обработки клика по элементу
	const handleActiveColor = item => {
		setIsActive(item)
		// Если нажали на "Home", прокручиваем страницу вверх
		if (item === 'home') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	const toggleMobileMenu = () => {
		// Переключаем состояние мобильного меню
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
			<div className='container'>
				<div className='navbar-line'>
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.1 }}
						src={assets.logo}
						className='navbar-logo'
						alt=''
					/>
					<ul className='navbar-list'>
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							className={`navbar-item ${isActive === 'home' ? 'active' : ''}`}
							onClick={() => handleActiveColor('home')}
						>
							Home
						</motion.li>

						<Link to='about' smooth={true} duration={100} offset={-50}>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.3 }}
								className={`navbar-item ${
									isActive === 'about' ? 'active' : ''
								}`}
								onClick={() => handleActiveColor('about')}
							>
								About us
							</motion.li>
						</Link>

						<Link to='services' smooth={true} duration={100}>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.4 }}
								className={`navbar-item ${
									isActive === 'services' ? 'active' : ''
								}`}
								onClick={() => handleActiveColor('services')}
							>
								Services
							</motion.li>
						</Link>

						<Link to='projects' smooth={true} duration={100} offset={-50}>
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.5 }}
								className={`navbar-item ${
									isActive === 'projects' ? 'active' : ''
								}`}
								onClick={() => handleActiveColor('projects')}
							>
								Our Projects
							</motion.li>
						</Link>
					</ul>

					<Link to='contact' smooth={true} duration={100} offset={-50}>
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.6 }}
							className={`navbar-btn ${
								isActive === 'contact' ? 'active-btn' : ''
							}`}
							onClick={() => handleActiveColor('contact')}
						>
							Contact us
						</motion.button>
					</Link>
					<motion.i
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className={`bx ${
							isMobileMenuOpen ? 'bx-x' : 'bx-menu'
						} navbar-icon`}
						onClick={toggleMobileMenu}
					></motion.i>
				</div>
			</div>
			{/* мобильное меню */}
			<div
				className={`navbar-modile ${isMobileMenuOpen ? 'open' : ''}`}
				// Закрываем при клике
				onClick={toggleMobileMenu}
				ref={ref}
			>
				<ul className='navbar-modile-list' ref={ref}>
					<motion.li
						className={`navbar-modile-item ${
							isActive === 'home' ? 'active' : ''
						}`}
						onClick={() => handleActiveColor('home')}
						initial={{ x: '200vw' }}
						animate={{ x: inView ? 0 : '200vw' }}
						transition={{ type: 'spring', duration: 0.5 }}
					>
						Home
					</motion.li>

					<Link
						to='about'
						smooth={true}
						duration={100}
						offset={-50}
						onClick={toggleMobileMenu}
					>
						<motion.li
							className={`navbar-modile-item ${
								isActive === 'about' ? 'active' : ''
							}`}
							onClick={() => handleActiveColor('about')}
							initial={{ x: '200vw' }}
							animate={{ x: inView ? 0 : '200vw' }}
							transition={{ type: 'spring', duration: 0.5, delay: 0.1 }}
						>
							About us
						</motion.li>
					</Link>

					<Link
						to='services'
						smooth={true}
						duration={100}
						offset={-50}
						onClick={toggleMobileMenu}
					>
						<motion.li
							className={`navbar-modile-item ${
								isActive === 'services' ? 'active' : ''
							}`}
							onClick={() => handleActiveColor('services')}
							initial={{ x: '200vw' }}
							animate={{ x: inView ? 0 : '200vw' }}
							transition={{ type: 'spring', duration: 0.5, delay: 0.2 }}
						>
							Services
						</motion.li>
					</Link>

					<Link
						to='projects'
						smooth={true}
						duration={100}
						onClick={toggleMobileMenu}
						offset={-50}
					>
						<motion.li
							className={`navbar-modile-item ${
								isActive === 'projects' ? 'active' : ''
							}`}
							onClick={() => handleActiveColor('projects')}
							initial={{ x: '200vw' }}
							animate={{ x: inView ? 0 : '200vw' }}
							transition={{ type: 'spring', duration: 0.5, delay: 0.3 }}
						>
							Our Projects
						</motion.li>
					</Link>
				</ul>
				<Link
					to='contact'
					smooth={true}
					duration={100}
					offset={-50}
					onClick={toggleMobileMenu}
				>
					<motion.button
						className={`navbar-mobile-btn ${
							isActive === 'contact' ? 'active-btn' : ''
						}`}
						onClick={() => handleActiveColor('contact')}
						initial={{ x: '200vw' }}
						animate={{ x: inView ? 0 : '200vw' }}
						transition={{ type: 'spring', duration: 0.5, delay: 0.4 }}
					>
						Contact us
					</motion.button>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
