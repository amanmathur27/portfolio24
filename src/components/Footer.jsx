import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t-[1px] w-full gap-14 sm:px-16 px-6 sm:py-10 py-4 flex-wrap bg-backgnd">
      <div className="flex justify-between w-full sm:px-16 px-6 flex-wrap items-center">
        <div className="flex flex-col gap-3">
          <div className="flex sm:justify-between sm:items-center gap-5 sm:flex-row flex-col">
            <h2 className="text-ghostWhite font-semibold text-2xl">
              &empty; = &part;m&part;n.
            </h2>
            <p className="text-grayy hover:text-ghostWhite font-semibold">
              amanmathur27.am@gmail.com
            </p>
          </div>
          <div>
            <p className="text-ghostWhite">
              This website is build by{" "}
              <span className="text-primary font-semibold">Aman Mathur</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-ghostWhite font-semibold mt-8 sm:mt-0">
            Connect With Me
          </h3>
          <div className="flex gap-3 text-primary">
            <a
              href={socialLinks.linkedIn}
              target="_blank"
              className="cursor-pointer"
            >
              <LinkedInIcon />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              className="cursor-pointer"
            >
              <XIcon />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              className="cursor-pointer"
            >
              <GitHubIcon />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              className="cursor-pointer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="text-grayy text-sm">
        <p>&copy; Copyright 2024. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
