import React from 'react'
// import help from '../images/help.png'
import styles from '@/styles/help.module.css'

export default function Help() {
  return (
    <>
		<div class={styles.HelpBig}>
			<div class={styles.HelpHold}>
				<div class={styles.HelpMain}>
					<fieldset class={styles.HelpHead}>
						<article class={styles.HelpHeadone}>
							<p> Connect one-on-one with an expert and get your answer in minutes</p>
						</article>
						<article class={styles.HelpHeadtwo}>
							<img src="/help.png" alt=""/>
							<div class={styles.HelpHeadtwop}>
								<p>
									Welcome! how can i help with your question
								</p>
							</div>
						</article>
					</fieldset>
					<fieldset class={styles.HelpDown}>
						<input type="Textarea" placeholder="Describe your issue......"/>
						<a href="/"><button>Start chat</button></a>
					</fieldset>
				</div>
			</div>
		</div>
	
	</>
	)
}