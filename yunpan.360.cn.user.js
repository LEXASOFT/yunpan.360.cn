// ==UserScript==
// @id          yunpan.360.cn
// @name        yunpan.360.cn
// @version     1.1.2
// @namespace   https://github.com/LEXASOFT/yunpan.360.cn/
// @updateURL   https://raw.github.com/LEXASOFT/yunpan.360.cn/master/yunpan.360.cn.meta.js
// @downloadURL https://raw.github.com/LEXASOFT/yunpan.360.cn/master/yunpan.360.cn.user.js
// @description Русский перевод сайта yunpan.360.cn
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
            "上传文件到360云盘":"Загрузка файлов в облако",
            "当前浏览器可升级为“云加速上传”，支持文件秒传、断点续传、大文件上传":"Ускорьте загрузку, установив специальный ",
            "安装升级控件":"плагин",
            "进入我的云盘":"Войти в диск",
	    "到:":"Загрузить в: ",
            "等待上传中...":"В ожидании загрузки ...",
            "恭喜您，上传成功！":"Файл загружен без ошибок",
            "已上传到根目录：":"Загружено в:",
            "网页版单文件最大支持":"Поддерживаемый размер файла: до ",
            "安装PC客户端，上传5G超大文件":"Установите плагин для поддержки размера файла до 5 Гб",
            "全部文件":"Все файлы",
            "转入文件保险箱":"В сейф",
            "文件保险箱":"Сейф",
            "查看分享链接":"Перейти по ссылке доступа",
	    "我分享的文件":"Моя шара ",
	    "（2013年8月14日起分享流量不限量）":" (с 14.8.2013 можно расшаривать без ограничений)",
	    "分享的文件":"Расшарить",
            "回收站":"Корзина",
            "热门共享群":"Топ группы",
            "文件共享群":"Группы",
	    "查找群":"Найти группу",
	    "创建群":"Создать группу",
            "创建":"Создать",
            "查找":"Найти",
            "返回":"Назад",
            "打包下载":"Скачать архивом",
            "离线下载":"Offline-загрузчик",
            "最近上传":"Загрузка",
            "上传":"Загрузить",
            "新建文件夹":"Создать папку",
            "下载/转存":"Скачали/Забрали",
            "下载次数":"Кол-во скачиваний",
	    "下载":"Скачать",
            "删除":"Удалить",
            "批量分享":"Расшарить все",
            "分享文件":"Расшарить",
            "取消分享":"Отменить шару",
            "分享者":"Кто расшарил",
            "复制分享链接":"Скопировать ссылку",
	    "分享":"Расшарить",
            "更多":"Еще...",
            "重命名":"Переименовать",
            "移动":"Переместить",
            "文件时光机":"История",
            "排序：":"Сортировать по:",
            "文件名":"Название",
            "名称":"Имя",
            "6-20个字符，（区分大小写）":"6-20 символов (с учетом регистра)",
            "请输入图中的字母或数字，不区分大小写":"Пожалуйста, введите буквы или цифры, без учета регистра",
	    "大小":"Размер",
            "修改日期":"Изменен",
            "每日抽奖":"Бонус",
            "已经抽奖":"Бонус",
            "书籍":"Книги",
            "文档":"Документы",
            "视频":"Видео",
            "音乐":"Музыка",
            "来自-手机":"С телефона ",
            "图片":"Картинки",
            "免费扩容":"Достижения",
            "退出群":"Покинуть",
            "退出":"Выход",
            "参与云盘双蛋活动 赢大奖":"Участвуй в облачных мероприятиях с розыгрышем призов",
            "在线查看":"Online просмотр",
            "确定":"Подтвердить",
            "取消":"Отменить",
            "完成":"Готово",
            "添加文件":"Добавить файл",
            "添加文件夹":"Добавить папку",
            "群空间":"Место",
            "邀请成员":"Пригласить",
            "群设置":"Настройки",
            "举报":"Жалоба",
            "群内新文件":"История",
            "群扩容":"Бонус",
            "群信息":"Инфо",
            "通过每日签到抽奖":"Ежедневный бонус",
            "签到抽奖":"Доб. место",
            "已经签到":"Получен",
            "查看扩容记录":"История получения",
	    "扩容记录":"Объем",
            "日期":"Дата",
            "详情":"Детали",
            "群成员":"Участник группы",
            "36T免费空间":"Доб.36T",
            "首页":"Домой",
            "手机U盘":"Моб.",
            "论坛":"Форум",
            "注册360账号":"Зарегистрироваться",
            "忘记密码？":"Забыл пароль?",
            "下次自动登录":"запомнить",
            "确认密码":"Еще раз",
            "验证码":"Капча",
            "请输入您的常用邮箱":"Введите реальный адрес почты",
            "没有邮箱？":"Нет почты?",
            "请再次输入密码":"Пожалуйста, введите заново пароль",
            "我已经阅读并同意":" Я прочитал и согласен с",
            "360用户服务条款":"Условиями предоставления услуг",
            "邮箱":"Почта",
            "启用访问密码":"Включить пароль",
	    "访问密码":"Пароль на доступ",
	    "密码":"Пароль",
            "换一张":"Обновить",
            "操作":"Действия",
            "刷新":"Обновить",
            "已选择":"Был выбран ",
            "个文件（共":" файл(а) (",
            "收藏到云盘":"Забрать",
	    "我":"Я ",
            "账号安全中心":"Профиль",
            "云盘消息":"Сообщения",
            "云盘等级":"Уровень",
            "购买空间":"Купить место",
            "空间升级卡":"Ввести карту",
            "邀请好友":"Инвайты",
            "意见反馈":"Контакты",
            "帮助中心":"Помощь",
	    "加入的群":"Присоединиться к группе",
	    "点击进入此群":"Нажмите, чтобы присоединиться к этой группе",
	    "热门群": "Топ групп",
	    "恭喜你，签到成功！":"Поздравляем! вы успешно",
	    "为本群抽得空间":"Принесли группе",
	    "转存到我的云盘":"Забрать себе",
	    "高速下载":"Скачать",
	    "你可能会喜欢的资源":"Вам может понравиться",
	    "欢迎使用360云盘！":"Добро пожаловать!",
	    "您当前正在使用的云盘帐号是":"Ваш текущий аккаунт",
	    "更换账号":"Сменить учетную запись",
	    "空间已用":"Использовано: ",
	    ",共":", из ",
	    "今日已成功抽到":"Сегодня получено ",
	    "空间":"",
	    "查看历史记录":"Посмотреть историю",
	    "当前页文件搜索":"Поиск файлов",
	    "做任务免费获取更多空间":"Выполни задания, чтобы получить место",
	    "免费获取奖励":"Бесплатный доступ к наградам",
	    
        };
        for(var t in ts) {
            findAndReplace(t,ts[t]);
        };
        setTimeout(translate, 3000);
    };

    setTimeout(translate, 1000);

})();
