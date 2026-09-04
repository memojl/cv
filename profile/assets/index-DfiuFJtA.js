(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(){let e=document.querySelector(`.portfolio-container`),t=document.querySelector(`#portfolio-flters`);try{let n=await fetch(`https://portafolio1.webcindario.com/api/v1/?tabla=portafolio`);if(!n.ok)throw Error(`Error HTTP: ${n.status} ${n.statusText}`);let r=n.headers.get(`content-type`);if(!r||!r.includes(`application/json`))throw Error(`La respuesta no es JSON válido`);let i=await n.json();if(i||i.length===0){e.innerHTML=`<p class="text-center">No hay conexion.</p>`;return}i.reverse();let a=[],o=``;i.forEach(e=>{let{ID:t,nombre:n,cate:r,cover:i,imagen1:s,descripcion:c,url_page:l,visible:u}=e;o+=`
          <div class="col-lg-4 col-md-6 portfolio-item filter-${r}">
            <div class="portfolio-wrap">
              <img 
                src="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${i}" 
                class="img-fluid" 
                alt="${n}"
              >
  
              <div class="portfolio-links">
  
                <a 
                  target="_blank"
                  href="https://portafolio1.webcindario.com/modulos/portafolio/fotos/${i}" 
                  data-gallery="portfolioGallery" 
                  class="portfolio-lightbox" 
                  title="${n}"
                >
                  <i class="bx bx-plus"></i>
                </a>
  
                <a 
                  target="_blank" 
                  href="https://portafolio1.webcindario.com/index.php?mod=portafolio&ext=item&id=${t}" 
                  title="Más Detalles"
                >
                  <i class="bx bx-link"></i>
                </a>
  
              </div>
            </div>
          </div>
        `,a.includes(r)||a.push(r)}),e.innerHTML=o,a.reverse();let s=`
        <li onclick="btn(0)" data-filter="*" class="filter-active">
          All
        </li>
      `,c=0;for(let e=0;e<a.length;e++)c++,s+=`
          <li 
            onclick="btn(${c})" 
            data-filter=".filter-${a[e]}"
          >
            ${a[e]}
          </li>
        `;t.innerHTML=s}catch(t){console.error(`Error al cargar el portafolio:`,t),e.innerHTML=`<p class="text-center">No se encontaron resultados para mostrar.</p>`}}function t(e){let t=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],n=e.split(`-`),r=t[parseInt(n[1].replace(`0`,``))-1],i=`${n[2]}/${r}/${n[0]}`,a=new Date,o=new Date(e),s=a.getFullYear()-o.getFullYear(),c=a.getMonth()-o.getMonth(),l=a.getDate()-o.getDate();(c<0||c===0&&l<0)&&s--,console.log(i);let u=document.querySelector(`#miFechaNac`);u&&(u.innerHTML=i),console.log(s);let d=document.querySelector(`#miEdad`);d&&(d.innerHTML=s+` años`)}function n(){console.log(`Función corriendo`),e(),t(`1979-04-08`)}n();