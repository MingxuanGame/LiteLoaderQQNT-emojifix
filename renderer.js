function onload() {
  document.body.style.fontFamily = window
    .getComputedStyle(document.body)
    .fontFamily.replace('"Color Emoji", ', "");
  console.log(
    "[emojifix] Patched font-family to remove 'Color Emoji' font on document.body"
  );
}
onload();
