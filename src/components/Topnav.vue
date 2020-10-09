<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-alen"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <span id="butInstall">安装</span>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg class="toggleAside" v-if="toggleMenuButtonVisible" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    if (process.env.NODE_ENV === "production") {
      console.log(navigator.serviceWorker);
      navigator.serviceWorker
        .register("./service-worker.js")
        .then((reg) => {
          console.log("Service worker registered in production.", reg);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(navigator.serviceWorker);
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((reg) => {
          console.log("Service worker registered in development.", reg);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}
import { inject, onMounted, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    onMounted(() => {
      let deferredInstallPrompt = null;
      const installButton = document.querySelector("#butInstall");
      const saveBeforeInstallPromptEvent = (evt) => {
        deferredInstallPrompt = evt;
        installButton.removeAttribute("hidden");
      };
      const installPWA = (evt) => {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choice) => {
          if (choice.outcome === "accepted") {
            console.log("User accepted the A2HS prompt", choice);
          } else {
            console.log("User dismissed the A2HS prompt", choice);
          }
          deferredInstallPrompt = null;
        });
      };
      const logAppInstalled = (evt) => {
        console.log("UI App was installed", evt);
      };
      window.addEventListener(
        "beforeinstallprompt",
        saveBeforeInstallPromptEvent
      );
      installButton.addEventListener("click", installPWA);
      window.addEventListener("appinstalled", logAppInstalled);
    });
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #007974;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > #butInstall {
        cursor: pointer;
      }
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>