<?php

if ($_GET['param'] == "level2") {
    for ($i = 0; $i < 10; $i++) {
        echo "<div class='opt' >level2 Propinsi1 kota$i daerah$i</div>";
    }    
} else {
    for ($i = 0; $i < 10; $i++) {
        echo "<div class='opt' param='param=level2&param_2=jadah'>level1 Propinsi$i kota1 daerah$i</div>";
    }
}
?>
