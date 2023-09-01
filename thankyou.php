<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eco-life</title>
    <?php include 'header-links.php';?>
    <style>
        .page-title {position: relative;padding:170px 0;background-image:url(./assets/images/thankyou-banner.jpg);background-size: cover;background-position: center center;background-repeat: no-repeat;}
        .auto-container {position: static;max-width: 1200px;padding: 0 15px;margin: 0 auto;}
        .page-title h1 {position: relative;float: left;font-size: 36px;color: #fff;line-height: 50px;font-weight: 600;}
        .page-title .bread-crumb {position: relative;float: right;padding: 10px 0;}
        .page-title .bread-crumb li {position: relative;float: left;font-size: 16px;line-height: 30px;color: #fff;font-weight: 400;text-transform: capitalize;cursor: default;padding-right: 15px;margin-right: 15px;}
        .page-title .bread-crumb li:first-child:before {position: absolute;right: -8px;font-size: 16px;line-height: 30px;color: #fff;content: "/";font-family: LineAwesome;}
        .orng:hover{color:#FFF;}
        .enquire {font-size: 15px;color: #fff;display: inline-block;padding: 10px 30px;border-radius: 10px;background-color: rgb(21 134 201);border: 0;}
        .tq{font-size:68px;} 

        @media only screen and (max-width: 767px){  
        .page-title h1 {font-size: 28px !important;line-height: 1.2em !important;}
        .page-title .bread-crumb {float: left;width: 100%;}
        .page-title{padding:190px 0 !important;}
        .page-title{background-image:url(./assets/images/bg.jpg);}
        }
    </style>   
</head>

<body>
 <?php include 'header.php';?>
    <section class="page-title">
        <div class="auto-container">
            <div class="inner-container clearfix">
                <h1 id="tc"><span style="font-size:25px">Hurray!!<br>
                <span style="font-size:40px;text-transform: capitalize;"></span> Your Submission is successful.<br>
                OUR TEAM WILL CONTACT YOU SOON</span><br>
                
                <sup id="apply"></sup></h1>
                    
                <ul class="bread-crumb clearfix" style="list-style:none;">
                    <li><a href="index.php" style="color:black;">Home</a></li>
                    <li>Thank you</li>
                </ul>
            </div>
        </div>
    </section>
    <div class="button-container text-center my-5">
          <a href="index.php" class="enquire orng">BACK TO HOME</a>
    </div>

    <?php include 'footer.php'; ?>

    <?php 
    if ($_GET['download'] == 1)
    {
    ?>
    <iframe src="download.php" style="display:none;"></iframe>
    <?php 
    }
    ?>
    <?php include 'footer-links.php'; ?>
 
</body>

</html>

