# LiteLoaderQQNT-emojifix

Emoji 修复，使用系统的 Emoji 字体

## 存在的兼容性问题

与 [xh321/LiteLoaderQQNT-Custom-CSS](https://github.com/xh321/LiteLoaderQQNT-Custom-CSS) 部分不兼容。

- 本插件采用修改 `body` Element 的 `font-family`，删除其中的 `Color Emoji` 来实现使用系统 Emoji（内联）；
- xh321/LiteLoaderQQNT-Custom-CSS 采用在 `head` 新加 `style` 添加 CSS（嵌入）；
- 这使得本插件的 `font-family` 会覆盖 xh321/LiteLoaderQQNT-Custom-CSS 中设置的 `font-family`.

## 许可证

[MIT License](./LICENSE)
