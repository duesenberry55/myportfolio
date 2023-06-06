import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://linkedin.com/in/duesenberry55' target='blank'><BsLinkedin/> </a>
<a href='https://github.com/duesenberry55' target='blank'><FaGithub/> </a>
<a href='https://linktr.ee/duesenberry' target='blank'><FaFacebookF/> </a>
<a href='https://instagram.com/duesenberry55' target='blank'><FaInstagram/> </a>
<a href='https://twitter.com/Duesenberry55' target='blank'><CgTwitter/> </a>
</div>
)
}
export default HeaderSocial