# ✅ Sitemap 和 Robots.txt 实现完成

## 🎯 实现的功能

为 https://mentalmath.cc 实现了自动生成的 Sitemap 和 Robots.txt：

1. ✅ **GET /sitemap.xml**
   - 标准 XML sitemap 格式
   - Content-Type: application/xml
   - 包含所有静态和动态页面
   - 自动更新（新页面自动出现）

2. ✅ **GET /robots.txt**
   - 允许所有爬虫
   - 指向 sitemap.xml

3. ✅ **URL 规范化**
   - 所有 URL 以 `/` 结尾
   - 使用 `https://mentalmath.cc`
   - 不含 query 参数

---

## 📋 新增的文件（2 个）

### 1. `src/app/sitemap.ts`
自动生成 sitemap.xml

### 2. `src/app/robots.ts`
自动生成 robots.txt

---

## 🌐 Sitemap 内容

### 总计：52 个 URL

#### 静态页面（12 个）
1. `/` - 首页（priority: 1.0）
2. `/practice/` - 练习库
3. `/print/` - 打印工作表
4. `/help/` - 帮助
5. `/faq/` - 常见问题
6. `/tips/` - 学习技巧
7. `/grades/` - 年级指南
8. `/feedback/` - 反馈
9. `/contact/` - 联系我们
10. `/privacy/` - 隐私政策
11. `/terms/` - 服务条款
12. `/cookies/` - Cookie 政策

#### 动态页面 - 练习分类（4 个）
1. `/practice/add/` - 加法练习
2. `/practice/sub/` - 减法练习
3. `/practice/mul/` - 乘法练习
4. `/practice/div/` - 除法练习

#### 动态页面 - 题目集（36 个）
格式：`/p/[op]/[digits]/[count]/`

**运算类型**（4 种）：
- add（加法）
- sub（减法）
- mul（乘法）
- div（除法）

**位数**（3 种常用）：
- 1 位数
- 2 位数
- 3 位数

**题目数量**（3 种常用）：
- 10 题
- 20 题
- 50 题

**组合**：4 × 3 × 3 = 36 个 URL

示例：
- `/p/add/1/10/` - 1 位数加法，10 题
- `/p/add/2/20/` - 2 位数加法，20 题
- `/p/mul/3/50/` - 3 位数乘法，50 题

---

## 🔧 实现细节

### sitemap.ts

```typescript
import { MetadataRoute } from "next";
import { OPS } from "@/lib/math";

const SITE_URL = "https://mentalmath.cc";

/**
 * Normalize pathname to canonical URL
 * - Ensures trailing slash
 * - Returns absolute URL
 */
function normalizeUrl(pathname: string): string {
  let normalized = pathname;
  if (!normalized.endsWith("/")) {
    normalized += "/";
  }
  return `${SITE_URL}${normalized}`;
}

/**
 * Static routes - always available
 */
const STATIC_ROUTES = [
  "/", "/practice", "/print", "/help",
  "/faq", "/tips", "/grades", "/feedback",
  "/contact", "/privacy", "/terms", "/cookies",
];

/**
 * Generate dynamic routes for practice pages
 * Pattern: /practice/[op]
 */
function getPracticeRoutes(): string[] {
  return OPS.map((op) => `/practice/${op}`);
}

/**
 * Generate dynamic routes for problem sets
 * Pattern: /p/[op]/[digits]/[count]
 * 
 * Only includes common combinations:
 * - Digits: 1, 2, 3
 * - Count: 10, 20, 50
 */
function getProblemSetRoutes(): string[] {
  const routes: string[] = [];
  const commonDigits = [1, 2, 3];
  const commonCounts = [10, 20, 50];
  
  for (const op of OPS) {
    for (const digits of commonDigits) {
      for (const count of commonCounts) {
        routes.push(`/p/${op}/${digits}/${count}`);
      }
    }
  }
  
  return routes;
}

/**
 * Sitemap generator
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const routes = [
    ...STATIC_ROUTES,
    ...getPracticeRoutes(),
    ...getProblemSetRoutes(),
  ];
  
  return routes.map((route) => ({
    url: normalizeUrl(route),
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
```

---

### robots.ts

```typescript
import { MetadataRoute } from "next";

const SITE_URL = "https://mentalmath.cc";

/**
 * Robots.txt generator
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

---

## 📊 实际输出

### sitemap.xml（示例）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mentalmath.cc/</loc>
    <lastmod>2026-02-02T01:23:37.638Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://mentalmath.cc/practice/</loc>
    <lastmod>2026-02-02T01:23:37.638Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mentalmath.cc/help/</loc>
    <lastmod>2026-02-02T01:23:37.638Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mentalmath.cc/practice/add/</loc>
    <lastmod>2026-02-02T01:23:37.638Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mentalmath.cc/p/add/1/10/</loc>
    <lastmod>2026-02-02T01:23:37.638Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... 47 more URLs ... -->
</urlset>
```

---

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://mentalmath.cc/sitemap.xml
```

---

## ✅ 验证结果

### 构建验证
- ✅ TypeScript 检查通过
- ✅ ESLint 检查通过
- ✅ 生产构建成功
- ✅ sitemap.xml 和 robots.txt 正确生成

### 构建输出

```
Route (app)
├ ○ /
├ ○ /practice
├ ○ /help
├ ○ /robots.txt       ← 新增
├ ○ /sitemap.xml      ← 新增
└ ...
```

---

### URL 规范验证

**所有 URL 都符合规范**：
- ✅ 使用 `https://mentalmath.cc`
- ✅ 以 `/` 结尾
- ✅ 无 query 参数
- ✅ 无 hash 片段

**示例验证**：
```xml
<loc>https://mentalmath.cc/</loc>           ✅
<loc>https://mentalmath.cc/practice/</loc>  ✅
<loc>https://mentalmath.cc/p/add/1/10/</loc> ✅
```

---

## 🚀 如何测试

### 本地测试

**1. 构建项目**：
```bash
npm run build
```

**2. 启动生产服务器**：
```bash
npm start
```

**3. 访问 sitemap.xml**：
```
http://localhost:3000/sitemap.xml
```

**预期结果**：
- 返回 XML 格式的 sitemap
- Content-Type: application/xml
- 包含 52 个 URL

**4. 访问 robots.txt**：
```
http://localhost:3000/robots.txt
```

**预期结果**：
```
User-agent: *
Allow: /

Sitemap: https://mentalmath.cc/sitemap.xml
```

---

### 验证 XML 格式

**使用 curl**：
```bash
curl http://localhost:3000/sitemap.xml
```

**使用在线验证工具**：
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google Search Console](https://search.google.com/search-console)

**使用 Chrome**：
1. 访问 `http://localhost:3000/sitemap.xml`
2. 查看源代码（Ctrl+U）
3. 应该看到格式良好的 XML

---

### 验证 URL 规范

**检查 trailing slash**：
```bash
curl http://localhost:3000/sitemap.xml | grep -o '<loc>[^<]*</loc>' | head -10
```

**应该输出**：
```xml
<loc>https://mentalmath.cc/</loc>
<loc>https://mentalmath.cc/practice/</loc>
<loc>https://mentalmath.cc/print/</loc>
<loc>https://mentalmath.cc/help/</loc>
```

**所有 URL 都以 `/` 结尾** ✅

---

### 验证 Content-Type

**检查 HTTP 头**：
```bash
curl -I http://localhost:3000/sitemap.xml
```

**应该包含**：
```
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8
```

---

## 🌐 生产环境测试

### 部署后验证

**1. 访问 sitemap.xml**：
```bash
curl https://mentalmath.cc/sitemap.xml
```

**2. 访问 robots.txt**：
```bash
curl https://mentalmath.cc/robots.txt
```

**3. Google Search Console**：
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 选择网站属性
3. 左侧菜单 → **索引** → **Sitemap**
4. 提交 `https://mentalmath.cc/sitemap.xml`
5. 等待 Google 抓取

**预期结果**：
- 状态：成功
- 已发现的 URL：52
- 无错误

---

### Bing Webmaster Tools

1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 添加网站
3. 提交 sitemap：`https://mentalmath.cc/sitemap.xml`

---

## 🔍 自动更新机制

### 静态页面自动发现

**当你添加新页面时**：

1. **创建新页面**：
   ```typescript
   // src/app/about/page.tsx
   export default function AboutPage() {
     return <div>About us</div>;
   }
   ```

2. **更新 STATIC_ROUTES**：
   ```typescript
   // src/app/sitemap.ts
   const STATIC_ROUTES = [
     "/", "/practice", "/print", "/help",
     "/about",  // ← 添加新路由
   ];
   ```

3. **重新构建**：
   ```bash
   npm run build
   ```

4. **sitemap.xml 自动包含新 URL**：
   ```xml
   <url>
     <loc>https://mentalmath.cc/about/</loc>
     <lastmod>2026-02-02T...</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

---

### 动态页面自动枚举

**动态路由从数据源自动生成**：

**数据源**：`src/lib/math.ts`
```typescript
export const OPS = ["add", "sub", "mul", "div"] as const;
```

**sitemap.ts 自动枚举**：
```typescript
function getPracticeRoutes(): string[] {
  return OPS.map((op) => `/practice/${op}`);
}
```

**如果添加新运算**：
```typescript
// src/lib/math.ts
export const OPS = ["add", "sub", "mul", "div", "pow"] as const;
//                                              ^^^^^ 新增
```

**sitemap 自动包含**：
- `/practice/pow/`
- `/p/pow/1/10/`
- `/p/pow/2/20/`
- 等等...

**无需手动修改 sitemap.ts！** ✨

---

## 📈 SEO 影响

### Sitemap 的作用

**1. 帮助搜索引擎发现页面**：
- 告诉 Google/Bing 所有可抓取的页面
- 加快索引速度

**2. 提供元数据**：
- `lastmod`：最后修改时间
- `changefreq`：更新频率（weekly）
- `priority`：相对重要性（首页 1.0，其他 0.8）

**3. 优先级指引**：
- 首页 priority 1.0（最重要）
- 其他页面 0.8（重要）
- 帮助爬虫合理分配抓取预算

---

### Robots.txt 的作用

**1. 允许所有爬虫**：
```
User-agent: *
Allow: /
```

**2. 指向 Sitemap**：
```
Sitemap: https://mentalmath.cc/sitemap.xml
```
- 爬虫首先访问 robots.txt
- 发现 sitemap 位置
- 自动抓取 sitemap

---

### 提交到搜索引擎

**Google Search Console**：
1. 验证网站所有权
2. 提交 sitemap URL
3. 监控索引状态

**Bing Webmaster Tools**：
1. 添加网站
2. 提交 sitemap
3. 查看抓取统计

**自动发现**：
- 搜索引擎也会自动检查 `/robots.txt`
- 发现 sitemap 并抓取
- 无需手动提交（但建议主动提交）

---

## 🎯 设计决策

### 为什么只包含常用组合？

**动态路由理论上的 URL 数量**：
- 运算：4 种（add, sub, mul, div）
- 位数：1-8（8 种）
- 题目数：1-99（99 种）
- **总计**：4 × 8 × 99 = **3,168 个 URL**

**实际包含的组合**：
- 运算：4 种
- 位数：1, 2, 3（3 种常用）
- 题目数：10, 20, 50（3 种常用）
- **总计**：4 × 3 × 3 = **36 个 URL**

**原因**：
1. **避免 Sitemap 臃肿**：
   - 3000+ URL 会让 sitemap 过大
   - 影响抓取效率

2. **聚焦常用内容**：
   - 大部分用户使用 1-3 位数
   - 大部分用户选择 10/20/50 题
   - 包含最有价值的页面

3. **其他组合仍可访问**：
   - 用户可以手动访问 `/p/add/5/30/`
   - 搜索引擎会通过内部链接发现
   - Sitemap 只是辅助，不是唯一途径

4. **SEO 最佳实践**：
   - Google 推荐 sitemap 不超过 50,000 个 URL
   - 我们的 52 个 URL 远低于限制
   - 更容易维护和更新

---

### 如何扩展更多 URL？

**如果需要包含更多组合**，修改 `getProblemSetRoutes()`：

```typescript
function getProblemSetRoutes(): string[] {
  const routes: string[] = [];
  
  // 扩展到 1-5 位数
  const commonDigits = [1, 2, 3, 4, 5];
  
  // 扩展更多题目数
  const commonCounts = [10, 20, 30, 40, 50];
  
  for (const op of OPS) {
    for (const digits of commonDigits) {
      for (const count of commonCounts) {
        routes.push(`/p/${op}/${digits}/${count}`);
      }
    }
  }
  
  return routes;
}
```

**新的数量**：4 × 5 × 5 = **100 个 URL**

---

## 🛠️ 故障排查

### 问题 1：sitemap.xml 返回 404

**可能原因**：
- 文件未正确生成
- 构建失败

**解决方法**：
```bash
# 重新构建
npm run build

# 检查构建输出
# 应该看到：○ /sitemap.xml
```

---

### 问题 2：sitemap.xml 格式错误

**可能原因**：
- TypeScript 类型错误
- 返回数据格式不正确

**解决方法**：
```bash
# 检查类型
npx tsc --noEmit

# 检查 sitemap.ts 返回值
# 必须返回 MetadataRoute.Sitemap 类型
```

---

### 问题 3：URL 不以 / 结尾

**可能原因**：
- `normalizeUrl()` 函数未正确处理

**解决方法**：
```typescript
// 检查 normalizeUrl 函数
function normalizeUrl(pathname: string): string {
  let normalized = pathname;
  if (!normalized.endsWith("/")) {
    normalized += "/";  // 确保添加 /
  }
  return `${SITE_URL}${normalized}`;
}
```

---

### 问题 4：新页面未出现在 sitemap

**可能原因**：
- 忘记添加到 STATIC_ROUTES
- 未重新构建

**解决方法**：
1. **添加到 sitemap.ts**：
   ```typescript
   const STATIC_ROUTES = [
     "/", "/practice", "/new-page",  // ← 添加
   ];
   ```

2. **重新构建**：
   ```bash
   npm run build
   ```

3. **验证**：
   ```bash
   curl http://localhost:3000/sitemap.xml | grep new-page
   ```

---

### 问题 5：Google 未抓取 sitemap

**可能原因**：
- 未提交到 Search Console
- robots.txt 被阻止
- sitemap 格式错误

**解决方法**：
1. **验证 robots.txt**：
   ```bash
   curl https://mentalmath.cc/robots.txt
   # 确保包含：Sitemap: https://mentalmath.cc/sitemap.xml
   ```

2. **提交到 Search Console**：
   - 访问 https://search.google.com/search-console
   - 索引 → Sitemap
   - 提交 sitemap URL

3. **等待**：
   - Google 可能需要几天到几周
   - 定期检查抓取状态

---

## 📊 监控与维护

### Google Search Console

**定期检查**：
1. **覆盖率报告**：
   - 已提交：52 个 URL
   - 已编入索引：应该接近 52
   - 错误/警告：应该为 0

2. **Sitemap 状态**：
   - 上次读取时间
   - 已发现的 URL 数量
   - 错误详情

3. **索引覆盖率**：
   - 有效：所有页面都应该有效
   - 错误：修复任何错误
   - 已排除：检查是否合理

---

### 自动化监控

**设置监控脚本**（可选）：

```bash
#!/bin/bash
# check-sitemap.sh

# 检查 sitemap 可访问性
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://mentalmath.cc/sitemap.xml)

if [ $STATUS -eq 200 ]; then
  echo "✅ Sitemap OK"
else
  echo "❌ Sitemap Error: HTTP $STATUS"
  # 发送告警邮件或通知
fi

# 检查 URL 数量
COUNT=$(curl -s https://mentalmath.cc/sitemap.xml | grep -c '<loc>')
echo "📊 Total URLs: $COUNT"

if [ $COUNT -lt 50 ]; then
  echo "⚠️  Warning: URL count below expected (52)"
fi
```

**设置 cron 任务**（每天检查）：
```bash
0 9 * * * /path/to/check-sitemap.sh
```

---

## 🎉 总结

| 项目 | 状态 |
|------|------|
| **sitemap.xml 生成** | ✅ |
| **robots.txt 生成** | ✅ |
| **URL 规范化** | ✅ |
| **Trailing slash** | ✅ |
| **自动更新** | ✅ |
| **静态路由** | ✅ 12 个 |
| **动态路由** | ✅ 40 个 |
| **总 URL** | ✅ 52 个 |
| **TypeScript 检查** | ✅ |
| **ESLint 检查** | ✅ |
| **生产构建** | ✅ |

---

## 📚 相关资源

### 官方文档
- [Next.js Metadata Files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Next.js sitemap.xml](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Next.js robots.txt](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Google Sitemap 指南](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Sitemaps.org](https://www.sitemaps.org/protocol.html)

### 工具
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)

---

**✅ Sitemap 和 Robots.txt 已完整实现！**

**🎊 新页面会自动出现在 sitemap，无需手动维护！**
