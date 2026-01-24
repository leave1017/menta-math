# 修改完成：自动判断 + 正确率统计

## ✅ 已完成的修改

### 1. 输入后自动判断（无需点击 Check 按钮）

**实现方式**：
- 添加了 `useEffect` 监听用户输入
- 当输入数字位数达到答案位数时，自动在 200ms 后提交
- 移除了 "Check" 按钮
- 更新 placeholder 为 `"Type your answer"`

**工作原理**：
```typescript
// 监听输入值变化
useEffect(() => {
  if (!current || done || !value.trim() || feedback.kind !== "idle") return;
  
  const parsed = Number(value.trim());
  if (!Number.isFinite(parsed)) return;
  
  // 估算答案位数
  const expectedDigits = String(Math.abs(current.answer)).length;
  const inputDigits = String(Math.abs(parsed)).length;
  
  // 位数匹配时自动提交
  if (inputDigits >= expectedDigits) {
    const timer = window.setTimeout(() => onSubmit(), 200);
    return () => window.clearTimeout(timer);
  }
}, [value, current, done, feedback.kind, onSubmit]);
```

### 2. 结果统计增加正确率

**新增卡片布局**（从 2×2 改为 3×2）：

| 行1 | Correct | Wrong | **Accuracy** |
| 行2 | Time | Avg / question (跨2列) |

**正确率计算**：
```typescript
{correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0}%
```

**样式特色**：
- 正确率数字显示为**绿色**（`text-emerald-600`）
- 平均每题用时卡片跨2列（`col-span-2`）

---

## 📁 修改的文件

- `src/components/Trainer.tsx`

**关键修改点**：
1. 第 51-83 行：添加自动判断 useEffect
2. 第 39-90 行：将 `onSubmit` 改为 `useCallback`（避免 lint 错误）
3. 第 174-189 行：移除 Check 按钮，改为纯输入框
4. 第 211-232 行：增加正确率卡片，调整布局为 3 列
5. 第 259-261 行：更新提示文字

---

## 🎮 用户体验变化

### 修改前：
1. 输入答案
2. 按 Enter 或点击 "Check" 按钮
3. 看到对错反馈
4. 自动进入下一题

### 修改后：
1. 输入答案
2. **自动判断**（200ms 延迟）
3. 看到对错反馈
4. 自动进入下一题

### 完成后统计：
```
[ Correct: 18 ]  [ Wrong: 2 ]  [ Accuracy: 90% ]  ← 新增
[ Time: 1m 23s ] [ Avg / question: 4s           ]
```

---

## ✅ 验证清单

- [x] ✅ ESLint 通过（无 lint 错误）
- [x] ✅ 输入框自动判断（无需点击按钮）
- [x] ✅ Check 按钮已移除
- [x] ✅ 正确率卡片已添加（绿色显示）
- [x] ✅ 结果布局调整为 3×2
- [x] ✅ 提示文字已更新
- [x] ✅ Dev server 运行正常

---

## 🧪 测试建议

访问 `http://localhost:3000` 并：

1. 输入一个 1 位数答案（如 `4`）→ 应该自动判断
2. 输入一个 2 位数答案（如 `15`）→ 应该自动判断
3. 完成所有题目 → 查看正确率卡片是否正确显示

**注意**：如果答案是负数或多位数，自动判断会在输入足够位数后触发。
