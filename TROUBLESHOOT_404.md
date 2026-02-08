# 线上 404 问题排查指南

## ✅ 已确认的情况

1. **本地构建成功** ✅
   - `npm run build` 成功生成 40 个页面
   - `/practice/add/` 等页面已生成

2. **代码已推送到 Git** ✅
   - 最新提交: `e18c5f0 up` (2026-02-06 10:30)
   - 包含了 `generateStaticParams` 修复

3. **线上仍然 404** ❌
   - 访问 `https://mentalmath.cc/practice/add/` 返回 404

## 🔍 可能的原因

### 原因 1: Vercel 没有自动部署（最可能）

**检查方法**：
1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 找到你的项目（menta-math）
3. 查看 "Deployments" 标签页
4. 检查最新部署的时间戳

**如果最新部署时间早于 10:30**：
→ Vercel 没有自动部署，需要手动触发

**解决方法**：
```bash
# 方法 A: 空提交触发部署
git commit --allow-empty -m "Trigger Vercel deployment"
git push

# 方法 B: 在 Vercel Dashboard 手动重新部署
# Deployments → 最新部署 → "..." → "Redeploy"
```

---

### 原因 2: Vercel 部署失败

**检查方法**：
1. Vercel Dashboard → Deployments
2. 看最新部署的状态：
   - 🟢 "Ready" = 成功
   - 🔴 "Failed" = 失败
   - 🟡 "Building" = 构建中

**如果是 "Failed"**：
1. 点击失败的部署
2. 查看 "Build Logs"
3. 找到错误信息（通常在红色文字部分）

**常见错误**：
- `Error: generateStaticParams is not a function` → 检查函数拼写
- `Module not found: OPS` → 检查 import 语句
- `Out of memory` → 联系 Vercel 支持或优化构建

---

### 原因 3: Vercel 缓存问题

**症状**：
- 部署成功（绿色 "Ready"）
- 但访问页面还是 404
- 其他页面正常

**解决方法**：

```bash
# 方法 1: 清除浏览器缓存
# Chrome: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

# 方法 2: 在 Vercel Dashboard 清除缓存
# Settings → Functions → Clear Cache

# 方法 3: 强制推送空提交
git commit --allow-empty -m "Force rebuild: Clear cache"
git push
```

---

### 原因 4: `trailingSlash` 配置问题

**检查 next.config.ts**：
```typescript
// 应该有这个配置
trailingSlash: true
```

**如果你访问的 URL 没有结尾斜杠**：
- ❌ `https://mentalmath.cc/practice/add` （没有 `/`）
- ✅ `https://mentalmath.cc/practice/add/` （有 `/`）

**测试**：
```bash
# 访问带斜杠的 URL
https://mentalmath.cc/practice/add/
https://mentalmath.cc/practice/sub/
https://mentalmath.cc/practice/mul/
https://mentalmath.cc/practice/div/
```

---

### 原因 5: 域名配置问题

**如果 Vercel 默认域名正常，但自定义域名 404**：

1. 检查 DNS 配置：
   - Vercel Dashboard → Settings → Domains
   - 确认 `mentalmath.cc` 状态为 "Valid Configuration"

2. 清除 DNS 缓存：
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```

3. 用 Vercel 默认域名测试：
   ```
   https://your-project.vercel.app/practice/add/
   ```

---

## 🚀 立即解决方案（推荐）

### 步骤 1: 检查 Vercel 部署状态

打开 Vercel Dashboard，截图最新部署的：
- 部署时间
- 部署状态（Ready/Failed/Building）
- 构建日志（如果失败）

### 步骤 2: 手动触发重新部署

不管当前状态如何，先强制重新部署一次：

```bash
git commit --allow-empty -m "Force redeploy to fix 404"
git push
```

等待 2-3 分钟让 Vercel 完成部署。

### 步骤 3: 测试所有 URL（带结尾斜杠）

```bash
# 测试这些 URL（注意结尾的 /）
https://mentalmath.cc/practice/add/
https://mentalmath.cc/practice/sub/
https://mentalmath.cc/practice/mul/
https://mentalmath.cc/practice/div/

# 点击页面中的任意练习链接，如：
https://mentalmath.cc/p/add/1/10/
```

### 步骤 4: 如果还是 404

**在浏览器中打开开发者工具**：
1. 按 F12 打开 DevTools
2. 访问 404 页面
3. 查看 "Network" 标签页
4. 找到失败的请求
5. 查看 Response Headers 中的 `x-vercel-id`（这是部署 ID）

对比这个 ID 和 Vercel Dashboard 中最新部署的 ID：
- **如果一致** → 新部署已生效，但页面确实没生成（代码问题）
- **如果不一致** → 访问的是旧部署（缓存问题）

---

## 📋 快速检查清单

完成这些步骤，逐个打勾：

- [ ] 检查 Vercel Dashboard 最新部署时间 ≥ 10:30
- [ ] 最新部署状态是 "Ready"（绿色）
- [ ] 构建日志中没有红色错误
- [ ] 访问 URL 时带结尾斜杠 `/`
- [ ] 清除浏览器缓存（Ctrl+Shift+R）
- [ ] 尝试用无痕模式访问
- [ ] 用 Vercel 默认域名测试
- [ ] 检查 `next.config.ts` 有 `trailingSlash: true`

---

## 💡 本地预览工作流程（避免此类问题）

为了避免以后部署后才发现问题，请使用这个工作流程：

```bash
# 1. 本地预览生产构建（推送前必做）
npm run preview

# 2. 在浏览器测试所有功能
#    http://localhost:3000/practice/add/
#    http://localhost:3000/p/add/1/10/

# 3. 确认无误后再推送
git add .
git commit -m "Fix: ..."
git push

# 4. 等待 Vercel 部署完成（2-3分钟）

# 5. 访问线上 URL 验证（带结尾斜杠）
```

---

## 🆘 如果以上都不行

联系我，并提供：
1. Vercel Dashboard 最新部署截图
2. 构建日志（Build Logs）
3. 浏览器 DevTools Network 标签截图
4. 你访问的完整 URL

---

**创建时间**: 2026-01-24
**最后更新**: 2026-01-24
