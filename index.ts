let $:any;
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
export default $ = async(val:any) => {
    let __s:any;
    if(val.port == undefined){
         __s = 8000
         console.log('\x1b[32m%s\x1b[0m','Server running on https://localhost:8000')
    }else{
         __s = val.port;   
         console.log('\x1b[32m%s\x1b[0m','Server running on https://localhost:'+val.port)
    }
    let __s__:any = serve({ port: __s})
    for await (const req of __s__) {
        let len:any = Object.keys(val.rest).length;
        if(len != 0){
            let __index:number = -1;
            let __flag = 0;
            let __dump_arr:any = []
            Object.keys(val.rest).map((item)=>{
                __index++;
                if(item == req.url){
                    __dump_arr.push(item)
                    __flag = 1;
                    let __route:any =  Object.values(val.rest)[__index];
                    if(__route.method != undefined){
                        if(__route.method == req.method){
                            let __func = __route.code
                            let __ans = __func();
                            req.respond(__ans);
                            }
                        }
                    }  
            })
            if(__dump_arr.length == 0)
            {
                let __index:number = -1;
                Object.keys(val.rest).map((item)=>{
                    __index++;
                    if (~item.indexOf("/:")){
                           let __url_attributes = req.url.split('/').filter((item:any)=>item!='')
                           let __item_attributes = item.split('/:').filter((item:any)=>item!='')
                           let __params__:any = {}
                           if(__url_attributes.length == __item_attributes.length){
                                for(let __i:number = 0;__i<__item_attributes.length;__i++){
                                    __params__[__item_attributes[__i]] = __url_attributes[__i];
                                }
                            }
                            let __route:any =  Object.values(val.rest)[__index];
                             if(__route.method != undefined){
                                if(__route.method == req.method){
                                    let __func = __route.code
                                    let __ans = __func(__params__);
                                    req.respond(__ans);
                                    }
                                }
                            
                        }

                })
            }
        }
    }
    
}







// import $ from './index.ts'

// $({
//    port:8001,
//    rest:{
//             '/hello':{
//                     method:'GET',
//                     code:()=>{
//                         return {body:'Hello World'}
//                             }
//                     },
//                 '/mahesh/one/two':{
//                         method:'GET',
//                         code:()=>{
//                                 return {body:'Mahesh one two'}
//                                 }
//                         },
//                 '/mahesh/:id/:name':{
//                         method:'GET',
//                         code:(params:any)=>{
//                                 return {
//                                         body:'Id '+params.id+'\n'+ 'Name '+params.name
//                                 }
//                         }
//                 }

//         }
// })