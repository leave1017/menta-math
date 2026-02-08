# 部署工作流程指南

## 🎯 目标：本地预览 → 确认无误 → 推送部署

避免每次都要推送到 Git 才能看到效果，浪费时间。

---

## 📋 完整工作流程

### 步骤 1：本地开发和修改

```bash
# 启动开发服务器
npm run dev
```

在浏览器打开 `http://localhost:3000` 进行开发和调试。

---

### 步骤 2：本地生产环境预览（重要！）

**在推送到 Git 之前，先在本地预览生产构建版本**：

```bash
# 方法A：使用新的 preview 命令（推荐）
npm run preview

# 方法B：分步执行
npm run build    # 构建生产版本
npm start        # 启动生产服务器
```

**预览地址**: `http://localhost:3000`

**检查清单**：
- ✅ 访问 `/practice/` → 点击 "Addition" → 确认不是 404
- ✅ 访问 `/practice/add/` → 点击任意练习 → 确认能进入工具页
- ✅ 访问 `/practice-plans/daily-10/` → 点击 "Start" → 确认练习模块展开
- ✅ 检查所有修改的页面是否正常

**如果发现问题**：
1. 停止服务器（Ctrl+C）
2. 修改代码
3. 重新运行 `npm run preview`
4. 重复直到满意

---

### 步骤 3：代码检查（可选但推荐）

```bash
# 运行 TypeScript 和 ESLint 检查
npm run check
```

确保没有类型错误和语法问题。

---

### 步骤 4：推送到 Git

**只在本地预览确认无误后才推送！**

```bash
# 查看修改的文件
git status

# 添加所有修改
git add .

# 提交（用清晰的提交信息）
git commit -m "Fix: Add generateStaticParams to practice routes"

# 推送到远程仓库
git push
```

---

### 步骤 5：Vercel 自动部署

推送到 Git 后，Vercel 会**自动触发部署**：

1. **查看部署进度**：
   - 登录 [Vercel Dashboard](https://vercel.com/dashboard)
   - 进入你的项目
   - 看到 "Building" 状态

2. **等待构建完成**（通常 1-3 分钟）：
   - 构建成功 → 绿色 "Ready" 状态
   - 构建失败 → 红色 "Failed" 状态（点击查看日志）

3. **访问生产网站**：
   - `https://mentalmath.cc` （你的自定义域名）
   - 或 `https://your-project.vercel.app` （Vercel 默认域名）

---

## 🚀 高级：Vercel 预览部署（分支预览）

如果不想影响主站，可以使用**分支预览功能**：

### 创建预览分支

```bash
# 创建新分支
git checkout -b preview-fix-404

# 修改代码...

# 提交并推送分支
git add .
git commit -m "Test: Fix practice 404"
git push -u origin preview-fix-404
```

### Vercel 自动生成预览链接

推送分支后，Vercel 会：
1. 自动构建这个分支
2. 生成独立的预览 URL（如 `https://your-project-xxx.vercel.app`）
3. 不影响生产环境

### 在 GitHub 查看预览链接

1. 打开你的 GitHub 仓库
2. 进入 Pull Request（如果有）或 Commits 页面
3. 看到 Vercel bot 的评论，里面有预览链接
4. 点击链接测试

### 确认无误后合并到主分支

```bash
# 切换回主分支
git checkout main

# 合并预览分支
git merge preview-fix-404

# 推送到远程
git push

# 删除预览分支（可选）
git branch -d preview-fix-404
git push origin --delete preview-fix-404
```

---

## 📝 快速命令速查表

| 命令 | 用途 | 何时使用 |
|------|------|---------|
| `npm run dev` | 开发模式 | 日常开发、热更新 |
| `npm run build` | 构建生产版本 | 检查构建是否成功 |
| `npm start` | 启动生产服务器 | 本地预览生产版本 |
| `npm run preview` | 构建+启动 | **推送前必做** |
| `npm run check` | 代码检查 | 推送前检查错误 |
| `git status` | 查看修改 | 提交前确认文件 |
| `git add .` | 暂存所有修改 | 提交前准备 |
| `git commit -m "..."` | 提交 | 记录修改 |
| `git push` | 推送到远程 | 触发 Vercel 部署 |

---

## ⚠️ 常见问题

### Q1: 本地预览正常，但部署后还是 404？

**可能原因**：
- Git 没有推送最新代码
- Vercel 缓存问题

**解决方法**：
```bash
# 1. 确认代码已推送
git log -1  # 查看最新提交

# 2. 在 Vercel Dashboard 手动触发重新部署
# 或者强制推送
git commit --allow-empty -m "Trigger rebuild"
git push
```

### Q2: `npm start` 启动失败？

**解决方法**：
```bash
# 先清理构建缓存
rm -rf .next

# 重新构建
npm run build

# 再启动
npm start
```

### Q3: 构建时间太长？

**优化建议**：
- 使用 `npm run dev` 进行日常开发（秒级热更新）
- 只在推送前运行 `npm run preview`（一次性检查）

### Q4: 如何回滚到上一个版本？

**在 Vercel Dashboard**：
1. 进入项目 → Deployments
2. 找到之前的成功部署
3. 点击 "..." → "Promote to Production"

**或者用 Git**：
```bash
# 查看提交历史
git log --oneline

# 回滚到某个提交
git reset --hard <commit-hash>
git push -f  # 强制推送（谨慎使用）
```

---

## 🎯 推荐工作流程总结

### 日常开发（快速迭代）
```bash
npm run dev
# 修改代码 → 浏览器自动刷新 → 继续开发
```

### 准备部署（推送前）
```bash
npm run preview          # 本地预览生产版本
# 打开 http://localhost:3000 测试所有功能
# 确认无误后 Ctrl+C 停止

npm run check            # 检查代码质量（可选）
git add .
git commit -m "描述你的修改"
git push                 # 触发 Vercel 自动部署
```

### 实验性功能（不影响主站）
```bash
git checkout -b feature-test
# 修改代码...
git add .
git commit -m "Test: 新功能"
git push -u origin feature-test
# Vercel 生成预览链接 → 测试 → 满意后合并到 main
```

---

## 📊 当前项目构建信息

**生成的页面数量**: 44 页
- 静态页面: 8 页（首页、contact、privacy 等）
- Practice Plans: 4 页（目录 + 3个计划）
- Practice Library: 4 页（add/sub/mul/div）
- Practice Tool: 36 页（4运算 × 3位数 × 3题量）

**构建时间**: ~20-30 秒
**部署时间**: 1-3 分钟（Vercel）

---

**最后更新**: 2026-01-24
**版本**: v1.0
