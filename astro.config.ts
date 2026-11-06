import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import nimbus, {
  defineConfig as defineNimbusConfig,
} from "@cloudflare/nimbus-docs";
import { tableScroll } from "@cloudflare/nimbus-docs/markdown";

const nimbusConfig = defineNimbusConfig({
  // 站点规范域名（不带结尾斜杠）：决定 canonical URL、OG 绝对地址、
  // robots.txt、sitemap 以及 /llms.txt 中的链接。
  site: "https://quickemu-project.github.io/quickemu-docs",
  // 项目名称：用于 <title>、首页 H1 和 OG。
  title: "Quickemu 中文文档",
  // 一句话描述：用于 meta 与 OG。
  description: "快速创建并运行经过优化的 Windows、macOS 与 Linux 虚拟机",
  locale: "zh-CN",
  // 仓库地址：显示在页头的 GitHub 链接。
  github: "https://github.com/quickemu-project/quickemu",
  socialImageAlt: "Quickemu 中文文档预览",
  // 文档统一挂在 /docs 下；根路径 / 由独立落地页（src/pages/index.astro）占用。
  sidebar: {
    items: [{ label: "文档", autogenerate: { collection: "docs" } }],
    indexDisplay: "overview-leaf",
    overviewLabel: "概览",
  },
});

export default defineConfig({
  // nimbus:adapter
  output: "static",
  // Tailwind v4 via its Vite plugin (the integration Astro recommends for
  // Tailwind v4 — replaces the PostCSS plugin, which doesn't build under
  // Astro 7's Vite 8 bundler).
  vite: {
    plugins: [tailwindcss()],
  },
  // Hover-prefetch link targets so full-page navigations feel instant without
  // a client-side router.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [
    nimbus(nimbusConfig, {
      // Authoring rules are opt-in by design — your repo, your taste. The
      // two below are the load-bearing pair: frontmatter has to validate
      // against the content schema for the page to render properly, and
      // broken internal links are 404s for your readers. Add the others
      // (heading hierarchy, code-block language, style, etc.) when you're
      // ready to enforce them — see `nimbus-docs lint --help`.
      rules: {
        "nimbus/frontmatter-shape": "error",
        "nimbus/internal-link": "error",
      },
      markdown: {
        // Wrap wide tables so they scroll instead of overflowing the page
        // (styled by `.nb-table-scroll` in src/styles/prose.css).
        hastPlugins: [tableScroll()],
        // `## Install {#install}` gives a heading a fixed id. A heading that
        // ends in other `{…}` text, such as `{account_id}` in a .md file, is
        // read as attributes too; remove this to keep it as text.
        features: { headingAttributes: true },
      },
    }),
  ],
});
