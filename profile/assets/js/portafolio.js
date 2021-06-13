//FUNCIONES
async function portafolio(){
    const url = 'http://portafolio1.webcindario.com/api/v1/?tabla=portafolio';
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

export function inicio(){
    console.log('Función corriendo');
    portafolio();
}