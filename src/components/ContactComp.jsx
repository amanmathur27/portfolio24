import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactComp = () => {
  return (
    <div id="contact" className="sm:my-16 my-16 flex flex-col w-full">
      <h3 className="before:content-['#'] before:text-primary text-ghostWhite after:content-[''] after:w-36 after:h-[1.5px] relative after:absolute after:top-5 after:left-52 after:bg-primary after:inline-block text-3xl font-semibold mb-10 sm:mb-0">
        Contact Me
      </h3>

      <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-10 sm:gap-0">
        <p className="text-grayy max-w-[700px] text-base">
          I'm interested in freelance opportunities. However, if you have other
          request or question, don't hesitate to contact me
        </p>
        <div className="border-[1px] border-grayy p-4 flex flex-col gap-3">
          <h3 className="text-ghostWhite text-lg font-semibold mb-3">
            Message me here
          </h3>
          <a className="text-grayy flex gap-2 items-center" href="mailto:amanmathur27.am@gmail.com">
            <EmailIcon />
            <p>amanmathur27.am@gmail.com</p>
          </a>
          <a className="text-grayy flex gap-2 items-center">
            <LinkedInIcon />
            <p>linkedin.com/amanmathur</p>
          </a>
          <a className="text-grayy flex gap-2 items-center">
            <InstagramIcon />
            <p>instagram.com/amanmathur</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
