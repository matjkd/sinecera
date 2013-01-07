<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<!-- Meta tags that set up the page as a mobile page   -->
<meta name = "viewport" content = "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">

	<script type="text/javascript" src="//use.typekit.net/suh2via.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<title>Welcome to Sinecera Design</title>

<link rel="stylesheet" src="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css">
<link rel="stylesheet" href="<?= base_url() ?>css/template.css">
	

<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
<script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
</head>
<body>
	
<div class="loader"><img class="loaderimg" src="<?=base_url()?>css/images/circle.png"/></div>

<div id="container">
	<div id="containerback">
	<div id="logoContainer">
	<img id="logo" src="<?=base_url()?>css/images/logo1000.png" width="500px"/>
	
	</div>
	</div>
	
</div>

<div id="footerContainer">
	
</div>

<div id="topmenu">
		
	</div>
	
	<div id="imageframe">
		
		<div class="textbox">
			<?=$this->load->view('text/page1')?>
		</div>
		
	</div>



<script src="<?= base_url() ?>js/plugins.js"></script>
<script src="<?= base_url() ?>js/scripts.js"></script>
</body>
</html>