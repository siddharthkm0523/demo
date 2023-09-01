<?php
header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Disposition: attachment; filename=odyssey-brochure.pdf");
header("Content-Type: application/pdf");
header("Content-Transfer-Encoding: binary");
readfile("odyssey-brochure.pdf");
?>
