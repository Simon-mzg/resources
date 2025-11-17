/**
     * 开发者工具检测函数
     * 
     * 该函数通过以下方式检测并阻止开发者工具的使用：
     * 1. 定时检查窗口尺寸差异，当检测到开发者工具打开时清空页面内容并显示警告
     * 2. 禁用F12、Ctrl+Shift+I、Ctrl+Shift+J、Ctrl+U等常用开发者工具快捷键
     * 
     * 检测逻辑基于窗口outerHeight/innerHeight和outerWidth/innerWidth的差异
     * 当差异超过阈值(160px)时判定为开发者工具已打开
     * 
     * 注意：这种检测方式并非100%可靠，且可能影响用户体验
     */
(function () {
    let devtools = {
        open: false,
        orientation: null
    };

    const threshold = 160;

    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold ||
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                // 检测到开发者工具打开
                // 可以选择重定向页面或显示警告
                // alert('开发者工具已打开！');
                // window.location.href = 'about:blank';
                // 或者直接关闭页面
                // window.close();

                // 清空页面内容
                document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h1>开发者工具检测</h1><p>请关闭开发者工具继续浏览</p></div>';
            }
        } else {
            devtools.open = false;
        }
    }, 500);

    // 禁用F12、Ctrl+Shift+I、Ctrl+Shift+J、Ctrl+U等快捷键
    document.onkeydown = function (e) {
        if (e.keyCode == 123) {
            return false;
        }
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            return false;
        }
        // Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }
        // Ctrl+U
        if (e.ctrlKey && e.keyCode == 85) {
            return false;
        }
        // Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
            return false;
        }
    };
})();
document.oncontextmenu = function () {
    return false;
}