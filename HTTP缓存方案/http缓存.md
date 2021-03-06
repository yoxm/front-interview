# HTTP 缓存

## 概述

通过网络获取内容既速度缓慢又开销巨大。较大的响应需要在客户端与服务器之间进行多次往返通信，这会延迟浏览器获得和处理内容的时间，还会增加访问者的流量费用。因此，缓存并重复利用之前获取的资源的能力成为性能优化的一个关键方面。

好在每个浏览器都自带了 HTTP 缓存实现功能。您只需要确保每个服务器响应都提供正确的 HTTP 标头指令，以指示浏览器何时可以缓存响应以及可以缓存多久。

![](./http-request.png "缓存")

## 通过 ETag 验证缓存

* 服务端可以使用 ETag HTTP 头来传递令牌
* 验证令牌可实现高效的资源更新检查，未变化时不会传送任何数据。

服务器生成并返回的随机令牌通常是文件内容的哈希值或某个其他指纹。客户端不需要了解指纹是如何生成的，只需在下一次请求时将其发送至服务器。如果指纹仍然相同，则表示资源未发生变化，您就可以跳过下载。

![](./http-cache-control.png "Etag")

在上例中，客户端自动在“If-None-Match” HTTP 请求标头内提供 ETag 令牌。服务器根据当前资源核对令牌。如果它未发生变化，服务器将返回“304 Not Modified”响应，告知浏览器缓存中的响应未发生变化，可以再延用 120 秒。请注意，您不必再次下载响应，这节约了时间和带宽。

## Cache-Control

* 每个资源都可以通过`Cache-Control`HTTP 头定义缓存策略
* `Cache-Control`控制在什么条件下可以缓存响应以及可以缓存多久。

HTTP 规范允许服务器返回 Cache-Control 指令，这些指令控制浏览器和其他中间缓存如何缓存各个响应以及缓存多久。

![](./http-cache-control-highlight.png "缓存")

### `no-cache` 和 `no-control`

“no-cache”表示必须先与服务器确认返回的响应是否发生了变化，然后才能使用该响应来满足后续对同一网址的请求。因此，如果存在合适的验证令牌 (ETag)，no-cache 会发起往返通信来验证缓存的响应，但如果资源未发生变化，则可避免下载。

相比之下，“no-store”则要简单得多。它直接禁止浏览器以及所有中间缓存存储任何版本的返回响应，例如，包含个人隐私数据或银行业务数据的响应。每次用户请求该资产时，都会向服务器发送请求，并下载完整的响应。

### `public`与`private`

如果响应被标记为“public”，则即使它有关联的 HTTP 身份验证，甚至响应状态代码通常无法缓存，也可以缓存响应。大多数情况下，“public”不是必需的，因为明确的缓存信息（例如“max-age”）已表示响应是可以缓存的。

相比之下，浏览器可以缓存“private”响应。不过，这些响应通常只为单个用户缓存，因此不允许任何中间缓存对其进行缓存。例如，用户的浏览器可以缓存包含用户私人信息的 HTML 网页，但 CDN 却不能缓存。

### `max-age`

指令指定从请求的时间开始，允许获取的响应被重用的最长时间（单位：秒）。例如，“max-age=60”表示可在接下来的 60 秒缓存和重用响应。

## 最佳缓存策略

![](./http-cache-decision-tree.png "缓存策略")

    Cache-Control 指令和说明
    max-age=86400 浏览器以及任何中间缓存均可响应，（如果是public）缓存长达一天。
    private,max-age=600 客户端的浏览器只能响应缓存10分钟
    no-store 不允许缓存响应，每次请求都必须完整获取
