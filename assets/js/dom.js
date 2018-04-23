if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

function addClass(DOMElement, classes) {
    if (typeof classes === 'string') {
        if (!hasClass(DOMElement, classes)) {
            DOMElement.className += " " + classes;
        }
    } else if (Object.prototype.toString.call(classes) === "[object Array]") {
        for (let i = 0; i < classes.length; i++) {
            if (!hasClass(DOMElement, classes[i])) {
                DOMElement.className += " " + classes[i];
            }
        }
    }
    DOMElement.className = DOMElement.className.trim();
}

function addClassToAll(DOMList, classes) {
    if(!Array.isArray(DOMList)) {
        addClass(DOMList, classes);
    } else {
        for(let i = 0; i < DOMList.length; i++){
           addClass(DOMList[i], classes);
        }
    }  
}

function removeClass(DOMElement, classes) {
    let classesInDOMElement = DOMElement.className.split(/\s+/);

    removeElementFromArray_Mutate(classesInDOMElement, classes);

    DOMElement.className = classesInDOMElement.join(' ');
}

function removeClassFromAll(DOMList, classes) {
    if(Array.isArray(DOMList)) {
        removeClass(DOMList, classes);
    } else {
        for (let i = 0; i < DOMList.length; i++) {
            removeClass(DOMList[i], classes);
        }
    }
}

function hasClass_ONEtest(DOMElement, classe) {
    let allClasses = DOMElement.className.split(/\s+/);
    for (let i = 0; i < allClasses.length; i++) {
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
        for (let i = 0; i < classes.length; i++) {
            if (!hasClass_ONEtest(DOMElement, classes[i])) {
                return false;
            }
        }
        return true;
    }
}

function toggleClass(DOMElement, classes) {
    if (typeof classes === 'string') {
        toggleClass_one(DOMElement, classes);
    } else { // multiple classes as array
        for (let i = 0; i < classes.length; i++) {
            toggleClass_one(DOMElement, classes[i]);
        }
        return true;
    }
}

function toggleClass_one(DOMElement, classe) {
    if (hasClass_ONEtest(DOMElement, classe)) {
        removeClass(DOMElement, classe);
    } else { // don't have it
        addClass(DOMElement, classe);
    }
}

function removeElementFromArray_Mutate(sourceArray, elementsToRemoveArray) {
    if (Object.prototype.toString.call(elementsToRemoveArray) === '[object Array]') {
        for (let i = 0; i < elementsToRemoveArray.length; i++) {
            for (let j = 0; j < sourceArray.length; j++) {
                if (elementsToRemoveArray[i] === sourceArray[j]) {
                    sourceArray.splice(j, 1);
                    j--; //important whne we splice we don't go to the next element the element come to us
                }
            }
        }
    } else { // if not array then a string or number, or object or function or anything else (to test on an array of functions)
        for (let i = 0; i < sourceArray.length; i++) {
            if (sourceArray[i] === elementsToRemoveArray) {
                sourceArray.splice(i, 1);
                i--; //when we splice the next element will come to that position. so we need not to move
            }
        }
    }
}







// remove dom elements functions


function removeDOMElement(element) {
    var parent = element.parentNode;
    if (parent) {
        parent.removeChild(element);
    }
}


function clearDomNodeInner(DOM_Node) {
    while (DOM_Node.firstChild) {
        DOM_Node.removeChild(DOM_Node.firstChild);
    }
}



function removeAllChildrenOfTagName(DOMelement, tagName) {
    var children = DOMelement.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].tagName.toLowerCase() === tagName.toLowerCase()) {
            DOMelement.removeChild(children[i]);
            i--; // after removing we decrement i to have it point at the same position in order to not skip an element.
        }
    }
}








/*Delegation needed functions, case you need more go to "front_home_ServersSlid.js"*/
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

// later write a function that take any kind of testingObject supporting any kind of elementProperties // see the best way of looping through an object and getting it's properties

//note that this funciton return false if not found and return the node that we are checking for it's criteria the first that match the criteria ==> it can be used without problems within an if statement. a valide node == true with two equal operation.
function delegation_isWithin(evTarget, parrentEl, testingObject) {
    var node = evTarget;

    var testingArrayCriteria = [];
    var testingArrayValue = [];

    let testingCriteriaNumber = 0;
    if (testingObject.className) {
        testingArrayCriteria.push('className');
        testingArrayValue.push(testingObject.className);
    }

    if (testingObject.tagName) {
        testingArrayCriteria.push('tagName');
        testingArrayValue.push(testingObject.tagName);
    }
    if (testingObject.id) {
        testingArrayCriteria.push('id');
        testingArrayValue.push(testingObject.id);
    }

    while (node != null && node != parrentEl) {
        let i = 0;
        if (delegation_isWithinOnTestForTruness(node, testingArrayCriteria, testingArrayValue)) {
            return node;
        }
        node = node.parentNode;
    }
    return false;
}

function delegation_isWithinOnTestForTruness(node, testingArrayCriteria, testingArrayValue) {

    for (let i = 0; i < testingArrayCriteria.length; i++) {
        if (testingArrayCriteria[i] === 'className') {
            if (node[testingArrayCriteria[i]].indexOf(testingArrayValue[i]) === -1) {
                return false;
            }
        } else if (node[testingArrayCriteria[i]] !== testingArrayValue[i]) {
            return false;
        }
    }
    return true;
}


//get here stand for thte fact that it return the element when it's true ! otherwise false // this function take the className completly you should give the complete className example className = "hide item nice"
function isWithinAnElWithClassName_get(elementDOM, className, stopSearchUpperParrentDOM) {
    if (elementDOM.className === className) {
        return elementDOM;
    }

    while (elementDOM.className !== className) {
        if (stopSearchUpperParrentDOM == elementDOM) {
            return false;
        }

        elementDOM = elementDOM.parentNode;
    }
    return elementDOM;
}
//this function work with class or classes array => it return the first element that contain the element DOM and that contain one of the classes
function isWithinAnElHavingOneOfTheClasses_get(elementDOM, classes, stopSearchUpperParrentDOM) {
    if (hasClass(elementDOM, classes)) {
        return elementDOM;
    }

    while (!hasClass(elementDOM, classes)) {
        if (stopSearchUpperParrentDOM == elementDOM) {
            return false;
        }

        elementDOM = elementDOM.parentNode;
    }
    return elementDOM;
}



// to implement 

function hasAllClasses(DOMElement, classesList) {

}


function isWithinAnElHavingAllTheClasses_get(elementDOM, classes, stopSearchUpperParrentDOM) {

}


// position in Parrent and all
function getChildIndex(DOMElement) {
    return Array.prototype.indexOf.call(DOMElement.parrentNode.children, DOMElement);
}


function insertChildAtPose(parrent, DOMElement, pos) {
    parrent.insertBefore(DOMElement, parrent.children[pos]);
}

