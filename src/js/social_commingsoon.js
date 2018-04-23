
function getEvent(e) {
    e = e || window.event;
    return e;
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}


function is_containedIn_OrEqual(contained, container) {
    var node = contained;
    while (node != null) {
        if (node === container) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function hasClass_ONEtest(DOMElement, classe) {
    var allClasses = DOMElement.className.split(/\s+/);
    for (var i = 0; i < allClasses.length; i++) {
        if (allClasses[i].trim() === classe) {
            return true;
        }
    }
    return false;
}

function hasClass(DOMElement, classes) {
    if (typeof classes === 'string') {
        return hasClass_ONEtest(DOMElement, classes);
    } else { // multiple classes as array
        for (var i = 0; i < classes.length; i++) {
            if (!hasClass_ONEtest(DOMElement, classes[i])) {
                return false;
            }
        }
        return true;
    }
}

function addClass(DOMElement, classes) {
    if (typeof classes === 'string') {
        if (!hasClass(DOMElement, classes)) {
            DOMElement.className += " " + classes;
        }
    } else if (Object.prototype.toString.call(classes) === "[object Array]") {
        for (var i = 0; i < classes.length; i++) {
            if (!hasClass(DOMElement, classes[i])) {
                DOMElement.className += " " + classes[i];
            }
        }
    }
    DOMElement.className = DOMElement.className.trim();
}


function removeClass(DOMElement, classes) {
    var classesInDOMElement = DOMElement.className.split(/\s+/);

    removeElementFromArray_Mutate(classesInDOMElement, classes);

    DOMElement.className = classesInDOMElement.join(' ');
}

function removeElementFromArray_Mutate(sourceArray, elementsToRemoveArray) {
    if (Object.prototype.toString.call(elementsToRemoveArray) === '[object Array]') {
        for (var i = 0; i < elementsToRemoveArray.length; i++) {
            for (var j = 0; j < sourceArray.length; j++) {
                if (elementsToRemoveArray[i] === sourceArray[j]) {
                    sourceArray.splice(j, 1);
                    j--; //important whne we splice we don't go to the next element the element come to us
                }
            }
        }
    } else { // if not array then a string or number, or object or function or anything else (to test on an array of functions)
        for (var i = 0; i < sourceArray.length; i++) {
            if (sourceArray[i] === elementsToRemoveArray) {
                sourceArray.splice(i, 1);
                i--; //when we splice the next element will come to that position. so we need not to move
            }
        }
    }
}


var commingSoonEls = document.getElementsByClassName('social_commingSoon');

(function () {
    
    var popup = document.getElementById('socialComingSoonPopUp');
    
    function hide() {
        popup.className = 'hide';
        setTimeout(function () {
            popup.className = 'hidden';
        }, 400);
    }

    function show() {
        popup.className = 'hide';
        setTimeout(function () {
            popup.className = '';  
        }, 20);
    }

    addClass(popup, "hidden");
    
    console.log('============+++>');
console.dir(commingSoonEls[0]);
    // we assign to first el (for a better animation start from it)
    new Popper(commingSoonEls[0], popup, {
        placement: 'top',
        onCreate: function (data) {
            console.log(data);
        },
        modifiers: {
            flip: {
                behavior: ['left', 'right', 'top', 'bottom']
            },
            offset: {
                enabled: true,
                offset: '0,10'
            }
        }
    });

    for (var i = 0; i < commingSoonEls.length; i++) {
        commingSoonEls[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            // show it 
            show()

            var popper = new Popper(this, popup, {
                placement: 'top',
                onCreate: function (data) {
                    console.log(data);
                },
                modifiers: {
                    flip: {
                        behavior: ['left', 'right', 'top', 'bottom']
                    },
                    offset: {
                        enabled: true,
                        offset: '0,10'
                    }
                }
            });
        });
    }
console.log("damn a!!!!!!");
    console.dir(commingSoonEls);
    // hide when click outside
    document.addEventListener('click', function (evt) {
        evt = getEvent(evt);
        var target = getEventTarget(evt);
        console.log("click ::::::::::::::::::");
        console.dir(commingSoonEls);
        var within = false;
        for (var i = 0; i < commingSoonEls.length; i++) {
            if (is_containedIn_OrEqual(target, commingSoonEls[i])) {
                within = true;
                break;
            }
        }
        if(!within) {
            hide();
        }
    });
})();


