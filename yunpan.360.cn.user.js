// ==UserScript==
// @id          yunpan.360.cn
// @name        yunpan.360.cn
// @version     1.0
// @namespace   https://github.com/LEXASOFT/yunpan.360.cn/
// @updateURL   https://raw.github.com/LEXASOFT/yunpan.360.cn/master/yunpan.360.cn.meta.js
// @downloadURL https://raw.github.com/LEXASOFT/yunpan.360.cn/master/yunpan.360.cn.user.js
// @description Русский перевод сайта yunpan.360.cn
// @include     http://yunpan.360.cn/*
// @include     http://*.yunpan.360.cn/*
// @match       http://yunpan.360.cn/*
// @match       http://*.yunpan.360.cn/*
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
            "上传文件到360云盘":"Загрузка файлов в облако",
            "当前浏览器可升级为“云加速上传”，支持文件秒传、断点续传、大文件上传":"Ускорьте загрузку, установив специальный ",
            "安装升级控件":"плагин",
            "到:":"Загрузить в: ",
            "等待上传中...":"В ожидании загрузки ...",
            "恭喜您，上传成功！":"Файл загружен без ошибок",
            "已上传到根目录：":"Загружено в:",
            "网页版单文件最大支持":"Поддерживаемый размер файла: до ",
            "安装PC客户端，上传5G超大文件":"Установите плагин для поддержки размера файла до 5 Гб",
            "全部文件":"Все файлы",
            "转入文件保险箱":"В сейф",
            "文件保险箱":"Сейф",
            "分享的文件":"Расшарить",
            "回收站":"Корзина",
            "热门共享群":"Топ группы",
            "文件共享群":"Группы",
            "创建":"Создать",
            "查找":"Найти",
            "返回":"Назад",
            "打包下载":"Скачать архивом",
            "离线下载":"Offline-загрузчик",
            "最近上传":"Загрузка",
            "上传":"Загрузить",
            "新建文件夹":"Создать папку",
            "下载":"Скачать",
            "删除":"Удалить",
            "批量分享":"Расшарить все",
            "分享文件":"Расшарить",
            "取消分享":"Отменить шару",
            "分享":"Расшарить",
            "更多":"Еще...",
            "重命名":"Переименовать",
            "移动":"Переместить",
            "文件时光机":"История",
            "排序：":"Сортировать по:",
            "文件名":"Название",
            "名称":"Имя",
            "大小":"Размер",
            "修改日期":"Изменен",
            "已经抽奖":"Бонус",
            "书籍":"Книги",
            "文档":"Документы",
            "视频":"Видео",
            "音乐":"Музыка",
            "来自-手机":"С телефона ",
            "图片":"Картинки",
            "免费扩容":"Повышения",
            "退出":"Выход",
            "参与云盘双蛋活动 赢大奖":"Учавствуй в облачных мероприятиях с розыгрышем призов",
            "在线查看":"Online просмотр",
            "确定":"Подтвердить",
            "取消":"Отменить",
            "完成":"Готово",
            "添加文件":"Добавить файл",
            "添加文件夹":"Добавить папку",
        };
        for(var t in ts) {
            var tr = new RegExp(t, 'g');
            var tt = ts[t];
            findAndReplace(t,tt);
        };
        setTimeout(translate, 1000);
    };

    setTimeout(translate, 1000);

})();