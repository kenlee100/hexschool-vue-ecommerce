import { defineStore } from "pinia";

export const useMenuStore = defineStore("mobileMenu", {
  state: () => {
    return {
      toggle: false,
    };
  },
  actions: {
    menuToggle() {
      this.toggle = !this.toggle;
    },
  },
});

export const useLoadingState = defineStore("loading", {
  state: () => {
    return {
      isLoading: true,
    };
  }
});
