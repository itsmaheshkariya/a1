# A1 <span style="color:blue">Micro Framework</span>.
###  For Rapid API and Application Development in Deno ༼ つ ◕_◕ ༽つ.
`Example`
```ts
import $ from 'https://deno.land/x/a1/index.ts'

$({
   port:8080, // Default Port is 8000
   rest:{
            '/hello':{
                    method:'GET', // Default Method is GET
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
                '/one/:id/:name':{ // For Dynamic Links Like Express
                        method:'POST',
                        code:(req:any)=>{
                                console.log(req.body,req.headers,req.params)
                                return { body:'Id '+req.params.id+'\n'+ 'Name '+req.params.name }
                        }
                }

        }
})

```