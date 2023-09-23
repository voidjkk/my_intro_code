//在這邊可以為環境設定一些模組或插件，用甚麼方法壓縮打包之類的
//取消ESLINT這項rele
module.exports = {
  //打包時沒輸入這個打開index會是空白(直接設 publicPath: './'也可以) 
  //import各東西的基礎路徑，後面會接/asset這樣
  // 丟上github預覽要加 publicPath: /repo名稱/ ; 另外router也要設為hash mode
    publicPath: process.env.NODE_ENV === 'production' ? '/my_intro_demo/' : '/' ,
    filenameHashing: false , //去除.css和.js的hash值
    chainWebpack: config => {
        config.module.rules.delete('eslint');
//rules用  module: { rules: [] }可一次設定多loader的配置，rule('規則名，可略')用於單個配置
        
          config.module
          .rule("scss")
          .oneOf("vue")
          .test( /\.(sass|scss)$/) //正則篩選要使用該規則的文件
          .use("sass-loader") //若沒其他設定可以直接填loader名稱，此時等同下面的loader，執行順序最後的先執行
            .loader("sass-loader")   //使用的loader名稱
            .tap(options => { //TAP修改loader內的內容
              options.additionalData = "  @import  '@/assets/mixin.scss'; "
              return options;
            })
          .end() //增加多個時要以end()區隔

          


    }


}

/*
**預設由下往上處理，enforce可調整執行順序(pre優先、normal正常、inline次要、post最後)
常見loader
style-loader: 將css添加到DOM的內聯樣式標籤style裡
css-loader :允許將css文件通過require的方式引入，並返回css代碼
less-loader: 處理less
sass-loader: 處理sass
postcss-loader: 用postcss來處理CSS
autoprefixer-loader: 處理CSS3屬性前綴，已被棄用，建議直接使用postcss
file-loader: 分發文件到output目錄並返回相對路徑
url-loader: 和file-loader類似，但是當文件小於設定的limit時可以返回一個Data Url
html-minify-loader: 壓縮HTML
babel-loader :用babel來轉換ES6文件到ES

           .use("vue-style-loader") //使用哪些loader來處理匹配文件，執行順序最後的先執行
              .loader("vue-style-loader") //使用的loader名稱
              .end() //增加多個時要以end()區隔
            .use("css-loader")
              .loader("css-loader") 
              .end()   
*/