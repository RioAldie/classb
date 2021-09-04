

function tambahJadwal(){
    $.getJSON('data/mahasiswa.json',function(data){
    let jadwal = data.jadwal;
    console.log(jadwal);
    $.each(jadwal,function(i,data){
        $('#content').append(
                    ` <div class="jadwalBox">
                        <h2 class="hari">${data.hari}</h2>
                         <img src="asset/${data.gambar} " > 
                          <h2>${data.mapel}</h2>
                          <p>${data.dosen} </p>
                        </div> `
    )});

});
}

function tampilkanHome(){
    $('#tampil').html(`<section class="banner" id="banner">
    <div class="content">
        <div class="imgBx"><img src="asset/logohp.png" alt="" srcset=""></div>
        <h3 id="title">Kelas B</h3>
        <p>Universitas Nusantara PGRI Kediri</p>
        <ul class="socialMedia">
            <li><a href="#"><i class="fb-bar"></i></a></li>
            <li><a href="#"><i class="twit-bar"></i></a></li>
            <li><a href="#"><i class="ig-bar"></i></a></li>
            <li><a href="#"><i class="linkedin-bar"></i></i></a></li>
        </ul>
    </div>
</section>`)
}

const navigasi = document.querySelectorAll('.nav-link');
const toggle = document.querySelector('.toggle');
const topbar = document.querySelector('.topbar');
const navigation = document.querySelector('.nav');
const main = document.querySelector('.main');
toggle.onclick = function (){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
$('#tampil').append(`<section class="banner" id="banner">
<div class="content">
    <div class="imgBx"><img src="asset/logohp.png" alt="" srcset=""></div>
    <h3 id="title">Kelas B</h3>
    <p>Universitas Nusantara PGRI Kediri</p>
    <ul class="socialMedia">
        <li><a href="#"><i class="fb-bar"></i></a></li>
        <li><a href="#"><i class="twit-bar"></i></a></li>
        <li><a href="#"><i class="ig-bar"></i></a></li>
        <li><a href="#"><i class="linkedin-bar"></i></i></a></li>
    </ul>
</div>
</section>`)

for(var i=0; i<navigasi.length; i++){
navigasi[i].onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');

    let kategori = $(this).html();

    
    let content ='';
  
    if(kategori.toLowerCase() == "home"){
        content += `<section class="banner" id="banner">
        <div class="content">
            <div class="imgBx"><img src="asset/logohp.png" alt="" srcset=""></div>
            <h3 id="title">Kelas B</h3>
            <p>Universitas Nusantara PGRI Kediri</p>
            <ul class="socialMedia">
                <li><a href="#"><i class="fb-bar"></i></a></li>
                <li><a href="#"><i class="twit-bar"></i></a></li>
                <li><a href="#"><i class="ig-bar"></i></a></li>
                <li><a href="#"><i class="linkedin-bar"></i></i></a></li>
            </ul>
        </div>
    </section>`
    }else if(kategori.toLowerCase() == "about"){
        content += `<section class="about adjust" id="about"> 
        <div class="title">
            <h2>About</h2>
        </div>
        <div class="content">
            <div class="textBox">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim corrupti? A soluta maiores reprehenderit accusantium quibusdam. Dolorem magni vel aliquid repellendus hic distinctio, commodi voluptatem alias laboriosam eligendi ducimus.
                
              </p>
            </div>
            <div class="imgBx">
                <img src="asset/college.png" alt="">
            </div>
        </div>
    </section>`
    }else if(kategori.toLowerCase() == "jadwal"){
        
        content += `<div class="jadwal adjust" id="jadwal">
        <div class="title">
            <h2>Our Schedule</h2>
            <p>*click the images</p>
        </div>
        <div class="content" id="content"></div></div>`;tambahJadwal();
    }else if(kategori.toLowerCase() == "tugas"){
       content += `<div class="upload">
            <div class="title">
                <h2>Our Task</h2>
            </div>
            <img src="asset/upload.png" alt="" srcset="">
            <p>Share Tugasmu!</p>
            <button class="btn" id="btn">Upload</button>
        </div>`
    }else if(kategori.toLowerCase() == "anggota"){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This page not already yet',
            footer: '<p>urung tak gae halaman e Maap :)</p>'
          })
          content += `<section class="banner" id="banner">
         <div class="content">
             <div class="imgBx"><img src="asset/logohp.png" alt="" srcset=""></div>
             <h3 id="title">Kelas B</h3>
             <p>Universitas Nusantara PGRI Kediri</p>
             <ul class="socialMedia">
                 <li><a href="#"><i class="fb-bar"></i></a></li>
                 <li><a href="#"><i class="twit-bar"></i></a></li>
                 <li><a href="#"><i class="ig-bar"></i></a></li>
                 <li><a href="#"><i class="linkedin-bar"></i></i></a></li>
             </ul>
         </div>
     </section>`
    }
    $('#tampil').html(content);
    $('#btn').on('click',function(){
        Swal.fire('Fitur Ini Cuma Hiasan!')
    });
}
}

    