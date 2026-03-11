import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1">
        Made with <Heart size={14} className="text-primary fill-primary" /> by Arham Rashid
      </p>
    </footer>
  );
};

export default Footer;
