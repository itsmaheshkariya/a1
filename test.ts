import $ from './index.ts'

$({
   port:8080,
   rest:{
            '/hello':{
                    method:'GET',
                    code:()=>{
                        return {body:'Hello World'}
                            }
                    },
                '/one/two/three':{
                        method:'POST',
                        code:(request:any)=>{
                                return {body:JSON.stringify(request)}
                                }
                        },
                '/one/:id/:name':{
                        method:'POST',
                        code:(request:any,params:any)=>{
                                console.log(JSON.stringify(request))
                                return {
                                       body:'Id '+params.id+'\n'+ 'Name '+params.name
                                }
                        }
                }

        }
})