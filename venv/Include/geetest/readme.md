# geetest 破解思路

****

## 抓包 - 极验流程图

1. ----- 进入滑块页面 ------
2. demo/gt/register-slide?t=1646370204707 请求获得
    - challenge:"90155bf283d979ec12f0f6f45518a9f0",
    - gt:'019924a82c70bb123aae90d483087f94'
3. 发送 gettype.php 请求
    - 提交了gt
    - 返回了 fullpage 的js
4. 发送 get.php 请求
    - 提交了gt challenge w
    - 显示了点击按钮
5. ---- 点击按钮 ------
6. 发送了 ajax.php 请求
    - 提交了gt challenge w(加密代码)
    - 返回了slide.7.8.6.js
7. 发送了 get.php 请求
    - 提交了 gt challenge 参数 - 返回了 - 原图(乱序)fullbg
    - 缺口图(乱序)bg - 滑块图slice - 一段奇怪的数组c [12, 58, 98, 36, 43, 95, 62, 15, 12]
    - 参数节选如下 - bg: "pictures/gt/7bfaaa72b/bg/3309a03eb.jpg"
        - c: [12, 58, 98, 36, 43, 95, 62, 15, 12]
        - challenge: "a3036fa1dbf70149dad347968562ac1c74"
        - fullbg: "pictures/gt/7bfaaa72b/7bfaaa72b.jpg"
        - fullpage: false - gct_path: "/static/js/gct.79d2466c72ec4327a54871db50f7fbbb.js"
        - gt: "019924a82c70bb123aae90d483087f94"
        - id: "aa3036fa1dbf70149dad347968562ac1c"
        - s: "7236584d"
8. ajax.php 进行滑块
    - 提交了gt challenge w(加密代码, 轨迹应该也在里面)
    - 返回了 validate: "034be50f464604fd2a16fc4cbf598291" 表示成功
    - 距离识别错误返回{“success”: 0, “message”: “fail”} 距离正确但轨迹异常则返回{“success”: 0, “message”: “forbidden”} 校验通过则返回{success: 1,
      message: “success”, validate: “f98af504ec3208dc19911b0de0b083c7”, score: “3”} ————————————————
      版权声明：本文为CSDN博主「十一姐」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      原文链接：https://blog.csdn.net/weixin_43411585/article/details/119839581

***

### 解决思路

##### 方案1

`按照上面的流程 逐步模拟 发送请求`

~~##### 方案2~~

`步骤2得到gt challenge`      
`步骤7请求得到图片 发送 gt challenge`    
`步骤8进行滑块 发送 gt challenge w`

宣告失败

***

### 调试

1. 滑块乱序图还原 并获取缺口坐标      
   `见image_restore.py`
2. w值解析  
   w = h + u   
   `u = r[$_CAGEe(750)]()`   
   `l = V[$_CAGEe(342)](gt[$_CAGEe(209)](o), r[$_CAGEe(742)]())`  
   `h = m[$_CAGEe(733)](l)`
   