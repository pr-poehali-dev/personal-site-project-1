import {
  LucideIcon,
  Home,
  User,
  Mail,
  Phone,
  MapPin,
  Wrench,
  GraduationCap,
  Lightbulb,
  TreePine,
  Zap,
  Monitor,
  Download,
  Users,
  MessageCircle,
  Github,
  Linkedin,
  Youtube,
  CircleAlert,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  User,
  Mail,
  Phone,
  MapPin,
  Wrench,
  GraduationCap,
  Lightbulb,
  TreePine,
  Zap,
  Monitor,
  Download,
  Users,
  MessageCircle,
  Github,
  Linkedin,
  Youtube,
  CircleAlert,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
