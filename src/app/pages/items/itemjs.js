// 监听文档加载完毕
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有标签和内容元素
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.tab-content');
  
    // 遍历所有标签并监听点击事件
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        // 移除所有标签的激活状态和内容的显示
        tabs.forEach(function(t) { t.classList.remove('active-tab'); });
        contents.forEach(function(c) { c.classList.remove('active-content'); });
  
        // 添加激活状态到当前点击的标签
        tab.classList.add('active-tab');
  
        // 根据点击的标签显示相应内容
        var activeContent = document.querySelector(tab.getAttribute('data-target'));
        activeContent.classList.add('active-content');
      });
    });
  });
  