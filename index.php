<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>MultiLevel auto complete</title>
        <link rel="shortcut icon" type="images/x-icon" href="favicon.ico"/>
        <link rel="stylesheet" type="text/css" href="css/reset.css"/>	
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="stylesheet" type="text/css" href="css/oblagioAutoComplete.css"/>

        <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>	
        <script type="text/javascript" src="js/oblagioAutoComplete.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                $("#search").oblagioAutoComplete({
                    url: "api.php",
                });
            });
        </script>

    </head>

    <body>
        <div class="container wrapper">
            <div class="title">
                <h2>Multilevel Auto Complete</h2> 
            </div>

            <div>
                <h5>DEMO</h5>
                <br/>
                <input type="text" name="testing" placeholder="type to search" size="50" id="search"/>

            </div>
        </div>
    </body>
</html>