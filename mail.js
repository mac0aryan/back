const html=`
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #f1f1f1; margin: 0 auto !important; padding: 0 !important; height: 100% !important; width: 100% !important;">
<head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->


    <style>
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_qiTXtHA_A.ttf) format('truetype');}
@font-face {
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v37/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_k-UXtHA_A.ttf) format('truetype');}
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf) format('truetype');}
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDXbtY.ttf) format('truetype');}
</style>

    <!-- CSS Reset : BEGIN -->
<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
  u ~ div .email-container {
    min-width: 320px !important;
  }
}
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
  u ~ div .email-container {
    min-width: 375px !important;
  }
}
@media only screen and (min-device-width: 414px) {
  u ~ div .email-container {
    min-width: 414px !important;
  }
}
</style>

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
<style>
@media screen and (max-width: 500px) {
  .icon {
    text-align: left;
  }

  .text-services {
    padding-left: 0;
    padding-right: 20px;
    text-align: left;
  }
}
</style>


</head>

<body width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #f1f1f1; font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 15px; line-height: 1.8; color: rgba(0,0,0,.4); mso-line-height-rule: exactly; background-color: #222222; margin: 0 auto !important; height: 100% !important; width: 100% !important; padding: 0 !important;">
	<center style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width: 100%; background-color: #fffdfd;">
    <div style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; max-width: 600px; margin: 0 auto;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
      	<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td class="bg_white logo" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 1em 2.5em; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
            <h1 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; margin: 0;"><img class="jdtslogo" src="https://jdtechnicalsolution.com/static/media/mail1.png" alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 30px; border-radius: 50%; position: relative; top: .4rem;" width="30"><a href="www.jdtechnicalsolution.com" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: #000; font-size: 20px; font-weight: 700; text-transform: uppercase; font-family: 'Montserrat', sans-serif;">JDTECHNICALSOLUTION</a></h1>
          </td>
	      </tr><!-- end tr -->
				<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td valign="middle" class="hero" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; position: relative; background-image: url(https://jdtechnicalsolution.com/static/media/mail2.webp); background-size: cover; height: 400px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" height="400" background="https://jdtechnicalsolution.com/static/media/googleAdwordsbanner.07772462c28558a95161.png">
            <table style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
            	<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
            		<td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
            			<div class="text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8); padding: 0 3em; text-align: center;">
            				<h2 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; margin-top: 0; color: #ffffff; font-size: 30px; margin-bottom: 0;">Automate Today!</h2>
            				<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">                        
                                JD Technical Solution is a gateway to open a Business with the best Automated and Integrated Technology around you.
                            </p>
            				<!-- <p><a href="#" class="btn btn-primary">Automate Today!</a></p> -->
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr><!-- end tr -->
	      <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
		      <td class="bg_white" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
		        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
		          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
		            <td class="bg_dark email-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: rgba(0,0,0,.8); padding: 2.5em; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
		            	<div class="heading-section heading-section-white" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.8);">
		            		<span class="subheading" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; position: relative; display: inline-block; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,.4); margin-bottom: 20px !important;">Welcome</span>
		              	<h2 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin-top: 0; line-height: 1.4; font-size: 28px; font-family: line-height: 1; padding-bottom: 0; color: #ffffff;">Welcome To JDTS</h2>
		              	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            Welcome to JD Technical Solution, your one-stop destination for cutting-edge Digital Solutions and Managed Services.
                        </p>
		            	</div>
		            </td>
		          </tr><!-- end: tr -->
		          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
		            <td class="bg_white email-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; padding: 2.5em; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
		            	<div class="heading-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; padding: 0 30px;">
		            		<span class="subheading" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: rgba(0,0,0,.4); position: relative; margin-bottom: 20px !important;">Services</span>
		              	<h2 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; font-size: 28px; margin-top: 0; line-height: 1.4;">Our Services</h2>
		              	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"></p>
		            	</div>
		            	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
		            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td valign="top" width="50%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td class="icon" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                              <img src="https://jdtechnicalsolution.com/static/media/mail3.webp" alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 150px; max-width: 600px; height: auto; margin: auto; display: block;" width="150" height="auto">
                            </td>
                          </tr>
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td class="text-services" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 10px 10px 0; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                            	<h3 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; font-size: 20px;">Digital Marketing</h3>
                             	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
				<ul style="list-style:none;">
				  <li>googleAds</li>
				  <li>metaAds</li>
				  <li>SEO</li>
			       </ul>                            
	  		</td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="50%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td class="icon" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                              <img src="https://jdtechnicalsolution.com/static/media/mail4.jpg" alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 150px; max-width: 600px; height: 97.99px; margin: auto; display: block;" width="150" height="97.99">
                            </td>
                          </tr>
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td class="text-services" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 10px 10px 0; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                            	<h3 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; font-size: 20px;">Website Development</h3>
                              <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
			      <ul style="list-style: none;">
					<li>Basic </li>
					<li>e-Commerce </li>
					<li>Automated/Advanced</li>
			      </ul>
                            </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                        <td valign="top" width="50%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <td class="icon" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                                <img src="https://jdtechnicalsolution.com/static/media/mail5.jpg" alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 150px; max-width: 600px; height: 97.99px; margin: auto; display: block;" width="150" height="97.99">
                              </td>
                            </tr>
                            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <td class="text-services" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 10px 10px 0; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                                  <h3 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; font-size: 20px;">Software Development</h3>
                                   <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
				   	<ul style="list-style:none;">
						<li>Custom Software Development</li>
						<li>Cross-Platform App Development</li>
						<li>DevOps Services</li>
						<li>UI/UX Design Services</li>
					</ul>
       				   </p>
				   
                            </tr>
                          </table>
                        </td>
                        <td valign="top" width="50%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <td class="icon" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                                <img src="https://jdtechnicalsolution.com/static/media/mail6.png" alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 150px; max-width: 600px; height: 97.99px; margin: auto; display: block;" width="150" height="97.99">
                              </td>
                            </tr>
                            <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                              <td class="text-services" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding: 10px 10px 0; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                                  <h3 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; font-size: 20px;">Media Development</h3>
                                <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"> 
					<ul style="list-style:none;">
						<li>Amimated Pictures</li>
						<li>3D Motion</li>
						<li>Product Design</li>
						<li>Logo Design</li>
						<li>Festive Post</li>
					</ul>
				</p>
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
		          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
		            <td class="bg_light email-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #fafafa; padding: 2.5em; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
		            	<div class="heading-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; padding: 0 30px;">
		            		<span class="subheading" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; display: inline-block; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: rgba(0,0,0,.4); position: relative; margin-bottom: 20px !important;">Blogs</span>
		              	<h2 style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; font-size: 28px; margin-top: 0; line-height: 1.4;">Testimonial</h2>
		              	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            What I appericiate most at JDTS are the results.We started in October and the results exceed our expectatios!                            </p>
		            	</div>
		            	<table role="presentation" border="0" cellpadding="10" cellspacing="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
		            		<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td valign="top" width="50%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                              <img alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 100px; max-width: 600px; height: auto; margin: auto; margin-bottom: 20px; display: block; border-radius: 50%;" src="https://jdtechnicalsolution.com/static/media/mail7.jpg" width="100" height="auto">
                            </td>
                          </tr>
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td class="text-testimony" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                            	<h3 class="name" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; margin: 0;">Florian F</h3>
                            	<span class="position" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(0,0,0,.3);">CEO, Ketorecipe</span>
                             	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                                    I spend a $3K on video shoot and we got back the first day we started running ads from those creatives.                                </p>
                             	<!-- <p><a href="#" class="btn btn-primary">Read more</a></p> -->
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td valign="top" width="50%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                              <img alt style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; -ms-interpolation-mode: bicubic; width: 100px; max-width: 600px; height: auto; margin: auto; margin-bottom: 20px; display: block; border-radius: 50%;" src="https://jdtechnicalsolution.com/static/media/mail8.jpg" width="100" height="auto">
                            </td>
                          </tr>
                          <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                            <td class="text-testimony" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: center; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="center">
                            	<h3 class="name" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; color: #000000; margin-top: 0; margin: 0;">Alan</h3>
                            	<span class="position" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(0,0,0,.3);">CEO, Brilliant Pad</span>
                              <p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
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
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
      	<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
          <td valign="middle" class="bg_black footer email-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; padding: 2.5em; color: rgba(255,255,255,.5); mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
            <table style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
            	<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; padding-right: 10px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
                      	<h3 class="heading" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; margin-top: 0; color: #ffffff; font-size: 20px;">JD Technical Solution</h3>
                      	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.4);">Crush Your Competition Now</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; padding-left: 5px; padding-right: 5px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
                      	<h3 class="heading" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; margin-top: 0; color: #ffffff; font-size: 20px;">Contact Info</h3>
                      	<ul style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0; color: rgba(255,255,255,.4);">
					                <li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><span class="text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">B1 ,Soilder Tower, Commercial Complex
                                        New Delhi, 110018</span></li>
							<li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><span class="text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"> 7611 W Thomas Rd, Phoenix, AZ, 85022, USA
                                        </span></li>
					                <li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><span class="text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">+91 9971979794</span></li>
							<li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><span class="text" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">+1-888-821-5749</span></li>
				              
		   </ul>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; padding-left: 10px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
                      	<h3 class="heading" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; font-family: 'Playfair Display', serif; margin-top: 0; color: #ffffff; font-size: 20px;">Useful Links</h3>
                      	<ul style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0;">
					                <li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><a href="#" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);">Home</a></li>
					                <li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><a href="#" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);">Contact</a></li>
					                <li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><a href="#" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);">About</a></li>
					                <li style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; list-style: none; margin-bottom: 10px;"><a href="#" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,1);">Services</a></li>
					              </ul>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr><!-- end: tr -->
        <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
        	<td valign="middle" class="bg_black footer email-section" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; padding: 2.5em; color: rgba(255,255,255,.5); mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
        		<table style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
            	<tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: left; padding-right: 10px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="left">
                      	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: rgba(255,255,255,.4);">&copy; 2014 JD Technical Solution </br> All Rights Reserved</p>
                      </td>
                    </tr>
                  </table>
                </td>
                <td valign="top" width="33.333%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; border-spacing: 0 !important; border-collapse: collapse !important; table-layout: fixed !important; margin: 0 auto !important;">
                    <tr style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                      <td style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-align: right; padding-left: 5px; padding-right: 5px; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important;" align="right">
                      	<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"><a href="#" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; text-decoration: none; color: rgba(255,255,255,.4);">Unsubcribe</a></p>
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
`
module.exports=html;
