// ==UserScript==
// @name         HBO Overlay Remover (Improved)
// @namespace    https://github.com/bulutcankaragoz
// @version      1.0
// @description  Removes protection overlay on HBO Max player
// @author       Bulutcan Karagöz
// @match        *://*.play.hbomax.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    const removeLayer = () => {
        document.querySelectorAll('[data-testid="protection_layer"]').forEach(el => el.remove());
    };

    removeLayer();

    const observer = new MutationObserver(() => {
        removeLayer();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
