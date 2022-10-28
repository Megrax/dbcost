import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Tooltip from "@/components/primitives/Tooltip";
import { useSearchConfigContext } from "@/stores";

const cloudEmoji = "☁️";
const moneyEmoji = "💸";
const providerList = ["aws", "gcp"];

const Header: React.FC = () => {
  const { reset: resetSearchConfig } = useSearchConfigContext();
  const router = useRouter();
  const { provider: providerInRoute } = router.query;

  return (
    <header className="flex justify-center bg-slate-800">
      <div className="w-full 2xl:w-5/6 2xl:max-w-7xl flex justify-between items-center flex-grow-0 p-2 text-white">
        {/* logo and provider entries */}
        <div className="flex flex-row items-center gap-4">
          <Link href="/" passHref>
            <a>
              <div
                className="relative w-32 h-8 cursor-pointer"
                onClick={() => void resetSearchConfig()}
              >
                <Image
                  src="/icons/dbcost-logo-full.webp"
                  alt="DB Cost"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
          {providerList.map((provider: string) => (
            <Link href={`/provider/${provider}`} key={provider} passHref>
              <a>
                <span
                  className={`${
                    providerInRoute === provider ? "border-b" : ""
                  } h-8 text-lg pt-0.5 text-white cursor-pointer`}
                  onClick={() => void resetSearchConfig()}
                >
                  {provider.toUpperCase()}
                </span>
              </a>
            </Link>
          ))}
        </div>

        {/* emoji group */}
        <div className="flex flex-row items-center text-3xl whitespace-nowrap">
          {`${cloudEmoji} ${moneyEmoji} ${cloudEmoji} ${moneyEmoji} ${cloudEmoji}`}
        </div>

        {/* star and sponsor */}
        <div className="flex float-right items-center space-x-2">
          <iframe src="https://ghbtns.com/github-btn.html?user=bytebase&repo=dbcost&type=star&count=true" frameBorder="0" scrolling="0" width="82" height="20" title="GitHub"></iframe>
          <div className="flex items-center">
            <span>by</span>
            <div className="flex flex-row space-x-1">
              <Tooltip
                delayDuration={0}
                content="Database CI/CD and DevOps for Developers and DBAs"
              >
                <div
                  className="relative w-64 h-8 cursor-pointer"
                  onClick={() => {
                    window.open("https://bytebase.com?ref=dbcost", "_blank");
                  }}
                >
                  <Image
                    src="/icons/bytebase-cncf.png"
                    alt="Bytebase"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
