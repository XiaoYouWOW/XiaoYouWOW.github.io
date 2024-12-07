---
sidebar_position: 7
---

# Galgame播放器

点击<a href="/galgame.html">此处</a>游玩

游玩和播放Galgame(?)

当前版本为 v2

## 更新日志

- v2
```
更新于2024/12/7
更新文件导入
```

- v1
```
更新于2024/12/7
最初公开版本
```

## 操作说明

### 如何游玩

这样,你打开播放器,按照对话框里的说明点一下对话框开始,然后点击对话框播放下一个页面,遇到选项就点选项按钮

### 按键说明

#### 返回

显而易见,返回这个文档

#### 重置

刷新播放器,这会清空自定义台本

#### 跳转

跳转至当前台本的指定页面(页面号必须大于等于0,必须在台本中存在)

> 请注意,跳转有很大概率会导致样式出错,这很烦,我也认可

#### 当前(页面)

播放台本时,你会看到这个按钮后跟了当前页面的页面号,你点击它的时候也会弹出页面号的

#### 重载

重新加载当前台本

#### 选择文件

点击它,选中你的自定义台本,然后会自动加载你的台本

## 台本文档

一个合法的台本文件应该是一个[json](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/JSON)文件[^1],它应该由以下部分组成:

- 元数据
- 页面,必须包括一个启动页面和一个(或多个)结束页面

> 我推荐你在多处达成结局后将游戏引至一个固定的结束页面来结束游戏,不过,如果你有自己的想法(例如成就收集之类的的需要),你可以引至不同的页面

我将必要项进行了高亮,这样你就知道你必须写什么
```json
{
    //元数据
    // highlight-next-line
    meta: { /* 元数据 */ },

    //页面
    // highlight-next-line
    0: { /* 启动页面 */ },
    //...其他页面
    //1: { /* 其他页面 */ },
    //...
}
```

### 元数据

元数据是必要的选项,如果没有元数据,你的游戏无法加载

```json
meta: {
    // highlight-start
    author: "QHLG",         //作者名
    title: "GalGame",       //显示在页面顶端的标题
    version: "1",           //你的游戏的版本
    content: "Test Text",   //加载完成时显示的文本
    // highlight-end
    speed: 15,              //文本显示的速度
    textcolor: "#222",      //加载完成时的文本颜色
    backcolor: "#ddd"       //加载完成时的背景颜色
},
```
以上是一个元数据的示例[^2]

请看这个示例,它大致让你知道了这些东西会被放在哪里<img src="/docs/galgame_1.jpg" alt="加载不出来!!!我生吃你妈!!!" width="400"/>

以下是元数据元素的说明

#### author 作者名

必要,一个字符串,用于告诉大家作者是谁

#### title 标题

必要,一个字符串,显示在页面的顶端,告诉玩家这个Gal叫什么,你现在抬头会看到`Galgame播放器 | 狐莱姆在盯着你...`,对,就是这个

#### version 版本

必要,可以是任何东西,因为没用上这个,目前不会显示在界面上,仅作为一个标识

#### content 主内容

必要,一个字符串,在游戏加载完成时会显示在对话框上的文字内容,你可以在这里写一些你想写的东西(当然你不会写你不想写的东西)

#### speed 显示速度

非必要(默认值为15),一个数字,控制文本显示的速度,控制文本以`speed`字/秒的速度显示

#### textcolor 文本颜色

非必要(默认值为"#222"),一个合法的[css颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)字符串,设置文本颜色

#### backcolor 背景颜色

非必要(默认值为"#fff"),一个合法的[css颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)字符串,设置背景颜色


### 页面

```json
// highlight-next-line
0: {
    role: "我"
// highlight-start
    text: "我说话了!"
},
// highlight-end
1: {
    role: "对方",
    // highlight-next-line
    text: "你现在有四个选项",
    color: "#22f",
    back: "#f22",
    speed: 5,
    choice: {
        0: { text: "我选0", goto: 1001 },
        1: { text: "我选1", goto: 1101 },
        2: { text: "我选2", goto: 1201 },
        3: { text: "我选3", goto: 1301 }
    }
},
1001: {
    // highlight-next-line
    text: "你选了0",
    goto: 2
},
2: {
    end: true
}
```

请看这些示例,它大致让你知道了这些东西会被放在哪里<br /><img src="/docs/galgame_2.jpg" alt="加载不出来!!!我生吃你妈!!!" width="400"/><br /><img src="/docs/galgame_3.jpg" alt="加载不出来!!!我生吃你妈!!!" width="400"/><br /><img src="/docs/galgame_4.jpg" alt="加载不出来!!!我生吃你妈!!!" width="400"/>

首先,我们来看启动页面!启动页面是必须的,你的游戏的第一个页面必须是这个页面,启动页面必须的键必须为0,你的游戏将从这里开始

最低限度的启动页面是这样的,它不会改动除了对话框文本之外的任何东西
```json
0: { text: "一些文本" }
```

结束页面必须有且仅有`end`键,且其值必须为`true`(其他的键值对都无效),如果你不写结束页面,就会溢出
```json
100: { end: true }
```

普通页面和上述页面大致是相同的,但你可以自定义键(但他们仍应是整数,除非你愿意使用goto一个一个指定对应页面)

请注意你的键名应该只存在数字,字母,下划线(`_`)
```txt
0
1
abcde
_page_
// highlight-next-line
123.456 //字符.是不允许的
// highlight-next-line
abc:def //字符:是不允许的
```

启动页面和普通页面一样,支持以下的语法

#### role 角色

非必要,修改角色框的内容,如果不填,就会继承上一个页面的内容

>小提示,如果你不想要角色框,把它设置为`""`<br />如果你想要角色框,但是不想显示内容,请把它设置为`" "`

#### text 文本

唯一的必要!修改对话框里的内容(如果你想显示空白,正如我说的,写`""`,总之不能没有)

#### color 文本颜色

非必要,一个合法的[css颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)字符串,修改对话框文本的颜色

#### back 文本颜色

非必要,一个合法的[css颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color)字符串,修改背景的颜色

#### speed 显示速度

非必要,一个数字,控制文本显示的速度,控制文本以`speed`字/秒的速度显示

#### goto 跳转

非必要,控制本页面跳转的目标页面,如果没有goto,则会跳转至本界面号多一的页面号,例如
```json
1: { text: "另一些文本", goto: "page_a" }, //它指向了下面这个页面
page_a: { text: "另两些文本", goto: 2 },
5: { end: true }, //页面在json中的位置不会影响实际播放的顺序,实际运行时仍会先播放"啦啦啦"再结束
2: { text: "这次我不文本了", goto: 4 },
4: { text: "啦啦啦" }
```
这个示例的播放顺序是`1-page_a-2-4-5`

> 当然,通过goto你也可以做出一些类似于鬼打墙的效果~

#### choice 选项

非必要,创建一些分支选项,必须填text(选项文本)和goto(跳转页面)
```json
//四个选项都有
choice: {
    0: { text:"选项0", goto: 1001 },
    1: { text:"选项1", goto: 1101 },
    2: { text:"选项2", goto: 1201 },
    3: { text:"选项3", goto: 1301 }
}
//只有两个选项,置中
choice: {
    1: { text:"选项1", goto: 2101 },
    2: { text:"选项2", goto: 2201 }
}
//只有一个选项,这我选集贸啊
choice: {
    1: { text:"选项1", goto: 2101 }
}
```

相同编号选项的(视觉上的)位置是固定的,从上到下依次为0,1,2,3

推荐你使用`{原页面号}{选项编号}{分支页面号}`的格式来编写分支剧情
```txt
1001
1002
1101
```

而不是
```txt
1_0_01
1_0_02
1_1_01
```
之类的格式

因为这样的话,程序无法自动跳转,你必须在分支内的每个界面特别的标注goto来引向下个界面

> choice启用的状态下,页面的goto属性是无效的

### 开始你的创作!

```json title="json | 这是上面给出的示例,你可以自己尝试!"
{
    "meta": {
        "author": "QHLG",
        "title": "GalGame",
        "version": "1",
        "content": "Test Text",
        "speed": 15,
        "textcolor": "#222",
        "backcolor": "#ddd"
    },
    "0": {
        "role": "我",
        "text": "我说话了!"
    },
    "1": {
        "role": "对方",
        "text": "你现在有四个选项",
        "color": "#22f",
        "back": "#f22",
        "speed": 5,
        "choice": {
            "0": { "text": "我选0", "goto": 1001 },
            "1": { "text": "我选1", "goto": 1101 },
            "2": { "text": "我选2", "goto": 1201 },
            "3": { "text": "我选3", "goto": 1301 }
        }
    },
    "1001": {
        "role": "",
        "text": "你选了0",
        "goto": 2
    },
    "1101": {
        "role": "",
        "text": "你选了1",
        "goto": 2
    },
    "1201": {
        "role": "",
        "text": "你选了2",
        "goto": 2
    },
    "1301": {
        "role": "",
        "text": "你选了3",
        "goto": 2
    },
    "2": {
        "end": true
    }
}
```

---

[^1]: 文件名不会影响到任何东西,所以你可以随意命名文件
[^2]: 请注意实际上在json中是不支持注释的,所以你必须把这些`//`和它们后面的内容删掉;此外你也应该为每个键加上双引号(必须是半角的!)