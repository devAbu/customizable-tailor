<?php

require_once './connection.php';

$type = $_REQUEST['type'];
$material = $_REQUEST['material'];
$sleeve = $_REQUEST['sleeve'];
$collar = $_REQUEST['collar'];
$cuff = $_REQUEST['cuff'];

$sql = "SELECT image FROM kosulje where type like '%" . trim($type) . "%' and material like '%" . trim($material) . "%' and sleeve like '%" . trim($sleeve) . "%' and collar like '%" . trim($collar) . "%' and (cuff like '%" . trim($cuff) . "%' OR cuff is null) ";
$result = $dbc->query($sql);


$count = $result->num_rows;
if ($count > 0) {
  while ($row = $result->fetch_assoc()) {
    echo $row["image"];
  }
} else {
  echo "0 results";
}

$dbc->close();
