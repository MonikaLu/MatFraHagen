import { create } from "zustand";

interface LoginState {
  username: string;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

export const useLoginStore = create<LoginState>()((set) => ({
  username: "",
  isSignedIn: false,
  setIsSignedIn: (signInParam) => set({ isSignedIn: signInParam }),
}));

export default useLoginStore;
