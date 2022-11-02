import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";

const Footer = () => {
  return (
    <>
      <Box float="right">Made with love by Luis Sandoval</Box>
      <Box>
        <Link>About</Link> | <Link>Connect</Link> | ©2022
      </Box>
    </>
  );
};

export default Footer;
