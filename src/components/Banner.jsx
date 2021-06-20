import React from 'react';
import HomeBanner from '../imges/banner.jpg';
import Homeads from '../imges/adds.gif';
import '../stylesheet/Banner.css';
import img1 from '../imges/m1.jpg';
import heart from '../imges/heart.png';
import img2 from '../imges/b1.jpg';
import img3 from '../imges/c1.jpg';
import img4 from '../imges/p1.jpg';
import img5 from '../imges/h1.jpg';
import img6 from '../imges/b2.jpg';
import img7 from '../imges/c2.jpg';
import img8 from '../imges/p2.jpg';
import img9 from '../imges/h2.jpg';
import img10 from '../imges/t1.jpg';
import img11 from '../imges/b3.jpg';
import img12 from '../imges/c4.jpg';
import img13 from '../imges/p3.jpg';
import img14 from '../imges/h3.jpg';
import img15 from '../imges/c4.jpg';
import img16 from '../imges/c5.jpg';
import img17 from '../imges/c6.jpg';
import img18 from '../imges/m2.jpg';
import img19 from '../imges/c7.jpg';
import img20 from '../imges/b1.jpg';
import img21 from '../imges/c4.jpg';
import img22 from '../imges/t1.jpg';
import img23 from '../imges/h3.jpg';
import img24 from '../imges/f1.png';
import img25 from '../imges/f2.png';



const Banner = () => {
    return (
        <div className="Banner__container">
    <div className="Banner">
    <img src={HomeBanner} alt="Banner" className="HomeBanner" />
    </div>
         <div className="Categories__available">
             <div className="adds"><img src={Homeads} alt="ads"  className="homeads"/></div>
            
             
             </div>   
             <div className="Categories__title">
                <h2>More on recent ads</h2>
                <a href="#"> View More</a>
            </div>
            <div class="testo">
<section class="text1">
    <div id="b3">
    <div className="heart"><img src={heart} alt="heart"  className="heart"/></div>
    <div className="img1"><img src={img1} alt="img1"  className="img1"/></div>
    <div id="div1">
        <h2>RS 23,000</h2>
        <p id="p1">note7</p>
        </div>
        <div id="div2">
        <p >Faisalabad</p>
        <p>3 DAYS AGO</p>
        </div>
    </div>
    <div id="b4">
    <div className="heart"><img src={heart} alt="heart"  className="heart"/></div>
    <div className="img2"><img src={img2} alt="img2"  className="img2"/></div>
    <div id="div3">
        <h2>RS 25,000</h2>
        <p id="p1">super power</p>
        </div>
        <div id="div4">
        <p >Lahore</p>
        <p>5 DAYS AGO</p>
        </div>
    </div>
    <div id="b5">
    <div className="heart"><img src={heart} alt="heart"  className="heart"/></div>
    <div className="img3"><img src={img3} alt="img3"  className="img3"/></div>
    <div id="div5">
        <h2>RS 4,23,000</h2>
        <p id="p1">Mahran</p>
        </div>
        <div id="div6">
        <p >Islamabad</p>
        <p>1 DAYS AGO</p>
        </div>
    </div>
    
      
</section>
<h2 id="box2_heding">Fresh recommendations</h2>
<section class="text2">
    <div id="b6">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img4"><img src={img4} alt="img4"  className="img4"/></div>
    <div id="div7">
        <h2>RS 10,000</h2>
        <p id="p1">Astalian Dog</p>
        </div>
        <div id="div8">
        <p >Multan</p>
        <p>10 DAYS AGO</p>
        </div>
    </div>
    <div id="b7">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img5"><img src={img5} alt="img5"  className="img5"/></div>
    <div id="div9">
        <h2>RS 30,00,000</h2>
        <p id="p1">House 5 Canal</p>
        </div>
        <div id="div10">
        <p >Rawalpindhi</p>
        <p>20 DAYS AGO</p>
        </div>
    </div>
    <div id="b8">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img6"><img src={img6} alt="img6"  className="img6"/></div>
    <div id="div11">
        <h2>RS 40,000</h2>
        <p id="p1">Hondha cc70</p>
        </div>
        <div id="div12">
        <p >Faisalabad</p>
        <p>3 DAYS AGO</p>
        </div>
    </div>
    <div id="b9">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img7"><img src={img7} alt="img7"  className="img7"/></div>
    <div id="div13">
        <h2>RS 23,00,000</h2>
        <p id="p1">Corolla xli</p>
        </div>
        <div id="div14">
        <p >Faisalabad</p>
        <p>30 DAYS AGO</p>
        </div>
    </div>
    
    
</section>

<section class="text3">
<div id="b6">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img8"><img src={img8} alt="img8"  className="img8"/></div>
    <div id="div15">
        <h2>RS 15,000</h2>
        <p id="p1">Rashian Dog</p>
        </div>
        <div id="div16">
        <p >Lahore</p>
        <p>30 DAYS AGO</p>
        </div>
    </div>
    <div id="b7">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img9"><img src={img9} alt="img9"  className="img9"/></div>
    <div id="div17">
        <h2>RS 40,00,000</h2>
        <p id="p1">House 5 marla</p>
        </div>
        <div id="div18">
        <p >Faisalabad</p>
        <p>10 DAYS AGO</p>
        </div>
    </div>
    <div id="b8">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img10"><img src={img10} alt="img10"  className="img10"/></div>
    <div id="div19">
        <h2>RS 30,000</h2>
        <p id="p1">Tablet</p>
        </div>
        <div id="div20">
        <p >Lahore</p>
        <p>3 DAYS AGO</p>
        </div>
    </div>
    <div id="b9">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img11"><img src={img11} alt="img11"  className="img11"/></div>
    <div id="div21">
        <h2>RS 30,000</h2>
        <p id="p1">Hondha</p>
        </div>
        <div id="div22">
        <p >Karchi</p>
        <p>10 DAYS AGO</p>
        </div>
    </div>
    
    
</section>
<section class="text4">
<div id="b6">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img12"><img src={img12} alt="img12"  className="img12"/></div>
    <div id="div23">
        <h2>RS 40,00,000</h2>
        <p id="p1">Car</p>
        </div>
        <div id="div24">
        <p >Lahore</p>
        <p>15 DAYS AGO</p>
        </div>
    </div>
    <div id="b7">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img13"><img src={img13} alt="img13"  className="img13"/></div>
    <div id="div25">
        <h2>RS 10,000</h2>
        <p id="p1">cat</p>
        </div>
        <div id="div26">
        <p >Faisalabad</p>
        <p>10 DAYS AGO</p>
        </div>
    </div>
    <div id="b8">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img14"><img src={img14} alt="img14"  className="img14"/></div>
    <div id="div27">
        <h2>RS 60,00,000</h2>
        <p id="p1">house 10 marla </p>
        </div>
        <div id="div28">
        <p >Larkana</p>
        <p>1 DAYS AGO</p>
        </div>
    </div>
    <div id="b9">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img15"><img src={img15} alt="img15"  className="img15"/></div>
    <div id="div29">
        <h2>RS 35,00,000</h2>
        <p id="p1">car</p>
        </div>
        <div id="div30">
        <p >Faisalabad</p>
        <p>30 DAYS AGO</p>
        </div>
    </div>
    
    
</section>
<section class="text5">
<div id="b6">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img16"><img src={img16} alt="img16"  className="img16"/></div>
    <div id="div31">
        <h2>RS 20,00,000</h2>
        <p id="p">car</p>
        </div>
        <div id="div32">
        <p >Lahore</p>
        <p>12 DAYS AGO</p>
        </div>
    </div>
    <div id="b7">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img17"><img src={img17} alt="img17"  className="img17"/></div>
    <div id="div33">
        <h2>RS 23,00,000</h2>
        <p id="p1">car</p>
        </div>
        <div id="div34">
        <p >Faisalabad</p>
        <p>13 DAYS AGO</p>
        </div>
    </div>
    <div id="b8">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img18"><img src={img18} alt="img18"  className="img18"/></div>
    <div id="div35">
        <h2>RS 25,000</h2>
        <p id="p1">sumsung</p>
        </div>
        <div id="div36">
        <p >Faisalabad</p>
        <p>24 DAYS AGO</p>
        </div>
    </div>
    <div id="b9">
    <div className="heart2"><img src={heart} alt="heart2"  className="heart2"/></div>
    <div className="img19"><img src={img19} alt="img19"  className="img19"/></div>
    <div id="div37">
        <h2>RS 23,000</h2>
        <p id="p1">car</p>
        </div>
        <div id="div38">
        <p >Karchi</p>
        <p>30 DAYS AGO</p>
        </div>
    </div>
    
    
</section>
<button class="but1">Loard more</button>
<div class="footer_pic"> 
<div className="img20"><img src={img20} alt="img20"  className="img20"/></div>
<div className="img21"><img src={img21} alt="img21"  className="img21"/></div>
<div className="img22"><img src={img22} alt="img22"  className="img22"/></div>
<div className="img23"><img src={img23} alt="img23"  className="img23"/></div>
</div>

<div class="bootom_log">
<h3  id="fot_h3">GET YOUR APP TODAY</h3>
    <div className="img24"><img src={img24} alt="img24"  className="img24"/></div>
<div className="img25"><img src={img25} alt="img25"  className="img25"/></div>
</div>

<div class="footer">
    
    <div class="footer-bottom">
      &copy; Olx_Clone | Designied by Muhammad Tanveer
    </div>
</div>   
</div>
      
        </div>
        
    )
}

export default Banner

