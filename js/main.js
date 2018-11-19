;
(function () {
    "use strict";

    const borderRange = document.getElementById('spacing');
    const inputs = document.querySelectorAll('.ba-filters input, #base, #spacing');
    const filterResultValue = document.querySelectorAll('.ba-filters input');
    
    
    
    // Add for each input listener for change range or value
    inputs.forEach(function (elements) {
        elements.addEventListener('change', handleUpdate);
        elements.addEventListener('input', handleUpdate);
        
    });

    filterResultValue.forEach(function (elements) {
        const filterResult = document.querySelector('#'+ elements.name +'__value');
        const suffix = elements.dataset.suffix || "";
        filterResult.textContent = elements.value + suffix;
        
    });

    function handleUpdate() {
        // this => range slider that is changed
        const varName = this.name; // for css var name
        const suffix = this.dataset.suffix || "";
        const varVal = this.value + suffix;

        setCssVar(varName, varVal);
        const filterResult = document.querySelector('#'+ varName +'__value');

        filterResult.textContent = varVal;
    }

    function results() {
        
    }

    function setCssVar(varName, varVal) {
        document.documentElement.style.setProperty('--' + varName, varVal);

    }

    const clearBtn = document.querySelector('[data-clear]');
    clearBtn.addEventListener('click', clearAll);

    function clearAll() {
        inputs.forEach(function (element) {
            const defaulVal = element.getAttribute('value');

            element.value = defaulVal;

            const varName = element.name; // for css var name
            const suffix = element.dataset.suffix || "";
            const varVal = element.value + suffix;
            setCssVar(varName, varVal);

        })
        filterResultValue.forEach(function (elements) {
            const filterResult = document.querySelector('#'+ elements.name +'__value');
            const suffix = elements.dataset.suffix || "";
            filterResult.textContent = elements.value + suffix;
            
        });
    }

    // change photo
    const uploadBtn = document.querySelector('.ba-upload');
    uploadBtn.addEventListener('change', PreviewImage);
    function PreviewImage() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.querySelector('.ba-upload').files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
        };
    };
})();