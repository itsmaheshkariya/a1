let $:any;
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
export default $ = async(val:any) => {
    let __s:any;
    if(val.port == undefined){
         __s = 8000
         console.log('\x1b[32m%s\x1b[0m','༼ つ ◕_◕ ༽つ Server running on https://localhost:8000')
    }else{
         __s = val.port;   
         console.log('\x1b[32m%s\x1b[0m','༼ つ ◕_◕ ༽つ Server running on https://localhost:'+val.port)
    }
    let __s__:any = serve({ port: __s})
    for await (const req of __s__) {

            let __headers__ = req.headers
            let __headers_obj__:any = {}
            for await(const i of __headers__){
                __headers_obj__[i[0]] = i[1]
            }
            //console.log(__headers_obj__)

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
                                if(req.method == 'GET')
                                        { 
                                                let __func = __route.code
                                                let __ans = __func(JSON.parse(JSON.stringify({"headers":__headers_obj__,"body":{},"params":{}})));
                                                console.log(__ans)
                                                req.respond({body:__ans});
                                        }
                                else{
                                        let __str:any = new TextDecoder("utf-8").decode(req.r.buf);
                                        let __json_data__:any;
                                        if(__str.indexOf('[') == -1){
                                                __json_data__ = __str.slice(__str.indexOf('{'),__str.lastIndexOf('}')+1)
                                        }else if(__str.indexOf('{') == -1){
                                                __json_data__ = __str.slice(__str.indexOf('['),__str.lastIndexOf(']')+1)
                                        }
                                        else if(__str.indexOf('{') < __str.indexOf('[')){
                                                 __json_data__ = __str.slice(__str.indexOf('{'),__str.lastIndexOf('}')+1)
                                        }else{
                                                 __json_data__ = __str.slice(__str.indexOf('['),__str.lastIndexOf(']')+1)
                                        }
                                         try{
                                                let __json_parse__:any = JSON.parse(__json_data__)
                                                if(__json_parse__.length > 0){
                                                        let __func = __route.code
                                                        let __ans = __func(JSON.parse(JSON.stringify({"headers":__headers_obj__,"body":__json_parse__,"params":{}})));
                                                        req.respond({body:__ans});
                                                }else if(__json_parse__.length == undefined){
                                                        let __func = __route.code
                                                        let __ans = __func(JSON.parse(JSON.stringify({"headers":__headers_obj__,"body":__json_parse__,"params":{}})));
                                                        req.respond({body:__ans});
                                                }
                                          }catch(e){
                                                console.log('\x1b[31m%s\x1b[0m','༼ つ ◕_◕ ༽つ check your json')
                                          }finally{
                                               
                                          }                                      
                                }

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

                                        if(req.method == 'GET'){
                                    let __func = __route.code
                                   // let __ans = __func(__params__);
                                    let __ans = __func(JSON.parse(JSON.stringify({"headers":__headers_obj__,"body":{},"params":__params__})));
                                    req.respond({body:__ans});
                                }else{
                                        let __str:any = new TextDecoder("utf-8").decode(req.r.buf);
                                        let __json_data__:any;
                                        if(__str.indexOf('[') == -1){
                                                __json_data__ = __str.slice(__str.indexOf('{'),__str.lastIndexOf('}')+1)
                                        }else if(__str.indexOf('{') == -1){
                                                __json_data__ = __str.slice(__str.indexOf('['),__str.lastIndexOf(']')+1)
                                        }
                                        else if(__str.indexOf('{') < __str.indexOf('[')){
                                                 __json_data__ = __str.slice(__str.indexOf('{'),__str.lastIndexOf('}')+1)
                                        }else{
                                                 __json_data__ = __str.slice(__str.indexOf('['),__str.lastIndexOf(']')+1)
                                        }
                                        try{
                                                let __json_parse__:any = JSON.parse(__json_data__)
                                                
                                                if(__json_parse__.length > 0){
                                                        let __func = __route.code
                                                        let __ans = __func(JSON.parse(JSON.stringify({"headers":__headers_obj__,"body":__json_parse__,"params":__params__})));
                                                        req.respond({body:__ans});
                                                }else if(__json_parse__.length == undefined){
                                                        let __func = __route.code
                                                        let __ans = __func(JSON.parse(JSON.stringify({"headers":__headers_obj__,"body":__json_parse__,"params":__params__})));
                                                        req.respond({body:__ans});
                                                }
                                        }catch(e){
                                                console.log('\x1b[31m%s\x1b[0m','༼ つ ◕_◕ ༽つ check your json')
                                        }finally{
                                        
                                        }  
                                        }


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


export let render = async(val:any) =>{
        const client = await new TextDecoder("utf-8")
        .decode(
            await Deno.readFile(val)
        );
        return client;
    }