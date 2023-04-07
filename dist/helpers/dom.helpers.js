"use strict";
function getId(id) {
    if (id !== null) {
        return document.getElementById(id);
    }
    else {
        return null;
    }
}
function getClasses(className) {
    if (className) {
        return document.getElementsByClassName(className);
    }
    else {
        return null;
    }
}
function getElements(element) {
    if (element) {
        return document.getElementsByName(element);
    }
    else {
        return null;
    }
}
function getBtn(btnId = 'button') {
    if (btnId !== 'button' && btnId) {
        return document.getElementsByTagName(btnId);
    }
    else {
        return null;
    }
}
module.exports = {
    getId,
    getClasses,
    getElements,
    getBtn
};
