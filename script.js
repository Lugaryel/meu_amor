const saida = document.querySelector(".saida");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao(
  "Oi meu amor, eu te amo muito meu amor, nossa conexão e nossa vibe mostra o quanto nosso amor é algo surreal, tu é a pessoa mais incrível do universo e eu tenho a sorte de te ter  ao meu lado, tu ta sempre dando teu máximo em tudo e isso é maravilhoso e me faz tentar dar o meu máximo também todos os dias, e eu vou ta sempre aqui para apoiar, torcer, ajudar e fazer de tudo pra que realize suas conquistas meu amor, assim como você faz por mim, jaja estaremos no nosso cantinho, comemorando nosso casamento e vibrando mais conquistas nossas amor, eu te amo demais Jaqueline Rodrigues. Do seu amor Estrela Cruzada.",
  0
);
