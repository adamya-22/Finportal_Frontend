import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    {/* <!-- footer --> */}
    <footer>
        <div class="f1">
            <div class="f11"><a class="navbar-brand" href="https://front.codes/" target="_blank"><img width="800" height="206" src="wp-content/uploads/sites/111/2021/06/pajax-logo-6-1024x264.png" class="attachment-large size-large wp-image-3989" alt="" decoding="async" loading="lazy" srcset="https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-1024x264.png 1024w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-300x77.png 300w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-768x198.png 768w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-1536x395.png 1536w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-2048x527.png 2048w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-800x206.png 800w, https://templatekit.jegtheme.com/pajax/wp-content/uploads/sites/111/2021/06/pajax-logo-6-e1626234217274.png 1920w" sizes="(max-width: 800px) 100vw, 800px" /></a></div>
            <div class="f12"><a href="#"><b>Address: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, et.</a></div>
            <div class="f12"><a href="#"><b>Phone: </b>+91 8787878787</a></div>
            <div class="f12"><a href="#"><b>Email: </b>Loremipsum@gmail.com</a></div>
            <div class="f13">
                <a href="#" class="f13-font"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="f13-font"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="f13-font"><i class="fa-brands fa-square-twitter"></i></a>
                <a href="#" class="f13-font"><i class="fa-brands fa-pinterest-p"></i></a>
            </div>
        </div>
        <div class="f1">
            <div class="f21"><h3>Information</h3></div>
            <div class="f22"><a href="#">About Us</a></div>
            {/* <div class="f22"><a href="#">Checkout</a></div> */}
            <div class="f22"><a href="#">Contact</a></div>
            <div class="f22"><a href="#">Serivius</a></div>
        </div>
        <div class="f1">
            <div class="f21"><h3>My Account</h3></div>
            <div class="f22"><a href="#">My Account</a></div>
            <div class="f22"><a href="#">Contact</a></div>
            {/* <div class="f22"><a href="#">Shopping Cart</a></div> */}
            <div class="f22"><a href="#">Shop</a></div>
        </div>
        <div class="f1">
            <div class="f21"><h3>Join our Newsletter Now</h3></div>
            <div class="f12">Get E-mail updates about our latest shop and special offers</div>
            <div class="f43">
                <input type="email" placeholder="Enter your Email"/>
                <button class="newsletter">Subscribe</button>
            </div>
        </div>
    </footer>
    {/* <div class="fade_rule"></div>   */}
    <div class="foo-bel">
        <p>Copyright &copy; 2023 - <a href="https://wictronix.com/"><b>WictroniX</b></a>. All rights reserved</p>
      </div>
    </>
    )
}

export default Footer