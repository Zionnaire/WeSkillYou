import styles from '@/styles/settings.module.css'
import React from 'react'
import Link from 'next/link'
export default function Setting(){
	return(
		<>
			<div className={styles.SettingBigWrap}>
				<div className={styles.SettingWrap}>
					<div className={styles.SettingMain}>
						<fieldset className={styles.SettingHead}>
							<div>
								<p>Account</p>
								<article className={styles.SettingArt}>
									<h2>Profile settings</h2>
									<Link href="/"><button>Manage</button></Link>
								</article>
								<hr/>
							</div>
							<div>
								<p>Security</p>
								<article className={styles.SettingArt}>
									<h2>Password change</h2>
									<Link href="/"><button>Manage</button></Link>
								</article>
								<hr/>
							</div>
						</fieldset>
						<fieldset className={styles.SettingFoot}>
							<article className={styles.SettingArt2}>
								<Link href="/">
									<p>Help & support</p>
									<img src="/span.png" alt="span"/>
								</Link>
							</article>
							<article className={styles.SettingArt2}>
								<Link href="/">
									<p>About us</p>
									<img src="/span.png" alt="span"/>
								</Link>
							</article>
							<article className={styles.SettingArt2}>
								<Link href="/">
									<p>Terms and Condition</p>
									<img src="/span.png" alt="span"/>
								</Link>
							</article>
							<article className={styles.SettingArt2}>
								<Link href="">
									<p>Privacy Policy</p>
									<img src="/span.png" alt="span"/>
								</Link>
							</article>
						</fieldset>
					</div>
				</div>
			</div>
		</>
	)
}