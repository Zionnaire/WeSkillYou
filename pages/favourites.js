import React from 'react'
// import img from '../images'
import styles from '../styles/favouritepage.module.css'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import NavBar from '../components/head'
import { Container } from 'react-bootstrap'
import SideBar from '@/components/sidebarpage'


export default function Favourite() {
  return (
    <>
	{/* <NavBar /> */}
	<SideBar />
		<Container>
		
		<div className={styles.FavouriteBig}>
			<div className={styles.FavouriteWrap}>
				<div className={styles.FavouriteHold}>
					<fieldset className={styles.Favouritehead}>
						<img className={styles.fav} src="/favourite.png" alt="images"/>
						<p>You have not saved any video to this space, kindly go back to the course list and save your preferred course.</p>
					</fieldset>
					<fieldset className={styles.FavouriteBigfoot}>
						<Link href="/"><button>Recommend</button></Link>
					</fieldset>
				</div>
			</div>
		</div>
		</Container>
	</>
	)
}