// var that;
class Tab {
    constructor(id) {
        // that = this;
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul');
        // section的父元素
        this.fsection = this.main.querySelector('.tabscon')
        this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作 让相关的元素绑定事件
        // this.add.addEventListener('click', this.addTab.bind(this.add, this));
        this.add.onclick = this.addTab.bind(this.add, this);
        for (var i = 0; i < this.lis.length; i++) {
            // this.lis[i].index = i;
            // this.lis[i].addEventListener('click', this.toggleTab.bind(this.lis[i], this));
            // this.remove[i].addEventListener('click', this.removeTab.bind(this.remove[i], this));
            // this.spans[i].addEventListener('dblclick', this.editTab);
            // this.sections[i].addEventListener('dblclick', this.editTab);
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取新创建的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    // 清除li和section的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 1.切换功能
    toggleTab(that) {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    // 2.添加功能
    addTab(that) {
        that.clearClass();
        // 创建li和section
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试 ' + random + '</section>';
        // 把这两个元素追加到对应的父元素里
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3.删除功能
    removeTab(that, e) {
        e.stopPropagation(); // 阻止冒泡 
        var index = this.parentNode.index;
        console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选定状态的li时 让原来的选定状态不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除选定状态的li时 就让前一个li处于选定状态
        index--;
        // 手动调用点击事件
        that.lis[index] && that.lis[index].click();
    }
    // 4.修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框中的文字处于选定状态
        // 文本框失去焦点就把文本框里的值给span
        input.addEventListener('blur', function () {
            this.parentNode.innerHTML = this.value;
        })
        // 按下回车也可以把文本框的值给span
        input.addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        })
    }
}
new Tab('#tab');