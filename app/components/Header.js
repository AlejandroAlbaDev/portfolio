import Image from "next/image";
import Link from "next/link";

/**
 * Header component for the portfolio website
 * Displays the developer's name, profile picture, and social media links
 */
export default function Header() {
    // Developer information
    const developerName = "Alejandro Alba";
    const jobTitle = "Desarrollador FullStack";

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/social/linkedin.svg",
            url: "https://www.linkedin.com/in/alejandro-alba-castillo",
            alt: "LinkedIn Profile",
        },
        {
            name: "GitHub",
            icon: "/social/github.svg",
            url: "https://github.com/AlejandroAlbaCastillo",
            alt: "GitHub Profile",
        },
        // {
        //     name: "InfoJobs",
        //     icon: "/social/rrss-infojobs.svg",
        //     url: "https://x.com/goyo_is_a_dev",
        //     alt: "InfoJobs Profile",
        // },
        // {
        //     name: "YouTube",
        //     icon: "/social/youtube.svg",
        //     url: "https://www.youtube.com/@goyo_is_a_dev",
        //     alt: "YouTube Channel",
        // },
    ];

    return (
        <header className="border-b border-accent-yellow py-4 px-2 md:px-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left section: Profile picture and name */}
                <div className="flex items-center gap-2 md:gap-8">
                    <div className="relative w-15 h-15 md:w-30 md:h-30 rounded-full overflow-hidden border border-white shadow-xl">
                        <Image
                            src="/profile.png"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg md:text-4xl font-bold leading-tight">
                            {developerName}
                        </h1>
                        <p className="text-sm md:text-xl text-foreground/70">
                            {jobTitle}
                        </p>
                    </div>
                </div>

                {/* Right section: Social media links */}
                <div className="flex items-center gap-3">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-110"
                            aria-label={link.alt}
                        >
                            <Image
                                src={link.icon}
                                alt={link.alt}
                                width={24}
                                height={24}
                                className="w-6 h-6 md:w-8 md:h-8"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
