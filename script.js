function toggleMode(){
  /* 
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else {
    html.classList.add("light")
  } 
  */

  /* A função acima se resume na de baixo */
  const html = document.documentElement
  html.classList.toggle('light')

  /* Bloco de codigos para mudaça de imagem e texto alternativo de imagem ( apos mudança de tema ) */

  const img = document.querySelector('#profile img')

  if (html.classList.contains("light")) {
    //se estiver no modo 'light' mudar avatar e frase alt
    img.setAttribute("src", "./assets/Avatar2.svg")
    img.setAttribute('alt', "Foto de Luis Felipe de lado, com blusa branca em um escritorio")
  } else {
    //se não estiver no modo 'light' manter imagem e frase alt normal
    img.setAttribute("src", "./assets/Avatar.svg")
    img.setAttribute("alt","Luis Felipe em foto estilo selfie, usando boné preto e casaco preto")
  }

}