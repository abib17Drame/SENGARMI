import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      value: 'light' as const,
      label: 'Clair',
      icon: Sun,
      description: 'Thème clair pour une meilleure lisibilité'
    },
    {
      value: 'dark' as const,
      label: 'Sombre',
      icon: Moon,
      description: 'Thème sombre pour réduire la fatigue oculaire'
    },
    {
      value: 'system' as const,
      label: 'Système',
      icon: Monitor,
      description: 'Suivre les préférences de votre système'
    }
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-9 w-9 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          aria-label="Changer le thème"
        >
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">Changer le thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 p-2"
        sideOffset={8}
      >
        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
          Thème
        </div>
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;
          
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              className={cn(
                "flex items-center justify-between px-3 py-2 cursor-pointer rounded-md transition-colors",
                isActive 
                  ? "bg-accent text-accent-foreground" 
                  : "hover:bg-accent/50"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {themeOption.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {themeOption.description}
                  </span>
                </div>
              </div>
              {isActive && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          );
        })}
        
        {/* Indicateur du thème actuel */}
        <div className="mt-2 pt-2 border-t border-border">
          <div className="px-3 py-1.5 text-xs text-muted-foreground">
            Thème actuel : {resolvedTheme === 'dark' ? 'Sombre' : 'Clair'}
            {theme === 'system' && ' (Système)'}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MobileThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-md border border-primary-foreground/20 bg-primary/10 hover:bg-primary/20 text-primary-foreground transition-all duration-200"
      aria-label={`Passer au thème ${resolvedTheme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">
        Passer au thème {resolvedTheme === 'dark' ? 'clair' : 'sombre'}
      </span>
    </Button>
  );
}

// Composant simple pour un toggle basique
export function SimpleThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200"
      aria-label={`Passer au thème ${resolvedTheme === 'dark' ? 'clair' : 'sombre'}`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">
        Passer au thème {resolvedTheme === 'dark' ? 'clair' : 'sombre'}
      </span>
    </Button>
  );
} 