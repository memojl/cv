//FUNCIONES
var page_url ='';
var tema = 'iPortfolio';
var url_tema = page_url + 'temas/'+tema+'/index.html';
console.log(url_tema);

function modulos() {
    $(function () {
      $.ajax({
        url: url_tema,
        dataType: "html",
        success: function (data) {
          $("#app").html(data);
          console.log('La pagina Existe');
        },
        error: function () {
          $("#app-modulo").html('<div class="alert alert-danger">Error:404 La pagina No existe<br><a href="./">Inicio</a></div>');
          console.log('Error:404 La pagina No existe');
        }
      });
    });
  }

export function inicio(){
    console.log('Función corriendo');
    modulos();
}