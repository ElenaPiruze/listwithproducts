<?php include 'product.php'; ?>
<?php

abstract class Product {
  protected $sku;
  protected $type;
  protected $name;
  protected $price;
  
  public function __construct($sku, $type, $name, $price) {
    $this->sku = $sku;
    $this->type = $type;
    $this->name = $name;
    $this->price = $price;
  }
  
  abstract public function getDescription();
  
  public function setSku($sku) {
    $this->sku = $sku;
  }
  
  public function setType($type) {
    $this->type = $type;
  }
  
  public function setName($name) {
    $this->name = $name;
  }
  
  public function setPrice($price) {
    $this->price = $price;
  }

  public function getSku()
  {
     return $this->sku;
  }

  public function getType()
  {
     return $this->type;
  }
  
  public function getName() {
    return $this->name;
  }
  
  public function getPrice() {
    return $this->price;
  }
  
  abstract public function save();
}

class Disc extends Product {
  private $size;
  
  public function __construct($sku, $type, $name, $price, $size) {
    parent::__construct($sku, $type, $name, $price);
    $this->size = $size;
  }
  
  public function getDescription() {
    return "Disc - Size: {$this->size} MB";
  }
  
  public function setSize($size) {
    $this->size = $size;
  }
  
  public function getSize() {
    return $this->size;
  }
  
  public function save() {
    
  }
}

class Book extends Product {
  private $weight;
  
  public function __construct($sku, $type, $name, $price, $weight) {
    parent::__construct($sku, $type, $name, $price);
    $this->weight = $weight;
  }
  
  public function getDescription() {
    return "Book - Weight: {$this->weight} KG";
  }
  
  public function setWeight($weight) {
    $this->weight = $weight;
  }
  
  public function getWeight() {
    return $this->weight;
  }
  
  public function save() {
    
  }
}

class Furniture extends Product {
  private $width;
  private $length;
  private $height;
  
  public function __construct($sku, $type, $name, $price, $width, $length, $height) {
    parent::__construct($sku, $type, $name, $price);
    $this->width = $width;
    $this->length = $length;
    $this->height = $height;
  }
  
  public function getDescription() {
    return "Furniture - Dimensions: {$this->width}x{$this->length}x{$this->height} CM";
  }
  
  public function setWidth($width) {
    $this->width = $width;
  }
  
  public function setLength($length) {
    $this->length = $length;
  }
  
  public function setHeight($height) {
    $this->height = $height;
  }
  
  public function getWidth() {
    return $this->width;
  }
  
  public function getLength() {
    return $this->length;
  }
  
  public function getHeight() {
    return $this->height;
  }
  
  public function save() {
    // Save data on all public functions save()
  }
}

?>
