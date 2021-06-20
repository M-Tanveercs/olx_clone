 import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Logo from '../imges/logo1.png'
import '../stylesheet/header.css';
const Header = () => {

    return (
    
    <React.Fragment>
    <div className="Header_container">
            <div className="Header_leftContainer">
<img src={Logo} alt="OLX-CLONE-LOGO" className="Header__leftContainerlogo" />

            </div>
            <div className="Header__leftcontainer">
            <SearchIcon className="Header__leftIcon" />
                <input type="text" placeholder="Your Location" value="Search city, area or loc..."  className="Header__leftInputField"/>
                
                <KeyboardArrowDownIcon className="Header__leftIcon" />
            </div>
            <div className="Header_centerContainer">
            <input type="text" placeholder="Find cars, mobile and gaming consoles" 
            className="Header__centerInputField "
            />
                        <SearchIcon className="Header__centerIcon" />
            </div>
            <div className="Header_rightContainer">
                <h4 className="Header__rightLinkText">  Login</h4>
                <button className="Header__rightButton">+SELL</button>
            </div>
        </div>

        {/* ............ */}
        
        <div class="manu-bar">
           
    <ul>
        <li class="active"><a href="#"> ALL CATEGORIES</a></li>
    
        <li><a href="#"><i class="fa fa-mobile" ></i>Mobile Phone</a>
        <div class="sub-menu-1">
    <ul>
        <li><a href="#">Tablets</a></li>
            <li><a href="#">Accessories</a></li>
                <li><a href="#">Popular</a></li>
    </ul>
    </div>
        
        </li>
        <li><a href="#"><i class="fa fa-tv" ></i>Tv-Video-Aideo</a>
            <div class="sub-menu-1">
                <ul>
                    <li><a href="#">computer</a></li>
                        <li class="hover-me"><a href="#">Appliances</a>
                        <div class="sub-menu-2">
    
                            <ul>
        <li><a href="#">Ac</a></li>
            <li><a href="#">Fridges</a></li>
                <li><a href="#">Washing Machines</a></li>
    </ul>
                        </div> 
                    </li>  
                        <li class="hover-me"><a href="#">Bikes</a>
                        <div class="sub-menu-2">
    
                            <ul>
        <li><a href="#">Motorcycle</a></li>
            <li><a href="#">Bicycle</a></li>
                <li><a href="#">ATV & Quads</a></li>
                <li><a href="#">Scooters </a></li>
                <li><a href="#">Location</a></li>
    </ul>
                        </div>  
                        </li>
                </ul>
                </div></li>
        <li><a href="#"><i class="fa fa-home" ></i>Houses</a></li>
        <li><a href="#"><i class="fa fa-arrow-down" ></i>Land&Plots</a></li>
        <li><a href="#"><i class="fa fa-car" ></i>Cars</a></li>
        <li><a href="#"><i class="fa fa-tablet" ></i>Tablets</a></li>
        <li><a href="#"><i class="fa fa-phone" ></i>Contact</a></li>
    </ul>
    </div>

        </React.Fragment>
    )
}

export default Header
        
        {/* <div className="bottom_list">
            <button className="b2">
                <h2 className="s18 font" >All Categories</h2>  */}
                {/* <KeyboardArrowDownIcon className="Header__leftIcon" /> */}
           
            {/* </button>
            <ul className="list items">
                <li><a href="#">Mobile Phone</a></li>
                <li><a href="#">Cars</a></li>
                <li><a href="#">Motercycle</a></li>
                <li><a href="#">Houses</a></li>
                <li><a href="#">tv-Vdeo-Audio</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Land & Plots</a></li>
        
            </ul> */}

    
