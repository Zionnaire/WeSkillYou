import React from 'react'
import help from '../images/help.png'

export default function Help() {
  return (
    <>
		<div class="HelpBig">
			<div class="HelpHold">
				<div class="HelpMain">
					<fieldset class="HelpHead">
						<article class="HelpHeadone">
							<p> Connect one-on-one with an expert and get your answer in minutes</p>
						</article>
						<article class="HelpHeadtwo">
							<img src={help} alt=""/>
							<div class="HelpHeadtwop">
								<p>
									Welcome! how can i help with your question
								</p>
							</div>
						</article>
					</fieldset>
					<fieldset class="HelpDown">
						<input type="Textarea" placeholder="Describe your issue......"/>
						<a href="*"><button>Start chat</button></a>
					</fieldset>
				</div>
			</div>
		</div>
	
	</>
	)
}