export function onLoad() {
  document.body.style.fontFamily = window.getComputedStyle(document.body).fontFamily.replace('"Color Emoji", ', "")
}
