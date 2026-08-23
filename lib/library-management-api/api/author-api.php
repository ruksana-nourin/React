<?php
function getAuthor()
{
    echo json_encode(Author::getAll());
}


?>