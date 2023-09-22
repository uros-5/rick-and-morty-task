function quickDom(force = true) {
  let elem = document.querySelector('html');
  force ? elem!.classList.remove('h-full') : elem!.classList.add('h-full');
}

export default quickDom;
