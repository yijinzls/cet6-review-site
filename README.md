# 六级单词复习站

这是一个纯前端背单词网站，直接打开 `index.html` 就能使用。网站会联网从公开 GitHub 词库加载六级单词，学习记录会保存在当前浏览器的 `localStorage` 里。

## 第一次打开

1. 进入这个文件夹：
   `C:\Users\10058\OneDrive\Documents\好玩的探索性游戏`
2. 双击 `index.html`。
3. 浏览器打开后，先点“查看释义”，再根据记忆情况点：
   - `还不熟`：今天或很快再复习。
   - `有点印象`：隔天左右再复习。
   - `记住了`：间隔更久后再复习。
4. 左侧显示“在线词库已加载”时，说明已经成功联网读取六级词库。

## 变成真正的线上网站

这个项目已经是静态网站，可以直接部署到 GitHub Pages、Netlify 或 Vercel。

最简单的方式：

1. 注册或登录 GitHub。
2. 新建一个仓库，比如 `cet6-review-site`。
3. 上传这 4 个文件：`index.html`、`styles.css`、`app.js`、`README.md`。
4. 进入仓库 `Settings` -> `Pages`。
5. `Source` 选择 `Deploy from a branch`。
6. `Branch` 选择 `main` 和 `/root`，保存。
7. 等一两分钟，就会得到一个公网网址。

部署后，别人访问这个公网网址时，也会自动联网加载六级词库。

## 每天怎么用

1. 每天打开一次 `index.html`。
2. 先做“复习”里的待复习单词。
3. 复习清空后，再切到“新词”学一点新单词。
4. 每天建议完成页面左侧的 `20 / 20`。

## 词库来源

网站默认联网加载这个公开词库：

`https://github.com/KyleBing/english-vocabulary`

如果网络失败，页面会自动使用 `app.js` 里的备用词库。

## 怎么加备用单词

打开 `app.js`，找到最上面的 `WORDS`。照着已有格式继续加：

```js
{ word: "example", phonetic: "/ɪɡˈzæmpl/", meaning: "n. 例子", example: "This is a simple example." },
```

注意：

- 每个单词对象之间要有英文逗号。
- `word` 建议不要重复。
- 保存 `app.js` 后刷新网页就能看到新词。

## 文件是干什么的

- `index.html`：网页骨架。
- `styles.css`：页面样式。
- `app.js`：词库、复习算法、按钮交互、本地保存。

## 以后可以继续加的功能

- 导入 CSV 词库。
- 拼写测试模式。
- 错题本。
- 按六级真题频率分组。
- 导出学习进度。
