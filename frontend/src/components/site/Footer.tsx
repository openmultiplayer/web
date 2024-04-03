import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface FooterItem {
  url?: string;
  imageUrl?: string;
  text: string;
}

interface FooterProps {
  heading: string;
  items: FooterItem[];
  alignment: "left" | "right";
}

const FooterList: React.FC<FooterProps & { heading: string; maxWidth?: string }> = ({ heading, items, alignment, maxWidth }) => (
  <div className={`flex flex-column ${alignment ? `align-${alignment}` : ''}`} style={{ maxWidth }}>
    <h4 className="ma0">{heading}</h4>
    <div className="flex flex-wrap" style={{ flexDirection: alignment === 'right' ? 'row-reverse' : 'row' }}>
      {items.map((item, index) => (
        <div key={index} style={{ margin: item.imageUrl ? '5px' : '0', textAlign: alignment === 'right' ? 'right' : 'left' }}>
          {item.imageUrl ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.imageUrl} alt={item.text} style={{ width: '40px', height: '40px' }} />
            </a>
          ) : (
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);



const Footer: React.FC = () => {
  const [formattedItems, setFormattedItems] = useState<FooterItem[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize(); // Initial check

    const handleResize = () => {
      checkWindowSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const initialItems: FooterItem[] = [
      { url: "https://sa-mp.mp/", imageUrl: "/images/assets/samp.svg", text: "SA-MP" },
      { url: "https://vk.com/open_mp", imageUrl: "/images/assets/vk.svg", text: "VK" },
      { url: "https://youtube.com/openmultiplayer", imageUrl: "/images/assets/youtube.svg", text: "YouTube" },
      { url: "https://x.com/openmultiplayer", imageUrl: "/images/assets/x.svg", text: "X" },
      { url: "https://instagram.com/openmultiplayer/", imageUrl: "/images/assets/instagram.svg", text: "Instagram" },
      { url: "https://discord.gg/samp", imageUrl: "/images/assets/discord-icon.svg", text: "Discord" },
      { url: "https://facebook.com/openmultiplayer", imageUrl: "/images/assets/facebook.svg", text: "Facebook" },
    ];

    const updatedItems: FooterItem[] = initialItems.map(item => {
      return {
        ...item,
        text: item.text.replace(/<b>(.*?)<\/b>/g, '<span style="font-weight: bold;">$1</span>')
      };
    });

    setFormattedItems(updatedItems);
  }, []);

  return (
    <Box as="footer" bgColor={useColorModeValue("blackAlpha.800", "gray.900")} display="flex" justifyContent="space-between" padding="30px">
      <div className="near-white" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: isMobile ? "center" : "space-between", alignItems: isMobile ? "center" : "center", flex: 1 }}>
        {isMobile && (
          <>
            <img
              src="/images/assets/logo-dark-trans.png"
              alt="Logo"
              style={{
                width: '100px',
                height: '100px',
                maxWidth: '100%',
                marginBottom: '10px',
              }}
            />
            <FooterList
              heading="About us"
              items={[{ text: "A multiplayer mod for Grand Theft Auto: San Andreas that is <b>fully backwards compatible</b> with <b>San Andreas Multiplayer</b>." }]}
              alignment="center"
              maxWidth={'390px'} // Max width conditionally applied
              style={{
                whiteSpace: 'normal',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            />
          </>
        )}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FooterList
              heading="About us"
              items={[{ text: "A multiplayer mod for Grand Theft Auto: San Andreas that is <b>fully backwards compatible</b> with <b>San Andreas Multiplayer</b>." }]}
              alignment="center"
              maxWidth={'390px'} // Max width conditionally applied
              style={{
                whiteSpace: 'normal',
                textAlign: 'center',
                lineHeight: '1.5',
              }}
            />
          </div>
        )}

      </div>
      {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/assets/logo-dark-trans.png"
              alt="Logo"
              style={{
                width: '100px',
                height: '100px',
                maxWidth: '100%',
                marginBottom: '10px',
              }}
            />
          </div>
        )}
      <div className="near-white" style={{ textAlign: "right", flex: 1 }}>
        <FooterList
          heading="Community"
          items={formattedItems}
          alignment="right"
        />
        <FooterList
          heading="More"
          items={[
            { url: "/blog", imageUrl: "/images/assets/blog.svg", text: "Blog" },
            { url: "https://github.com/openmultiplayer/", imageUrl: "/images/assets/github.svg", text: "GitHub" },
          ]}
          alignment="right"
        />
      </div>
    </Box>
  );
}
export default Footer;