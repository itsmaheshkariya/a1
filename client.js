


Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});

// most imp
// export class Html{
//     constructor(gethtmlcontent){
//         this.gethtmlcontent = gethtmlcontent
//     }
//     toHtml(){
//         console.log(this.gethtmlcontent)
//         return `<h1>${this.gethtmlcontent}</h1>`
//     }
// }
// return div({class:'hello demo ok',style:{color:"red"}},()=>
// {
//         let newHtml = ``;
//         for(let i=1;i<=4;i++)
//             newHtml +=h1(i)
//         return newHtml

// }
// )
// Array.prototype.forloop = function(val) {
//     console.log(val())
//     // var i;
//     // for (i = 0; i < this.length; i++) {
//     //   this[i] = this[i].name.toUpperCase();
//     // }
//   }

// linkone.href = window.location.origin+'/node_modules/@qcom.io/qcom/'+'icons.css';
var headtag = document.getElementsByTagName('HEAD')[0];

if(navigator.onLine == true)
{
    var linkone = document.createElement('link');
    linkone.rel = 'stylesheet';
    linkone.type = 'text/css';
    linkone.href = 'https://unpkg.com/@qcom.io/qcom@1.0.36/icons.css';
    headtag.appendChild(linkone);

    var linktwo = document.createElement('link');
    linktwo.rel = 'stylesheet';
    linktwo.type = 'text/css';
    linktwo.href = 'https://unpkg.com/@qcom.io/qcom@1.0.36/fonts.css';
    headtag.appendChild(linktwo);


}
var metaone = document.createElement('meta');
metaone.charset = 'UTF-8';
headtag.appendChild(metaone);

var metatwo = document.createElement('meta');
metatwo.name = 'viewport';
metatwo.content = 'width=device-width, initial-scale=1.0';
headtag.appendChild(metatwo);



// function qisRegistered(name) {
//     return document.createElement(name).constructor.__proto__ !== window.HTMLElement;
//   }

//   var allElems = document.querySelectorAll('html /deep/ *');
//   var nodeNames = [].map.call(allElems, el => el.nodeName.toLowerCase())
//                       .filter((value, index, self) => self.indexOf(value) === index)

//   console.log('all elements', nodeNames);
//   console.log('registered, custom elements', nodeNames.filter(qisRegistered))

// export let attach = (val) =>{
//     let store = (camelCaseToDash(val.split('.')[0]).replace('"',''))
//     let ele = document.querySelector(store)
//     console.log(val.substring(len(val.split('.')[0])))
//     console.log(len(val.split('.')[0]))
//     for(let i in range(len(Object.keys(ele.methods)))){
//         if(Object.keys(ele.methods)[i] == val.split('.')[1].replace('"','').split('(')[0]){
//             let fun = val.split('.')[1].replace('"','')
//             return 'eval(document.querySelector("'+store+'").methods.'+val.split('.')[1].replace('"','')+')'

//         }
//     }

export let rev = (str) => {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
export let attach = (val) =>{
    val = JSON.parse(val)
    val = val.includes("'") == true ? val.replace(/'/g,'\"'):val
    let store = (camelCaseToDash(val.split('.')[0]))
    let ele = document.querySelector(store)
    for(let i in range(len(Object.keys(ele.methods)))){
        if(Object.keys(ele.methods)[i] == val.split('.')[1].split('(')[0]){
            return '(document.querySelector("'+store+'").methods'+val.substring(len(val.split('.')[0]))+')'

        }
    }
// export let attach = (val) =>{
//     let store = (camelCaseToDash(val.split('.')[0]).replace('"',''))
//     console.log(JSON.parse(val))
//     let ele = document.querySelector(store)
//     // console.log(val.substring(len(val.split('.')[0])).replace('"',''))
//     // console.log(val.split('.')[1].replace('"',''))
//     // let _remaining = val.substring(len(val.split('.')[0])).replace('"','')
//     for(let i in range(len(Object.keys(ele.methods)))){
//         if(Object.keys(ele.methods)[i] == val.split('.')[1].replace('"','').split('(')[0]){
//             let fun = val.split('.')[1].replace('"','')
//             return 'eval(document.querySelector("'+store+'").methods.'+val.split('.')[1].replace('"','')+')'

//         }
//     }
//if you get problem then uncomment this oen
    //   return 'this.getRootNode().host.methods.'+val.split('.')[1].replace('"','')


// return 'this.getRootNode().host.methods.'+val.replace('"','').replace('"','')

}
export let ok = (val) =>{
return JSON.stringify(val)
}
export let call = (val) =>{
    return attach(ok(val))
}
//   export let call = (val1,val2) =>{

//     //   console.log(val1.methods,val2)
//       for(let i in range(len(Object.keys(val1.methods)))){
//           if(Object.keys(val1.methods)[i] == val2.split('(')[0]){
//             return String(Object.keys(val1.methods)[i])+'('+String(val2.split('(')[1])
//             //   return val2
//           }
//       }
//       return false
//     // return JSON.stringify(val1)
//   }
  export let isRegistered = (name) => {
    return document.createElement(name).constructor !== HTMLElement;
  }
  export let go = (...val) =>{
    //   console.log(val)
// console.log(val[0])    // return 1
  }

window.onload = function () {
    document.addEventListener('input',async(e)=>{
        document.querySelectorAll('[to]').forEach(el => {
            if(el.getAttribute('to') == e.target.getAttribute('to')){
                if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
                    el.value = e.target.value
                }else{
                    el.innerText = e.target.value
                }
            }
        });

    },false)

    this.document.addEventListener('click',async(e)=>{
        // this.console.log(e.target.innerHTML == '')
        if(e.target.hasAttribute('call')){
            let store = camelCaseToDash(e.target.getAttribute('call').split('.')[0])
            // this.console.log(document.querySelector(store))
            let allMethods = document.querySelector(store).methods
            Object.keys(allMethods).forEach((item,index)=>{
                if(e.target.getAttribute('call').split('.')[1].split('(')[0] == item){
                    Object.values(allMethods)[index]()
                }
            })

        }
        else if(e.target.shadowRoot){

            if(e.target.shadowRoot.mode == 'open'){
            // let hold = e.target.shadowRoot.querySelectorAll('[call]')
            // for(let i in range(hold.length)){
            //     this.console.log(hold[i])
            // }
            if(e.target.shadowRoot.querySelector('[call]') != null)
            {let store = camelCaseToDash(e.target.shadowRoot.querySelector('[call]').getAttribute('call').split('.')[0])
            // this.console.log(document.querySelector(store))
            let allMethods = document.querySelector(store).methods
            Object.keys(allMethods).forEach((item,index)=>{
                if(e.target.shadowRoot.querySelector('[call]').getAttribute('call').split('.')[1].split('(')[0] == item){
                    Object.values(allMethods)[index]()
                }
            })}}

        }
    })
 }

// export let checkHost = (val) =>{
//     var all = document.getElementsByTagName('*');
//     for (var i=0, max=all.length; i < max; i++) {
//             if(all[i].childElementCount > 0){
//                 // checkHost(val)
//             }else{
//                 // console.log('ok')
//                 console.log(all[i].host.class)
//             }
//     }
//     // return val
// }
// checkHost('QcomHome')

export let color = {
    red_lighten_5:'#ffebee',
    red_lighten_4:'#ffcdd2',
    red_lighten_3:'#ef9a9a',
    red_lighten_2:'#e57373',
    red_lighten_1:'#ef5350',

    red:'#f44336',

    red_darken_1:'#e53935',
    red_darken_2:'#d32f2f',
    red_darken_3:'#c62828',
    red_darken_4:'#b71c1c',

    red_accent_1:'#ff8a80',
    red_accent_2:'#ff5252',
    red_accent_3:'#ff1744',
    red_accent_4:'#d50000',



    pink_lighten_5:'#fce4ec',
    pink_lighten_4:'#f8bbd0',
    pink_lighten_3:'#f48fb1',
    pink_lighten_2:'#f06292',
    pink_lighten_1:'#ec407a',

    pink:'#e91e63',

    pink_darken_1:'#d81b60',
    pink_darken_2:'#c2185b',
    pink_darken_3:'#ad1457',
    pink_darken_4:'#880e4f',

    pink_accent_1:'#ff80ab',
    pink_accent_2:'#ff4081',
    pink_accent_3:'#f50057',
    pink_accent_4:'#c51162',


    purple_lighten_5:'#f3e5f5',
    purple_lighten_4:'#e1bee7',
    purple_lighten_3:'#ce93d8',
    purple_lighten_2:'#ba68c8',
    purple_lighten_1:'#ab47bc',

    purple:'#9c27b0',

    purple_darken_1:'#8e24aa',
    purple_darken_2:'#7b1fa2',
    purple_darken_3:'#6a1b9a',
    purple_darken_4:'#4a148c',

    purple_accent_1:'#ea80fc',
    purple_accent_2:'#e040fb',
    purple_accent_3:'#d500f9',
    purple_accent_4:'#aa00ff',



    deep_purple_lighten_5:'#ede7f6',
    deep_purple_lighten_4:'#d1c4e9',
    deep_purple_lighten_3:'#b39ddb',
    deep_purple_lighten_2:'#9575cd',
    deep_purple_lighten_1:'#7e57c2',
    deep_purple:'#673ab7',
    deep_purple_darken_1:'#5e35b1',
    deep_purple_darken_2:'#512da8',
    deep_purple_darken_3:'#4527a0',
    deep_purple_darken_4:'#311b92',
    deep_purple_accent_1:'#b388ff',
    deep_purple_accent_2:'#7c4dff',
    deep_purple_accent_3:'#651fff',
    deep_purple_accent_4:'#6200ea',

    indigo_lighten_5:'#e8eaf6',
    indigo_lighten_4:'#c5cae9',
    indigo_lighten_3:'#9fa8da',
    indigo_lighten_2:'#7986cb',
    indigo_lighten_1:'#5c6bc0',
    indigo:'#3f51b5',
    indigo_darken_1:'#3949ab',
    indigo_darken_2:'#303f9f',
    indigo_darken_3:'#283593',
    indigo_darken_4:'#1a237e',
    indigo_accent_1:'#8c9eff',
    indigo_accent_2:'#536dfe',
    indigo_accent_3:'#3d5afe',
    indigo_accent_4:'#304ffe',

    blue_lighten_5:'#e3f2fd',
    blue_lighten_4:'#bbdefb',
    blue_lighten_3:'#90caf9',
    blue_lighten_2:'#64b5f6',
    blue_lighten_1:'#42a5f5',
    blue:'#2196f3',
    blue_darken_1:'#1e88e5',
    blue_darken_2:'#1976d2',
    blue_darken_3:'#1565c0',
    blue_darken_4:'#0d47a1',
    blue_accent_1:'#82b1ff',
    blue_accent_2:'#448aff',
    blue_accent_3:'#2979ff',
    blue_accent_4:'#2962ff',

    light_blue_lighten_5:'#e1f5fe',
    light_blue_lighten_4:'#b3e5fc',
    light_blue_lighten_3:'#81d4fa',
    light_blue_lighten_2:'#4fc3f7',
    light_blue_lighten_1:'#29b6f6',
    light_blue:'#03a9f4',
    light_blue_darken_1:'#039be5',
    light_blue_darken_2:'#0288d1',
    light_blue_darken_3:'#0277bd',
    light_blue_darken_4:'#01579b',
    light_blue_accent_1:'#80d8ff',
    light_blue_accent_2:'#40c4ff',
    light_blue_accent_3:'#00b0ff',
    light_blue_accent_4:'#0091ea',

    cyan_lighten_5:'#e0f7fa',
    cyan_lighten_4:'#b2ebf2',
    cyan_lighten_3:'#80deea',
    cyan_lighten_2:'#4dd0e1',
    cyan_lighten_1:'#26c6da',
    cyan:'#00bcd4',
    cyan_darken_1:'#00acc1',
    cyan_darken_2:'#0097a7',
    cyan_darken_3:'#00838f',
    cyan_darken_4:'#006064',
    cyan_accent_1:'#84ffff',
    cyan_accent_2:'#18ffff',
    cyan_accent_3:'#00e5ff',
    cyan_accent_4:'#00b8d4',

    teal_lighten_5:'#e0f2f1',
    teal_lighten_4:'#b2dfdb',
    teal_lighten_3:'#80cbc4',
    teal_lighten_2:'#4db6ac',
    teal_lighten_1:'#26a69a',
    teal:'#009688',
    teal_darken_1:'#00897b',
    teal_darken_2:'#00796b',
    teal_darken_3:'#00695c',
    teal_darken_4:'#004d40',
    teal_accent_1:'#a7ffeb',
    teal_accent_2:'#64ffda',
    teal_accent_3:'#1de9b6',
    teal_accent_4:'#00bfa5',

    green_lighten_5:'#e8f5e9',
    green_lighten_4:'#c8e6c9',
    green_lighten_3:'#a5d6a7',
    green_lighten_2:'#81c784',
    green_lighten_1:'#66bb6a',
    green:'#4caf50',
    green_darken_1:'#43a047',
    green_darken_2:'#388e3c',
    green_darken_3:'#2e7d32',
    green_darken_4:'#1b5e20',
    green_accent_1:'#b9f6ca',
    green_accent_2:'#69f0ae',
    green_accent_3:'#00e676',
    green_accent_4:'#00c853',

    light_green_lighten_5:'#f1f8e9',
    light_green_lighten_4:'#dcedc8',
    light_green_lighten_3:'#c5e1a5',
    light_green_lighten_2:'#aed581',
    light_green_lighten_1:'#9ccc65',
    light_green:'#8bc34a',
    light_green_darken_1:'#7cb342',
    light_green_darken_2:'#689f38',
    light_green_darken_3:'#558b2f',
    light_green_darken_4:'#33691e',
    light_green_accent_1:'#ccff90',
    light_green_accent_2:'#b2ff59',
    light_green_accent_3:'#76ff03',
    light_green_accent_4:'#64dd17',

    lime_lighten_5:'#f9fbe7',
    lime_lighten_4:'#f0f4c3',
    lime_lighten_3:'#e6ee9c',
    lime_lighten_2:'#dce775',
    lime_lighten_1:'#d4e157',
    lime:'#cddc39',
    lime_darken_1:'#c0ca33',
    lime_darken_2:'#afb42b',
    lime_darken_3:'#9e9d24',
    lime_darken_4:'#827717',
    lime_accent_1:'#f4ff81',
    lime_accent_2:'#eeff41',
    lime_accent_3:'#c6ff00',
    lime_accent_4:'#aeea00',

    yellow_lighten_5:'#fffde7',
    yellow_lighten_4:'#fff9c4',
    yellow_lighten_3:'#fff59d',
    yellow_lighten_2:'#fff176',
    yellow_lighten_1:'#ffee58',
    yellow:'#ffeb3b',
    yellow_darken_1:'#fdd835',
    yellow_darken_2:'#fbc02d',
    yellow_darken_3:'#f9a825',
    yellow_darken_4:'#f57f17',
    yellow_accent_1:'#ffff8d',
    yellow_accent_2:'#ffff00',
    yellow_accent_3:'#ffea00',
    yellow_accent_4:'#ffd600',

    amber_lighten_5:'#fff8e1',
    amber_lighten_4:'#ffecb3',
    amber_lighten_3:'#ffe082',
    amber_lighten_2:'#ffd54f',
    amber_lighten_1:'#ffca28',
    amber:'#ffc107',
    amber_darken_1:'#ffb300',
    amber_darken_2:'#ffa000',
    amber_darken_3:'#ff8f00',
    amber_darken_4:'#ff6f00',
    amber_accent_1:'#ffe57f',
    amber_accent_2:'#ffd740',
    amber_accent_3:'#ffc400',
    amber_accent_4:'#ffab00',

    orange_lighten_5:'#fff3e0',
    orange_lighten_4:'#ffe0b2',
    orange_lighten_3:'#ffcc80',
    orange_lighten_2:'#ffb74d',
    orange_lighten_1:'#ffa726',
    orange:'#ff9800',
    orange_darken_1:'#fb8c00',
    orange_darken_2:'#f57c00',
    orange_darken_3:'#ef6c00',
    orange_darken_4:'#e65100',
    orange_accent_1:'#ffd180',
    orange_accent_2:'#ffab40',
    orange_accent_3:'#ff9100',
    orange_accent_4:'#ff6d00',

    deep_orange_lighten_5:'#fbe9e7',
    deep_orange_lighten_4:'#ffccbc',
    deep_orange_lighten_3:'#ffab91',
    deep_orange_lighten_2:'#ff8a65',
    deep_orange_lighten_1:'#ff7043',
    deep_orange:'#ff5722',
    deep_orange_darken_1:'#f4511e',
    deep_orange_darken_2:'#e64a19',
    deep_orange_darken_3:'#d84315',
    deep_orange_darken_4:'#bf360c',
    deep_orange_accent_1:'#ff9e80',
    deep_orange_accent_2:'#ff6e40',
    deep_orange_accent_3:'#ff3d00',
    deep_orange_accent_4:'#dd2c00',

    brown_lighten_5:'#efebe9',
    brown_lighten_4:'#d7ccc8',
    brown_lighten_3:'#bcaaa4',
    brown_lighten_2:'#a1887f',
    brown_lighten_1:'#8d6e63',
    brown:'#795548',
    brown_darken_1:'#6d4c41',
    brown_darken_2:'#5d4037',
    brown_darken_3:'#4e342e',
    brown_darken_4:'#3e2723',

    grey_lighten_5:'#fafafa',
    grey_lighten_4:'#f5f5f5',
    grey_lighten_3:'#eeeeee',
    grey_lighten_2:'#e0e0e0',
    grey_lighten_1:'#bdbdbd',
    grey:'#9e9e9e',
    grey_darken_1:'#757575',
    grey_darken_2:'#616161',
    grey_darken_3:'#424242',
    grey_darken_4:'#212121',

    blue_grey_lighten_5:'#eceff1',
    blue_grey_lighten_4:'#cfd8dc',
    blue_grey_lighten_3:'#b0bec5',
    blue_grey_lighten_2:'#90a4ae',
    blue_grey_lighten_1:'#78909c',
    blue_grey:'#607d8b',
    blue_grey_darken_1:'#546e7a',
    blue_grey_darken_2:'#455a64',
    blue_grey_darken_3:'#37474f',
    blue_grey_darken_4:'#263238',

    black:'#000000',
    white:'#ffffff',
}
export let random = (...val) =>{
return val[Math.floor(Math.random() * val.length)]
}

export let random_keys = (...val) => random(...Object.keys(...val))
export let random_values = (...val) => random(...Object.values(...val))
export let import_module = async(val) => {
    if(val.split('.').pop() == 'ts')
    {
        val = val.replace('.ts','.js')
    }
    if(val.startsWith('.')){
        val = val.replace('.','')
    }
    return await import(window.location.origin+val)
}

class Theme{
    constructor(){
        this.background = color.white
        this.color = color.black,
        this.hover = color.grey
    }
}
export let theme = new Theme()



export class State {
    constructor(callback) {

        if (typeof callback !== "function") {
            throw new Error("Callback should be a function");
        }
        this.updater = callback;
        this._internalState = {};
        this.stateStack = [];
        this.processQueue = this.processQueue.bind(this);
        this.callUpdater = this.callUpdater.bind(this);
        this.setState = this.setState.bind(this);
    }

    get state() {
        return this._internalState;
    }

    set state(val) {
        throw new Error("Do not set state directly. Use 'setState()' instead");
    }

    setState(arg) {
        this.stateStack.push(arg);
        this._cancelIdleCallback(this.idleCallback);
        this.idleCallback = this._requestIdleCallback(this.processQueue, { timeout: 1000 });
    }

    processQueue() {
        this.stateStack.reduce((prevState, arg) => {
            let newState = (typeof arg === "function" ) ? arg(prevState) : arg;

            if (typeof newState === "object") {
                return Object.assign(prevState, newState);
            } else {
                throw new Error("New state should be an Obj");
            }
        }, this._internalState);
        this.stateStack = [];

        this.updaterCallback = window.requestAnimationFrame(this.callUpdater);
    }

    callUpdater() {
        this.updater(this.state);
    }

    _isRequestIdleCallbackSupported() {
        return (typeof requestIdleCallback !== 'undefined');
    }

    _fallbackIdleCallback(callback) {
        return setTimeout(() => {
            const start = Date.now();
            // console.log("Using fallback");
            callback({
                didTimeout: false,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
            });
        }, 1);
    }

    _requestIdleCallback(...args) {
        return this._isRequestIdleCallbackSupported() ? requestIdleCallback(...args) : this._fallbackIdleCallback(...args);
    }
    _cancelIdleCallback(...args) {
        return this._isRequestIdleCallbackSupported() ? cancelIdleCallback(...args) : clearTimeout(...args);
    }
}




export let $sw = async(val) => {

    if ('serviceWorker' in navigator) {
        try {
            if(val.startsWith('/') == false || val.startsWith('./') == false){
                val = '/'+val
            }
        await navigator.serviceWorker.register(window.location.origin+val);
        } catch (e) {
        console.log(`SW registration failed`);
        }
    }

}

String.prototype.hash = function() {

    if (Array.prototype.reduce) {
        return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    } else {

        var hash = 0, i, chr, len;
        if (this.length == 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
};

// let name = "Maheshkariya"
// console.log(name.hash())


String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
// export let getAllTos = () =>
// {
//         let arr = []
//         document.querySelectorAll('*').forEach(el => {
//             if(el.getAttribute('to') != null){
//                 arr.push(el.getAttribute('to'))
//                 console.log(el.getAttribute('to'))
//             }})
// console.log(arr)
// return arr
// }
export let camelCaseToDash = ( str ) => {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
export let dashToCamelCase = ( myStr ) => {
    return myStr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export let dashToPascalCase = (myStr) =>{
    return dashToCamelCase(myStr.replaceAt(0, myStr[0].toUpperCase()))
}
// var myStr = dashToCamelCase( 'this-string' );
// alert( myStr );
// var hello='this-string';
// alert(dashToPascalCase(hello));
// var myStr = camelCaseToDash( 'thisString' );
// alert( myStr );


export let isFunction = (functionToCheck) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
export let makemycss = (val1) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = makemycss(Object.values(val1)[i])
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`{`+hold+`}`
        }else{
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+Object.values(val1)[i]+`;`
        }

    }
    return val2;
}
export let tocss = (...val) =>{
     return `<style>`+makemycss(val[val.length - 1])+`</style>`
}

export let docss = (...val) =>{
    // console.log(val[1])
    if(val[0].shadowRoot == null){
        const shadowRoot = val[0].attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = tocss(val[1])+val[2];
    }else{
        // console.log(val[0].shadowRoot)
        val[0].shadowRoot.innerHTML = tocss(val[1])+val[2];
    }

    // return ''
}

export let recursiveLoop1 = (val1) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = recursiveLoop1(Object.values(val1)[i])
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+hold+` `
        }else{
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+Object.values(val1)[i]+`;`
        }
    }
    return val2;
}

export let recursiveLoop = (val1) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = recursiveLoop1(Object.values(val1)[i])
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`="`+hold+`" `
        }else{
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`='`+Object.values(val1)[i]+`' `
        }
    }
    return val2;
}


export let makeMyFunction = (tag) =>
{
    return (...val) =>
    {

            let temp = ''
            let j = 0;
            if(typeof Object.values(val)[0] === 'object'){
                j = 1;
            }
            for(let i = j;i<val.length;i++)
            {

                if(isFunction(val[i])){
                    let hold = val[i]()
                    if(typeof hold == 'object'){
                        hold.forEach(item=>{
                            temp += item
                        })

                    }else{
                        temp += hold
                    }

                }else{
                    if(typeof val[i] == 'undefined'){
                        // console.log(val[i])
                        // eval(val[i])
                    }
                    else{
                        temp += val[i]
                    }
                    }
            }

            if(typeof Object.values(val)[0] === 'object'){

                let val1 = val[0];
                let val2 = recursiveLoop(val1)
                // console.log(val2)
                return '<'+tag+' '+val2+'>'+temp+'</'+tag+'>'
            }else{
                return '<'+tag+'>'+temp+'</'+tag+'>';
            }




    }
}



export let makeMyFunctionSingle = (tag) =>
{
    return (...val) =>
    {

            let temp = ''
            let j = 0;
            if(typeof Object.values(val)[0] === 'object'){
                j = 1;
            }
            for(let i = j;i<val.length;i++)
            {

                if(isFunction(val[i])){
                    let hold = val[i]()
                    if(typeof hold == 'object'){
                        hold.forEach(item=>{
                            temp += item
                        })

                    }else{
                        temp += hold
                    }

                }else{
                    if(typeof val[i] == 'undefined'){
                        // console.log(val[i])
                    }
                    else{
                        temp += val[i]
                    }
                    }
            }

            if(typeof Object.values(val)[0] === 'object'){

                let val1 = val[0];
                let val2 = recursiveLoop(val1)
                // console.log(val2)
                return '<'+tag+' '+val2+''+temp+'/>'
            }else{
                return '<'+tag+''+temp+'/>';
            }




    }
}



// /**
//  * Format double braced template string
//  * @param {string} string
//  * @param {string} find
//  * @param {string} replace
//  * @returns {string}
//  */
// export let findReplaceString = (string, find, replace) =>
// {
//     if ((/[a-zA-Z\_]+/g).test(string)) {
//         return string.replace(new RegExp('\{\{(?:\\s+)?(' + find + ')(?:\\s+)?\}\}'), replace);
//     } else {
//         throw new Error("Find statement does not match regular expression: /[a-zA-Z\_]+/");
//     }
// }
// console.log(findReplaceString('my {{name}} is mahesh','name','mahesh'))




export let div = makeMyFunction('div')
export let label = makeMyFunction('label')
export let h1 = makeMyFunction('h1')
export let h2 = makeMyFunction('h2')
export let h3 = makeMyFunction('h3')
export let h4 = makeMyFunction('h4')
export let h5 = makeMyFunction('h5')
export let h6 = makeMyFunction('h6')
export let p = makeMyFunction('p')
export let pre = makeMyFunction('pre')
export let a = makeMyFunction('a')
export let title = makeMyFunction('title')
export let body = makeMyFunction('body')
export let li = makeMyFunction('li')
export let ul = makeMyFunction('ul')
export let table = makeMyFunction('table')
export let thead = makeMyFunction('thead')
export let tr = makeMyFunction('tr')
export let th = makeMyFunction('th')
export let tbody = makeMyFunction('tbody')
export let head = makeMyFunction('head')
export let td = makeMyFunction('td')
export let ol = makeMyFunction('ol')
export let header = makeMyFunction('header')
export let footer = makeMyFunction('footer')
export let nav = makeMyFunction('nav')
export let button = makeMyFunction('button')
export let input = makeMyFunction('input')
export let form = makeMyFunction('form')
export let select = makeMyFunction('select')
export let span = makeMyFunction('span')
export let textarea = makeMyFunction('textarea')

export let abbr = makeMyFunction('abbr')
export let address = makeMyFunction('address')
export let map = makeMyFunction('map')
export let article = makeMyFunction('article')
export let aside = makeMyFunction('aside')
export let audio = makeMyFunction('audio')
export let b = makeMyFunction('b')
export let base = makeMyFunction('base')
export let bdi = makeMyFunction('bdi')
export let bdo = makeMyFunction('bdo')
export let blockquote = makeMyFunction('blockquote')
export let canvas = makeMyFunction('canvas')
export let script = makeMyFunction('script')
export let caption = makeMyFunction('caption')
export let cite = makeMyFunction('cite')
export let code = makeMyFunction('code')
export let colgroup = makeMyFunction('colgroup')
export let data = makeMyFunction('data')
export let datalist = makeMyFunction('datalist')
export let dl = makeMyFunction('dl')
export let dd = makeMyFunction('dd')
export let dt = makeMyFunction('dt')
export let del = makeMyFunction('del')
export let ins = makeMyFunction('ins')
export let details = makeMyFunction('details')
export let dfn = makeMyFunction('dfn')
export let dialog = makeMyFunction('dialog')
export let em = makeMyFunction('em')
export let fieldset = makeMyFunction('fieldset')
export let figure = makeMyFunction('figure')
export let figcaption = makeMyFunction('figcaption')
export let iframe = makeMyFunction('iframe')
export let kbd = makeMyFunction('kbd')
export let legend = makeMyFunction('legend')
export let main = makeMyFunction('main')
export let mark = makeMyFunction('mark')
export let meter = makeMyFunction('meter')
export let noscript = makeMyFunction('noscript')
export let optgroup = makeMyFunction('optgroup')
export let picture = makeMyFunction('picture')
export let progress = makeMyFunction('progress')
export let q = makeMyFunction('q')
export let rp = makeMyFunction('rp')
export let rt = makeMyFunction('rt')
export let ruby = makeMyFunction('ruby')
export let s = makeMyFunction('s')
export let samp = makeMyFunction('samp')
export let section = makeMyFunction('section')
export let small = makeMyFunction('small')
export let strong = makeMyFunction('strong')
export let style = makeMyFunction('style')
export let sub = makeMyFunction('sub')
export let summary = makeMyFunction('summary')
export let sup = makeMyFunction('sup')
export let svg = makeMyFunction('svg')
export let template = makeMyFunction('template')
export let tfoot = makeMyFunction('tfoot')
export let time = makeMyFunction('time')
export let u = makeMyFunction('u')
export let wbr = makeMyFunction('wbr')



export let option = makeMyFunctionSingle('option')
export let img = makeMyFunctionSingle('img')
export let link = makeMyFunctionSingle('link')
export let embed = makeMyFunctionSingle('embed')
export let hr = makeMyFunctionSingle('hr')
export let area = makeMyFunctionSingle('area')
export let meta = makeMyFunctionSingle('meta')
export let object = makeMyFunctionSingle('object')
export let param = makeMyFunctionSingle('param')
export let source = makeMyFunctionSingle('source')

export let circle = makeMyFunctionSingle('circle')
export let rect = makeMyFunctionSingle('rect')
export let polygon = makeMyFunctionSingle('polygon')
export let stop = makeMyFunctionSingle('stop')
export let ellipse = makeMyFunctionSingle('ellipse')
export let track = makeMyFunctionSingle('track')


// export let template = makeMyFunction('template')
export let slot = makeMyFunction('slot')
export let i = makeMyFunction('i')
export let icon = (val) => i({class:'material-icons'},val)
export let view = makeMyFunction('qcom-view')
// export default $ = (val) => {
//     if(typeof val == 'object'){
//         new Qcom(val)
//     }else {
//     return makeMyFunction(camelCaseToDash(val))}
// }

export var find = (function () {

	'use strict';

	/**
	 * Create the constructor
	 * @param {String} selector The selector to use
	 */
	var Constructor = function (selector) {
		if (!selector) return;
		if (selector === 'document') {
			this.elems = [document];
		} else if (selector === 'window') {
			this.elems = [window];
		} else {
			this.elems = document.querySelectorAll(selector);
		}
	};

	/**
	 * Do ajax stuff
	 * @param  {String} url The URL to get
	 */
	Constructor.prototype.ajax = function (url) {
		// Do some XHR/Fetch thing here
		// console.log(url);
	};

	/**
	 * Run a callback on each item
	 * @param  {Function} callback The callback function to run
	 */
	Constructor.prototype.each = function (callback) {
		if (!callback || typeof callback !== 'function') return;
		for (var i = 0; i < this.elems.length; i++) {
			callback(this.elems[i], i);
		}
		return this;
	};

	/**
	 * Add a class to elements
	 * @param {String} className The class name
	 */
	Constructor.prototype.addClass = function (className) {
		this.each(function (item) {
			item.classList.add(className);
		});
		return this;
	};

	/**
	 * Remove a class to elements
	 * @param {String} className The class name
	 */
	Constructor.prototype.removeClass = function (className) {
		this.each(function (item) {
			item.classList.remove(className);
		});
		return this;
	};

	/**
	 * Instantiate a new constructor
	 */
	var instantiate = function (selector) {
		return new Constructor(selector);
	};

	/**
	 * Return the constructor instantiation
	 */
	return instantiate;

})();

let syntax = () =>{
    // console.info('You need more practice I think. well you can copy pest following code.')
    // console.info(`JS :      $({
    //     name:'QcomApp',
    //     template:()=>h1('Hello World')
    // })`)
    // console.info(`HTML :    <qcom-app></qcom-app> // no need to write tag as well I'll do it 4 u ok check your output`)
}

let $ = (val) => {
    if(typeof val == 'object'){
        new Qcom(val)
        if(val.class == 'QcomApp' && val.template == undefined){
            // console.info('Step1: ༼ つ ◕_◕ ༽つ template is required dude. check this out.')
            // console.info(`JS :      $({
            //     template:()=>div(h1('App'))
            // })`)
        }else if(val.class == 'QcomApp' && val.template != undefined && val.router == undefined){
    //         console.info('Step2: you have to use router now if you want to or can proceed ok bro.')
    //         console.info(`JS :
    //         let PageOne = {
    //             name:'PageOne',
    //             template:()=>h1('I am Page One')
    //         }
    //         let PageTwo = {
    //             name:'PageTwo',
    //             template:()=>h1('I am Page Two')
    //         }
    //         $({
    //             template:()=>div(
    //                     btn({route:'/PageOne',is:'md'},'PageOne'),
    //                     btn({route:'/PageTwo',is:'md'},'PageTwo'),
    //                     div({id:'router'})
    //                 ),
    //                 include:[
    //                     PageOne,
    //                     PageTwo
    //                 ],
    //             router:{
    //                 error:'404',
    //                 root:'PageOne',
    //                 view:'router',
    //                 links:['/PageOne','/PageTwo']
    //             }
    //         })`)
    //         console.info(`on server side :   npm init -y && npm i express -S && touch server.js && node server.js
    //   server.js :    const express = require('express');express().use(express.static('.')).get('*',(req,res)=>res.sendFile(__dirname+'/index.html')).listen(8082)
    //         `)

        }if(val.class == 'QcomApp' && val.template != undefined && val.router != undefined){
            // console.info('In HTML:              <h1 class="head"  style = "color:red;  background-color:  yellow"    id="heading" > I am H1 </h1>')
            // console.info(`In QCOM:              h1({class:'head', style:{ color:'red', backgroundColor : 'Yellow' }, id:'heading' }, 'I am H1' )`)

            //console.warn('well you can use Grid system')
            // console.warn(`JS :     div(
            //     row(
            //         col({is:'12-6-6'},
            //             div(p('Column 1'))
            //         ),
            //         col({is:'12-6-6'},
            //             div(p('Column 2'))
            //         )
            //     )
            // )
            // `)
        }
    }else {
        if(val == undefined)
        {syntax()}else{
            try{
                if(val.startsWith('Qcom') != true){
                    val = 'Qcom'+val
                }
                return makeMyFunction(camelCaseToDash(val))
         }catch(e){
            syntax()
         }finally{}
    }
    }
}
if(document.querySelector('script').innerHTML.includes('$(')==false){
syntax()
}
export default $
export let $router = (val) =>{
    $({
        router:{
            links:val
        }
    })
    // registerSW()
}





export let $send = (val) => {
    return ``+JSON.stringify(val)+`\n`}
export let $to = (val1) => {
    // console.log(val1.hasAttribute('data'))
    return JSON.parse(val1.getAttribute('data'))
}
export let $getclass =(val) =>{
   return JSON.parse(JSON.stringify(val)).class
}
// export let $$ = {
//     set:(...val)=>{
//         if(val.length==2){
//                     if(val[1] == 'object'){
//                         return localStorage.setItem(val[0],JSON.stringify(val[1]))
//                     }else{
//                         return localStorage.setItem(val[0],val[1])
//                     }
//                 }
//     }
// }
// let isJson = (str) =>{
//     try {
//         var MyJSON = JSON.stringify(MyTestStr);
//         var json = JSON.parse(MyJSON);
//         if(typeof(MyTestStr) == 'string')
//             if(MyTestStr.length == 0)
//                 return false;
//     }
//     catch(e){
//         return false;
//     }
//     return true;
// }
export let $$ = (...val) => {

    if(val.length==2){

            return localStorage.setItem(val[0],JSON.stringify(val[1]))
    }
    else if(val.length==1){
        return JSON.parse(localStorage.getItem(val[0]))
    }

}

export let $$$ = (...val) => {

    if(val.length==2){

            return sessionStorage.setItem(val[0],JSON.stringify(val[1]))
    }
    else if(val.length==1){
        return JSON.parse(sessionStorage.getItem(val[0]))
    }

}

export let lorem = (val) => {
    let temp = ''
    if(val == undefined)
    val=1
    for(const i in range(val)){
        temp+='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec. Risus commodo viverra maecenas accumsan lacus vel. Sodales neque sodales ut etiam sit amet. Velit scelerisque in dictum non. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Morbi tincidunt augue interdum velit. Nibh tortor id aliquet lectus proin. Diam phasellus vestibulum lorem sed risus ultricies tristique. Est ullamcorper eget nulla facilisi etiam dignissim diam. Felis imperdiet proin fermentum leo vel orci porta. Congue nisi vitae suscipit tellus mauris. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Et ligula ullamcorper malesuada proin libero. Sed blandit libero volutpat sed. Sit amet nisl suscipit adipiscing bibendum est. Congue mauris rhoncus aenean vel elit. Mattis rhoncus urna neque viverra justo nec ultrices.'
    }
    return temp
}
export let br = (val) => {
    let temp = ''
    if(val == undefined)
    val=1
    for(const i in range(val)){
        temp+='<br />'
    }
    return temp
}
// export let live = makeMyFunction('live')
// export let updateAll = (className ,val) =>
// {
//     document.querySelectorAll('*').forEach(el => {
//         if(el.getAttribute('to') == className){
//             if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
//                 el.value = val
//             }else{
//                 el.innerText = val
//             }

//         }
//     });
// }

export let getid = (val) => document.getElementById(val)
export let child = (val) => document.querySelector(val)
export let print = (val) => console.log(val)
export let len = (val) => val.length
export let range = (...val) => {
    let arr = []
    if(len(val) == 1){
        for(let i=0;i<val;i++){
            arr.push(i)
        }
    }else if(len(val) == 2)
    {for(let i=val[0];i<val[1];i++){
        arr.push(i)
    }}
    return arr
}
export let change = (val1,val2) => document.getElementById(val1).innerHTML = val2
export let getval = (val) => document.getElementById(val).value
export let gethtml = (val) => document.getElementById(val).innerHTML
export let gettext = (val) => document.getElementById(val).innerText
export let list = (val) => [...val]

// export class Realtime{
//     constructor(hold){
//         this.data = hold.send
//         let socket = io.connect('http://localhost:8080');
//         socket.on('for_client', function (data) {
//             hold.get(data);
//          });
//         socket.emit('for_server', { data: this.data });
//     }
// }

// let eye = new Eye({
//     on:hold.qmongo,
//     change:(newdata)=>{
//         this.refresh({data:newdata})
//     }
// })
// eye.watch()


// export let foreach = (val,html) =>{
//     let temp = ''
//     for(let i in range(len(val))){
//         temp+= i
//     }
//     return temp
//  }



export class Eye{
    constructor(hold){
        this.on = hold.on
        this.data = hold.data
        this.change = hold.change
        //console.log(this.change.methods.refresh)
    }
    async watch()
    {
    // console.log("hello")
    let tempdata = await this.on.find(this.data)
    // console.log(tempdata)
    setInterval(
        async() =>{
            let data = await  this.on.find(this.data)
            if(JSON.stringify(tempdata) != JSON.stringify(data)){
                tempdata = data
                // console.log(tempdata)
                this.change(data);
                // console.log("changed")
            }
        }, 50);

    }


}
export class Mongo{
    constructor(hold){
        this.db = hold.db
        this.url = hold.url
        this.schema = hold.schema
    }
    async find(data = {}){
        let result;
        if(navigator.onLine){
            if($$('deleteddata') != null){
                let store1 = $$('deleteddata')
                store1.forEach(async(item)=>{
                    await this.findByIdAndDelete(item)
                })
                $$('deleteddata',null)
            }
            if($$('newdata') != null){
                let store2 = $$('newdata')
                store2.forEach(async(item)=>{
                    await this.save(item)
                })
                $$('newdata',null)
            }
        // console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/find', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
         result = await response.json()
            $$('result',result)
            // console.log("online",$$('result'));
           } else {
         result = $$('result')
            // console.log("offline",result);
           }
        // console.log(result)
        return result; // parses JSON response into native JavaScript objects
      }
    async findOne(data = {}){

        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findOne', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

    async findById(data){
        let findresult = []
        if(navigator.onLine){
        // console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findById', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({id:data}) // body data type must match "Content-Type" header
        });
        findresult = await response.json();
        // console.log(findresult)
    }else{
        findresult = $$('result').filter(item=>item._id == data)
        findresult = findresult[0]
        // console.log(findresult)
    }
        return findresult; // parses JSON response into native JavaScript objects
      }
    async findByIdAndDelete(data){
          let deletedresult
        if(navigator.onLine){
            // console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findByIdAndDelete', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({id:data}) // body data type must match "Content-Type" header
        });
        deletedresult = await response.json()

       } else {
        let result = $$('result')
        let deleteddata
        if($$('deleteddata') == null){
            deleteddata = []
        }else{
            deleteddata = $$('deleteddata')
        }

        result = result.filter(item => item._id !== data)
        deleteddata.push(data)
        $$('deleteddata',deleteddata)
        console.log(deleteddata)
        $$('result',result)
        deletedresult = 'offline'
       }
        return deletedresult; // parses JSON response into native JavaScript objects
      }

    async findByIdAndUpdate(data,updates){
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/findByIdAndUpdate', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({id:data,data:updates}) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    async save(data){
        let saveresult
        if(navigator.onLine){
            console.log('online')
        const response = await fetch(this.url+'/'+this.db+'/'+this.schema+'/save', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        saveresult = await response.json(); // parses JSON response into native JavaScript objects
      }else {
        let result = $$('result')
        let newdata
        if($$('newdata') == null){
            newdata = []
        }else{
            newdata = $$('newdata')
        }
        // data['_id'] = String(JSON.stringify(data).hash())
        newdata.push(data)
        $$('newdata',newdata)
        // console.log(newdata)
        result.push(data)
        $$('result',result)
        saveresult = 'offline'
       }
       return saveresult
    }

}

class Axios {
    constructor(hold){

    }
    async get(val){
        let response = await fetch(val);
        let commits = await response.json();
        return commits
    }
    async getone(val,id){
        let response;
        if(val.endsWith("/") === true){
            response = await fetch(val+id);}
        else{
            response = await fetch(val+'/'+id);}
        let commits = await response.json();
        return commits.data
    }
    async delete(val){
        let response = await fetch(val, {
        method: 'DELETE',
        })
        let commits = await response.json();
        return commits

    }
    async post (url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

      async put (url = '', data = {}){
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

}
export let qcom = new Axios();
export let MakeClass = (classOf,attributes,hold) => {
    return class classOf extends HTMLElement
    {
        constructor(){
            super()
            if(hold.data){
                //this.data = hold.data;

                this.data = new Proxy(hold.data, {
                    set: function (target, key, value) {
                         //console.log(`${key} set to ${value}`);
                        //console.log(this)
                        target[key] = value;
                        return true;
                    }
                })

            }

            if(hold.globalcss){
                globalcss(hold.globalcss)
            }


            if(hold.el){
                this.el = hold.el;
            }
            if(hold.class){
                this.class = hold.class;
            }else if(hold.name){
                hold.class = hold.name
                this.class = hold.class;
            }

            if(hold.include){
                this.include = hold.include
                this.include.forEach(item=>{
                     $(item)
                })
            }
            if(hold.methods){
                this.methods = hold.methods;
                for(let i = 0;i<Object.keys(this.methods).length;i++){
                    eval('this.'+Object.keys(this.methods)[i]+'='+Object.values(this.methods)[i]+'')
                }
            }else if(hold.code){
                this.methods = hold.code;
                for(let i = 0;i<Object.keys(this.methods).length;i++){
                    eval('this.'+Object.keys(this.methods)[i]+'='+Object.values(this.methods)[i]+'')
                }
            }
            if(hold.template){
                this.template = hold.template
                eval('this.template'+'='+this.template)
            }
            if(hold.created){
                this.created = hold.created;
                eval('('+this.created+')()');
            }else{
                if((hold.class == 'QcomApp' || hold.name == 'QcomApp')&& hold.template == undefined){
                    this.html($('QcomLayout')())
                }else{
                    if(hold.template){
                        if(this.updater){
                            eval('this.render=()=>this.html(this.template());this.updater();this.render();')
                        }else if(this.onload){
                            eval('this.render=()=>this.html(this.template());this.onload();this.render();')
                        }else{
                            eval('this.render=this.updater=()=>this.html(this.template());this.updater()')
                        }

                    }else{
                        if(this.updater){
                            eval('this.updater()')
                        }else if(this.onload){
                            eval('this.onload()')
                        }

                    }
                }
            }
            this.MyElement = (val) =>{
                if(val.parentElement.nodeName.startsWith('QCOM-')==true){
                    return val.parentElement
                }else{
                    this.MyElement(val.parentElement)
                }
            }
            this.event_manage=(name)=>{

                this.addEventListener(name,async(e)=>{
                        if(e.target.getAttribute(name) != null){
                        try{
                            let __store_function_here = e.target.getAttribute(name)
                            // if(__store_function_here.startsWith('()=>'))
                            // {
                                    let __myAttributeIS = __store_function_here
                                    if(__myAttributeIS.split('.')[0].startsWith('Qcom')==false)
                                        {
                                            __myAttributeIS = 'Qcom'+__myAttributeIS
                                        }

                                        // if(this.nodeName == 'QCOM-APP')
                                        if(this.parentElement.nodeName == 'BODY')
                                        {
                                            let __currentElementIs = this.querySelector(camelCaseToDash(__myAttributeIS.split('.')[0]))
                                        if(__currentElementIs != null){
                                                if(__myAttributeIS.split('.')[0] == __currentElementIs.class){
                                                let _fun = __myAttributeIS.split('.')[1]
                                                eval('__currentElementIs.'+_fun)
                                            }
                                        }
                                        else {
                                                if(this.class == __myAttributeIS.split('.')[0])
                                                eval('this.'+__myAttributeIS.split('.')[1])
                                            }
                                    }

                                // }
                        }catch(err) {
                        }
                    }else{
                    }
                },false)}

                this.event_manage('abort')
                this.event_manage('afterprint')
                this.event_manage('animationend')
                this.event_manage('animationiteration')
                this.event_manage('animationstart')
                this.event_manage('beforeprint')
                this.event_manage('beforeunload')
                this.event_manage('blur')
                this.event_manage('canplay')
                this.event_manage('canplaythrough')
                this.event_manage('change')
                this.event_manage('click')
                this.event_manage('contextmenu')
                this.event_manage('copy')
                this.event_manage('cut')
                this.event_manage('dblclick')
                this.event_manage('drag')
                this.event_manage('dragend')
                this.event_manage('dragenter')
                this.event_manage('dragleave')
                this.event_manage('dragover')
                this.event_manage('dragstart')
                this.event_manage('drop')
                this.event_manage('durationchange')
                this.event_manage('ended')
                this.event_manage('error')
                this.event_manage('focus')
                this.event_manage('focusin')
                this.event_manage('focusout')
                this.event_manage('fullscreenchange')
                this.event_manage('fullscreenerror')
                this.event_manage('hashchange')
                this.event_manage('input')
                this.event_manage('invalid')
                this.event_manage('keydown')
                this.event_manage('keypress')
                this.event_manage('keyup')
                this.event_manage('load')
                this.event_manage('loadeddata')
                this.event_manage('loadedmetadata')
                this.event_manage('loadstart')
                this.event_manage('message')
                this.event_manage('mousedown')
                this.event_manage('mouseenter')
                this.event_manage('mouseleave')
                this.event_manage('mousemove')
                this.event_manage('mouseover')
                this.event_manage('mouseout')
                this.event_manage('mouseup')
                this.event_manage('offline')
                this.event_manage('online')
                this.event_manage('open')
                this.event_manage('pagehide')
                this.event_manage('pageshow')
                this.event_manage('paste')
                this.event_manage('pause')
                this.event_manage('play')
                this.event_manage('playing')
                this.event_manage('popstate')
                this.event_manage('progress')
                this.event_manage('ratechange')
                this.event_manage('resize')
                this.event_manage('reset')
                this.event_manage('scroll')
                this.event_manage('search')
                this.event_manage('seeked')
                this.event_manage('seeking')
                this.event_manage('select')
                this.event_manage('show')
                this.event_manage('stalled')
                this.event_manage('storage')
                this.event_manage('submit')
                this.event_manage('suspend')
                this.event_manage('timeupdate')
                this.event_manage('toggle')
                this.event_manage('touchcancel')
                this.event_manage('touchend')
                this.event_manage('touchmove')
                this.event_manage('touchstart')
                this.event_manage('transitionend')
                this.event_manage('unload')
                this.event_manage('volumechange')
                this.event_manage('waiting')
                this.event_manage('wheel')




        }
        // _replacedata(str,result){
        //     return str.replace(/{{(.+?)}}/g, (_,g1) => result[g1] || g1)
        //     }
        //     // if you ever face problem with updater uncomment following method
        // updater(){

        //     // console.log(hold.template())
        //     this.html(this._replacedata(this.template,this.data))
        // }
        design(val){
            this.css = val
        }
        child(val){
            return this.querySelector(camelCaseToDash(val.split('.')[0]))

        }
        params(val){
            if(this.hasAttribute('__'+val) == true){
                return decodeURIComponent(this.getAttribute('__'+val))
            }else{
                console.error(`Hey noobmaster ** `+val+` ** parameter is not here ok.`)
            }

        }
        html(...val){
            // if(this.css == undefined){
            //     this.css = {}
            // }
            if(val.length == 1){
                if(this.css){
                    docss(this,this.css,val)

                }else if(hold.type == 'shadow'){
                    if(hold.css == undefined){
                        hold.css = {}
                    }
                    docss(this,hold.css,val)
                }
                else{
                    if(hold.css){
                        this.innerHTML = tocss(hold.css)+val
                    }else{
                        this.innerHTML = val
                    }

                }

        }
        }

        state(val){
            this._app = new State(val)
        }
        setState(val){
            this._app.setState(val)
        }
        connectedCallback(){

            // if(this.querySelector('[to]')){
            //     console.log(this)
            //     console.log(this.querySelectorAll('[to]'))
            // }
            // this.addEventListener('input',async(e)=>{
            //         this.querySelectorAll('[to]').forEach(el => {
            //             if(el.getAttribute('to') == e.target.getAttribute('to')){
            //                 if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
            //                     el.value = e.target.value
            //                 }else{
            //                     el.innerText = e.target.value
            //                 }
            //             }
            //         });

            // },false)
            if(window.document.head.querySelector('title') == null)
            {
                let _title = document.createElement('title')
                document.head.appendChild(_title)
                window.document.head.querySelector('title').innerHTML = hold.class
            }else{
                window.document.head.querySelector('title').innerHTML = hold.class
            }


        }
        disconnectedCallback() {
            this.removeEventListener('click',this.onInput)
        }
        static get observedAttributes() {
            return attributes;
        }
    }

}
export class Qcom  {
            constructor(hold){

                if(hold != undefined)
                {
                    if(hold.theme != undefined){
                        theme.color = hold.theme.color
                        theme.background = hold.theme.background
                        theme.hover = hold.theme.hover
                    }
                    if((hold.class == undefined && hold.name == undefined)|| hold.name == 'QcomApp' || hold.class == 'QcomApp' || hold.name == 'App' || hold.class == 'App'){
                        hold.class = 'QcomApp'
                        var _bodytag = document.getElementsByTagName('BODY')[0];
                        var _qcomapp = document.createElement('qcom-app');
                        _bodytag.appendChild(_qcomapp);

                    }
                if(hold.attributes){
                    this.attributes = hold.attributes
                }else{
                    this.attributes = []
                }
                if(hold.name){
                    if(hold.name.startsWith('Qcom')==false)
                    {
                        hold.name = 'Qcom'+hold.name
                        hold.class = 'Qcom'+hold.class
                    }
                    hold.class = hold.name
                }
                if(hold.template){
                    this.template = hold.template
                }
                if(hold.class){
                    hold.class = (len(camelCaseToDash(hold.class).split('-'))==1)==true?'Qcom'+hold.class:hold.class
                    let C1 = MakeClass(this.class,this.attributes,hold)
                    try{ customElements.define(String(camelCaseToDash(hold.class)),C1) }catch(err){
                         //console.error(`Failed to execute '$(...)' on 'QcomElementRegistry': the name "`+hold.class+`" has already been used with this registry`)
                    }finally{}

            }
            if(hold.router){
                let __test0 = hold.router.links
                let __test1 = []
                __test0.forEach(item=>{
                    if(item.startsWith('/')){
                        if(item.startsWith('/Qcom')==false){
                            item = 'Qcom'+item.slice(1,len(item))
                        }
                    }else{
                        if(item.startsWith('Qcom')==false){
                            item = 'Qcom'+item
                        }
                    }
                    __test1.push(item)
                })
               __test0 = __test1
                hold.router.links = __test0
                // console.log(hold.router.links)

                let __newArray = []
                let __doubleChecker = []
                __test0.forEach(item=>{
                    if(item.includes(':')==true){
                        if(item.startsWith('/')==false){
                            item = '/'+item
                            __newArray.push(item)
                            __doubleChecker.push(item.split('/')[1])
                        }else{
                            __newArray.push(item)
                            __doubleChecker.push(item.split('/')[1])
                        }
                    }else {
                        if(item.startsWith('/')==true)
                        {
                            item = item.slice(1,len(item))
                            __newArray.push(item)
                            __doubleChecker.push(item.split('/')[0])
                        }else{
                           __newArray.push(item)
                           __doubleChecker.push(item.split('/')[0])
                        }
                    }
                })
                __doubleChecker.forEach(item=>{
                    if(__doubleChecker.count(item)>1){
                        console.error('Dear Programmer Do not use same Component for multiple urls like you just did with '+item+' in router links understood ?')
                    }
                })
                hold.router.links = __newArray

                let view = ''
                if(hold.router.view)
                {
                     view = document.getElementById(hold.router.view);
                }else{
                     view = document.getElementById('router');
                }
                    function check(a,b)
                    {
                        //console.log(a,b)
                        let json = []
                        if(a.length!=b.length)
                            return "False";
                        else
                        {
                            for(var i=0;i<a.length;i++)
                            if(a[i]!=b[i]){
                                if(a[i].startsWith(":") == true){
                                    json[a[i]] = b[i]
                                }else{
                                    return "False"
                                }
                                json[a[i]] = b[i]
                            }
                                return {json:json,response:"True"}
                        }
                    }
                function navigate(event){
                    let route = event.target.getAttribute('route')
                    let __temproute = route
                    if(route.startsWith('/Qcom')==false){
                        route = '/Qcom'+route.slice(1,len(route))
                        //console.log(route)
                    }
                    // let route = event.target.attributes[0].value;
                    let routeInfo = myFirstRouter.routes.filter((r)=>{
                        if(r.type == 'dynamic')
                        {
                            return route.startsWith(r.path.split('/:')[0])
                        }
                        else{
                            // if(route == '/' || route == ""){}
                            // console.log(r.path)
                            return r.path == route
                        }
                    })[0];
                    if(!routeInfo){
                            if(hold.router.error){
                                window.history.pushState({},'',hold.router.error)
                                view.innerHTML = hold.router.error
                            }else{
                                window.history.pushState({},'','404')
                                view.innerHTML = '404'
                                }
                    }else{
                        if(routeInfo.type == 'dynamic'){
                            window.history.pushState({},'',__temproute)
                            let _five = route.split('/').filter(item=>item!="")
                            let _four = routeInfo.name.split('/').filter(item=>item!="")
                            // if(route.startsWith('/')){
                            //     if(route.startsWith('/Qcom')==false){
                            //         route = '/Qcom'+route.slice(4,len(route))
                            //     }
                            // }else{
                            //     if(route.startsWith('Qcom')==false){
                            //         route = '/Qcom'+route.slice(4,len(route))
                            //     }
                            // }
                            // console.log(route)
                            let __myNewJson = {}
                            for(let i in range(len(_four))){
                                if(i!=0)
                                __myNewJson['__'+_four[i].split(':')[1]] = _five[i]
                            }
                            let __myLink = _four[0]
                            if(_four[0].startsWith('Qcom')==false)
                                {
                                     __myLink= 'Qcom'+_four[0]
                                }else{
                                     __myLink= _four[0]
                                }
                            view.innerHTML = $(__myLink)(__myNewJson)
                        }else{
                            //window.history.pushState({},'',routeInfo.path)
                            window.history.pushState({},'',__temproute)

                            let demo = $(routeInfo.name)
                            view.innerHTML = demo()
                        }

                    }
                }
                let activeRoutes = Array.from(document.querySelectorAll('[route]'))
                activeRoutes.forEach((route)=>{
                    route.addEventListener('click',navigate,false)
                })
                let Router = function(name,routes){
                    let newarr = new Array()
                     // {   path:'/',
                    //     name:'Root',
                    //     type:'static'
                    // },
                    // {
                    //     path:'/MyPageone',
                    //     name:'MyPageone',
                    //     type:'static'
                    // },
                    // {
                    //     path:'/dynamic/:id',
                    //     name:'Dynamic',
                    //     type:'dynamic'
                    // }
                    routes.forEach((route)=>{
                        let newobj = new Object()
                        if(typeof route != 'object'){
                            route.split("/:").length>1?newobj.type='dynamic':newobj.type='static'
                            newobj.name = route
                            if(route.split("/:").length>1){

                                newobj.path = route
                            }else{
                                if(route == 'Root' || route == 'Index' || route == 'index' || route=='index'){
                                    newobj.path = '/'
                                }else{
                                    newobj.path = '/'+route
                                }
                            }
                        newarr.push(newobj)
                        }else{
                            newarr.push(route)
                        }

                    })
                    // console.log(newarr)

                    return {
                        name:name,
                        routes:newarr
                    }

                }

                let myFirstRouter = new Router('myFirstRouter',hold.router.links)
                //console.log(hold.router.links)
                    let currentPath = window.location.pathname;

                    if(currentPath == '/'){
                    let demo;
                    if(hold.router.root){
                        demo = $(hold.router.root)
                    }else{
                        demo = $('QcomHome')
                    }
                        view.innerHTML = demo()
                        // view.innerHTML = hold.router.root
                    }else{
                            if(currentPath.startsWith('/Qcom')==false){
                                currentPath = '/Qcom'+currentPath.slice(1,len(currentPath))
                                //console.log(currentPath)
                            }
                        let _one,_two
                        let route = myFirstRouter.routes.filter(r=>{
                            // if(r.type == 'dynamic' || r.type == ''){
                                    _one = r.path.split('/')
                                    _two = currentPath.split('/')
                                    _one = _one.filter(item=>item!="")
                                    _two = _two.filter(item=>item!="")
                                    // console.log(_one,_two)
                                 return check(_one,_two).response == "True"
                            // }else{

                            //     return r.path == currentPath
                            // }



                        })[0];

                        if(route){
                          // console.log(_two)
                            // if(router.path.startsWith('/')){
                            //     if(route.path.startsWith('/Qcom')==false){
                            //         route.path = '/Qcom'
                            //     }
                            // }else{
                            //     if(route.path.startsWith('Qcom')==false)
                            // }
                            // console.log(_two[0])
                            // if(_two[0].startsWith('/')){
                            //     if(_two[0].startsWith('/Qcom')==false){
                            //         _two[0] = '/Qcom'+_two[0].slice(4,len(_two[0]))
                            //     }
                            // }else{
                            //     if(_two[0].startsWith('Qcom')==false){
                            //         _two[0] = '/Qcom'+_two[0].slice(4,len(_two[0]))
                            //     }
                            // }
                            // console.log(_two[0])
                            // console.log(route.path)
                            if(check(_one,_two).response == "True" && check(_one,_two).json[":id"] != undefined){
                                let __myNewJson = {}
                                for(let i in range(len(_one))){
                                    if(i!=0)
                                    __myNewJson['__'+_one[i].split(':')[1]] = _two[i]
                                }

                                let __myLink = _two[0]
                                if(_two[0].startsWith('Qcom')==false)
                                    {
                                        __myLink= 'Qcom'+_two[0]
                                    }else{
                                        __myLink= _two[0]
                                    }
                                view.innerHTML = $(__myLink)(__myNewJson)

                                //view.innerHTML = $(_two[0])(__myNewJson)

                            }else{

                                let _route_page = $(route.name)
                                view.innerHTML = _route_page()
                            }

                        }else{
                            if(hold.router.error){
                            view.innerHTML = hold.router.error
                            }else{
                                view.innerHTML = '404'
                            }
                        }
                    }
                }
        }

        }
    }



// export class Qrouter{
//             constructor(hold){
//                 if(hold.links){
//                 let view = document.getElementById(hold.view);
//                     function check(a,b)
//                     {
//                         let json = []
//                         if(a.length!=b.length)
//                             return "False";
//                         else
//                         {
//                             for(var i=0;i<a.length;i++)
//                             if(a[i]!=b[i]){
//                                 if(a[i].startsWith(":") == true){

//                                     json[a[i]] = b[i]
//                                 }else{
//                                     return "False"
//                                 }
//                                 json[a[i]] = b[i]
//                             }
//                                 return {json:json,response:"True"}
//                         }
//                     }
//                 function navigate(event){
//                     let route = event.target.attributes[0].value;
//                     let routeInfo = myFirstRouter.routes.filter((r)=>{
//                         if(r.type == 'dynamic')
//                         {

//                             return route.startsWith(r.path.split('/:')[0])
//                         }
//                         else{
//                             return r.path == route
//                         }


//                     })[0];
//                     if(!routeInfo){
//                                 window.history.pushState({},'',hold.error)


//                         view.innerHTML = hold.error
//                     }else{
//                         if(routeInfo.type == 'dynamic'){
//                             window.history.pushState({},'',route)
//                             view.innerHTML = 'You have clicked the '+routeInfo.name+' Route With '+route.split('/')[2]
//                         }else{
//                             window.history.pushState({},'',routeInfo.path)
//                             let demo = $(routeInfo.name)
//                             view.innerHTML = demo()
//                             // view.innerHTML = 'You have clicked the '+routeInfo.name+' route'
//                         }

//                     }
//                 }
//                 let activeRoutes = Array.from(document.querySelectorAll('[route]'))
//                 activeRoutes.forEach((route)=>{
//                     route.addEventListener('click',navigate,false)
//                 })
//                 let Router = function(name,routes){
//                     return {
//                         name:name,
//                         routes:routes
//                     }
//                 }

//                 let myFirstRouter = new Router('myFirstRouter',hold.links)
//                     let currentPath = window.location.pathname;

//                     if(currentPath == '/'){
//                          view.innerHTML = `You are on the `+hold.root+` Path`
//                     }else{

//                         let route = myFirstRouter.routes.filter(r=>{
//                             if(r.type == 'dynamic'){
//                                  return check(r.path.split('/'),currentPath.split('/')).response == "True"
//                             }else{
//                                 return r.path == currentPath
//                             }


//                         })[0];
//                         if(route){
//                             if(check(route.path.split('/'),currentPath.split('/')).response == "True" && check(route.path.split('/'),currentPath.split('/')).json[":id"] != undefined){

//                                 view.innerHTML = `You are on the `+ route.name + ' Path With '+ check(route.path.split('/'),currentPath.split('/')).json[":id"]

//                             }else{
//                                 let demo = $(route.name)
//                                 view.innerHTML = demo()
//                             }

//                         }else{
//                             view.innerHTML = hold.error
//                         }
//                     }
//                 }
//             }
//         }
var _style = document.createElement('style');
document.head.appendChild(_style);

new Qcom ({
    class:"QcomCenter",
    created:()=>{
        this.style.textAlign = 'center'
    }
})
let center = $("QcomCenter")

new Qcom ({
    class:"QcomJustify",
    created:()=>{
        for(let i in range(this.childElementCount))
        {
            this.children[i].style.marginRight = '4%',
            this.children[i].style.float = 'right'
        }
    }
})
export let justify = $("QcomJustify")




new Qcom ({
    class:"QcomRight",
    created:()=>{
        this.style.textAlign = 'right',
        this.style.float = 'right'
    }
})
export let right = $("QcomRight")


new Qcom ({
    class:"QcomLeft",
    created:()=>{
        this.style.textAlign = 'left'
    }
})
export let left = $("QcomLeft")


new Qcom ({
    class:"QcomPointer",
    created:()=>{
        this.style.cursor = 'pointer'
    }
})
export let pointer = $("QcomPointer")


// new Qcom ({
//     class:"QcomAlert",
//     created:()=>{
//         this.html(card(left(),right(pointer('X'))))
//     }
// })
// export let alert = $("QcomAlert")

// export let alert = (val)=>
// {
//     setTimeout(function(){
//     console.log(document.querySelectorAll('#qcomAlert')[0].outerHTML = '');
//     }, 3000);

//     // return card({id:'qcomAlert'},left(val),right(pointer('X')))
//     return div({id:'qcomAlert'},left(val))
// }
// ()=>{
//     setTimeout(function(){
//         consoledocument.querySelectorAll('qcom-alert')[0].outerHTML= '';
//     }, 3000);
// }

new Qcom ({
    class:"QcomMaterial",
    code:{
        onload:()=>{
            this.check(this)
        },
        check:(val)=>{
            for(let i in range(val.children.length)){
                if(val.children[i].childNodes.length > 0){
                    this.check(val.children[i])
                }
                    if(val.children[i].nodeName == 'INPUT'){
                        val.children[i].style.display= 'block';
                        val.children[i].style.outline= 'none';
                        val.children[i].style.width= '100%';
                        val.children[i].style.height= 'calc(1.5em + .75rem + 2px)';
                        val.children[i].style.padding= '.375rem .75rem';
                        val.children[i].style.fontSize= '1rem';
                        val.children[i].style.fontWeight= '400';
                        val.children[i].style.lineHeight= '1.5';
                        val.children[i].style.color= '#495057';
                        val.children[i].style.backgroundColor= '#fff';
                        val.children[i].style.backgroundClip= 'padding-box';
                        val.children[i].style.border= '1px solid #ced4da';
                        val.children[i].style.borderRadius= '.25rem';
                        val.children[i].style.boxSizing= 'border-box';
                        val.children[i].style.transition= 'border-color .15s ease-in-out,box-shadow .15s ease-in-out';
                }else if(val.children[i].nodeName == 'BUTTON'){

                    val.children[i].style.display= 'block';
                    val.children[i].style.padding= '10px 25px';

                    if(val.children[i].getAttribute('is') == 'block')
                    val.children[i].style.width= '100%';
                    if(val.children[i].getAttribute('is') == 'md')
                    val.children[i].style.padding= '1rem 2rem';
                    if(val.children[i].getAttribute('is') == 'sm')
                    val.children[i].style.padding= '0.5rem 1rem';

                    val.children[i].style.textAlign= 'center';
                    val.children[i].style.outline= 'none';
                    val.children[i].style.position= 'relative';
                    val.children[i].style.overflow= 'hidden';
                    val.children[i].style.borderRadius= '4px';
                    val.children[i].style.border= 'none';

                    val.children[i].style.background= theme.background; /*#6A1B9A*/

                    val.children[i].style.fontWeight= '500';
                    val.children[i].style.color= '#fff';
                    val.children[i].style.boxShadow= '0px 1px 2px 0px rgba(0, 0, 0, 0.15)';
                    val.children[i].style.cursor= 'pointer';

                    globalcss({
                        '.wave':{
                            'position': 'absolute',
                            'top': '10px',
                            'left': '20px',

                            'width': '5px',
                            'height': '5px',

                            'border-radius': '100%',
                            'transform': 'scale(0)',
                            'background': 'rgba(255,255,255,.4)',
                          },

                          '.material-btn--active .wave':{
                            'animation': 'wave-animation 1.9s',
                          },
                          '@keyframes wave-animation':{
                            'from':{
                              'opacity': '1',
                              'transform': 'scale(10)',
                            },
                            'to':{
                              'transform':'scale(70)',
                              'opacity': '0',
                            }
                          }
                    })

                    let btn1 = val.children[i]
                    let waveBg = document.createElement("DIV");
                    waveBg.className = "wave";
                    btn1.appendChild(waveBg);
                    btn1.onmousedown= function(event){
                      var wave = btn1.querySelector('.wave');
                      var className = 'material-btn--active';
                      if(btn1.classList.contains(className)){
                        btn1.classList.remove(className);
                      }
                      wave.style.left = event.clientX - btn1.offsetLeft +'px';
                      wave.style.top = event.clientY - btn1.offsetTop + 'px';

                      void btn1.offsetWidth;
                      btn1.classList.add(className);
                    }




                }



            }
        }
    }
})
export let material = $("QcomMaterial")

// globalcss({
//     '.input':{

//     }
// })

export let globalcss = (val)  =>{
    for(let i in range(len(Object.keys(val)))){
        let _store_1 = '{"'+String(Object.keys(val)[i]+'":'+JSON.stringify(Object.values(val)[i]))+'}'
        _store_1 = JSON.parse(_store_1)
        _style.sheet.insertRule(makemycss(_store_1))
    }
    // _style.sheet.insertRule(makemycss(val))
}
// globalcss({
//     '*':{
//         margin:0,
//         padding:0
//     },
//     '.h2':{
//         border:'10px solid black'
//     }
// })

_style.sheet.insertRule(`
qcom-textarea{
    display: inline-block;
    width: 100%;
    padding: 0.6em;
    margin-bottom:1em;
    box-sizing: border-box;
    user-select: none;
    font-family: hero-new, sans-serif;
    text-align: left;
    text-decoration: none;
    background-color: inherit;
    color: rgb(73, 80, 87);
    outline: none;
    // cursor: pointer;
    border: none;
    -webkit-appearance: none;
    border-radius: 5px;
    background: #ffffff;
    background: #ffffff;
    box-shadow:  -5px 5px 10px #d9d9d9,
    5px -5px 10px #ffffff;
    // transition: box-shadow 0.2s ease 0s;
    // box-shadow: rgb(255, 255, 255) -5px -5px 10px, rgb(187, 187, 187) 5px 5px 10px, rgb(255, 255, 255) 0px 0px 0px inset, rgb(187, 187, 187) 0px 0px 0px inset;
}`)




new Qcom ({
    class:"QcomPrimary",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#007bff'
         }else
        {for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#007bff'
           this.children[i].style.color = '#fff'
        }}
    }
})
export let primary = $("QcomPrimary")

new Qcom ({
    class:"QcomSuccess",
    created:()=>{
         if(this.children.length == 0){
            this.style.color = '#28a745'
         }else{
            for(let i in range(this.children.length)){
                this.children[i].style.backgroundColor = '#28a745'
                this.children[i].style.color = '#fff'
             }
         }

    }
})
export let success = $("QcomSuccess")




new Qcom ({
    class:"QcomUppercase",
    created:()=>{
            for(let i in range(this.children.length)){
                this.children[i].style.textTransform = 'uppercase'

             }

    }
})
export let uppercase = $("QcomUppercase")



new Qcom ({
    class:"QcomLowercase",
    created:()=>{
            for(let i in range(this.children.length)){
                this.children[i].style.textTransform = 'lowercase'

             }

    }
})
export let lowercase = $("QcomLowercase")


new Qcom ({
    class:"QcomCapitalize",
    created:()=>{
            for(let i in range(this.children.length)){
                this.children[i].style.textTransform = 'capitalize'

             }

    }
})
export let capitalize = $("QcomCapitalize")

new Qcom ({
    class:"QcomInfo",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#17a2b8'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#17a2b8'
           this.children[i].style.color = '#fff'
        }
    }
    }
})
export let info = $("QcomInfo")

new Qcom ({
    class:"QcomWarnning",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#ffc107'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#ffc107'
           this.children[i].style.color = '#fff'
        }
    }
    }
})
export let warnning = $("QcomWarnning")

new Qcom ({
    class:"QcomDanger",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#dc3545'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#dc3545'
           this.children[i].style.color = '#fff'
        }
    }
    }
})

export let danger = $("QcomDanger")

new Qcom ({
    class:"QcomDark",
    created:()=>{
        this.doit(this.children)
    },
    methods:{
        doit:(val)=>{
            if(val.length == 0){
                this.style.color = '#343a40'
             }else
            {
            for(let i in range(val.length)){
                this.children[i].style.backgroundColor = '#343a40'
                this.children[i].style.color = '#fff'
             }
            }
        }
    }
})
export let dark = $("QcomDark")

new Qcom ({
    class:"QcomLight",
    created:()=>{
        if(this.children.length == 0){
            this.style.color = '#f8f9fa'
         }else
        {
        for(let i in range(this.children.length)){
           this.children[i].style.backgroundColor = '#f8f9fa'
           this.children[i].style.color = '#000'
        }
    }
    }
})
export let light = $("QcomLight")

export let changetable = () =>
{



// _style.sheet.insertRule(`qcom-view{background:red,boxShadow:-5px -5px 10px #fff,
//                 5px 5px 10px #bbb,
//                 0px 0px 0px #fff inset,
//                 0px 0px 0px #bbb inset}`)

_style.sheet.insertRule(`
#qcomAlert{
    position: fixed;
    top: 10;
    right: 0;
    width: auto;
    height:auto;
    padding:1em;
    border: 1px solid #000;
    text-align:center
}
`)
_style.sheet.insertRule(`
body{font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`)
_style.sheet.insertRule(`
nav{
    margin:-8px;
-ms-flex-flow: row nowrap;
flex-flow: row nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: .5rem 1rem;
}
`)




function reportWindowSize() {
    if(window.innerWidth < 700){
        smtable()
    }else{
        bigtable()
    }
}

window.onresize = reportWindowSize;

if(window.matchMedia("(max-width: 700px)").matches == true){
   smtable()
}
else{
    bigtable()
}
function bigtable()
{

_style.sheet.insertRule(`thead {
    color: rgba(0,0,0,0.6);
}`)
_style.sheet.insertRule(`thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}`)
_style.sheet.insertRule(`tr {
    border-bottom: 1px solid rgba(0,0,0,0.12);
}`)
_style.sheet.insertRule(`tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}`)
_style.sheet.insertRule(`td, th {
    padding: 15px 10px;
}`)
_style.sheet.insertRule(`td, th {
    padding: 15px 5px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-radius: 2px;
}`)
}

// console.log(window.matchMedia("(max-width: 501px)").matches)
function smtable()
{

_style.sheet.insertRule(`
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        display: block;
        position: relative;

    }`)
    // _style.sheet.insertRule(`
    // table {
    //     width: 100%;
    //     display: table;
    //     border-collapse: collapse;
    //     border-spacing: 0;
    //     border: none;
    // }`);

    _style.sheet.insertRule(`table td:empty:before {
        content: ''
    }`)
    _style.sheet.insertRule(`table th,
    table td {
        margin: 0;
        vertical-align: top
    }`)
    _style.sheet.insertRule(`table th {
        text-align: left
    }`)
    _style.sheet.insertRule(`table thead {
        display: block;
        float: left
    }`)
    _style.sheet.insertRule(`table thead tr {
        display: block;
        padding: 0 10px 0 0
    }`)
    _style.sheet.insertRule(`table thead tr th::before {
        content: ''
    }`)
    _style.sheet.insertRule(`table tbody {
        display: block;
        width: auto;
        position: relative;
        overflow-x: auto;
        white-space: nowrap
    }`)
    _style.sheet.insertRule(`table tbody tr {
        display: inline-block;
        vertical-align: top
    }`)
    _style.sheet.insertRule(`table th {
        display: block;
        text-align: right
    }`)
    _style.sheet.insertRule(`table td {
        display: block;
        min-height: 1.25em;
        text-align: left
    }`)
    _style.sheet.insertRule(`table tr {
        border-bottom: none;
        padding: 0 10px
    }`)
    _style.sheet.insertRule(`table thead {
        border: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.12)
    }`)

}




}
changetable()
// window.document.addEventListener('resize',()=>{
//     console.log("ok")
// })
new Qcom ({
    class:"QcomContainer",
    css:{
       'div':{ margin: '3rem',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: 'left'}
    },
    created:()=>{
        this.html(div(slot()))
    }
})
export let container = $("QcomContainer")




new Qcom ({
    class:"QcomCard",
    created:()=>{
        // this.style.boxSizing= 'border-box';
        this.style.width='96%';
        // this.style.height='98%';
        this.style.padding = '2%';
        this.style.margin = '1%';

        // this.style.userSelect= 'none';
        this.style.display= 'inline-block';
        // this.style.minWidth= this.getAttribute('qtype');
        this.style.fontFamily= 'hero-new, sans-serif';
        // this.style.textAlign= 'center';
        // this.style.textDecoration= 'none';
        // this.style.outline= 'none';
        // this.style.border= '2px solid red';
        this.style.webkitAppearance= 'none';
        this.style.transition= 'box-shadow .2s';
        this.style.boxShadow= `-5px -5px 10px #eee,
            5px 5px 10px #bbb,
            0px 0px 0px #eee inset,
            0px 0px 0px #bbb inset`


    }
})
export let card = $("QcomCard")


new Qcom ({
    class:"QcomRow",
    // css:{
    //    'div':{ display: '-ms-flexbox',
    //     display: 'flex',
    //     msFlexWrap: 'wrap',
    //     flexWrap: 'wrap',
    //     boxSizing: 'border-box'}
    // },
    created:()=>{
        {
            this.design({'div':{ display: '-ms-flexbox',
            display: 'flex',
            msFlexWrap: 'wrap',
            flexWrap: 'wrap',
            boxSizing: 'border-box'}})
            this.html(div(slot()))
        }

    }
})
export let row = $("QcomRow")

new Qcom ({
    class:"QcomCol",
    // noOfCols:0,
    created:()=>
        {
                if(this.hasAttribute('is')===true){
                    let __holdColsSize = this.getAttribute('is').split('-')
                    this.setAttribute('s',__holdColsSize[0])
                    this.setAttribute('m',__holdColsSize[1])
                    this.setAttribute('l',__holdColsSize[2])
                }
                if((this.getAttribute('l') == undefined)&&(this.getAttribute('m') == undefined)&&(this.getAttribute('s') == undefined)){
                    this.setAttribute('s','12')
                    let no_of_cols =this.parentElement.childElementCount
                    this.setAttribute('m',12/no_of_cols)
                    this.setAttribute('l',12/no_of_cols)
                }
                // hold.noOfCols = this.parentElement.childElementCount
                if(window.matchMedia("(min-width: 768px)").matches == true){
                    this.l(window.matchMedia("(min-width: 768px)"))
                }
                else if(window.matchMedia("(max-width: 768px)").matches == true){
                 this.m(window.matchMedia("(max-width: 768px)"))
                }else window.matchMedia("(max-width: 500px)")
                {
                    this.s(window.matchMedia("(max-width: 500px)"))
                }
        },
        methods:{
            l:(l)=>
            {
                var m = window.matchMedia("(max-width: 768px)")
                m.addListener(this.m)

                var s = window.matchMedia("(max-width: 500px)")
                s.addListener(this.s)

                if(l.matches == true){
                    let one = 96/12
                    let sizeOfCol = one*this.getAttribute('l')
                    this.style.position= 'relative';
                    // this.style.width= '100%';
                    this.style.paddingRight= '1%';
                    this.style.paddingLeft= '1%';
                    this.style.maxWidth= sizeOfCol+'%';
                    this.style.flex = '0 0 '+sizeOfCol+'%'
                }
            },
            m:(m)=>
            {
                var s = window.matchMedia("(max-width: 500px)")
                s.addListener(this.s)

                var l = window.matchMedia("(min-width: 768px)")
                l.addListener(this.l)

                if(m.matches == true){
                    let one = 96/12
                    let sizeOfCol = one*this.getAttribute('m')
                    this.style.position= 'relative';
                    // this.style.width= '100%';
                    this.style.paddingRight= '1%';
                    this.style.paddingLeft= '1%';
                    this.style.maxWidth= sizeOfCol+'%';
                    this.style.flex = '0 0 '+sizeOfCol+'%'
                }
            },
            s:(s)=>
            {
                var m = window.matchMedia("(min-width: 500px)")
                m.addListener(this.m)
                var l = window.matchMedia("(min-width: 768px)")
                l.addListener(this.l)
                if(s.matches == true){
                    let one = 96/12
                    let sizeOfCol = one*this.getAttribute('s')
                    this.style.position= 'relative';
                    this.style.width= '100%';
                    this.style.paddingRight= '1%';
                    this.style.paddingLeft= '1%';
                    this.style.maxWidth= sizeOfCol+'%';
                    this.style.flex = '0 0 '+sizeOfCol+'%'
                }
            }
        }



})
export let col = $("QcomCol")

// new Qcom({
//     class:'QcomCard',
//     created:()=>{
//         // this.style.border = '5px solid red'
//         this.style.margin= '5em';
//         this.style.marginTop='100px';
//         this.style.borderRadius='4px';
//         this.style.padding='3em';
//         // this.style.backgroundColor='#E0E5EC';
//         this.style.boxShadow= '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)';
//     }
// })
// let card = $("QcomCard")




new Qcom ({
    class:"QcomButton",
    attributes:['is'],
    created:()=>{
        {
            if(this.getAttribute('is') == 'sm'){
                this.design({
                'div':{
                    padding: '.25rem .5rem',
                    fontSize: '.875rem',
                    lineGeight: '1.5',
                    borderRadius: '.2rem',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }
            })}
                else if(this.getAttribute('is') == 'md'){
                this.design({
                'div':{
                    padding: '.5rem 0.8rem',
                    fontSize: '1rem',
                    lineGeight: '2',
                    borderRadius: '.4rem',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }
            })
            }else if(this.getAttribute('is') == 'lg'){
                this.design({
                'div':{
                    padding: '0.5rem 2rem',
                    fontSize: '2rem',
                    lineGeight: '3',
                    borderRadius: '.4rem',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }})
            }else if(this.getAttribute('is') == 'block'){
                this.design({
                'div':{
                    display: 'block',
                    width: '100%',
                    padding: '0.6em 0.6em',

                    boxSizing: 'border-box',
                    userSelect: 'none',
                    display: 'inline-block',
                    fontFamily: 'hero-new, sans-serif',
                    textAlign: 'center',
                    textDecoration: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    border: 'none',
                    webkitAppearance: 'none',
                    transition: 'box-shadow .2s',
                    boxShadow: `-5px -5px 10px #fff,
                        5px 5px 10px #bbb,
                        0px 0px 0px #fff inset,
                        0px 0px 0px #bbb inset`
                },
                'div:hover':{
                    boxShadow: `0px 0px 0px #fff,0px 0px 0px #bbb,-5px -5px 10px #fff inset,5px 5px 10px #bbb inset`,
                    transition: `box-shadow .35s`
                }})
            }else if(this.getAttribute('is') == 'link'){
                this.design({
                'div':{
                    cursor:'pointer',
                    fontSize:'0.9em'
                },'div:hover':{
                    color:theme.hover
                }})
            }
            this.html(div(slot()))


        }


    }
})
export let btn = $("QcomButton")





$({
    class:'QcomAppBar',
    code:{
        onload:()=>{
            let title = this.getAttribute('title') == null?'':this.getAttribute('title')
            this.design({
                'div':{
                    display:'flex',
                    flexFlow:'row wrap',
                    backgroundColor: theme.background,
                    color: theme.color,
                    maxHeight: '50px',
                    maxHeight: '50px',
                    fontSize:'1.4rem',
                    padding: '10px',
                    zIndex : '2',
                    marginLeft:'-7px',
                    marginBottom:'50px',
                    position: 'fixed',
                    top: 0,
                    width: '99%',
                    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
                }
            })

            this.html(div((title+slot())))

        }
    },
    attributes:['title','actions','background']
})

export let appbar = $("QcomAppBar")


// $({
//     class:'QcomBottomNavigationBar',
//     css:{
//        'div':{ backgroundColor: '#FFF',
//         display: 'flex',
//         justifyContent: 'space-between',
//         color: '#000',
//         maxHeight: '50px',
//         fontSize:'1.4rem',
//         zIndex: '9999',
//         position: 'fixed',
//         bottom: 0,
//         width:'100%',
//         marginRight:'100px',
//         boxShadow:'0 2px 5px 0 rgba(0, 0, 0, 0.26)'}
//     },
//     created:()=>{
//         this.html(div(slot()))
//     },
//     attributes:['title','actions','background']
// })

// let bottomNavigationBar = $("QcomBottomNavigationBar")


$({
    class:'QcomBottomNavigationBar',

    created:()=>{
        this.design({
            'div':
            {
                position: 'fixed',
                padding:'0em 1em',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 100000,
                willChange: 'transform',
                webkitTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
                display: 'flex',
                height: '50px',
                boxShadow: '0 -2px 5px -2px #333',
                backgroundColor: theme.background,
                justifyContent: 'space-between',
                alignItems: 'center'
            },

        }),
        this.html(div(slot()))

},
})

export let bottomNavigationBar = $("QcomBottomNavigationBar")


$({
    class:'QcomBottomNavigationBarItem',
    created:()=>{
        this.design({
            'div':
                {
                    color: theme.color,
                    cursor:'pointer',
                    flexGrow: 1,
                    textAlign: 'center',
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                },


        }),
        this.html(
            div(slot()))
        this.style.color=color.black
        this.addEventListener('click',(e)=>{
            let store = this.parentElement.querySelectorAll('qcom-bottom-navigation-bar-item')
            store.forEach(item=>{
                // console.log(item)
                // console.log(e.target)
                if(item == e.target){
                    e.target.querySelector('i').style.color = theme.hover
                }else{
                    item.querySelector('i').style.color = theme.color
                }
                // console.log(item)
                // console.log(e.target)
            })


        })
},
})

export let bottomNavigationBarItem = $("QcomBottomNavigationBarItem")



$({
    class:'QcomEmoji',
    created:()=>{
        this.design({span:{fontSize: '1.2em'}})
        this.html(span(slot()))
    }
})
export let emoji = $('QcomEmoji')

/**
 * Codes of emojis
 */
// https://emojipedia.org/people/
export let of = {
    /** &#128512 */
    grinning_face:'&#128512',
    /** &#128515 */
    grinning_face_with_big_eyes:'&#128515;',
    /** &#128516 */
    grinning_face_with_smiling_eyes:'&#128516;',
    /** &#128513 */
    beaming_face_with_smiling_eyes:'&#128513;',
    /** &#128518 */
    grinning_squinting_face:'&#128518;',
    /** &#128517 */
    grinning_face_with_sweat:'&#128517;',
    /** &#129315 */
    rolling_on_the_floor_laughing:'&#129315;',
    /** &#128514 */
    face_with_tears_of_joy:'&#128514;',
    /** &#128578 */
    slightly_smiling_face:'&#128578;',
    /** &#128579 */
    upside_down_face:'&#128579;',
    /** &#128521 */
    winking_face:'&#128521;',
    /** &#128522 */
    smiling_face_with_smiling_eyes:'&#128522;',
    /** &#128519 */
    smiling_face_with_halo:'&#128519;',
    /** 🥰 */
    smiling_face_with_hearts:'🥰',
    /** 😍 &#128525 */
    smiling_face_with_heart_eyes:'&#128525;',
    /** 🤩 */
    star_struck:'🤩',
    /** 😘 &#128536 */
    face_blowing_a_kiss:'&#128536;',
    /** 😗 &#128535 */
    kissing_face:'&#128535;',
    /** ☺ */
    smiling_face:'☺',
    /** 😚 &#128538 */
    kissing_face_with_closed_eyes:'&#128538;',
    /** 😙 &#128537 */
    kissing_face_with_smiling_eyes:'&#128537;',
    /** 😋 */
    face_savoring_food:'😋',
    /** 😛 &#128539 */
    face_with_tongue:'&#128539;',
    /** 😜 &#128540 */
    winking_face_with_tongue:'&#128540;',
    /** 🤪 */
    zany_face:'🤪',
    /** 😝 &#128541 */
    squinting_face_with_tongue:'&#128541;',
    /** 🤑 */
    money_mouth_face:'🤑',
    /** 🤗 */
    hugging_face:'🤗',
    zany_face:'🤪',
    /** 🤭 &#129325 */
    face_with_hand_over_mouth:'&#129325;',
    /** 🤫 Decimal - &#129323 Hexa - &#x1F92B; URL- %F0%9F%A4%AB */
    shushing_face:'&#129323;',
    /** 🤔 Decimal - &#129300 Hexa - &#x1F914; */
    thinking_face:'&#129300;',
    /** 🤐 Decimal - &#129296 Hexa - &#x1F910; */
    zipper_mouth_face:'&#129296;',
    /** 🤨  */
    face_with_raised_eyebrow:'🤨',
    /** 😐 Decimal - &#128528 Hexa - &#x1F610; */
    neutral_face:'&#128528;',
    /** 😑 Decimal - &#128529 Hexa - &#x11F611; */
    expressionless_face:'&#128529;',
    /** 😶 Decimal - &#128566 Hexa - &#x1F636; */
    face_without_mouth:'&#128566;',
    /** 😏 Decimal - &#128527 Hexa - &#x1F60F; */
    smirking_face:'&#128527;',
    /** 😒 Decimal - &#128530 Hexa - &#x1F612; */
    unamused_face:'&#128530;',
    /** 🙄 */
    face_with_rolling_eyes:'🙄',
    /** 😬 Decimal - &#128556 Hexa - &#x1F62C; */
    grimacing_face:'&#128556;',
    /** 🤥 */
    lying_face:'🤥',
    /** 😌 Decimal - &#128524 Hexa - &#x1F60C; */
    relieved_face:'&#128524;',
    /** 😔 Decimal - &#128532 Hexa - &#x1F614; */
    pensive_face:'&#128532;',
    /** 😪 Decimal - &#128554 Hexa - &#x1F62A; */
    sleepy_face:'&#128554;',
    /** 🤤 Decimal - &#129316 Hexa - &#x1F924; */
    drooling_face:'&#129316;',
    /** 😴 Decimal - &#128564 Hexa - &#x1F634; */
    sleeping_face:'&#128564;',
    /** 😷 Decimal - &#128567 Hexa - &#x1F637; */
    face_with_medical_mask:'&#128567;',
    /** 🤒 */
    face_with_thermometer:'🤒',
    /** 🤕 Decimal - &#129301 Hexa - &#x1F915; */
    face_with_head_bandage:'&#129301;',
    /** 🤢 Decimal - &#129314 Hexa - &#x1F922; */
    nauseated_face:'&#129314;',
    /** 🤮 Decimal - &#129326 Hexa - &#x1F92E; */
    face_vomiting:'&#129326;',
    /** 🤧 Decimal - &#129319 Hexa - &#x1F927; */
    sneezing_face:'&#129319;',
    /** 🥵 */
    hot_face:'🥵',
}
/*margin padding from all side*/
globalcss({'.mt1':{marginTop:'0.25rem'},'.mb1':{marginBottom:'0.25rem'},'.ml1':{marginLeft:'0.25rem'},'.mr1':{marginRight:'0.25rem'},'.mt2':{marginTop:'0.5rem'},'.mb2':{marginBottom:'0.5rem'},'.ml2':{marginLeft:'0.5rem'},'.mr2':{marginRight:'0.5rem'},'.mt3':{marginTop:'0.75rem'},'.mb3':{marginBottom:'0.75rem'},'.ml3':{marginLeft:'0.75rem'},'.mr3':{marginRight:'0.75rem'},'.mt4':{marginTop:'1rem'},'.mb4':{marginBottom:'1rem'},'.ml4':{marginLeft:'1rem'},'.mr4':{marginRight:'1rem'},'.mt5':{marginTop:'1.25rem'},'.mb5':{marginBottom:'1.25rem'},'.ml5':{marginLeft:'1.25rem'},'.mr5':{marginRight:'1.25rem'},'.mt6':{marginTop:'1.5rem'},'.mb6':{marginBottom:'1.5rem'},'.ml6':{marginLeft:'1.5rem'},'.mr6':{marginRight:'1.5rem'},'.mt7':{marginTop:'1.75rem'},'.mb7':{marginBottom:'1.75rem'},'.ml7':{marginLeft:'1.75rem'},'.mr7':{marginRight:'1.75rem'},'.mt8':{marginTop:'2rem'},'.mb8':{marginBottom:'2rem'},'.ml8':{marginLeft:'2rem'},'.mr8':{marginRight:'2rem'},'.mt9':{marginTop:'2.25rem'},'.mb9':{marginBottom:'2.25rem'},'.ml9':{marginLeft:'2.25rem'},'.mr9':{marginRight:'2.25rem'},'.mt10':{marginTop:'2.5rem'},'.mb10':{marginBottom:'2.5rem'},'.ml10':{marginLeft:'2.5rem'},'.mr10':{marginRight:'2.5rem'},'.mt11':{marginTop:'2.75rem'},'.mb11':{marginBottom:'2.75rem'},'.ml11':{marginLeft:'2.75rem'},'.mr11':{marginRight:'2.75rem'},'.mt12':{marginTop:'3rem'},'.mb12':{marginBottom:'3rem'},'.ml12':{marginLeft:'3rem'},'.mr12':{marginRight:'3rem'},'.pt1':{paddingTop:'0.25rem'},'.pb1':{paddingBottom:'0.25rem'},'.pl1':{paddingLeft:'0.25rem'},'.pr1':{paddingRight:'0.25rem'},'.pt2':{paddingTop:'0.5rem'},'.pb2':{paddingBottom:'0.5rem'},'.pl2':{paddingLeft:'0.5rem'},'.pr2':{paddingRight:'0.5rem'},'.pt3':{paddingTop:'0.75rem'},'.pb3':{paddingBottom:'0.75rem'},'.pl3':{paddingLeft:'0.75rem'},'.pr3':{paddingRight:'0.75rem'},'.pt4':{paddingTop:'1rem'},'.pb4':{paddingBottom:'1rem'},'.pl4':{paddingLeft:'1rem'},'.pr4':{paddingRight:'1rem'},'.pt5':{paddingTop:'1.25rem'},'.pb5':{paddingBottom:'1.25rem'},'.pl5':{paddingLeft:'1.25rem'},'.pr5':{paddingRight:'1.25rem'},'.pt6':{paddingTop:'1.5rem'},'.pb6':{paddingBottom:'1.5rem'},'.pl6':{paddingLeft:'1.5rem'},'.pr6':{paddingRight:'1.5rem'},'.pt7':{paddingTop:'1.75rem'},'.pb7':{paddingBottom:'1.75rem'},'.pl7':{paddingLeft:'1.75rem'},'.pr7':{paddingRight:'1.75rem'},'.pt8':{paddingTop:'2rem'},'.pb8':{paddingBottom:'2rem'},'.pl8':{paddingLeft:'2rem'},'.pr8':{paddingRight:'2rem'},'.pt9':{paddingTop:'2.25rem'},'.pb9':{paddingBottom:'2.25rem'},'.pl9':{paddingLeft:'2.25rem'},'.pr9':{paddingRight:'2.25rem'},'.pt10':{paddingTop:'2.5rem'},'.pb10':{paddingBottom:'2.5rem'},'.pl10':{paddingLeft:'2.5rem'},'.pr10':{paddingRight:'2.5rem'},'.pt11':{paddingTop:'2.75rem'},'.pb11':{paddingBottom:'2.75rem'},'.pl11':{paddingLeft:'2.75rem'},'.pr11':{paddingRight:'2.75rem'},'.pt12':{paddingTop:'3rem'},'.pb12':{paddingBottom:'3rem'},'.pl12':{paddingLeft:'3rem'},'.pr12':{paddingRight:'3rem'},})

{/* <div class="header">
                    <div class="avatar"></div>
                    <div class="text">
                        <div class="field name">Evgeny Nizamiev</div>
                        <div class="field info">RadiationX</div>
                    </div>
</div>
<ul class="menu">
                    <li class="item">Menu Item 1</li>
                    <li class="item">Menu Item 2</li>
                    <li class="item subheader">Header</li>
                    <li class="item">Menu Item 6</li>

</ul>
*/}




export let ele = (val)=>{
    return (target)=>{
      target.ele = val
   }
}