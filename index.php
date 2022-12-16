<?php
class BangunDatar{
  // ? Buat class "BangunData" (Complete)
  // ? Semua Atributenya private
  // ? atribut (Panjang, sisi, lebar) 
  // ? method Menghitung:
  // ? luas segitiga
  // ? luas persegi
  // ? luas lingkaran
  // ? dimethod menghitung luas,
  // ? tidak boleh ada parameter
  // ? untuk mengubah atribut harus ada method lain

  private $sisi, $jari, $alas, $tinggi;


  function __construct($sisi, $jari, $tinggi, $alas){
    $this->sisi = $sisi;
    $this->jari = $jari;
    $this->tinggi = $tinggi;
    $this->alas = $alas;
  }
  
  function getSisi(){
    return $this->sisi;
  }

  function getTinggi(){
    return $this->tinggi;
  }

  function getJari(){
    return $this->jari;
  }
  
  function getAlas(){
    return $this->alas;
  }

  function setJari($jari){
    $this->jari = $jari;
  }

  function setSisi($sisi){
    $this->sisi = $sisi;
  }
  
  function setTinggi($tinggi){
    $this->tinggi = $tinggi;
  }
  
  function setAlas($Alas){
    $this->Alas = $Alas;
  }

  function luasSegitiga(){
    return $this->alas * $this->tinggi /2;
  }

  function luasLingkaran(){
    return 22 / 7 * $this->jari **2;
  }

  function luasPersegi(){
    return $this->sisi * $this->sisi;
  }
}


$bangunDatar = new BangunDatar(4,4,4,4);
echo $bangunDatar->luasPersegi() . "\n" . $bangunDatar->luasLingkaran() . "\n" . $bangunDatar->luasSegitiga();