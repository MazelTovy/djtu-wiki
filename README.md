# DJTU-wiki

## 项目简介

每当看到大一新生在操场上军训，与同学们打成一片；在图书馆里好奇地翻阅书籍，怯生生地询问学长座位是否有人；或是怀着感激和尊敬坐下来，认真学习大学课本，我都不禁为他们的热情和梦想感到欣慰。然而，我不得不遗憾地告诉这些满怀希望的新生们，正如上海交通大学的“生存守则”所言，大连交通大学的本科教育并非濒临崩溃，而是早已崩溃。

我们看到无数充满求知欲、激情和理想的年轻人满怀希望与信任，将自己宝贵的四年青春交给大学塑造。可惜的是，许多人毕业时会发现自己仍然碌碌无为，平庸无奇。在当今流水线式的教育体制下，我们就像廉价的零件一样被批量生产。由于数量庞大，没有人会真正为每个学生的教育质量负责。

在大连交通大学，情况尤为严重。许多课程内容陈旧，教学方式流于形式。即便是认真学习的学生，在经历了四年的学习后，可能仍然不清楚自己专业的核心知识体系。

正因如此，我和几位学长决定合作，分享我们的经验。虽然我们的观点可能不够全面或完全正确，但这些都是我们亲身经历的弯路。前人栽树，后人乘凉。我们或许无法给出什么正确的“大道理”，但至少可以帮助你们看清学校教育中存在的问题。相比于此，我更相信后来者的智慧。希望这个wiki能够长存，成为你们查询资源、讨论知识、了解专业和绩点的平台，助你们成为自己想成为的那个人。

# 如何贡献

我们非常欢迎同学来做贡献 ：

- [X] 添加或修改现有文档
- [X] 提交新的学习资源或者对某一门课程的看法和学习分享
- [X] 分享一些大学生指南教程
- [X] 修复 Bug 或者提出新的想法

## 贡献流程(贡献人员)

**对于贡献同学来说不需要配置安装环境,只需添加自己的idea或者笔记就行。**

1. **Fork 仓库**：点击页面右上角的 "Fork" 将此仓库 Fork 到你的 GitHub 账户中。
2. **Clone 你的 Fork**：

   ```bash
   git clone git@github.com:General-Computer-Junkyard/djtu-wiki.git
   ```
3. **创建新分支**：

   ```bash
   git checkout -b your-branch-name
   ```
4. **进行修改**：在你的分支上进行修改或添加文档。

   **个人建议，如果各位同学想为这个项目添加笔记，只需在 `docs\`文件夹里面找到相应模块的文件夹，并将自己的 `markdown` 文件添加到该文件夹下，提交更改即可,至于在网页排版交给网站维护者就行。**
5. **提交更改**：

   ```bash
   git add .
   git commit -m "简要描述你的修改"
   ```
6. **推送到远程仓库**：

   ```bash
   git push origin your-branch-name
   ```
7. **创建 Pull Request**：在 GitHub 上点击 "New Pull Request"，提交你的更改。

## 管理介绍(维护人员)

为了简化管理者文档维护，我写了 *generateSidebar.ts* 脚本来自动生成侧边栏配置。

该脚本会遍历 `docs/` 目录下的所有 Markdown 文件，并自动生成 VitePress 的侧边栏配置文件，减少了手动更新的负担。

### 使用方式

对于项目维护者来说，只需要 clone 下来然后安装全部的网页配置环境，确保在本地电脑可以运行生成渲染，在贡献者在合并分支的时候运行脚本指令就可以更新新的部署。

### 环境配置

1. **安装依赖**：

   - 确保 Node.js 版本大于 14。
   - 项目使用 `vitepress@1.3.4` 版本。

   如果需要安装或更新 Node.js，请访问 [Node.js 官方网站](https://nodejs.org) 获取最新版本。

   进入项目目录后，运行以下命令以安装依赖项：

   ```bash
   npm install
   ```
2. **生成侧边栏**：

   运行以下命令生成或更新侧边栏配置：

   ```bash
   npm run generate-sidebar
   ```
3. **启动开发服务器**：
   在本地预览文档，运行：

   ```bash
   npm run docs:dev
   ```

4.在本地看到项目文件都更新完毕了，直接推送github并重新action就可以。

## 支持与联系

如果你在使用过程中遇到任何问题或有任何疑问，可以通过提交 Issue 与我们联系。我们欢迎任何形式的反馈和建议！

---
