$(function () {
    load();
    $("#title").on("keydown", function (e) {
        if (e.keyCode == 13) {
            if ($(this).val() == "") {
                alert("请输入您的代办事项");
            } else {
                // alert(11);
                // 先从本地存储获取之前的数据
                var local = getDate();
                // 添加新的数据
                local.push({ title: $(this).val(), done: false });
                // 再保存到本地存储
                saveDate(local);
                // 渲染到浏览器
                load();
                $(this).val("");
            }
        }
    });

    // todolist 删除操作
    $("ol, ul").on("click", "a", function () {
        // 先获取本地存储数据
        var data = getDate();
        // 修改数据
        var index = $(this).attr("id");
        data.splice(index, 1);
        // 保存到本地存储
        saveDate(data);
        // 渲染加载数据
        load();
    })


    // 已完成和未完成的切换
    $("ol, ul").on("click", "input", function () {
        // 先获取数据
        var data = getDate();
        // 修改数据
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        // 保存到本地存储
        saveDate(data);
        // 渲染加载数据
        load();
    })

    // 从本地存储获取数据
    function getDate() {
        var data = localStorage.getItem("todelist");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的，需要先转化为对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存到本地存储
    function saveDate(data) {
        // 将数据格式转化成字符串格式
        localStorage.setItem("todelist", JSON.stringify(data));
    }

    // 将数据渲染到浏览器
    function load() {
        // 获取数据
        var data = getDate();
        $("ol, ul").empty();
        var todoCount = 0; // 未完成事件的个数
        var doneCount = 0; // 已完成事件的个数
        $.each(data, function (i, n) {
            if (n.done) {
                $("ul").prepend("<li> <input type='checkbox' checked='checked'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li> <input type='checkbox'> <p>" + n.title + "</p> <a href='javascript:;' id=" + i + "></a></li>");
                todoCount++;
            }
        })
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }
})