import { defineStore } from "pinia";
// import { getProducts } from "@/services/products";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    searchQuery: "",
  }),
  actions: {
  },
});
