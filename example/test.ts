import $,{render} from 'https://deno.land/x/a1/server.ts'
const client = await render('./index.html')
$({
   port:8080,
   rest:{
            '/':{
                    method:'GET',
                    code:client
                    },
            '/:id/:name':{
                    method:'POST',
                    code:(req:any)=>{
                            console.log(req.body, req.headers, req.params)
                            return 'Id '+req.params.id+'\n'+ 'Name '+req.params.name
                    }
            }
        }
})