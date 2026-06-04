import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition-colors">
            Email
          </a>
          <a href={`tel:${profile.phone}`} className="hover:text-cyan-400 transition-colors">
            Phone
          </a>
          <a href={profile.resumeUrl} className="hover:text-cyan-400 transition-colors">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
