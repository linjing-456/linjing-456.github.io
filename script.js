const messages = [
    "嗨！ 沁怡！",
    "新年快乐！",
    "你看得到我的消息吗",
    "要一个人偷偷看噢",
    "感觉枯燥可以听听背景音乐哈哈哈",
    "最近过得开心嘛",
    "不知道你新年怎么过呀",
    "不知道你跟他怎么样啦",
    "希望你们过得幸福",
    "假的 哈哈哈哈",
    "如果陪你到最后的人不是我",
    "我希望你孤独一辈子",
    "说来也是好笑",
    "之前有人盼着我和你分手",
    "现在我盼着你分手哈哈哈",
    "但是你已经不再属于我啦",
    "很抱歉还在打扰你呀",
    "我想如果我们早些或者晚些相遇",
    "如果我们都是小孩或者大人",
    "会不会走到最后呢",
    "也许另一个时空的我们已经白头偕老啦",
    "在一起的时候",
    "你一直是我前进的动力",
    "我多希望我们有幸福的未来呀",
    "你在的时候我有勇气克服一切困难",
    "失去你之后像是失去了灵魂一样",
    "哈哈哈哈",
    "我没想过我们要爱得多轰轰烈烈",
    "我只想要平平淡淡的天长地久",
    "我一直都觉得",
    "每天只要有你在就好啦",
    "但是",
    "我怕我不会是你的唯一",
    "我觉得自己不够好",
    "我怕到最后我还是会失去你",
    "是我对自己不够自信吧",
    "也许这就是我们分手的根本原因吧",
    "曾经我有很多做得不好的地方",
    "真是抱歉",
    "谢谢你陪我长大",
    "如果早知道我们会错过的话",
    "我多希望不曾遇见你",
    "我多希望我没爱过你",
    "未来如果遇见一个好女孩",
    "我一定会抓住她",
    "你不要像我一样",
    "你要祝我幸福噢",
    "年后你就要住院啦",
    "这次住院之后你一定会好起来",
    "因为你的本命年终于过去啦",
    "恭喜你呀",
    "虽然生活无法避免会有些苦难",
    "但只要每天坚持向前走",
    "总会有过去的一天",
    "加油嗷！",
    "祝你每天醒来都能有好心情",
    "另外",
    "也希望你祝我本命年不要太惨 嘻嘻",
    "想与你说的话真是永远都说不完呀",
    "这辈子就这样错过啦",
    "下辈子我们一定会走到最后！"
];

let currentIndex = 0;

function showNextMessage() {
    if (currentIndex >= messages.length) {
        return;
    }

    const container = document.getElementById('container');
    const message = messages[currentIndex];
    const isLastMessage = currentIndex === messages.length - 1;
    
    // 如果是最后一行，先等待3秒
    const initialDelay = isLastMessage ? 3000 : 0;
    
    setTimeout(() => {
        // 最后一行显示5秒，其他行根据长度计算显示时间
        const duration = isLastMessage
            ? 5 
            : Math.min(Math.max(message.length * 0.3 + 1, 3), 4.5); // 最短显示时间延迟1秒，最长4.5秒
        
        // 创建文字元素
        const textDiv = document.createElement('div');
        textDiv.className = 'text';
        textDiv.textContent = message;
        // 动态设置动画时间
        textDiv.style.animation = `textAnim ${duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
        
        container.appendChild(textDiv);

        setTimeout(() => {
            textDiv.remove();
            currentIndex += 1;
            showNextMessage();
        }, duration * 1000);
    }, initialDelay);
}

// 密钥验证
document.getElementById('submit-key').addEventListener('click', () => {
    const keyInput = document.getElementById('key-input').value;
    if (keyInput === '0602') {
        const music = document.getElementById('background-music');
        music.play(); // 播放音乐
        document.querySelector('.input-container').style.display = 'none'; // 隐藏输入框
        document.getElementById('container').style.display = 'flex'; // 显示文字容器
        setTimeout(showNextMessage, 3000); // 开始显示文字
    } else {
        alert('密钥错误，请重试！');
    }
});