import { Gamepad2 } from "lucide-react";
import { Separator } from "../components/ui/Seperator";

const Footer = () => {
  return (
    <>
      <footer className="bg-muted/50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <Gamepad2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold">LifeQuest</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transform your life into an epic adventure with the power of
                gamification.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <div className="space-y-2">
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground block"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground block"
                >
                  Pricing
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Mobile App
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Integrations
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <div className="space-y-2">
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Help Center
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Community
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Contact Us
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Status
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <div className="space-y-2">
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  About
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Blog
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Careers
                </a>
                <a className="text-sm text-muted-foreground hover:text-foreground block text-left">
                  Privacy
                </a>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 LifeQuest. All rights reserved. Level up your life today.
            </p>
            <div className="flex items-center space-x-4">
              <a className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
