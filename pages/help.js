import React from 'react'
import styles from '@/styles/help.module.css'
import Link from 'next/link'

export default function Help() {
  return (
    <>
		<div className={styles.HelpBig}>
			<div className={styles.HelpHold}>
				<div className={styles.HelpMain}>
					<fieldset className={styles.HelpHead}>
						<article className={styles.HelpHeadone}>
							<p> Connect one-on-one with an expert and get your answer in minutes</p>
						</article>
						<article className={styles.HelpHeadtwo}>
							<img src="/help.png" alt=""/>
							<div className={styles.HelpHeadtwop}>
								<p>
									Welcome! how can i help with your question
								</p>
							</div>
						</article>
					</fieldset>
					<fieldset className={styles.HelpDown}>
						<input type="Textarea" placeholder="Describe your issue......"/>
						<Link href="/"><button>Start chat</button></Link>
					</fieldset>
				</div>
			</div>
		</div>
	
	</>
	)
}