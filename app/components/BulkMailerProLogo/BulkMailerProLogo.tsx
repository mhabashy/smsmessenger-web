import { Flex } from "@mantine/core";
import Image from "next/image";

import "./bulk-mailer-pro-logo.css";

export default function BulkMailerProLogo() {
  return (
    <Flex direction="row" align="center" p="xs">
      <Image src={"/favicon.ico"} width="70" height="50" alt="SMS Messenger" />
      <span className="logo-text">SMS Messenger</span>
    </Flex>
  );
}
