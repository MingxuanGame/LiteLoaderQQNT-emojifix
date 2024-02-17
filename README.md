# LiteLoaderQQNT-emojifix

Emoji 修复，使用系统的 Emoji 字体

## 存在的兼容性问题

与 [xiyuesaves/LiteLoaderQQNT-lite_tools](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools) 不兼容。

- 其“自定义字体”功能会覆盖本插件对 `document.body` 的注入。

- 解决方案：
    1. 禁用本插件；
    2. 通过 [xiyuesaves/LiteLoaderQQNT-lite_tools](https://github.com/xiyuesaves/LiteLoaderQQNT-lite_tools) 的“自定义字体”功能修改字体。
    QQ 默认字体的 Emoji 修复后的 `font-family` 如下

    ```txt
    system-ui, "PingFang SC", PingFangSC-Regular, "Microsoft YaHei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", Arial, Helvetica, sans-serif, "Apple Braille", "Color Emoji Fix"
    ```

## 可能存在的兼容性问题

可能与修改 CSS 的插件部分不兼容。

## 许可证

[MIT License](./LICENSE)
