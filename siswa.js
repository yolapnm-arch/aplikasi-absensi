let data=[];

function tambah(){

let nama=document.getElementById("nama").value;

data.push(nama);

tampil();

}

function tampil(){

let isi="";

for(let i=0;i<data.length;i++){

isi+="<li>"+data[i]+"</li>";

}

document.getElementById("list").innerHTML=isi;

}

function cari(){

let keyword=document.getElementById("cari").value.toLowerCase();

let isi="";

for(let i=0;i<data.length;i++){

if(data[i].toLowerCase().includes(keyword)){

isi+="<li>"+data[i]+"</li>";

}

}

document.getElementById("list").innerHTML=isi;

}