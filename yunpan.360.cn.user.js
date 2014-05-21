// ==UserScript==
// @id          yunpan.360.cn
// @name        yunpan.360.cn
// @version     0.0.1
// @namespace   https://github.com/LordMerlin/yunpan.360.cn/
// @updateURL   https://raw.github.com/LordMerlin/yunpan.360.cn/master/yunpan.360.cn.meta.js
// @downloadURL https://raw.github.com/LordMerlin/yunpan.360.cn/master/yunpan.360.cn.user.js
// @description English translation of the site yunpan.360.cn
// @include     http://yunpan.360.cn/*
// @include     http://*.yunpan.360.cn/*
// @include     http://yunpan.cn/*
// @include     http://*.yunpan.cn/*
// @match       http://yunpan.360.cn/*
// @match       http://*.yunpan.360.cn/*
// @match       http://yunpan.cn/*
// @match       http://*.yunpan.cn/*
// @grant       none
// ==/UserScript==

(function () {

    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ? new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length;
	    excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 && (',' + excludes + ',').indexOf(',' + currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    function translate() {
        var ts = {
        	"360云盘 - 我的云盘":"360 Cloud dish - my cloud drive",
        	"云盘首页":"Cloud disk Home",
        	"最安全的网络U盘":"The most secure network U disk",
        	"网盘":"Network disk",
        	"相册":"Album",
        	"从浏览器保存的内容":"Saved content from a browser",
        	"云收藏":"Cloud Collection",
        	"更多云服务":"More cloud services",
        	"更多":"More",
        	"点击抽奖领取免费空间":"Click on the draw to receive free space",
        	"每日抽奖":"Daily Draw",
        	"已经抽奖":"Already draw",
        	"帐号安全中心":"Account Security Center",
        	"云盘消息":"Cloud disk message",
        	"云盘等级":"Cloud disk level",
        	"扩容记录":"Expansion Records",
        	"空间升级卡":"Space upgrade card",
        	"邀请好友":"Invite a friend",
        	"意见反馈":"Feedback",
        	"帮助中心":"Help Center",
        	"退出云盘":"Exit cloud disk",
        	"全部文件":"All Files",
        	"保险箱":"Safe",
        	"我的分享":"I share",
        	"我的共享群":"I shared group",
        	"回收站":"Recycle",
        	"免费扩容":"Free expansion",
        	"android安卓版下载":"Android Download",
        	"iphone苹果版下载":"Apple iphone Download",
        	"PC客户端下载":"PC client download",
        	"PC客户端":"PC client",
        	"Mac客户端下载":"Mac client download",
        	"Mac客户端":"Mac client"
        	"桌面快捷版下载":"Download Desktop Shortcut",
        	"桌面快捷版":"Desktop Express Edition",
        	"当前页文件搜索":"This page file search",
        	"新！支持云加速上传啦！支持极速秒传、大文件上传、断点续传哦~":"New! Support cloud acceleration upload it! Support speed second pass, large file upload, HTTP oh ~",
        	"安装云加速控件":"Installation cloud acceleration control",
        	"上传控件安装成功，快来体验吧！":"Upload control the installation is successful, come experience it!",
        	"返回上级目录":"Return to parent directory",
        	"返回":"Return",
        	"上传":"Upload",
        	"新建文件夹":"New Folder",
        	"离线下载":"Offline Download",
        	"下载":"Download",
        	"删除":"Delete",
        	"分享":"Share",
        	"转出文件保险箱":"Transfer files safe",
        	"立即锁上保险箱":"Immediately locked safes",
        	"查看分享链接":"View share links",
        	"取消分享":"Cancel Share",
        	"复制分享链接":"Copy link to share",
        	"启用提取码":"Enable extraction code",
        	"取消提取码":"Cancel extraction code",
        	"还原文件":"Restore files",
        	"清空回收站":"Empty the Recycle Bin",
        	"对回收站启用云盘安全密码":"Recycle Bin is enabled for cloud disk security password",
        	"回收站云盘安全密码启用中":"Recycle Bin is enabled in the cloud disk security password",
        	"还原到选中版本":"Restore to the selected version",
        	"穿越到选中时光号":"Road crossing to the selected time",
        	"在线查看":"View Online",
        	"上传文件":"Upload file",
        	"切换到列表视图":"Switch to the list view",
        	"列表视图":"List view",
        	"切换到大图视图":"Switch to the big picture view",
        	"大图标视图":"Large icon view",
        	"排序":"Sort",
        	"名称":"Name",
        	"最近上传":"Recent uploads",
        	"修改日期":"Modified",
        	"删除日期":"Delete Date",
        	"日期":"Date",
        	"时光号":"No. Time",
        	"大小":"Size",
        	"请输入要下载的文件链接地址":"Please enter the link address to download the file",
        	"支持HTTP、FTP链接下载":"Supports HTTP, FTP download",
        	"离线下载的文件统一保存到【来自-离线下载的文件】文件夹里":"Offline files downloaded from the unified saved to [-] off the downloaded file folder",
        	"取消":"Cancel",
        	"开始下载":"To start the download",
        	"最近":"Recently",
        	"离线下载任务记录":"Offline download task records",
        	"新建普通下载":"New ordinary downloads",
        	"任务名":"Task name",
        	"下载状态":"Download Status",
        	"操作":"Operating",
        	"后台运行":"Background",
        	"清空历史记录":"Empty History",
        	"文件名":"File Name",
        	"删除下载记录":"Deleted download history",
        	"取消下载":"Cancel download",
        	"重试下载":"Retry download",
        	"打开文件所在文件夹":"Open the folder where the file"
        };
        for(var t in ts) {
            findAndReplace(t,ts[t]);
        };
        setTimeout(translate, 1000);
    };

    setTimeout(translate, 1000);

})();
