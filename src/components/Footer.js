import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
<footer>

<div class="container-fluid mt-5">
    <div class="lcard mx-5">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text pull-left">
                    <div class="d-flex">
                        <h1>SportShopApi</h1>
                    </div>
                    <div class="social mt-2 mb-3"> <i class="fa fa-facebook-official fa-lg"></i> <i class="fa fa-instagram fa-lg"></i> <i class="fa fa-twitter fa-lg"></i> <i class="fa fa-linkedin-square fa-lg"></i> <i class="fa fa-facebook"></i> </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Services</h5>
                <ul>
                    <li>IT Consulting -</li>
                    <li>Development</li>
                    <li>Cloud</li>
                    <li>DevOps & Support</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Social</h5>
                <ul class="card-text">
                    <li>LinkedIn</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Github</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Company</h5>
                <ul class="card-text">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Join Us</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" Style="font-size:10px;">
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-left">
                    <p><i class="fa fa-copyright"></i> 2021 SportShopApi</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-right mr-4 d-flex policy">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</footer>
  )}
export default Footer;