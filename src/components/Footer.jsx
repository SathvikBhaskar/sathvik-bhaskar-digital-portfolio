const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm font-bold text-gradient">SB</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sathvik Bhaskar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
