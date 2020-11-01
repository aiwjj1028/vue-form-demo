module.exports = {
    devServer:{
    before(app,server){
        //接口
        app.get('/api/cartList',(req,res)=>{
            res.json({
                datd:[
                    {id:1,title:'JAVA技术和应用',price:20,active:true,count:1},
                    {id:2,title:'JS实战',price:30,active:true,count:1},
                ]
            })
        })
    }
}
}
