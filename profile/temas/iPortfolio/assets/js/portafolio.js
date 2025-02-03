//FUNCIONES
async function portafolio(){
    const url = 'https://portafolio1.webcindario.com/api/v1/?tabla=portafolio';
    const res = await fetch(url);
    const data = await res.json();
    data.reverse();//console.log(data);
    const unicos = [];
    let porta = document.querySelector('.portfolio-container');
    let cat = document.querySelector('#portfolio-flters');
    let div = '';
    data.forEach(item => {
      const {ID, nombre, cate, cover, imagen1, descripcion, url_page, visible} = item;
      div += `
      <div class="col-lg-4 col-md-6 portfolio-item filter-${cate}">
        <div class="portfolio-wrap">
          <img src="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${cover}" class="img-fluid" alt="">
          <div class="portfolio-links">
            <a target="_blank" href="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${cover}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${nombre}"><i class="bx bx-plus"></i></a>
            <a target="_blank" href="https://portafolio1.webcindario.com/index.php?mod=portafolio&ext=item&id=${ID}" title="Más Detalles"><i class="bx bx-link"></i></a>
          </div>
        </div>
      </div>`;
      if (!unicos.includes(cate)) {
        unicos.push(cate);
      }
    });//console.log(unicos.reverse());
    porta.innerHTML = div;
    unicos.reverse();
    let li = '<li onclick="btn(0)" data-filter="*" class="filter-active">All</li>';
    var n=0;
    for(var i=0;i<unicos.length;i++){n++;
      li += `<li onclick="btn(${n})" data-filter=".filter-${unicos[i]}">${unicos[i]}</li>`
    }
    cat.innerHTML = li;
}

function calcularEdad(fechaNacimiento) {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const fec =  fechaNacimiento.split('-');
  const m = parseInt(fec[1].replace('0',''));
  const month = months[m-1];
  const fechaNac = `${fec[2]}/${month}/${fec[0]}`;
  let hoy = new Date();
  let nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  let mes = hoy.getMonth() - nacimiento.getMonth();
  let dia = hoy.getDate() - nacimiento.getDate();
  // Ajustar la edad si aún no ha pasado el cumpleaños este año
  if (mes < 0 || (mes === 0 && dia < 0)) {
      edad--;
  }
  
  console.log(fechaNac);
  const miFechaNac = document.querySelector('#miFechaNac');
  if(miFechaNac){
    miFechaNac.innerHTML = fechaNac;
  }
  console.log(edad);
  const miEdad = document.querySelector('#miEdad');
  if(miEdad){
    miEdad.innerHTML = edad+' años';
  }
}

export function inicio(){
    console.log('Función corriendo');
    portafolio();
    calcularEdad('1979-04-08');
}