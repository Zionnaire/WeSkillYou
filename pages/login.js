
// import student from "../images/student.png"
import styles from '@/styles/login.module.css'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import Router from 'next/router'
import axios from 'axios';


export default function Login() {

	const[username, setUsername] = useState('')
	const[password, setPassword] = useState('')
	let handleLogin = async()=>{
		let req = {
		  username:username,
		  password:password
		}
		let response = await axios.post('http://localhost:4000/login', req)
		toast(response.data.message)
		Router.push('/dashboard')
		
	  
	}
  return (
    <>
	<ToastContainer/>
        <div className={styles.big_wrap}>
			<div className={styles.wrap}>
				<div className={styles.main_wrap}>
					<fieldset className={styles.sect_head}>
						<h1>Welcome back!</h1>
						<h1>Sign in to continue!</h1>
					</fieldset>
					<fieldset className={styles.sect_content}>
						<Link href="/"><button><img src="/Ggoogle.png" alt="Google"/>Log in with Google</button></Link>
						<Link href="/"><button><img src="/facebook.png" alt="Facebook"/>Log in with Facebook</button></Link>
						<h2>or</h2>
						<label for="username">
							<input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} required/><br/>
						</label>
						
						<label for="password">
							<input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/><br/>
							password is not vallid
						</label>
					</fieldset>
					<fieldset className={styles.SigninSectFooter}>
						<Link href="/login"><button className={styles.Signup} onClick={handleLogin}>Log in</button></Link>
						<Link href="/"><p className={styles.fort}>Forget password</p></Link>
						<p className={styles.Pbo}>Don’t have an account?<Link href="/signup"> Sign up</Link></p>
					</fieldset>
				</div>
			</div>
		</div>
    </>
  )
}