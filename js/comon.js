var headline =  new Array("密码安全常识","网络交友常识","冲浪常识","病毒防范常识")
var content = [
    [
        "不使用可轻易获取的信息作为密码，如电话号码，学号等",
        "定期更换密码，所有密码都不是无懈可击的，但更换密码是需确定电脑或手机是安全的",
        "不将账号密码轻易告诉他人",
        "不让windows，IE保存你的密码，*并不能将密码加密",
        "不使用简单危险的密码"
    ],
    [
        "注意保护自己的个人信息，如姓名、住址等",
        "不轻易与网友见面，如果非见面不可，最好去人多的地方",
        "对于谈话低俗的网友，不要反驳或回答，以沉默的方式对待"
    ],
    [
        "尽量不要下载个人站点的程序，因为这个程序有可能感染了病毒，或者带有后门",
        "不要运行不熟悉的可执行文件，尤其是一些看似有趣的小游戏",
        "不要随便将陌生人加入QQ或者微信等的好友列表，不要随便接受他们的聊天请求，避免受到端口攻击",
        "在支持java或者HTML的聊天室里最好不要接受对方的js或者html。因为他它能是窗口炸弹或者巨型的图片",
        "不要逛一些可疑或另类的站点，因为IE的许多漏洞可以使恶意的网页编辑者读出你机器上的敏感文件"
    ],
    [
        "尽量不要下载个人站点的程序",
        "安装正版杀毒软件，如：金山毒霸、诺顿、瑞星、360等",
        "定期对杀毒软件进行升级并对系统进行病毒扫描（一周一次）"
    ]
]

var currentIndex = 1
var ctent = document.getElementById("ctent")
$(function () {

    for(var i = 0;i < content[1].length;i++){
        ctent.innerHTML += "<li>"+ content[1][i] + "</li>"
    }
})
$("#ll").click(function () {
    currentIndex = ((currentIndex-1)%4+4)%4
    setText();
})
$("#rr").click(function () {
    currentIndex = (currentIndex + 1) % 4;
    setText();
    console.log("asdsd")
})
function setText() {
    $("#ll").text(headline[((currentIndex-1)%4+4)%4])
    $("#maintitle").text(headline[currentIndex])
    $("#rr").text(headline[(currentIndex+1)%4])
    ctent.innerHTML = "";
    for(var i = 0;i < content[currentIndex].length;i++){
        ctent.innerHTML += "<li>"+ content[currentIndex][i] + "</li>"
    }
}