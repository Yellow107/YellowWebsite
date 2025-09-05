import { NextSeo } from "next-seo";
import config from '../../../package.json';

export default function MetaData({ metadata }) {

    const { homepage = '' } = config;
    const { title, description, img, slug } = metadata;

    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                url: `${homepage}/${slug}`,
                title: `${title}`,
                "description": `${description}`,
                images: [
                    {
                        url: `${homepage}/assets/images/seo/${img}`,
                        width: 1290,
                        height: 594,
                           alt: "Yellow Dubai branding agency Image",
                        type: "image/png",
                    },
                ],
                siteName: "Yellow",
            }}
            canonical={`${homepage}/${slug}`}
            languageAlternates={[{
                hrefLang: 'x-default',
                href: `${homepage}/${slug}`,
            }]}
        />
    )
}