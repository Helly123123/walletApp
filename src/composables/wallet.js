import { ref, reactive } from "vue";

const walletData = reactive({
  balance: 540000,
  name: "Wallet",
  number: 6585293845229876,
});

export function getWalletData() {
  return walletData;
}
