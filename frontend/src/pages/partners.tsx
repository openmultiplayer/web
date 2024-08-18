import { Box, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import ErrorBanner from "src/components/ErrorBanner";
import { CardList } from "src/components/generic/CardList";
import ServerRow from "src/components/listing/ServerRow";
import LoadingBanner from "src/components/LoadingBanner";
import { API_ADDRESS } from "src/config";
import { Essential } from "src/types/_generated_Server";
import useSWR from "swr";

import { useRouter } from 'next/router';
const translateText = require('src/components/translates/Translate');

const API_SERVERS = `${API_ADDRESS}/servers/`;

const getServers = async (): Promise<Array<Essential>> => {
  const r: Response = await fetch(API_SERVERS);
  const servers: Array<Essential> = await r.json();
  return servers;
};

const dataToList = (items: Essential[]) => {
  return items
    .filter((s: Essential) => {
      return s.pr === true;
    })
    .map((s: Essential) => <ServerRow key={s.ip} server={s} />);
};

const List = ({ data }: { data: Array<Essential> }) => {
  return <CardList>{dataToList(data)}</CardList>;
};

const Page = () => {

  const router = useRouter();
  const locale = router.locale || "en";

  const { data, error } = useSWR<Array<Essential>, TypeError>(
    API_SERVERS,
    getServers
  );
  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  return (
    <Box as="section" maxWidth="50em" margin="auto" padding="1em 2em">
      <NextSeo
        title="SA-MP Servers Index"
        description="open.mp partners and beta testers"
      />

      <Heading mb={"1em"}>{translateText(locale, "Partners", "Partners (BETA TESTERS)")}</Heading>

      <Box py={4}>
        <div>
          <span dangerouslySetInnerHTML={{ __html: translateText(locale, "Partners", "Servers helping us in beta testing by running open.mp and reporting bugs and issues are listed here. You can do the same by running your server using open.mp and help us with finding bugs and issues; Then tell us about your servers on our <a href='https://discord.gg/samp'>discord</a> so we can list them here.") }} />
        </div>
      <p>
        {translateText(locale, "Partners", "Those who are contributing to our community will have permanent perks in future when we are releasing for public use and when our server listing is ready.")}
      </p>
        <p>
        <b>
          {translateText(locale, "Partners", "Note: Partnership program is temporarily closed as we promised. Servers reserving a slot can still join, but we do not take any new requests for now, if you are still interested, you can ask your questions on our discord, but if it's about new ways of getting into the list, we do not have plans yet.")}
        </b>
        </p>
      </Box>

      <List data={data} />
    </Box>
  );
};

export default Page;
