import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatbotButton } from "./ChatbotButton";
import { Background3DElements } from "./Background3DElements";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <Background3DElements />
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
