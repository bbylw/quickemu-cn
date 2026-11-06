/**
 * Nimbus 在 Windows 上硬编码调用 `pagefind.cmd`，而 Bun / npm 只会安装
 * `pagefind.exe`。本脚本在构建前补一个批处理包装器，让站内搜索（Pagefind）
 * 在 Windows 上也能正常建立索引。
 *
 * 幂等：仅在 Windows 下、且包装器缺失时创建。
 */
import { existsSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

if (process.platform === "win32") {
  const binDir = join(process.cwd(), "node_modules", ".bin");
  const exe = join(binDir, "pagefind.exe");
  const cmd = join(binDir, "pagefind.cmd");

  if (existsSync(exe) && !existsSync(cmd)) {
    mkdirSync(binDir, { recursive: true });
    writeFileSync(cmd, '@ECHO OFF\r\n"%~dp0pagefind.exe" %*\r\n');
    console.log("[setup-pagefind] 已创建 node_modules/.bin/pagefind.cmd");
  }
}
