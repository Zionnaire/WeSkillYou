import React, { useEffect, useState } from 'react'
import styles from '../styles/registerpage.module.css'
import Link from 'next/link'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'

export default function Register() {
	const[username, setUsername] = useState('');
	const[email, setEmail] = useState('')
	const[password, setPassword] = useState('');
	const[cPassword, setCpassword] = useState('')
	const[role, setRole] = useState("")
	const [roles,setRoles] = useState([])
let handleRegister = async() =>{
	let request = {
		uName : username,
		email : email,
		password : password,
		cPassword : cPassword,
		role:role
	}
	let response = await axios.post('https://we-skill.vercel.app/api/v1/auth/register', request)
	// console.log(response);
	toast(response.data.message)
	if(role !== "Student" || role !== "Tutor"){
		Router.push("/myadmin")
	}
	else{
		Router.push("/mylogin")
	}

}
// let fetchRoles =async()=>{
// 	let resp = await axios.get('http://localhost:4000/roles')
// 	setRoles(resp.data.roles)
// }
// useEffect(() => {
// 	fetchRoles()
// })

  return (
    <>
	<ToastContainer/>
		<div className={styles.big_wrap}>
			<div className={styles.wrap}>
				<div className={styles.main_wrap}>
					<fieldset className={styles.sect_head}>
						<Link href="" id="back"><svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.00009 16.9201L1.48009 10.4001C0.710088 9.63008 0.710088 8.37008 1.48009 7.60008L8.00009 1.08008" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</Link>
						<h1>Enter your details</h1>
					</fieldset>
					<fieldset className={styles.sect_form}>
						<form>
							<label for="username">
								<input id="username" type="text" value={username} placeholder="username" onChange={e =>setUsername(e.target.value)} required/>
								    
							</label>
							<label for="email">
								<input id="email" type="email" value={email} placeholder="email@address.com" onChange={e =>setEmail(e.target.value)} required/>
								
							</label>
							<label for="pass1">
								<input id="pass1" type="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
								
							</label>
							<label for="pass2">
								<input id="pass2" type="password" value={cPassword} placeholder="Confirm password" onChange={e => setCpassword(e.target.value)} required/>
								
							</label>
						
							<select value={role} onChange={(e) => {
          setRole(e.target.value);}}>
								
									<option value={role._id}>Student</option>
									<option value={role._id}>Tutor</option>
									<option value={role._id}>Admin</option>
									
							
								
							</select>
						</form>
					</fieldset>
					<fieldset className={styles.RegisterSectFooter}>
						<button onClick={handleRegister}>Continue</button>
					</fieldset>
				</div>
			</div>
		</div>
    </>
  )
}
