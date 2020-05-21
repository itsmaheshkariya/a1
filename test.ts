import $ from './index.ts'

$({
   port:8080,
   rest:{
            '/hello':{
                    method:'GET',
                    code:(req:any)=>{
                        console.log(req.headers)
                        return {body:'Hello World'}
                            }
                    },
                '/one/two/three':{
                        method:'POST',
                        code:(req:any)=>{
                                console.log(req.body,req.headers,req.params)
                                return {body:JSON.stringify(req)}
                                }
                        },
                '/one/:id/:name':{
                        method:'POST',
                        code:(req:any)=>{
                            console.log(req.body,req.headers,req.params)
                                return { body:'Id '+req.params.id+'\n'+ 'Name '+req.params.name }
                        }
                }

        }
})