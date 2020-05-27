# A1 <span style="color:blue">Micro Framework</span>.
###  For Rapid API and Application Development in Deno ༼ つ ◕_◕ ༽つ.
`Example - Server Side index.ts`
```ts
import $,{render} from 'https://deno.land/a1/server.ts'
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
```

`Example - Client Side index.html`
```html
<body>
  <qcom-hello-world></qcom-hello-world>
  <script type="module">
    import $ from 'https://deno.land/x/a1/client.js'
    $({
        name:'QcomHelloWorld',
        template:()=>h1('Hello World')
    })
  </script>
</body>
```
`Run`
```
deno run -A index.ts
```

`Example - Dynamic Links`
```ts
import $,{render} from 'https://deno.land/x/a1/server.ts'
const client = await render('./index.html')
$({
   port:8080,
   rest:{
            '/:id':{
                    method:'GET', // GET , POST , PUT , DELETE
                    code:(req:any)=>{
                            console.log(req.body, req.headers, req.params)
                            return req.params.id
                    }
            }
        }
})
```


## Rules 
`HTML`
```html 
<h1 class="head"  style = "color:red;  background-color:  yellow"    id="heading" > I am H1 </h1>
```
`Qcom`
```js
h1({class:'head', style:{ color:'red', backgroundColor : 'Yellow' }, id:'heading' }, 'I am H1' )
```

#### Functions
```html
<body>
    <qcom-functions></qcom-functions>
    <script type="module">
    import $ from 'https://deno.land/x/a1/client.js'
    $({
        name:'QcomFunctions',
        template:()=>div(h1({click:'QcomFunctions.log()'},'Click Here')),
        code:{
            log:()=>{
                //Do something here
                alert('clicked')
            }
            //Create your own functions here like log()
        }
    })
    </script>
</body>
```


#### Data Management
```html
<body>
    <qcom-data></qcom-data>
    <script type="module">
    import $ from 'https://deno.land/x/a1/client.js'
    $({
        name:'QcomData',
        data:{
            counter:0
        },
        template:()=>div( /* div must be here to wrap all internal tags*/
                            h1(this.data.counter),
                            button({click:'QcomData.add()'},'+'),
                            button({click:'QcomData.sub()'},'-')
                        ),
        code:{
                add:()=>{
                        this.data.counter +=  1
                        this.render()
                },
                sub:()=>{
                        this.data.counter -=  1
                        this.render()
                }
        }
    })
    </script>
</body>
```

#### Loop
```html
<body>
<qcom-loop></qcom-loop>
<script type="module">
  import $ from 'https://deno.land/x/a1/client.js'
  $({
      name:'QcomLoop',
      data:{
          items:[{id:1,name:'Abigail',age:21},
                {id:2,name:'max',age:29},
                {id:3,name:'Alison',age:17},
                {id:4,name:'bob',age:32},
                {id:5,name:'brad',age:36}]
      },
      template:()=>div(
                    table(
                        tr(
                            td('Index'),
                            td('Name'),
                            td('Age')
                        ),
            ()=>this.data.items.map(item =>
                    tr(
                        td(item.id),
                        td(item.name),
                        td(item.age))
                        )
                    )
                )
  })
</script>
</body>
```

#### Get Api
```html
<body>
<qcom-get></qcom-get>
<script type="module">
import $ from 'https://deno.land/x/a1/client.js'
$({
    name:'QcomGet',
    data:{
        items:[]
    },
    template:()=>div(
        table(
            tr(
                td('Id'),
                td('Title'),
                td('completed')
            ),
            ()=>this.data.items.map(item =>
                    tr(
                        td(item.id),
                        td(item.title),
                        td(item.completed))
                        )
        )
    ),
    code:{
        onload:async ()=>{
            this.data.items = await qcom.get('https://jsonplaceholder.typicode.com/todos/')
            this.render()
        }
    }
})
</script>
</body>
```

#### Styling (camelCase is required while using style)
```html
<body>
<qcom-css-example></qcom-css-example>
<script type="module">
  import $,{color} from 'https://deno.land/x/a1/client.js'
  $({
      name:'QcomCssExample',
      globalcss:{ /* Global CSS*/
          '*':{
              margin:'50px',
              padding:'50px'
          }
      },
      css:{ /* Internal CSS*/
          h1:{
              color:color.red,
              cursor:'pointer',
              backgroundColor:color.yellow
          },
          '.mt':{
              marginTop:'5px'
          }
      },
      template:()=>div(
                        h1({class:'mt',style:{ /* Inline CSS*/
                            border:'2px solid red'
                        }},'Inline Internal and global Style')
                    )
  })

</script>
</body>
```
#### Qcom Router
```html
<body>
<qcom-main></qcom-main>
<script type="module">
import $ from 'https://deno.land/x/a1/client.js'
    let QcomOne = {
        name:'QcomOne',
        data:{
            items:[
                {name:'mahesh'},{name:'dipak'}
            ]
        },
        template:()=>div(h1('Page One'),
                ()=>this.data.items.map(item =>
                        div(item.name)))
    }
    let QcomTwo ={
        name:'QcomTwo',
        data:{
            items:[]
        },
        template:()=>row(
            col(form(
                material(
                    h1('Registration'),
                    input({id:'name',class:'mb6',placeholder:'Name'}),
                    input({id:'email',class:'mb6',placeholder:'Email'}),
                    input({id:'password',class:'mb6',placeholder:'Password'}),
                    right(btn({click:'QcomTwo.post()',is:'md'},'Submit')))
            )),
            col(table(
                tr(
                    td('Name'),
                    td('Email'),
                    td('Password')
                ),
                ()=>this.data.items.map(item =>
                        tr(td(item.name),
                            td(item.email),
                            td(item.password)))
            ))
        ),
        code:{
            post:()=>{
                this.data.items.push({
                    name:getval('name'),
                    email:getval('email'),
                    password:getval('password')
                })
                this.render()
            }
        }
    }
    let QcomError = {
        name:'QcomError',template:()=>div(
            h1('404 Page')
        )
    }
    $({
        name:'QcomMain',
        template:()=>div(
                appbar(
                    btn({route:'/QcomOne',is:'link', class:'ml12'},'One'),
                    btn({route:'/QcomTwo',is:'link', class:'ml12'},'Two'),
                    btn({route:'/QcomError',is:'link', class:'ml12'},'404')
                ),
                div({class:'mt12', id:'root'})
            ),
       include:[QcomOne,QcomTwo,QcomError],
            router:{
                root:'QcomOne',
                view:'root',
                error:$('QcomError')(),
                links:['QcomOne','QcomTwo']
            }
    })
</script>
</body>
```

### Demo
![demoofqcom](https://deno.land/x/a1/client.js@1.0.36/result.png)



**Grammar:**

```
                                        function
 ┌─────────-───────────────────────────────┴────────────────────────────────────────────────────────┐
 │                            separators                                                            |
 │                   ┌────────────┴───┬────────────────┬───────────────────────────┐                |
 |                   ↓                ↓                ↓                           ↓                |
p(  { to:'firstname' ,   class:'mt12' , id:'firstname' , style: {color:color.red} }, 'Hello World'  )
        └───┬───┘          └───┬───┘     └────┬───┘       └────┬────────┘                 |
            ┴───────────┬──────┴─────-──-─────┘-──-─────-─────-┘                          |
                   attributes                                                           Text
```

## Configuration


<details>
<summary>Use <code>color</code> : For color coding </summary>
<pre><code>
import $,{color} from 'https://deno.land/x/a1/client.js'
$({
    theme:{
        color:color.red,
        background:color.yellow
    }
})
</code></pre>
</details>
<br>
<details>
<summary>Use <code>to</code> : For Two way data binding</summary>
<pre><code>
        input({to:'email'}),
            p({to:'email'},'')
</code></pre>
</details>
<br>
<details>
<summary>Use <code>router</code> : For static and dynamic routing</summary>
<pre><code>
    template:()=>div(
            appbar(
                btn({route:'/QcomOne',is:'link', class:'ml12'},'One'),
                btn({route:'/QcomTwo',is:'link', class:'ml12'},'Two'),
            ),
            div({class:'mt12', id:'root'})    //<-|
        ),                                   //   |
        include:[QcomOne,QcomTwo,QcomError],//    |
        router:{                           //     |
            root:'QcomOne',               //      |
            view:'root', // id of div <-----------|
            error:$('QcomError')(),
            links:['QcomOne','QcomTwo']
        }
</code></pre>
</details>



### Colors 
![color00](https://deno.land/x/a1/client.js@1.0.36/raw/color00.png)
![color0](https://deno.land/x/a1/client.js@1.0.36/raw/color0.png)
![color1](https://deno.land/x/a1/client.js@1.0.36/raw/color1.png)
![color2](https://deno.land/x/a1/client.js@1.0.36/raw/color2.png)
![color3](https://deno.land/x/a1/client.js@1.0.36/raw/color3.png)
![color4](https://deno.land/x/a1/client.js@1.0.36/raw/color4.png)
![color5](https://deno.land/x/a1/client.js@1.0.36/raw/color5.png)
