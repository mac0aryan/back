const myString = `

<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->


    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">

    <!-- CSS Reset : BEGIN -->
<style>

html,
body {
    margin: 0 auto !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background: #f1f1f1;
}

/* What it does: Stops email clients resizing small text. */
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*="margin: 16px 0"] {
    margin: 0 !important;
}

/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue. */
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
    -ms-interpolation-mode:bicubic;
}

/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
a {
    text-decoration: none;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
.unstyle-auto-detected-links *,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
.a6S {
    display: none !important;
    opacity: 0.01 !important;
}

/* What it does: Prevents Gmail from changing the text color in conversation threads. */
.im {
    color: inherit !important;
}

/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
    display: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */

/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
}
/* iPhone 6, 6S, 7, 8, and X */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
}
/* iPhone 6+, 7+, and 8+ */
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}

</style>

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
<style>

.primary{
	background: #f3a333;
}

.bg_white{
	background: #ffffff;
}
.bg_light{
	background: #fafafa;
}
.bg_black{
	background: #000000;
}
.bg_dark{
	background: rgba(0,0,0,.8);
}
.email-section{
	padding:2.5em;
}

/*BUTTON*/
.btn{
	padding: 10px 15px;
}
.btn.btn-primary{
	border-radius: 30px;
	background:#0d6efd;
	color: #ffffff;
}



h1,h2,h3,h4,h5,h6{
	font-family: 'Playfair Display', serif;
	color: #000000;
	margin-top: 0;
}

body{
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 15px;
	line-height: 1.8;
	color: rgba(0,0,0,.4);
}

a{
	color: #f3a333;
}

table{
}
/*LOGO*/

.logo h1{
	margin: 0;
}
.logo h1 a{
	color: #000;
	font-size: 20px;
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Montserrat', sans-serif;
}

/*HERO*/
.hero{
	position: relative;
}
.hero img{

}
.hero .text{
	color: rgba(255,255,255,.8);
}
.hero .text h2{
	color: #ffffff;
	font-size: 30px;
	margin-bottom: 0;
}


/*HEADING SECTION*/
.heading-section{
}
.heading-section h2{
	color: #000000;
	font-size: 28px;
	margin-top: 0;
	line-height: 1.4;
}
.heading-section .subheading{
	margin-bottom: 20px !important;
	display: inline-block;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: rgba(0,0,0,.4);
	position: relative;
}
.heading-section .subheading::after{
	position: absolute;
	left: 0;
	right: 0;
	bottom: -10px;
	content: '';
	width: 100%;
	height: 2px;
	background: rgb(15,195,250,.8);
	margin: 0 auto;
}

.heading-section-white{
	color: rgba(255,255,255,.8);
}
.heading-section-white h2{
	font-size: 28px;
	font-family: 
	line-height: 1;
	padding-bottom: 0;
}
.heading-section-white h2{
	color: #ffffff;
}
.heading-section-white .subheading{
	margin-bottom: 0;
	display: inline-block;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: rgba(255,255,255,.4);
}


.icon{
	text-align: center;
}
.icon img{
}


/*SERVICES*/
.text-services{
	padding: 10px 10px 0; 
	text-align: center;
}
.text-services h3{
	font-size: 20px;
}

/*BLOG*/
.text-services .meta{
	text-transform: uppercase;
	font-size: 14px;
}

/*TESTIMONY*/
.text-testimony .name{
	margin: 0;
}
.text-testimony .position{
	color: rgba(0,0,0,.3);

}


/*VIDEO*/
.img{
	width: 100%;
	height: auto;
	position: relative;
}
.img .icon{
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	bottom: 0;
	margin-top: -25px;
}
.img .icon a{
	display: block;
	width: 60px;
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -25px;
}



/*COUNTER*/
.counter-text{
	text-align: center;
}
.counter-text .num{
	display: block;
	color: #ffffff;
	font-size: 34px;
	font-weight: 700;
}
.counter-text .name{
	display: block;
	color: rgba(255,255,255,.9);
	font-size: 13px;
}


/*FOOTER*/

.footer{
	color: rgba(255,255,255,.5);

}
.footer .heading{
	color: #ffffff;
	font-size: 20px;
}
.footer ul{
	margin: 0;
	padding: 0;
}
.footer ul li{
	list-style: none;
	margin-bottom: 10px;
}
.footer ul li a{
	color: rgba(255,255,255,1);
}


@media screen and (max-width: 500px) {

	.icon{
		text-align: left;
	}

	.text-services{
		padding-left: 0;
		padding-right: 20px;
		text-align: left;
	}

}
.jdtslogo{
    width:30px;
    border-radius: 50%;
    position: relative;
    top:.4rem
}

</style>


</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
	<center style="width: 100%; background-color: #f1f1f1;">
    <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      	<tr>
          <td class="bg_white logo" style="padding: 1em 2.5em; text-align: center">
            <h1><img class="jdtslogo" src="./media/JDTlogo.png" alt=""><a href="www.jdtechnicalsolution.com">JDTECHNICALSOLUTION</a></h1>
          </td>
	      </tr><!-- end tr -->
				<tr>
          <td valign="middle" class="hero" style="background-image: url(./media/seo1.webp); background-size: cover; height: 400px;">
            <table>
            	<tr>
            		<td>
            			<div class="text" style="padding: 0 3em; text-align: center;">
            				<h2>Automate Today!</h2>
            				<p>                        
                                JD Technical Solution is a gateway to open a Business with the best Automated and Integrated Technology around you.
                            </p>
            				<!-- <p><a href="#" class="btn btn-primary">Automate Today!</a></p> -->
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr><!-- end tr -->
	      <tr>
		      <td class="bg_white">
		        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
		          <tr>
		            <td class="bg_dark email-section" style="text-align:center;">
		            	<div class="heading-section heading-section-white">
		            		<span class="subheading">Welcome</span>
		              	<h2>Welcome To JDTS</h2>
		              	<p>
                            Welcome to JD Technical Solution, your one-stop destination for cutting-edge Digital Solutions and Managed Services.
                        </p>
		            	</div>
		            </td>
		          </tr><!-- end: tr -->
		          <tr>
		            <td class="bg_white email-section">
		            	<div class="heading-section" style="text-align: center; padding: 0 30px;">
		            		<span class="subheading">Services</span>
		              	<h2>Our Services</h2>
		              	<p></p>
		            	</div>
		            	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
		            <tr>
                      <td valign="top" width="50%" style="padding-top: 20px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td class="icon">
                              <img src="./media/seo5.webp" alt="" style="width: 150px; max-width: 600px; height: auto; margin: auto; display: block;">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-services">
                            	<h3>Digital Marketing</h3>
                             	<p>
                                    At JD Technical Solution, we are passionate about helping businesses succeed in the digital world. With a team of experienced digital marketers, creative designers, and technical experts, we specialize in delivering customized digital marketing solutions tailored to meet the unique needs and goals of each of our clients.                                </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="50%" style="padding-top: 20px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td class="icon">
                              <img src="./media/WDCarousel.jpg" alt="" style="width: 150px; max-width: 600px; height: 97.99px ; margin: auto; display: block;">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-services">
                            	<h3>Software Development</h3>
                              <p>
                                At JD Technical Solution, we are dedicated to crafting exceptional websites that captivate audiences, drive engagement, and deliver results for our clients. With a team of talented designers, developers, and strategists, we specialize in creating custom web solutions tailored to meet the unique goals of our clients.
                            </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                        <td valign="top" width="50%" style="padding-top: 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td class="icon">
                                <img src="./media/autodialDemo.jpg" alt="" style="width: 150px; max-width: 600px; height: 97.99px; margin: auto; display: block;">
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services">
                                  <h3>Software Development</h3>
                                   <p>
                                    At JD Technical Solution, we are a leading software development company dedicated to delivering innovative and high-quality software solutions to businesses of all sizes. With a team of experienced developers, engineers, and project managers, we specialize in creating custom software products that address our clients' unique challenges and drive their success in the digital age.                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="top" width="50%" style="padding-top: 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td class="icon">
                                <img src="./media/MD3.png" alt="" style="width: 150px; max-width: 600px; height: 97.99px ; margin: auto; display: block;">
                              </td>
                            </tr>
                            <tr>
                              <td class="text-services">
                                  <h3>Media Development</h3>
                                <p>
                                    At JD Technical Solution, we are a leading media development company specializing in creating captivating and engaging digital media content for businesses, brands, and organizations. With a team of talented creatives, designers, developers, and storytellers, we are dedicated to delivering innovative and high-quality media solutions that help our clients stand out in today's competitive landscape.                              </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
		            	</table>
		            </td>
		          </tr><!-- end: tr -->
		          <!-- <tr>
		            <td class="bg_light email-section" style="text-align:center;">
		            	<table>
		            		<tr>
		            			<td class="img">
		            				<table>
		            					<tr>
		            						<td>
		            							<img src="images/bg_2.jpg" width="600" height="" alt="alt_text" border="0" style="width: 100%; max-width: 600px; height: auto; margin: auto; display: block;" class="g-img">
		            						</td>
		            					</tr>
		            				</table>
		            				<div class="icon">
			            				<a href="#">
		                        <img src="images/002-play-button.png" alt="" style="width: 60px; max-width: 600px; height: auto; margin: auto; display: block;">
		                      </a>
	                      </div>
		            			</td>
		            		</tr>
		            		<tr>
		            			<td style="padding-top: 20px;">
		            				<h2>Watch Our Video</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		            			</td>
		            		</tr>
		            	</table>
		            </td>
		          </tr>end: tr -->
		         <!-- end: tr -->
		          <tr>
		            <td class="bg_light email-section">
		            	<div class="heading-section" style="text-align: center; padding: 0 30px;">
		            		<span class="subheading">Blogs</span>
		              	<h2>Testimonial</h2>
		              	<p>
                            What I appericiate most at JDTS are the results.We started in October and the results exceed our expectatios!                            </p>
		            	</div>
		            	<table role="presentation" border="0" cellpadding="10" cellspacing="0" width="100%">
		            		<tr>
                      <td valign="top" width="50%" style="padding-top: 20px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td>
                              <img src="./media/testimonial-1.jpg" alt="" style="width: 100px; max-width: 600px; height: auto; margin: auto; margin-bottom: 20px; display: block; border-radius: 50%;">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-testimony" style="text-align: center;">
                            	<h3 class="name">Florian F</h3>
                            	<span class="position">CEO, Ketorecipe</span>
                             	<p>
                                    I spend a $3K on video shoot and we got back the first day we started running ads from those creatives.                                </p>
                             	<!-- <p><a href="#" class="btn btn-primary">Read more</a></p> -->
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="50%" style="padding-top: 20px;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td>
                              <img src="./media/testimonial-2.jpg" alt="" style="width: 100px; max-width: 600px; height: auto; margin: auto; margin-bottom: 20px; display: block; border-radius: 50%;">
                            </td>
                          </tr>
                          <tr>
                            <td class="text-testimony" style="text-align: center;">
                            	<h3 class="name">Alan</h3>
                            	<span class="position">CEO, Brilliant Pad</span>
                              <p>
                                What I appericiate most at JDTS are the results.We started in October and the results exceed our expectatios!                              </p>
                              <!-- <p><a href="#" class="btn btn-primary">Read more</a></p> -->
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
		            	</table>
		            </td>
		          </tr><!-- end: tr -->
		          
		        </table>

		      </td>
		    </tr><!-- end:tr -->
      <!-- 1 Column Text + Button : END -->
      </table>
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      	<tr>
          <td valign="middle" class="bg_black footer email-section">
            <table>
            	<tr>
                <td valign="top" width="33.333%" style="padding-top: 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-right: 10px;">
                      	<h3 class="heading">RestoBar</h3>
                      	<p style="color:rgba(255,255,255,.4)">Crush Your Competition Now</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="padding-top: 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
                      	<h3 class="heading">Contact Info</h3>
                      	<ul style="color:rgba(255,255,255,.4)">
					                <li><span class="text">B1 ,Soilder Tower, Commercial Complex
                                        New Delhi, 110018</span></li>
					                <li><span class="text">+91 9971979794</span></a></li>
					              </ul>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="padding-top: 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-left: 10px;">
                      	<h3 class="heading">Useful Links</h3>
                      	<ul>
					                <li><a href="#">Home</a></li>
					                <li><a href="#">Contact</a></li>
					                <li><a href="#">About</a></li>
					                <li><a href="#">Services</a></li>
					              </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr><!-- end: tr -->
        <tr>
        	<td valign="middle" class="bg_black footer email-section">
        		<table>
            	<tr>
                <td valign="top" width="33.333%">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: left; padding-right: 10px;">
                      	<p style="color: rgba(255,255,255,.4);">&copy; 2014 jdtechnicalsolution &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: right; padding-left: 5px; padding-right: 5px;">
                      	<p><a href="#" style="color: rgba(255,255,255,.4);">Unsubcribe</a></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
        	</td>
        </tr>
      </table>

    </div>
  </center>
</body>
</html>

`;
module.exports = myString;
