import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Email } from "@mui/icons-material";
const FootingPage = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-gray-400">© 2025 Made by Vijay Mahamuni.</h1>
      </div>
      <div className="flex md:justify-start">
        <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-400">
          <LinkedInIcon
            fontSize="medium"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/vijaymahamuni",
                "_blank"
              );
            }}
          />
        </h1>
        <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-400">
          <Email
            fontSize="medium"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=vijaysethu0101@gmail.com&su=Subject&body=Message",
                "_blank"
              );
            }}
          />
        </h1>
      </div>
    </div>
  );
};
export default FootingPage;
