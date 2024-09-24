function changeStyle(e){
    const styleId = document.getElementById('cssFile');
    styleId.href = `./css/style${e.value}.css`;
}