(function () {
  document.querySelectorAll('main .card pre').forEach(function (pre) {
    var button = document.createElement('button');
    var status = document.createElement('span');
    var controls = document.createElement('div');
    button.type = 'button';
    button.className = 'copy-prompt';
    button.textContent = 'Copiar instrucción';
    status.className = 'copy-status';
    status.setAttribute('role', 'status');
    controls.className = 'copy-controls';
    controls.append(button, status);
    pre.insertAdjacentElement('afterend', controls);
    button.addEventListener('click', async function () {
      try {
        if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(pre.textContent);
        status.textContent = 'Copiado al portapapeles.';
      } catch (error) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(pre);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Texto seleccionado. Usa Ctrl+C o ⌘+C para copiarlo.';
      }
    });
  });
})();
