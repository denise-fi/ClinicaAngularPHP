<?php
echo "papa firtaaa";
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","Clinica");
  return $con;
}
?>