import json
import requests

# 发送的消息
message = '我就试一下'

def wx_push(message):
    touser = '账号'      # 多个接收者用 | 分隔
    agentid = '1000002'
    secret = 'hiU-Pnp0tQSvFsQQHvDt3FqXRiFRnnKKHnDuVSvaDoc'
    corpid = 'wwdcb47d23f69aa4a2'

    json_dict = {
        "touser": touser,
        "msgtype": "text",
        "agentid": agentid,
        "text": {
            "content": message
        },
        "safe": 0,
        "enable_id_trans": 0,
        "enable_duplicate_check": 0,
        "duplicate_check_interval": 1800
    }

    response = requests.get(
        f"https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid={corpid}&corpsecret={secret}")
    data = json.loads(response.text)
    access_token = data['access_token']

    json_str = json.dumps(json_dict)
    response_send = requests.post(
        f"https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token={access_token}", data=json_str)
    return json.loads(response_send.text)['errmsg'] == 'ok'

wx_push(message)