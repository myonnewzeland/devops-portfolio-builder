import { memo } from "react";
import { MessageCircle } from "lucide-react";

const FloatingContactButton = memo(() => (
  <a
    href="mailto:yamoshi454@gmail.com"
    aria-label="Contact Luis Fernando"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-105 hover:bg-primary/90 transition-all"
    style={{ boxShadow: "0 10px 30px hsl(var(--primary) / 0.35)" }}
  >
    <MessageCircle size={24} strokeWidth={2.2} />
  </a>
));

FloatingContactButton.displayName = "FloatingContactButton";
export default FloatingContactButton;
