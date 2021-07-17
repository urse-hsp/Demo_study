window.document.writeln(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="./css/footer.css" />
    </head>
    <body>
      <footer class="footer" id="footer">
        <div class="wrap">
          <el-row class="footer-introduce">
            <el-col :span="6">
              <img src="./images/footer-word1.jpg" alt="详尽数据" />
              <span>详尽数据</span>
            </el-col>
            <el-col :span="6">
              <img src="./images/footer-word2.jpg" alt="7×24小时专业支持" />
              <span>7×24小时专业支持</span>
            </el-col>
            <el-col :span="6">
              <img src="./images/footer-word3.jpg" alt="尊贵身份" />
              <span>尊贵身份</span>
            </el-col>
            <el-col :span="6">
              <img src="./images/footer-word4.jpg" alt="快速反馈" />
              <span>快速反馈</span>
            </el-col>
          </el-row>
        </div>
        <hr class="hrr" />
        <div class="wrap theme">
          <dl>
            <dt>产品</dt>
            <dd><a href="./train.html">主播培训</a></dd>
          </dl>
          <dl>
            <dt>代理业务</dt>
            <dd><a href="./agent.html">授权</a></dd>
          </dl>
          <dl>
            <dt>常见问题</dt>
            <dd><a href="./help.html">直播相关问题</a></dd>
          </dl>
          <dl>
            <dt>便捷入口</dt>
            <dd><a href="./download.html">APP下载</a></dd>
          </dl>
          <dl>
            <dt>联系我们</dt>
            <dd>QQ：2695459806</dd>
            <dd>地址：浙江省金华市万达广场</dd>
          </dl>
        </div>
        <hr class="hrr" />
        <div style="margin: 0px auto;padding: 20px 0px;display: flex;justify-content: center;color: rgb(147, 147, 147);align-items: center;">
        网站备案：
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33070302100202"
            style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px;"><img src="./images/law.png" style="float: left" />
            <span style="float: left;height: 20px;line-height: 20px;margin: 0px 0px 0px 5px;color: #939393;">浙公网安备 33070302100202号</span>
          </a>
        </div>
      </footer>
    </body>
  </html>
`);
