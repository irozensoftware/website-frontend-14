import Login from '@/components/auth/login/Login'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Login",
    description:"login this site ",
  };
}
const page = () => {
  return (
    <>
      <Login/>
    </>
  )
}

export default page
