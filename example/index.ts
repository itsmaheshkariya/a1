import $,{render} from '../server.ts'
const client = await render('./index.html')
$({
   port:8080,
   rest:{
            '/':{
                    method:'GET',
                    code:(req:any)=>client
                }
        }
})