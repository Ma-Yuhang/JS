window.onload = function () {
    var regtel = /^1[3|4|5|7|8|9]\d{9}$/; // 手机号码11位
    var tel = document.querySelector('#tel');
    var regqq = /^[1-9]{5,}$/; // qq号5位以上
    var qq = document.querySelector('#qq');
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var nc = document.querySelector('#nc');
    var regtsg = /^\d{6}$/;
    var tsg = document.querySelector('#tsg');
    var regpwd = /^[A-Za-z0-9_-]{6,16}$/;
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel); // 手机号码验证
    regexp(qq, regqq); // qq号码验证
    regexp(nc, regnc); // 昵称验证
    regexp(tsg, regtsg); // 验证码
    regexp(pwd, regpwd); // 密码
    function regexp(ele, reg) {
        ele.onblur = function () {
            if(this.value != ''){
                if (reg.test(this.value)) {
                    // console.log('正确');
                    this.nextElementSibling.className = 'success';
                    this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 格式输入正确'
                } else {
                    // console.log('错误');
                    this.nextElementSibling.className = 'error';
                    this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式输入不正确，请重新输入'
                }
            } else {
                this.nextElementSibling.innerHTML = '';
            }
        }
    };
    surepwd.onblur = function() {
        if(this.value != '') {
            if(this.value == pwd.value) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 两次密码输入一致'
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致'
            }
        } else {
            this.nextElementSibling.innerHTML = '';
        }
    }
}