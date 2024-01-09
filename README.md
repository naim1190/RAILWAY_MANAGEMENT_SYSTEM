<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Railway.Management</title>
    <link rel="stylesheet" href="mystyle.css">
</head>
<body>
    <!--Header part start-->
    <header>
        <div class="logo">
            <img src="Railway logo.jpg">
        </div>
        
        <div class="heading">
            Bangladesh Railway
        </div>
        <div class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Station Information</a>
              
                <ul>
                    <li>Chittagong</li>
                    <li>Dhaka</li>
                    <li>Sylhet</li>
                    <li>Cumilla</li>
                </ul>
                </li>
                <li><a href="#">Services</a>
                <ul>
                        <li>Train Schedule</li>
                        <li>Station Information</li>
                        <li>Buy Ticket</li>
                    </ul>
                </li>
                <li><a href="#">Contact Us</a>
                <ul>
                    <li>01833-515057 (Naim)</li>
                    <li>01884-055866 (Sham)</li>
                    <li>01952-332506 (Ratul)</li>
                    <li>01867-939450 (Sagor)</li>

                </ul>
                </li>
                

            </ul>
        </div>
    </header>
    <hr style="color:aquamarine;">
    <br><br><br>
    <!--Header part end-->

    <!--Form Start-->
    
    <div class="formD">
    <form>
        <label for="station">From:</label>
        <input list="sta" style="font-size: 20px;" placeholder="Select Station">
        <datalist id="sta">
            <option value="Chittagong"></option>
            <option value="Dhaka"></option>
            <option value="Cumilla"></option>
            <option value="Sylhet"></option>

</datalist> 
                <label for="station">To:</label>
                <input list="sta" style="font-size: 20px;" placeholder="Select Station">
                <datalist id="sta">
                    <option value="Chittagong"></option>
                    <option value="Dhaka"></option>
                    <option value="Cumilla"></option>
                    <option value="Sylhet"></option>
                </datalist> <br> <br>
                
                <label for="date">Date of Journey:</label> <br>
                <input type="date" id="date" style="font-size: 25px;" placeholder="pick a date"> <br><br>

                <label for="seat">Choose a class:</label><br>
                <input list="seat" style="font-size: 20px;" placeholder="choose a class">
                <datalist id="seat">
                    <option value="AC_B"></option>
                    <option value="AC_S"></option>
                    <option value="SNIGDHA"></option>
                    <option value="F_BERTH"></option>
                    <option value="F_SEAT"></option>
                    <option value="F_CHAIR"></option>
                    <option value="S_CHAIR"></option>
                    <option value="SHOVAN"></option>
                    <option value="SHULOV"></option>
                    <option value="AC_CHAIR"></option>
                </datalist>
                

    </form>
    <!--Form End-->
    
    </div><br>
    <div class="search"> <a href="seat.html" class="seatlink">SEARCH TRAIN</a></div> 
    
    
    <hr style="color: bisque;">
    <div class="img">
        <img src="https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png">
        <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png">
        <img src="https://play-lh.googleusercontent.com/cCVvEEwDQSPmDO8F-kryWhvzy53JllG1FGtHGDG-SDgfVTvvYSvWEXXDbgAY0hf7Bg">
        <img src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png">
       <img src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Visa-Payment-Card-900x0.png">
       <img src="https://hostmight.com/assets/images/dbbl.png">
    </div>
    
    <hr style="color: bisque;">
    
    <!--Footer Start-->
    
    <footer>
        <hr style="color:aquamarine;">
        <div class="foot">
            <h2>Bangladesh Railway</h2>

        </div>
        <div class="text">
            <p>The tickets are issued by Bangladesh Railway Integrated Ticketing System (BRITS) and premier university's CSE 42<sup>nd</sup> Batch Student is responsible for designing, development, implementation, technical operation & maintenance of the system.</p> 

        </div>
        <div class="icon">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-youtube"></i>
    </div>

    <div class="copyright">
        Copyright @2024 Premier University
    </div>
    </footer>
    <!--Footer End-->


</body>
</html>
