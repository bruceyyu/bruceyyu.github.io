2018/11/23

今天看菜鸟的bootstrap教程，学着自己做了navbar上的 `class="navbar-toggle collapsed"`，即手机屏幕上能显示展开按钮的导航栏。遇到问题：所有网上可参考的资料都用

```html
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	<span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
</button>
```
做成所谓的“汉堡按钮”，但是似乎因为我用了css重写了nav的部分样式，导致按钮一直无法显示。

后来把这三行代码删了，自己加了bootstrap的icon作为按钮，就OK了。现在是：

```html
<button type="button" id="toggle-btn" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
	<i class="glyphicon glyphicon-align-justify"></i>
</button>
```

---

