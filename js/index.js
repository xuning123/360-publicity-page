$(function () {
    $('.container').fullpage({
        /*进行配置  不同的配置项可以配置不同的工具*/
        /*是否垂直居中*/
        verticalCentered:false,
        /*配置背景*/
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        /*监听页面切换完成*/
        afterLoad:function (link,index) {
            var _this = this;
            /*当前的屏幕*/
            //$('.section').eq(index-1);
            //去掉所有的now
            $('.section').removeClass('now');
            //给当前的加上 适当的延时一点时间去做动画
            setTimeout(function () {
                $(_this).addClass('now');
            },300);
        }
    });
});
/*1.实现动画*/
/*1.1 什么时候做动画*/
/*答：当页面加载完成 切换完成*/
/*jquery animate(p,s,e,fn) p 做动画属性{} 动画执行时间200ms 动画的速度(swing默认|linear) 动画执行完成回调函数*/
/*1.2 怎么去做这些动画  过渡 动画*/
/*1.3 怎么去同时控制多个动画 加类  类包含做动画的属性*/