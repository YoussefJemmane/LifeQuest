import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-muted/50 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Gamepad2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">LifeQuest</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 LifeQuest. All rights reserved. Level up your life today.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
