# A1 <span style="color:blue">Micro Framework</span>.
###  For Rapid API and Application Development in Deno ༼ つ ◕_◕ ༽つ.
`Example`
```ts
import $ from 'https://deno.land/x/a1/index.ts'

$({
   port:8080, // Default port is 8000
   rest:{
            '/hello':{
                    method:'GET', // Default Method is GET
                    code:()=>{
                        return {body:'Hello World'}
                            }
                    },
                '/one/two/two':{
                        method:'POST',
                        code:()=>{
                                return {body:'Mahesh one two'}
                                }
                        },
                '/one/:id/:name':{  // For Dynamic Links Like Express
                        method:'GET',
                        code:(params:any)=>{ 
                                return {
                                        body:'Id '+params.id+'\n'+ 'Name '+params.name
                                }
                        }
                }

        }
})

```