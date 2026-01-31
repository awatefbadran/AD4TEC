import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  istext?: boolean;

  /** Icon sizes */
  iconWidth?: number;
  iconHeight?: number;
  iconClassName?: string;

  /** Full logo (text/image) sizes */
  logoWidth?: number;
  logoHeight?: number;
  logoClassName?: string;

  /** Show full logo on md+ only */
  responsive?: boolean;

  /** Wrapper class */
  className?: string;
}

const Logo = ({
  iconWidth = 500,
  iconHeight = 500,
  iconClassName = "w-6 h-6 md:w-8 md:h-8",

  logoWidth = 500,
  logoHeight = 500,
  logoClassName = "h-8 md:w-32 mx-2",

  responsive = true,
  className,

  istext = false,
}: LogoProps) => {
  return (
    <>
      {istext ? (
        <span className={` inline-flex text-inherit ${className}`}>
          AD<span className="text-amber-600">4</span>TEC 
        </span>
      ) : (
        <Link href={"/"}>
          <div className="flex items-center">
            {/* Icon – always visible */}
            <Image
              src="/ad4tec-icon.png"
              alt="AD4TEC Icon"
              width={iconWidth}
              height={iconHeight}
              className={iconClassName}
              priority
            />

            {/* Full logo */}
            <Image
              src="/ad4tec-logo.png"
              alt="AD4TEC"
              width={logoWidth}
              height={logoHeight}
              className={`${responsive ? "hidden md:block" : "block"} ${logoClassName}`}
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default Logo;
