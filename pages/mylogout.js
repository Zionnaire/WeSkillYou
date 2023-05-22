import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';


const Logout = () => {
    const router = useRouter();
  
    useEffect(() => {
      const handleLogout = async () => {
        // Call the signOut function from next-auth/client to sign out the user
        await signOut();
  
        // Redirect the user to the desired page after signing out (e.g., homepage)
        router.push('/');
      };
  
      handleLogout();
    }, []);
  
    return null;
  };
  
  export default Logout;
  