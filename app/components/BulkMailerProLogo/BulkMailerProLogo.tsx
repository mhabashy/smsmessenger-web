import { Flex } from "@mantine/core";
import Image from "next/image";

import "./bulk-mailer-pro-logo.css";

export default function BulkMailerProLogo() {
  return (
    <Flex direction="row" align="center" p="xs">
      <Image src={"/favicon.svg"} width="75" height="50" alt="SMS Messenger" />
      <span className="logo-text">SMS Messenger</span>
    </Flex>
  );
}
