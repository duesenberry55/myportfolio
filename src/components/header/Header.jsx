import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '.././../assets/me2.png'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header id='header'>
<div className='container header__container'>
<h5>Hey There! I am,</h5>
<h1>Duesenberry Mbikang Agbortar Ako</h1>
<h5 className='text-light'>Founder/CEO of Supreme Social Media Making Agency | Wordpress Developer </h5>
<CTA/>
{/* here we are using the imported CTA component */}
<HeaderSocial/>
{/* same here */}
<div className='my_image'>

{/* <img src= "./src/assets/me2.jpg" alt='duesenberry'/> */}
 <img src= {me} alt="duesenberry" width={900} height={400} />

</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;