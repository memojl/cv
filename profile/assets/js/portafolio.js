//FUNCIONES
async function portafolio(){
    const url = 'http://portafolio1.webcindario.com/api/v1/?tabla=portafolio';
    const res = await fetch(url);
    const data = await res.json();
    data.reverse();//console.log(data);
    const unicos = [];
    const div = document.getElementById('porta');
    const cat = document.getElementById('portfolio-flters');
    data.forEach(item => {
      const {ID, nombre, cate, cover, imagen1, descripcion, url_page, visible} = item;
      div.innerHTML += `
      <div class="col-lg-4 col-md-6 portfolio-item filter-${cate}">
        <div class="portfolio-wrap">
          <img src="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${cover}" class="img-fluid" alt="">
          <div class="portfolio-links">
            <a href="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${cover}" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${nombre}"><i class="bx bx-plus"></i></a>
            <a href="https://portafolio1.webcindario.com/index.php?mod=portafolio&ext=item&id=${ID}" title="Más Detalles"><i class="bx bx-link"></i></a>
          </div>
        </div>
      </div>`;
      if (!unicos.includes(cate)) {
        unicos.push(cate);
      }
    });//console.log(unicos.reverse());
    unicos.reverse();
    let li = '<li data-filter="*" class="filter-active">All</li>';
    for(var i=0;i<unicos.length;i++){
      li += `<li data-filter=".filter-${unicos[i]}">${unicos[i]}</li>`
    }
    cat.innerHTML = li;
}

export function inicio(){
    console.log('Función corriendo');
    portafolio();
}