<?php
class User
{
    public $id;
    public $name;
    public $email;
    public $role_id;
    private $password;
    // public function __construct($id,$name, $email, $password){

    // }

    public static function getAll()
    {
        // return "function called successfully";

        global $db;
        $query = "SELECT u.id, u.name, u.email, u.role_id, r.name as role 
        from users as u , roles as r
        WHERE u.role_id = r.id
        order by u.id desc";
        $result = $db->query($query);
        return $result->fetch_all(MYSQLI_ASSOC);
        
    }
    public static function getById($id)
    {

        global $db;
        $query = "SELECT u.id, u.name, u.email, u.role_id, r.name as role 
        from users as u , roles as r
        WHERE u.role_id = r.id and u.id =$id";
        $result = $db->query($query);
        return $result->fetch_assoc();
        
    }
}
?>