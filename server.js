import express from 'express'
const app = express()
const host = '127.0.0.1'
const port = '3000'

//使用ejs製作view模板
app.set("view engine", "ejs")

//用於解析json row txt URL-encoded格式
import bodyParser from 'body-parser'
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());
app.use(urlencodedParser);

//靜態物件取得從public
app.use(express.json())
app.use(express.static('public'))
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')))


//關於我們
app.get('/about', async (req, res) => {
    res.render('./about')
})

//最新消息
app.get('/news', async (req, res) => {
    res.render('./news')
})
//活動快訊
app.get('/activity', async (req, res) => {
    res.render('./activity')
})

//影展
app.get('/portfolio', async (req, res) => {
    res.render('./portfolio')
})
//遊戲、互動、影視、行銷各首頁
app.get('/portfolio/:classify',async(req,res)=>{
    //params:classify => 分類
    //flim 影視
    //gaming 遊戲
    //interaction 互動
    //marketing 行銷
    res.render(`./portfolio/${req.params.classify}`)
})
//遊戲各組介紹頁面
app.get('/portfolio/:groupname',async(req,res)=>{
    //params:groupname => 組別代號 or 組別名稱
    res.render(`/group/${req.params.groupname}`)
})


//展場資訊
app.get('/exhibition', async (req, res) => {
    res.render('./exhibition')
})

//首頁
app.get('/', async (req, res) => {
    res.render('./home')
})

//無此路由（暫時使用
app.use((req, res, next) => {
    res.status(404).send("找不到");
})

//程式錯誤（暫時使用
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("程式有問題 請檢查")
})

app.listen(port, (e) => { console.log(`listening in ${host} : ${port}`) })

