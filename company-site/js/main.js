(function () {
    function initLayout() {
      // 年份
      const year = document.getElementById("year");
      if (year) year.textContent = new Date().getFullYear();

      // 移动端菜单
      const toggle = document.querySelector(".nav__toggle");
      const nav = document.querySelector(".nav");

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          const open = nav.classList.toggle("is-open");
          toggle.setAttribute("aria-expanded", String(open));
        });

        // 点击导航后自动收起（移动端）
        nav.querySelectorAll("a").forEach((a) => {
          a.addEventListener("click", () => {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
          });
        });
      }
    }

    // 共用布局由 load-layout.js 注入后触发
    document.addEventListener("layoutReady", initLayout);
    // 无共用布局的页面（未使用 placeholder）在 DOM 就绪时初始化
    if (!document.getElementById("header-placeholder")) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLayout);
      } else {
        initLayout();
      }
    }
  
    // 表单演示：不接后端时先做最小可用
    const form = document.getElementById("leadForm");
    const tip = document.getElementById("formTip");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
  
        // 最低成本：先打印到控制台，后续你再接真实接口
        console.log("Lead:", data);
  
        if (tip) tip.textContent = "已提交（演示）。如需真实提交，请接后端接口或表单服务。";
        form.reset();
      });
    }
  })();
  