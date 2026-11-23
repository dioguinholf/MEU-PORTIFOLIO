import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
    </footer>
  );
}
