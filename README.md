<div align="center">
<img src="https://raw.githubusercontent.com/quickemu-project/quickemu/master/.github/logo.png" alt="Quickemu" width="256" />

# Quickemu

**快速创建并运行经过优化的 Windows、macOS 和 Linux 虚拟机：**

**用 💝 打造，献给 <img src="https://raw.githubusercontent.com/quickemu-project/quickemu/master/.github/tux.png" align="top" width="24" alt="Tux (Linux)"/> 与 <img src="https://raw.githubusercontent.com/quickemu-project/quickemu/master/.github/apple.png" align="top" width="24" alt="Apple (macOS)"/>**
</div>

<p align="center">
  &nbsp;<a href="https://wimpysworld.io/discord" target="_blank"><img alt="Discord" src="https://img.shields.io/discord/712850672223125565?style=for-the-badge&logo=discord&logoColor=%23ffffff&label=Discord&labelColor=%234253e8&color=%23e4e2e2"></a>&nbsp;
  &nbsp;<a href="https://fosstodon.org/@wimpy" target="_blank"><img alt="Mastodon" src="https://img.shields.io/badge/Mastodon-6468fa?style=for-the-badge&logo=mastodon&logoColor=%23ffffff"></a>&nbsp;
  &nbsp;<a href="https://twitter.com/m_wimpress" target="_blank"><img alt="Twitter" src="https://img.shields.io/badge/Twitter-303030?style=for-the-badge&logo=x&logoColor=%23ffffff"></a>&nbsp;
  &nbsp;<a href="https://linkedin.com/in/martinwimpress" target="_blank"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-1667be?style=for-the-badge&logo=linkedin&logoColor=%23ffffff"></a>&nbsp;
</p>


# 简介

**Quickemu** 是对出色的 [QEMU](https://www.qemu.org/) 的一层封装，在创建虚拟机时会自动
*“做出正确的选择”*。它不需要繁琐的配置项。你只需决定想运行哪个操作系统，其余的事情
Quickemu 都会替你处理妥当 🤖

- `quickget` **自动下载上游操作系统镜像**并生成配置文件 📀
- `quickemu` 会枚举你的硬件，并以**最适合你这台电脑的最优配置**启动虚拟机 ⚡️

这个项目最初的目标是[让 Linux 发行版的快速测试成为可能](https://github.com/quickemu-project/quickemu/wiki/02-Create-Linux-virtual-machines)：
虚拟机及其配置可以存放在任何位置（例如外接 USB 存储设备或你的主目录），并且运行虚拟机
不需要任何提升的权限。

**如今，Quickemu 已全面支持 [macOS](https://github.com/quickemu-project/quickemu/wiki/03-Create-macOS-virtual-machines)
和 [Windows](https://github.com/quickemu-project/quickemu/wiki/04-Create-Windows-virtual-machines)**，以及大多数 BSD 系统，
还有 FreeDOS、Haiku、KolibriOS、OpenIndiana、ReactOS 等新奇的非 Linux 操作系统。

# 功能特性

- 宿主机支持 **Linux 和 macOS**
- 支持 **macOS** Sequoia、Sonoma、Ventura、Monterey、Big Sur、Catalina 和 Mojave
- 支持 **Windows** 10 和 11，包括 TPM 2.0
- 支持 **Windows Server** 2022、2019、2016
- **ARM64 客户机支持**，可运行 aarch64 虚拟机（在 ARM 宿主上原生运行，在 x86_64 上模拟运行）
- 支持 [Ubuntu](https://ubuntu.com/desktop) 以及所有**[官方 Ubuntu
  衍生版本](https://ubuntu.com/download/flavours)**
- **支持近 1000 个操作系统版本！**
- 完整的 SPICE 支持，包括宿主机与客户机之间的剪贴板共享
- 为 Linux 和 Windows 客户机提供 VirtIO-webdavd 文件共享
- 为 Linux 和 macOS 客户机提供 VirtIO-9p 文件共享
- 支持 [QEMU Guest Agent](https://wiki.qemu.org/Features/GuestAgent)；可通过标准 QMP 命令
  访问系统级代理
- 为 Linux、macOS 和 Windows 客户机提供 Samba 文件共享（*前提是宿主机上安装了 `smbd`*）
- VirGL 加速
- USB 设备直通
- 智能卡直通
- 自动为客户端转发 SSH 端口
- 网络端口转发
- 全双工音频
- 盲文支持
- 支持 EFI（可启用或不启用 SecureBoot）与传统 BIOS 启动

## 曾登上 [Linux Matters](https://linuxmatters.sh) 播客！

Linux Matters 🐧🎙️ 的主播们正是 Quickemu 各主要项目的创建者。我们在
[第 30 期 —— Quickemu Rising From the Bashes](https://linuxmatters.sh/30) 中聊到了 Quickemu 2024 年的重启。 <!-- 以及在 [第 32 期 —— Quick, quicker, quickest](https://linuxmatters.sh/32) 中，[Martin](https://github.com/flexiondotorg) 揭晓了 [**Quickemu**](https://github.com/quickemu-project/quickemu) 对 macOS 宿主机的支持，[Mark](https://github.com/marxjohnson) 讲述了 [**Quickgui**](https://github.com/quickemu-project/quickgui) 桌面应用的起源与即将到来的改进，[Alan](https://github.com/popey) 首次介绍了 [**Quicktest**](https://github.com/quickemu-project/quicktest)：一个通过 Quickemu 自动测试操作系统的框架 -->

<div align="center">

<a href="https://linuxmatters.sh" target="_blank">🎙️ Linux Matters Podcast</a>

</div>

# 快速上手

[安装好 Quickemu 之后](https://github.com/quickemu-project/quickemu/wiki/01-Installation)，只需两个简单步骤即可创建并运行虚拟机：

- `quickget` 会自动下载你要运行的操作系统的 ISO 镜像，并为该虚拟机生成配置文件。

``` shell
quickget nixos unstable minimal
```

- `quickemu` 使用 `quickget` 生成的配置文件启动虚拟机。

``` shell
quickemu --vm nixos-unstable-minimal.conf
```

执行 `quickget`（不带任何参数）即可查看所有支持的操作系统列表。

## 演示

<div align="center">

<a href="https://asciinema.org/a/658148?autoplay=1" target="_blank"><img src="https://asciinema.org/a/658148.svg" /></a>

</div>

# 文档

Wiki 介绍了如何开始使用 Quickemu，也涵盖了更高级的配置与用法。

- [**安装**](https://github.com/quickemu-project/quickemu/wiki/01-Installation) 💾
- [**创建 Linux 虚拟机**](https://github.com/quickemu-project/quickemu/wiki/02-Create-Linux-virtual-machines) 🐧
- [**创建 macOS 虚拟机**](https://github.com/quickemu-project/quickemu/wiki/03-Create-macOS-virtual-machines) 🍏
- [**创建 Windows 虚拟机**](https://github.com/quickemu-project/quickemu/wiki/04-Create-Windows-virtual-machines) 🪟
- [**Quickemu 高级配置**](https://github.com/quickemu-project/quickemu/wiki/05-Advanced-quickemu-configuration) 🔧
- [**quickget 高级功能**](https://github.com/quickemu-project/quickemu/wiki/06-Advanced-quickget-features) 🤓
- [**替代前端**](https://github.com/quickemu-project/quickemu/wiki/07-Alternative-frontends) 🧑‍💻
- [**参考资料**](https://github.com/quickemu-project/quickemu/wiki/08-References) 📚️
