import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '@/styles/signup.module.css'
import Link from 'next/link'

export default function Signup() {
  return (
    <>
    <Container>
        <div className={styles.big_wrap}>
			<div className={styles.wrap}>
				<div className={styles.main_wrap}>
					<fieldset className={styles.SignupSectHead}>
						<h1>Welcome!</h1>
						<h1>Sign up to continue!</h1>
					</fieldset>
					<fieldset className={styles.SignupSectContent}>
						<Link href="/"><button><img src="/Ggoogle.png" alt="Google"/>Sign Up with Google</button></Link>
						<Link href="/"><button><img src="/facebook.png" alt="Facebook"/>Sign Up with Facebook</button></Link>
						<h2>or</h2>
						<Link href="/register"><button><strong>Sign Up with Email</strong></button></Link>
						<p>
							By signing up you are agreed with our friendly <a href='#'>terms and condition</a>.
						</p>
					</fieldset>
					<fieldset className={styles.signupsect_footer}>
						<h2>Already have an account?</h2>
						<Link href="/signin"><button className={styles.SignupSignin}>Sign in</button></Link>
					</fieldset>
				</div>
			</div>
		</div>
        </Container>
    </>
  )
}