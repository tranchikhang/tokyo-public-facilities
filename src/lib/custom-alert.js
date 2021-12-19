// create alert
const customAlert = ({
    type,
    title,
    message,
    img = '',
    buttonText = 'OK',
    confirmText = 'OK',
    cancelText = 'Cancel',
    closeStyle,
}) => {
    return new Promise(resolve => {

        // check if there is existing alert
        let existingAlert = document.querySelector('.custom-alert-wrapper');
        if (existingAlert) {
            existingAlert.remove();
        }


        const scripts = document.getElementsByTagName('script');
        let src = '';
        for (let script of scripts) {
            if (script.src.includes('custom-alert.js')) {
                src = script.src.substring(0, script.src.lastIndexOf('/'));
            }
        }

        let btnTemplate = `<button class="alert-button ${type}-bg ${type}-btn">${buttonText}</button>`;

        if (type === 'question') {
            btnTemplate = `
                <div class="question-buttons">
                    <button class="confirm-button ${type}-bg ${type}-btn">${confirmText}</button>
                    <button class="cancel-button error-bg error-btn">${cancelText}</button>
                </div>`;
        }

        const template = `
    <div class="custom-alert-wrapper">
      <div class="alert-frame">
        ${img !== '' ? '<div class="alert-header ' + type + '-bg">' : '<div>'}
          <span class="alert-close ${
            closeStyle === 'circle'
              ? 'alert-close-circle'
              : 'alert-close-default'
          }">X</span>
          ${img !== '' ? '<img class="alert-img" src="' + src + '/' + img + '" />' : ''}
        </div>
        <div class="alert-body">
          <span class="alert-title">${title}</span>
          <span class="alert-message">${message}</span>
          ${btnTemplate}
        </div>
      </div>
    </div>
    `;

        // insert to document body
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterend', template);

        const alertWrapper = document.querySelector('.custom-alert-wrapper');
        const alertFrame = document.querySelector('.alert-frame');
        const alertClose = document.querySelector('.alert-close');

        if (type === 'question') {
            const confirmButton = document.querySelector('.confirm-button');
            const cancelButton = document.querySelector('.cancel-button');

            confirmButton.addEventListener('click', () => {
                alertWrapper.remove();
                resolve('confirm');
            });

            cancelButton.addEventListener('click', () => {
                alertWrapper.remove();
                resolve();
            });
        } else {
            const alertButton = document.querySelector('.alert-button');

            alertButton.addEventListener('click', () => {
                alertWrapper.remove();
                resolve('ok');
            });
        }

        alertClose.addEventListener('click', () => {
            alertWrapper.remove();
            resolve('close');
        });

        alertFrame.addEventListener('click', e => {
            e.stopPropagation();
        });
    });
};