// import React from 'react';
// import styles from '@/styles/newsidebar.module.css'

// export default function NewNavbar(){
//     useEffect(() => {
//         const list = document.querySelectorAll('.list');
    
//         function activeLink() {
//           list.forEach((item) => item.classList.remove('active'));
//           this.classList.add('active');
//         }
        
//         list.forEach((item) => item.addEventListener('click', activeLink));
//       });
//     return(
//         <>
//         <div className={styles.navigation}>
//     <ul>
//       <li className={styles.active}>
//         <a href="#">
//           <span className={styles.icon}>
//             <i className={`'bx bxs-dashboard' ${styles.bx}`}></i>
//           </span>
//           <span className={styles.title}>Dashboard</span>  
//         </a>
//       </li>
//       <li className={styles.active}>
//         <a href="#">
//           <span className="icon">
//             <i class='bx bx-user' ></i>
//           </span>
//           <span className="title">User</span>  
//         </a>
//       </li>
//       <li class="list">
//         <a href="#">
//           <span class="icon">
//             <i class='bx bx-message'></i>
//           </span>
//           <span class="title">Messages</span>  
//         </a>
//       </li>
//       <li class="list">
//         <a href="#">
//           <span class="icon">
//             <i class='bx bx-line-chart'></i>
//           </span>
//           <span class="title">Analytics</span>  
//         </a>
//       </li>
//       <li class="list">
//         <a href="#">
//           <span class="icon">
//             <i class='bx bx-cart' ></i>
//           </span>
//           <span class="title">Order</span>  
//         </a>
//       </li>
//       <li class="list">
//         <a href="#">
//           <span class="icon">
//             <i class='bx bx-cog' ></i>
//           </span>
//           <span class="title">Setting</span>  
//         </a>
//       </li><li class="list">
//         <a href="#">
//           <span class="icon">
//             <i class='bx bx-log-out' ></i>
//           </span>
//           <span class="title">Sign Out</span>  
//         </a>
//       </li>
//     </ul> 
//   </div>
//         </>
//     )
// }