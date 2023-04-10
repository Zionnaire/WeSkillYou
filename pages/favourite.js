import React from 'react'
// import img from '../images'
import styles from '@/styles/favourite.module.css'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import NavBar from '@/components/head'
import { Container } from 'react-bootstrap'


export default function Favourite() {
  return (
    <>
	<NavBar />
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