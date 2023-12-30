
import Feed from "@components/Feed";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className=' head_text text-center'>
    <span className='red_gradient text-center'>(</span>
    <span className='blue_gradient  head_text text-center'>Happy</span>
      <br className='max-md:hidden' />
      <span className='red_gradient text-center'>_New_</span>
      <br className='max-md:hidden' />
      <span className='blue_gradient  head_text text-center'>year</span>
      <span className='red_gradient text-center'>)</span>
    </h1>
    <p className='desc text-center'>
      Happy New year to all share your post and tell your ideas
      of new year what you do in your new year.
      on right-top <b>Press the profile picture of your gmail to create posts.</b>
    
    </p>
  
    <Feed />
  </section>
);

export default Home;
